import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { match } from 'ts-pattern'
import { Result } from 'typescript-result'
import { isBlank } from '#shared/utils'

export type SystemCommand = (command: string) => Promise<Result<string, string>>

const fakeSystemCommand = () => async (command: string) =>
  match(command)
    .with(
      `printf '\\x00\\x00\\x00\\x00' | spi-pipe -d /dev/spidev0.0 -s 500000 -b 4 -n 1 | hexdump -v -e '4/1 "%02x" "\\n"'`,
      () => Result.ok('05C01900'), // TODO rajouter un fake qui simule la monté en puissance
    )
    .otherwise(() => Result.error(`fake-output-for-command: ${command}`))
const execAsync = promisify(exec)

const systemCommand = () => async (command: string) => {
  if (isBlank(command.trim())) return Result.error('command-cannot-be-empty' as const)
  const { stdout, stderr } = await execAsync(command)
  if (stderr) return Result.error(stderr)
  return Result.ok(stdout.trim())
}
export const useSystemCommand: () => SystemCommand =
  process.env.NODE_ENV === 'production' ? systemCommand : fakeSystemCommand
