export default defineNitroPlugin(({ hooks }) => {
  useEventBus().on('*', (name, payload) => console.log(name, payload))
  hooks.hookOnce('close', () => useEventBus().all.clear())
})
