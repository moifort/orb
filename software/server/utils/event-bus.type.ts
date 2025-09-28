import type { Emitter } from 'mitt'
import type { HeaterCommand } from '~~/server/domains/heater/command'

export type Events = HeaterCommand.Events
export type EventBus = Emitter<Events>
