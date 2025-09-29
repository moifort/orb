import type { CurrentTemperatureC } from '#shared/heater/type'

export namespace HeaterCommand {
  export type Store = { 'heater:temperatures': CurrentTemperatureC[] }
  export type Events = { 'heater:currentTemperature': CurrentTemperatureC }

  export const saveTemperature =
    (storage: TypedStorage, eventBus: EventBus) => async (temperature: CurrentTemperatureC) => {
      const temperatures = ((await storage.getItem('heater:temperatures')) || []).slice(-99)
      await storage.setItem('heater:temperatures', [...temperatures, temperature])
      eventBus.emit('heater:currentTemperature', temperature)
    }
}
