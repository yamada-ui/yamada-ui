import type { Dict } from "./index.types"
import {
  isArray,
  isFunction,
  isObject,
  isString,
  isUndefined,
} from "./assertion"

function omitObjectHelper<Y extends Dict, M extends keyof Y>(
  obj: Y,
  path: M[] | readonly M[],
): any {
  if (!path.length) return obj

  const [primaryKey, ...restKeys] = path

  if (restKeys.length === 0 && primaryKey && primaryKey in obj) {
    const { [primaryKey]: _, ...rest } = obj

    return rest
  }

  if (primaryKey && obj[primaryKey] && isObject(obj[primaryKey])) {
    return {
      ...obj,
      [primaryKey]: omitObjectHelper(obj[primaryKey], restKeys),
    }
  }

  return obj
}

export function omitObject<
  Y extends Dict,
  M extends keyof Y = keyof Y,
  D = any,
>(obj: Y, keys: M[] | readonly M[]) {
  return (keys as M[]).reduce((prev, key) => {
    const path = (isString(key) ? key.split(".") : []) as M[]

    return omitObjectHelper(prev, path)
  }, obj) as unknown as D extends unknown ? Omit<Y, M> : D
}

export function pickObject<
  Y extends Dict,
  M extends keyof Y = keyof Y,
  D = any,
>(obj: Y, keys: M[] | readonly M[], fallbackValue = "__fallback") {
  return (keys as M[]).reduce((prev, key) => {
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
}

export function splitObject<Y extends Dict, M extends keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
) {
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

export function filterObject<Y extends Dict, M extends Dict>(
  obj: Y,
  func: (key: keyof Y, value: Y[keyof Y], obj: Y) => boolean,
): M {
  const result: Dict = {}

  Object.entries(obj).forEach(([key, value]) => {
    const shouldPass = func(key, value, obj)

    if (shouldPass) result[key] = value
  })

  return result as M
}

export function filterUndefined<Y extends Dict>(obj: Y): Y {
  return filterObject(obj, (_, val) => val !== null && val !== undefined)
}

export function merge<Y extends Dict>(
  target: any,
  source: any,
  mergeArray = false,
): Y {
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

export interface FlattenObjectOptions {
  maxDepth?: number
  omitKeys?: string[]
  separator?: string
  shouldProcess?: (obj: any) => boolean
}

export function flattenObject<Y extends Dict>(
  obj: any,
  {
    maxDepth = Infinity,
    omitKeys = [],
    separator = ".",
    shouldProcess,
  }: FlattenObjectOptions = {},
): Y {
  if ((!isObject(obj) && !isArray(obj)) || !maxDepth) return obj

  return Object.entries(obj).reduce<any>((result, [key, value]) => {
    if (
      isObject(value) &&
      !Object.keys(value).some((key) => omitKeys.includes(key)) &&
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
  }, {}) as Y
}

export function objectFromEntries<Y extends Dict>(entries: any[][]): Y {
  return entries.reduce<any>((result, [key, value]) => {
    result[key] = value

    return result
  }, {}) as Y
}

export function keysFormObject<Y extends object>(obj: Y): (keyof Y)[] {
  return Object.keys(obj) as (keyof Y)[]
}

export function replaceObject<Y = any>(
  objOrArray: Y,
  callBack: (value: any) => any,
): Y {
  if (isArray(objOrArray)) {
    return objOrArray.map(callBack) as Y
  } else if (isObject(objOrArray)) {
    return Object.entries(objOrArray).reduce<Dict>((obj, [key, value]) => {
      obj[key] = callBack(value)

      return obj
    }, {}) as Y
  } else {
    return callBack(objOrArray)
  }
}

export function getObject(
  obj: Dict | undefined,
  path: number | string,
  fallback?: any,
  i?: number,
) {
  const keys = isString(path)
    ? path.split(/\[(.*?)\]|\./).filter(Boolean)
    : [path]

  for (i = 0; i < keys.length; i += 1) {
    if (!obj) break

    const key = keys[i]

    obj = key ? obj[key] : undefined
  }

  return obj === undefined ? fallback : obj
}

export function memoizeObject(func: typeof getObject) {
  const cache = new WeakMap()

  function memoizedFunc<Y>(
    obj: Dict,
    path: number | string,
    fallback?: any,
    i?: number,
  ): Y {
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

export function assignAfter(target: Dict, ...sources: any[]) {
  const result: Dict = { ...target }

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
