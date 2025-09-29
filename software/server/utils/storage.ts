import type { Store } from '~~/server/utils/storage.type'

export const useTypedStorage = (): TypedStorage => useStorage<Store>('database')
