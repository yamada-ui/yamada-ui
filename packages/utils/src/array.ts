export function filterEmpty<Y extends any[]>(array: Y) {
  return array.filter((value) => value != null)
}

export function toArray<Y>(mixedArray: Y) {
  return (Array.isArray(mixedArray) ? mixedArray.flat() : [mixedArray]).filter(
    Boolean,
  ) as Y extends any[] ? Y[number][] : Y[]
}
