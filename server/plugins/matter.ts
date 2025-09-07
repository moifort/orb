import { ServerNode } from '@matter/main'
import { TemperatureSensorDevice } from '@matter/main/devices/temperature-sensor'
import { defineNitroPlugin } from 'nitropack/runtime'
import { getCurrentTemperature } from '~~/server/boiler/query'

export default defineNitroPlugin(async (nitroApp) => {
	// biome-ignore lint/correctness/noConstantCondition: WIP
	if (true) return
	const node = await ServerNode.create()
	const sensor = await node.add(TemperatureSensorDevice)

	const timer = setInterval(async () => {
		const temperature = await getCurrentTemperature(useStorage('database'))()
		await sensor.set({
			// biome-ignore lint/style/noNonNullAssertion: WIP
			temperatureMeasurement: { measuredValue: temperature! * 100 },
		})
	}, 1000)
	await node.run()
	nitroApp.hooks.hook('close', () => {
		clearInterval(timer)
		node.close()
	})
})
