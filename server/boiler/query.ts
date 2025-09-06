import type {TemperatureC} from '#shared/boiler/type'
import type {Storage} from 'unstorage'

export const getCurrentTemperature = (storage: Storage) => async () => {
	return storage.get<TemperatureC>('boiler:currentTemperatureC')
}
