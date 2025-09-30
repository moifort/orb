import { HeaterQuery } from '~~/server/domains/heater/query'

export const heater = useTrpc().router({
  getCurrentTemperature: useTrpc().procedure.query(({ ctx }) =>
    HeaterQuery.currentTemperature(ctx.storage)(),
  ),
  getAllTemperatures: useTrpc().procedure.query(({ ctx }) =>
    HeaterQuery.allTemperatures(ctx.storage)(),
  ),
})
