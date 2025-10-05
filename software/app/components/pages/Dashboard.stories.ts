import type { Meta, StoryObj } from '@storybook/vue3-vite'
import component from './Dashboard.vue'

const meta = {
  component,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
} satisfies Meta<typeof component>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
