import {make} from 'ts-brand'
import type {TemperatureC as TemperatureType} from '#shared/boiler/type'

export const Temperature = make<TemperatureType>((value) => {
	if (value < 0)
		throw new Error(`Temperature must be greater to 0°C, actual: ${value}°C`)
	if (value > 500)
		throw new Error(`Temperature must be less than 500°C, actual: ${value}°C`)
})
