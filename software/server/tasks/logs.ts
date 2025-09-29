export default defineTask({
  async run() {
    useEventBus().on('*', (name, payload) => console.log(name, payload))
    return { result: 'success' }
  },
})
