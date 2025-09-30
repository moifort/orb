import { initTRPC } from '@trpc/server'

export type Context = Awaited<ReturnType<typeof context>>

const context = () => ({ storage: useTypedStorage() })
const trpc = initTRPC.context<Context>().create()
const router = trpc.router
const procedure = trpc.procedure

export const useTrpc = () => ({ router, procedure, context })
