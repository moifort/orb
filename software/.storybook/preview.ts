import type { Preview } from '@storybook-vue/nuxt'
import './preview.css'
import { parameters } from '@storybook/addon-docs/preview'

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
    (story, context) => ({
      components: { story },
      setup: () => {
        document?.documentElement.classList.add('dark')
      },
      template:
        context.parameters.layout === 'fullscreen'
          ? `
          <div class="m-8" style="width: 520px; height: 520px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--ui-bg); border: 1px solid var(--ui-border);">
             <div class="flex flex-col justify-center p-8 h-full w-full">
                <story />
             </div>
          </div>
        `
          : `<div class="p-8 bg-[var(--ui-bg)] flex flex-col items-center"><story /></div>`,
    }),
  ],
}

export default preview
