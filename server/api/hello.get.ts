export default defineEventHandler(async () => {
	await useStorage('db').setItem('name', 'Orb')
	return 'Orb'
})
