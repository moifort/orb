import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

export const reboot = async () => {
  console.log('Rebooting system...')
  await execAsync('reboot')
}
