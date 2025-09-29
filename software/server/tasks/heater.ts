import { HeaterCommand } from '~~/server/domains/heater/command'
import { getTemperature } from '~~/server/domains/heater/infra/sensor'
import { useTypedStorage } from '~~/server/utils/storage'
import { useSystemCommand } from '~~/server/utils/system'

export default defineTask({
  async run() {
    const result = await getTemperature(useSystemCommand())()
    await HeaterCommand.saveTemperature(
      useTypedStorage(),
      useEventBus(),
    )(result.getOrDefault('not-available'))
    return { result: 'success' }
  },
})
