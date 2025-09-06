import {initTRPC, lazy} from '@trpc/server'

export const context = async () => ({ storage: useStorage('database') })
export type Context = Awaited<ReturnType<typeof context>>

const t = initTRPC.context<Context>().create()

export const router = t.router
export const procedure = t.procedure
export const appRouter = router({
	boiler: lazy(() => import('../boiler/trpc')),
})
export type AppRouter = typeof appRouter
