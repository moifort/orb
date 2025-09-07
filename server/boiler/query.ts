import type { Storage } from 'unstorage'
import type { TemperatureC } from '#shared/boiler/type'

export const getCurrentTemperature = (storage: Storage) => async () => {
	return storage.get<TemperatureC>('boiler:currentTemperatureC')
}
