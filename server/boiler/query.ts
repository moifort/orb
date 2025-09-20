import type { Storage } from 'unstorage'
import type { TemperatureC } from '#shared/boiler/type'

export const getCurrentTemperature = (storage: Storage) => async () => {
  storage.set<TemperatureC>('boiler:currentTemperatureC', 98 as TemperatureC)
  return storage.get<TemperatureC>('boiler:currentTemperatureC')
}
