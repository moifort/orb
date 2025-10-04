import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './Dashboard.vue'

const meta = {
  title: 'Example/BaseButton',
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const BaseButtonStory: Story = {}
