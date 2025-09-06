import {getCurrentTemperature} from "~~/server/boiler/query";
import {procedure, router} from "~~/server/api";

export const boiler = router({
	getCurrentTemperature: procedure
		.meta({
			mcp: {
				enabled: true,
				description: 'Get boiler current temperature in ° Celsius',
				name: 'Get boiler current temperature',
			},
		})
		.query((data) => getCurrentTemperature(data.ctx.storage)()),
})
