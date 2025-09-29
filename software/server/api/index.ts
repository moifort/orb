import { initTRPC, lazy } from '@trpc/server'

// TODO le rajouter en utils
export type AppRouter = typeof appRouter
export type Context = Awaited<ReturnType<typeof context>>

export const context = () => ({ storage: useTypedStorage() })
const trpc = initTRPC.context<Context>().create()
export const router = trpc.router
export const procedure = trpc.procedure
export const appRouter = trpc.router({
  boiler: lazy(() => import('~~/server/domains/heater/trpc')),
})
