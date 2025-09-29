import { last } from '#shared/utils'
import type { TypedStorage } from '~~/server/utils/storage'

export namespace HeaterQuery {
  export const currentTemperature = (storage: TypedStorage) => async () => {
    const temperatures = await storage.getItem('heater:temperatures')
    return last(temperatures) ?? 'not-available'
  }

  export const allTemperatures = (storage: TypedStorage) => async () =>
    (await storage.getItem('heater:temperatures')) ?? []
}
