import { procedure, router } from '~~/server/api'
import { getCurrentTemperature } from '~~/server/boiler/query'

export const boiler = router({
  getCurrentTemperature: procedure.query((data) =>
    getCurrentTemperature(data.ctx.storage)(),
  ),
})
