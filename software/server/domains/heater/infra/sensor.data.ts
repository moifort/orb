import data from './sensor.data.json'

let index = 0
export const getFakeHeaterSensorData = () => {
  if (index === data.length) index = 0
  return data[index++] ?? '00000000'
}
