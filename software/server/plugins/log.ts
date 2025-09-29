// TODO crée un plugin event qui ferme tout les handler lors de la fermeture de Nitro
// TODO: task
export default defineNitroPlugin(({ hooks }) => {
  runTask('test').then()
  //  hooks.hookOnce('close', () => useEventBus().all.clear())
})
