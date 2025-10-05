import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook-vue/nuxt'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Index', '*'],
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
          'Pages',
          'Modules',
          '*',
        ],
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: `<div class="dark p-8 bg-[var(--ui-bg)] flex flex-col items-center"><story /></div>`,
    }),
  ],
}

export default preview
