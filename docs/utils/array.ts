import { isArray } from "@yamada-ui/react"

export type MixedArray = string | (string | string)[]

export const toArray = (mixedArray: MixedArray) =>
  (Array.isArray(mixedArray) ? mixedArray.flat() : [mixedArray]).filter(Boolean)

export const flattenArray = <T extends any = any>(array: T[], key: keyof T) => {
  let result = []

  array.forEach((item) => {
    result = [...result, item]

    const targetItem = item[key]

    if (isArray(targetItem))
      result = [...result, ...flattenArray(targetItem, key)]
  })

  return result
}

export const includes = <T extends ReadonlyArray<unknown>>(
  array: T,
  searchElement: unknown,
): searchElement is T[number] => array.includes(searchElement)
