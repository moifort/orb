import type { Brand } from 'ts-brand'

export type TemperatureC = Brand<number, 'TemperatureC'>
export type CurrentTemperatureC = TemperatureC | 'not-available'
export type DataRecord = { x: number; y: number | null }
