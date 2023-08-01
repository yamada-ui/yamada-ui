import { isArray } from '@yamada-ui/react'

export type MixedArray = string | (string | string)[]

export const toArray = (mixedArray: MixedArray) =>
  (Array.isArray(mixedArray) ? mixedArray.flat() : [mixedArray]).filter(Boolean)

export const flattenArray = <T extends any = any>(array: T[], target: keyof T) => {
  let result = []

  array.forEach((item) => {
    result = [...result, item]

    if (isArray(item[target])) result = [...result, ...flattenArray(item[target], target)]
  })

  return result
}
