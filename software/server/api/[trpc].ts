import { createTRPCNuxtHandler } from 'trpc-nuxt/server'
import { appRouter, context } from '~~/server/api/index'

export default createTRPCNuxtHandler({
  endpoint: '/api',
  router: appRouter,
  createContext: context,
})
