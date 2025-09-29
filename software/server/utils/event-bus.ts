import mitt, { type Emitter } from 'mitt'
import type { HeaterCommand } from '~~/server/domains/heater/command'

export type Events = HeaterCommand.Events
export type EventBus = Emitter<Events>

const emitter = mitt<Events>()
export const useEventBus = () => emitter
