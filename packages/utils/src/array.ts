import { isEmptyObject } from "./assertion"

export function filterEmpty<Y>(array: Y[]): Exclude<Y, null | undefined>[] {
  return array.filter(
    (value) => value != null && !isEmptyObject(value),
  ) as Exclude<Y, null | undefined>[]
}

export function toArray<Y>(mixedArray: Y) {
  return (Array.isArray(mixedArray) ? mixedArray.flat() : [mixedArray]).filter(
    Boolean,
  ) as Y extends any[]
    ? Exclude<Y[number], null | undefined>[]
    : Exclude<Y, null | undefined>[]
}
