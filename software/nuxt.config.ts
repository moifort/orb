import checker from 'vite-plugin-checker'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  typescript: { typeCheck: true },
  modules: ['@nuxt/ui', '@nuxtjs/storybook'],
  colorMode: {
    preference: 'light',
    fallback: 'dark',
  },
  sourcemap: false,
  devtools: false,
  css: ['~/assets/css/main.css'],
  build: { transpile: ['trpc-nuxt'] },
  vite: { plugins: [checker({ vueTsc: true })] },
  nitro: {
    experimental: { tasks: true },
    scheduledTasks: {
      '*/1 * * * * *': ['heater'],
    },
    storage: { database: { driver: 'fs', base: './.data/db' } },
  },
})
