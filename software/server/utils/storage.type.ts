import type { Storage as Unstorage } from 'unstorage'
import type { HeaterCommand } from '~~/server/domains/heater/command'

export type Store = HeaterCommand.Store
export type TypedStorage = Unstorage<Store>
