import {createTRPCNuxtClient, httpBatchLink} from 'trpc-nuxt/client'
import type {AppRouter} from "~~/server/trpc";

export default defineNuxtPlugin(() => {
	const trpc = createTRPCNuxtClient<AppRouter>({
		links: [httpBatchLink({ url: '/api' })],
	})
	return { provide: { trpc } }
})
