import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { CurrentTemperatureC } from '#shared/heater/type'
import component from './Test.vue'

const meta = { component } satisfies Meta<typeof component>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { temperature: 170 as CurrentTemperatureC },
}
