import type { Result } from 'typescript-result'

export type SystemCommand = (command: string) => Promise<Result<string, string>>
