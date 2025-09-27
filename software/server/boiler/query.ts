import { getBoilerTemperature } from '~~/server/boiler/infra/sensor'

export const getCurrentTemperature = async () => {
  const result = await getBoilerTemperature()
  return result.getOrDefault(null)
}
