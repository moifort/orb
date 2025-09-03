// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	typescript: { typeCheck: true },
	modules: ['@nuxt/image', '@nuxt/ui'],
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	nitro: {
		storage: {
			db: {
				driver: 'fs',
				base: './.data/db',
			},
		},
	},
})
