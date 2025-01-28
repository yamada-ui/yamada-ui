import type { Union } from "../../utils"
import type { ComponentSlotStyle, ComponentStyle } from "./index.types"
import { isObject, merge, omitObject, pickObject } from "../../utils"

type MergeStyleOptions = Omit<Partial<FilterStyleOptions>, "slot">

export function mergeStyle(
  target: ComponentStyle,
  ...sources: ComponentStyle[]
) {
  return function ({
    omit = [],
    pick = [],
  }: MergeStyleOptions = {}): ComponentStyle {
    return sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(filterStyle(prev)({ omit, pick }), source),
      target,
    )
  }
}

export function mergeSlotStyle(
  target: ComponentSlotStyle,
  ...sources: ComponentSlotStyle[]
) {
  return function ({
    omit = [],
    pick = [],
  }: MergeStyleOptions = {}): ComponentSlotStyle {
    return sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(
          filterStyle(prev)({ omit, pick, slot: true }),
          source,
        ),
      target,
    )
  }
}

function recursiveMergeStyle<T extends ComponentSlotStyle | ComponentStyle>(
  target: T,
  source: T,
): T {
  let result = Object.assign({}, target) as T

  if (isObject(source) && isObject(target)) {
    for (const [sourceKey, sourceValue] of Object.entries(source)) {
      const targetValue = target[sourceKey as keyof T]

      if (target.hasOwnProperty(sourceKey)) {
        result[sourceKey as keyof T] = recursiveMergeStyle(
          targetValue,
          sourceValue,
        ) as T[keyof T]
      } else {
        Object.assign(result, { [sourceKey]: sourceValue })
      }
    }
  } else {
    result = source
  }

  return result as T
}

interface FilterStyleOptions {
  omit: Union<keyof (ComponentSlotStyle | ComponentStyle)>[]
  pick: Union<keyof (ComponentSlotStyle | ComponentStyle)>[]
  slot?: boolean
}

function filterStyle<T extends ComponentSlotStyle | ComponentStyle>(target: T) {
  return function ({ omit, pick, slot = false }: FilterStyleOptions): T {
    if (!isObject(target)) return target

    if (omit.length)
      target = internalFilterStyle(target, omit, slot)(omitObject)
    if (pick.length)
      target = internalFilterStyle(target, pick, slot)(pickObject)

    return target
  }
}

function internalFilterStyle(
  target: any,
  keys: string[],
  slot: boolean,
  refs: string[] = [],
) {
  return function (func: typeof omitObject | typeof pickObject) {
    if (!isObject(target)) return target

    let result = Object.assign({}, target)

    result = func(result, keys)

    Object.entries(result).forEach(([nestedKey, style]) => {
      const newKeys = keys.filter((key) => key !== nestedKey)
      const newRefs = [...refs, nestedKey]

      if (!onValidFilterStyleKey(newRefs, slot)) return

      if (
        func === omitObject ||
        Object.keys(style).some((key) => newKeys.includes(key))
      ) {
        result[nestedKey] = internalFilterStyle(
          style,
          newKeys,
          slot,
          newRefs,
        )(func)
      } else {
        result[nestedKey] = merge(
          result[nestedKey],
          internalFilterStyle(style, newKeys, slot, newRefs)(func),
        )
      }
    })

    return result
  }
}

function onValidFilterStyleKey(keys: string[], slot: boolean): boolean {
  const rootKey = keys[0]

  switch (rootKey) {
    case "base":
      return keys.length < (slot ? 2 : 1)

    case "variants":
    case "sizes":
      return keys.length < (slot ? 3 : 2)

    default:
      return false
  }
}
