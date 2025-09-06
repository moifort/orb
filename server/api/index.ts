import {initTRPC, lazy} from '@trpc/server'
import type {McpMeta} from 'trpc-to-mcp/types'

export const context = () => ({ storage: useStorage('database') })
export type Context = Awaited<ReturnType<typeof context>>

const t = initTRPC.meta<McpMeta>().context<Context>().create()

export const router = t.router
export const procedure = t.procedure
export const appRouter = router({
	boiler: lazy(() => import('../boiler/trpc')),
})
export type AppRouter = typeof appRouter
