export const last = <T>(arr?: T[] | null): T | null => {
  if (!arr || arr.length === 0) return null
  return arr[arr.length - 1] ?? null
}

export const isBlank = (str?: string | null): boolean => {
  return !str || str.trim().length === 0
}
