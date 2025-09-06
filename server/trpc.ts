import {initTRPC} from '@trpc/server'
import type {H3Event} from 'h3'

const t = initTRPC.create()

export const context = async (event: H3Event) => ({
	auth: event.context.auth,
})

export const router = t.router
export const createCallerFactory = t.createCallerFactory
export const procedure = t.procedure
export const appRouter = router({
	hello: procedure.query(() => 'hello world'),
})

export type AppRouter = typeof appRouter
