import { procedure, router } from '~~/server/api'
import { getCurrentTemperature } from '~~/server/boiler/query'

export const boiler = router({
  getCurrentTemperature: procedure
    .meta({
      mcp: {
        enabled: true,
        name: 'get_boiler_current_temperature',
        description: `
Retrieve the current temperature of the espresso machine boiler.
- Unit: degrees Celsius (°C)
- Source: internal boiler temperature sensor
- Usage: call this tool to monitor or display the boiler state
- Refresh interval: updated every 4 minutes
- Output:integer between 0 and 500`,
      },
    })
    .query((data) => getCurrentTemperature(data.ctx.storage)()),
})
