import { procedure, router } from '~~/server/api'
import { HeaterQuery } from '~~/server/domains/heater/query'

export const heater = router({
  getCurrentTemperature: procedure.query(({ ctx }) =>
    HeaterQuery.currentTemperature(ctx.storage)(),
  ),
  getAllTemperatures: procedure.query(({ ctx }) => HeaterQuery.allTemperatures(ctx.storage)()),
})
