import mitt from 'mitt'
import type { Events } from '~~/server/utils/event-bus.type'

const emitter = mitt<Events>()
export const useEventBus = () => emitter
