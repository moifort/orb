export default defineNitroPlugin(({ hooks }) => {
  runTask('test').then()
  //  hooks.hookOnce('close', () => useEventBus().all.clear())
})
