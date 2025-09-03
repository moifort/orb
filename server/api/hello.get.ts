export default defineEventHandler(async () => {
	// await useStorage('db').setItem('name', 'Orb')
	return useStorage('db').getItem('name')
})
