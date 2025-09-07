import { sendWebResponse, toWebRequest } from 'h3'
import { trpcToMcpHandler } from 'trpc-to-mcp/adapters/vercel-mcp-adapter' // TODO implementer un vrai serveur MCP
import { appRouter, context } from '~~/server/api'

// TODO implementer un vrai serveur MCP a mettre dans plugin
export default defineEventHandler(async (event) => {
	// biome-ignore lint/correctness/noConstantCondition: WIP
	if (true) return
	const handler = trpcToMcpHandler(appRouter, context(), {
		config: { maxDuration: 600000, disableSse: true },
	})
	const request = toWebRequest(event)
	const response = await handler(request)
	await sendWebResponse(event, response)
})
