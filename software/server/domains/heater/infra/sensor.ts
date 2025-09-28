import { Result } from 'typescript-result'
import { TemperatureC } from '#shared/heater/validator'

export const decodeMAX31855 = (rawHex: string) => {
  if (!/^[0-9a-fA-F]{8}$/.test(rawHex)) {
    return Result.error('max31855-cannot-parse-raw-hex-error' as const)
  }
  const sensorValues = parseInt(rawHex, 16)

  const isError = (sensorValues & 0x00010000) !== 0
  if (isError) {
    const flagsBits = sensorValues & 0x7
    if (flagsBits & 0x1) return Result.error('max31855-open-circuit-error' as const)
    if (flagsBits & 0x2) return Result.error('max31855-short-to-ground-error' as const)
    if (flagsBits & 0x4) return Result.error('max31855-short-to-vcc-error' as const)
    return Result.error('max31855-unknown-error' as const)
  }

  let externalData = (sensorValues >> 4) & 0x0fff
  if (externalData & 0x800) externalData -= 0x1000
  const max31855Temperature = TemperatureC(+(externalData * 0.0625).toFixed(2))

  let sensorData = (sensorValues >> 18) & 0x3fff
  if (sensorData & 0x2000) sensorData -= 0x4000
  const boilerTemperature = TemperatureC(+(sensorData * 0.25).toFixed(2))
  return Result.ok({ boilerTemperature, max31855Temperature })
}

export const getTemperature = (command: SystemCommand) => async () => {
  const result = await command(
    `printf '\\x00\\x00\\x00\\x00' | spi-pipe -d /dev/spidev0.0 -s 500000 -b 4 -n 1 | hexdump -v -e '4/1 "%02x" "\\n"'`,
  )
  if (!result.ok) return Result.error('boiler-sensor-command-error' as const)
  return result
    .map((value) => decodeMAX31855(value))
    .map(({ boilerTemperature }) => boilerTemperature)
}
