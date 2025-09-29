// TODO utiliser en tant que logger
export default defineTask({
  async run() {
    console.log('Test task running...')
    useEventBus().on('*', (name, payload) => console.log(name, payload))
    return { result: 'success' }
  },
})
