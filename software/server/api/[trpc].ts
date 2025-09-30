import { lazy } from '@trpc/server'
import { createTRPCNuxtHandler } from 'trpc-nuxt/server'

export type AppRouter = typeof appRouter
const appRouter = useTrpc().router({
  boiler: lazy(() => import('~~/server/domains/heater/trpc')),
})

export default createTRPCNuxtHandler({
  endpoint: '/api',
  router: appRouter,
  createContext: useTrpc().context,
})
