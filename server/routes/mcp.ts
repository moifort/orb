import { sendWebResponse, toWebRequest } from 'h3'
import { trpcToMcpHandler } from 'trpc-to-mcp/adapters/vercel-mcp-adapter'
import { appMcpRouter, context } from '~~/server/api'

export default defineEventHandler(async (event) => {
	const handler = trpcToMcpHandler(appMcpRouter, context(), {
		config: { maxDuration: 600000, disableSse: true },
	})
	const request = toWebRequest(event)
	const response = await handler(request)
	await sendWebResponse(event, response)
})
