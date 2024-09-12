import {
  isObject,
  isArray,
  isFunction,
  isString,
  isUndefined,
} from "./assertion"
import type { Dict } from "./index.types"

const omitObjectHelper = <Y extends Dict, M extends keyof Y>(
  obj: Y,
  path: M[] | readonly M[],
): any => {
  if (!path.length) return obj

  const [primaryKey, ...restKeys] = path

  if (restKeys.length === 0 && primaryKey in obj) {
    const { [primaryKey]: _, ...rest } = obj

    return rest
  }

  if (obj[primaryKey] && isObject(obj[primaryKey])) {
    return {
      ...obj,
      [primaryKey]: omitObjectHelper(obj[primaryKey], restKeys),
    }
  }

  return obj
}

export const omitObject = <
  Y extends Dict,
  M extends keyof Y = keyof Y,
  D extends unknown = unknown,
>(
  obj: Y,
  keys: M[] | readonly M[],
) => {
  return (keys as M[]).reduce((prev, key) => {
    const path = (isString(key) ? key.split(".") : []) as M[]

    return omitObjectHelper(prev, path)
  }, obj) as unknown as D extends unknown ? Omit<Y, M> : D
}

export const pickObject = <
  Y extends Dict,
  M extends keyof Y = keyof Y,
  D extends unknown = unknown,
>(
  obj: Y,
  keys: M[] | readonly M[],
  fallbackValue = "__fallback",
) =>
  (keys as M[]).reduce((prev, key) => {
    const path = isString(key) ? key.split(".") : []

    if (!path.length) return prev

    const value = getMemoizedObject(obj, key as string, fallbackValue)

    if (value === fallbackValue) return prev

    prev = merge(
      prev,
      path.reduceRight(
        (prev, key) => ({ [key]: key === path.at(-1) ? value : prev }),
        {},
      ),
    )

    return prev
  }, {}) as D extends unknown ? { [H in M]: Y[H] } : D

export const splitObject = <Y extends Dict, M extends keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
) => {
  const picked: Dict = {}
  const omitted: Dict = {}

  for (const [key, value] of Object.entries(obj)) {
    if (keys.includes(key as Y[M])) {
      picked[key] = value
    } else {
      omitted[key] = value
    }
  }

  return [picked, omitted] as [{ [P in M]: Y[P] }, Omit<Y, M>]
}

export const filterObject = <Y extends Dict, M extends Dict>(
  obj: Y,
  func: (key: keyof Y, value: Y[keyof Y], obj: Y) => boolean,
): M => {
  const result: Dict = {}

  Object.entries(obj).forEach(([key, value]) => {
    const shouldPass = func(key, value, obj)

    if (shouldPass) result[key] = value
  })

  return result as M
}

export const filterUndefined = <Y extends Dict>(obj: Y): Y =>
  filterObject(obj, (_, val) => val !== null && val !== undefined)

export const merge = <Y extends Dict>(
  target: any,
  source: any,
  mergeArray: boolean = false,
): Y => {
  let result = Object.assign({}, target)

  if (isObject(source)) {
    if (isObject(target)) {
      for (const [sourceKey, sourceValue] of Object.entries(source)) {
        const targetValue: any = target[sourceKey]

        if (mergeArray && isArray(sourceValue) && isArray(targetValue)) {
          result[sourceKey] = targetValue.concat(...sourceValue)
        } else if (
          !isFunction(sourceValue) &&
          isObject(sourceValue) &&
          target.hasOwnProperty(sourceKey)
        ) {
          result[sourceKey] = merge(targetValue, sourceValue, mergeArray)
        } else {
          Object.assign(result, { [sourceKey]: sourceValue })
        }
      }
    } else {
      result = source
    }
  }

  return result as Y
}

export type FlattenObjectOptions = {
  maxDepth?: number
  omitKeys?: string[]
  separator?: string
  shouldProcess?: (obj: any) => boolean
}

export const flattenObject = <Y extends Dict>(
  obj: any,
  { maxDepth, omitKeys, separator, shouldProcess }: FlattenObjectOptions = {},
): Y => {
  maxDepth ??= Infinity
  omitKeys ??= []
  separator ??= "."

  if ((!isObject(obj) && !isArray(obj)) || !maxDepth) return obj

  return Object.entries(obj).reduce((result, [key, value]) => {
    if (
      isObject(value) &&
      !Object.keys(value).some((key) => omitKeys?.includes(key)) &&
      (!shouldProcess || shouldProcess(value))
    ) {
      Object.entries(
        flattenObject(value, {
          maxDepth: maxDepth - 1,
          omitKeys,
          separator,
          shouldProcess,
        }),
      ).forEach(([childKey, childValue]) => {
        result[`${key}${separator}${childKey}`] = childValue
      })
    } else {
      result[key] = value
    }

    return result
  }, {} as any) as Y
}

export const objectFromEntries = <Y extends Dict>(entries: any[][]): Y =>
  entries.reduce((result, [key, value]) => {
    result[key] = value

    return result
  }, {} as any) as Y

export const keysFormObject = <Y extends Dict>(obj: Y): (keyof Y)[] =>
  Object.keys(obj)

export const replaceObject = <Y extends any>(
  objOrArray: Y,
  callBack: (value: any) => any,
): Y => {
  if (isArray(objOrArray)) {
    return objOrArray.map(callBack) as Y
  } else if (isObject(objOrArray)) {
    return Object.entries(objOrArray).reduce((obj, [key, value]) => {
      obj[key] = callBack(value)

      return obj
    }, {} as Dict) as Y
  } else {
    return callBack(objOrArray)
  }
}

export const getObject = (
  obj: Dict,
  path: string | number,
  fallback?: any,
  i?: number,
) => {
  const k = isString(path) ? path.split(/\[(.*?)\]|\./).filter(Boolean) : [path]

  for (i = 0; i < k.length; i += 1) {
    if (!obj) break

    obj = obj[k[i]]
  }

  return obj === undefined ? fallback : obj
}

export const memoizeObject = (func: typeof getObject) => {
  const cache = new WeakMap()

  const memoizedFunc = <Y extends unknown = any>(
    obj: Dict,
    path: string | number,
    fallback?: any,
    i?: number,
  ): Y => {
    if (isUndefined(obj)) return func(obj, path, fallback)

    if (!cache.has(obj)) cache.set(obj, new Map())

    const map = cache.get(obj)

    if (map.has(path)) return map.get(path)

    const value = func(obj, path, fallback, i)

    map.set(path, value)

    return value as Y
  }

  return memoizedFunc
}

export const getMemoizedObject = memoizeObject(getObject)

export const assignAfter = (target: Record<string, any>, ...sources: any[]) => {
  if (target == null)
    throw new TypeError("Cannot convert undefined or null to object")

  const result: Record<string, unknown> = { ...target }

  for (const nextSource of sources) {
    if (nextSource == null) continue

    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue

      if (nextKey in result) delete result[nextKey]

      result[nextKey] = nextSource[nextKey]
    }
  }

  return result
}
