import type { TypedStorage } from '~~/server/utils/storage.type'

export namespace HeaterQuery {
  export const currentTemperature = (storage: TypedStorage) => async () => {
    const temperatures = await storage.getItem('heater:temperatures')
    return temperatures?.[temperatures.length - 1] ?? 'not-available'
  }

  export const allTemperatures = (storage: TypedStorage) => async () =>
    (await storage.getItem('heater:temperatures')) ?? []
}
