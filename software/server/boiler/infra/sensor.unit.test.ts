import { describe, expect, test } from 'bun:test'
import { TemperatureC } from '#shared/boiler/validator'
import { decodeMAX31855 } from './sensor'

describe('decodeMAX31855', () => {
  test('decodes no-fault sample (boiler=100.00°C, max31855=25.00°C)', () => {
    const { value } = decodeMAX31855('06401900')
    expect(value).toEqual({
      boilerTemperature: TemperatureC(100),
      max31855Temperature: TemperatureC(25),
    })
  })

  test('returns unknown error on fault bit with no flags', () => {
    const { error } = decodeMAX31855('0001e700')
    expect(error).toBe('max31855-unknown-error')
  })

  test('returns open-circuit error when OC+SCG+SCV flags are set', () => {
    const { error } = decodeMAX31855('00010007')
    expect(error).toBe('max31855-open-circuit-error')
  })

  test('rounds max31855 to 2 decimals (0.1875 -> 0.19)', () => {
    const { value } = decodeMAX31855('00000030')
    expect(value?.boilerTemperature).toBe(TemperatureC(0))
    expect(value?.max31855Temperature).toBe(TemperatureC(0.19))
  })

  test('returns error on invalid hex input', () => {
    const { error } = decodeMAX31855('abc')
    expect(error).toBe('max31855-cannot-parse-raw-hex-error')
  })
})
