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
}

export default preview
