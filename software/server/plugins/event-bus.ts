export default defineNitroPlugin(({ hooks }) => {
  hooks.hookOnce('close', () => useEventBus().all.clear())
})
