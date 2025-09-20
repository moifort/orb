import {procedure, router} from '~~/server/api'
import {reboot} from '~~/server/system/command'

export const system = router({
  reboot: procedure.mutation(() => reboot()),
})
