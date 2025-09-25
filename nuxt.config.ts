// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  typescript: { typeCheck: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  sourcemap: false,
  devtools: false,
  css: ['~/assets/css/main.css'],
  build: { transpile: ['trpc-nuxt'] },
  nitro: {
    storage: {
      database: {
        driver: 'fs',
        base: './.data/db',
      },
    },
  },
})
