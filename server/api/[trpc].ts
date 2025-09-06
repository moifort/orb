import {createTRPCNuxtHandler} from 'trpc-nuxt/server'
import {appRouter, context} from "~~/server/trpc";

export default createTRPCNuxtHandler({
	endpoint: '/api',
	router: appRouter,
	createContext: context,
})
