import type { Result } from 'typescript-result'

// TODO remettre dans system
export type SystemCommand = (command: string) => Promise<Result<string, string>>
