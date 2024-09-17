export function filterEmpty<T extends any[]>(array: T) {
  return array.filter((value) => value != null)
}
