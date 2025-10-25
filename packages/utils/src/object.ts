import type { Dict } from "./index.types"
import {
  isArray,
  isFunction,
  isObject,
  isString,
  isUndefined,
} from "./assertion"

export function omitObject<Y extends Dict, M extends keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
): Omit<Y, M> {
  if (!keys.length) return obj

  const result: Dict = {}

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as M)) return

    result[key] = obj[key]
  })

  return result as Omit<Y, M>
}

export function pickObject<Y extends Dict, M extends keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
): { [D in M]: Y[D] } {
  if (!keys.length) return {} as { [D in M]: Y[D] }

  const result = {} as { [D in M]: Y[D] }

  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key]
  })

  return result
}

export function splitObject<Y extends Dict, M extends keyof Y>(
  obj: Y,
  funcOrKeys?: M[] | readonly M[],
): [{ [D in M]: Y[D] }, Omit<Y, M>]

export function splitObject<Y extends Dict, M extends Dict>(
  obj: Dict,
  funcOrKeys?: (key: string) => boolean,
): [Y, M]

export function splitObject<Y extends Dict, M extends keyof Y>(
  obj: Y,
  funcOrKeys?: ((key: string) => boolean) | M[] | readonly M[],
) {
  const picked: Dict = {}
  const omitted: Dict = {}

  for (const [key, value] of Object.entries(obj)) {
    if (
      isFunction(funcOrKeys) ? funcOrKeys(key) : funcOrKeys?.includes(key as M)
    ) {
      picked[key] = value
    } else {
      omitted[key] = value
    }
  }

  return [picked, omitted] as [{ [D in M]: Y[D] }, Omit<Y, M>]
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

export function extractObject<Y extends Dict, M>(
  obj: Y,
  getter: (value: Y[keyof Y]) => M,
) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, getter(value)]),
  ) as { [key in keyof Y]: M }
}

export interface mergeOptions {
  debug?: boolean
  mergeArray?: boolean
  shouldProcess?: (value: any) => boolean
}

export function merge<Y extends Dict>(
  target: any,
  source: any,
  options: mergeOptions = { mergeArray: false, shouldProcess: () => true },
): Y {
  let result = Object.assign({}, target)

  if (isObject(source) && options.shouldProcess?.(source)) {
    if (isObject(target)) {
      for (const [sourceKey, sourceValue] of Object.entries(source)) {
        const targetValue: any = target[sourceKey]

        if (options.shouldProcess(sourceValue)) {
          if (
            options.mergeArray &&
            isArray(sourceValue) &&
            isArray(targetValue)
          ) {
            result[sourceKey] = targetValue.concat(...sourceValue)
          } else if (
            !isFunction(sourceValue) &&
            isObject(sourceValue) &&
            target.hasOwnProperty(sourceKey)
          ) {
            result[sourceKey] = merge(targetValue, sourceValue, options)
          } else {
            Object.assign(result, { [sourceKey]: sourceValue })
          }
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
  separator?: string
  shouldProcess?: (value: any) => boolean
}

export function flattenObject<Y extends Dict>(
  obj: any,
  {
    maxDepth = Infinity,
    separator = ".",
    shouldProcess = () => true,
  }: FlattenObjectOptions = {},
): Y {
  if (!isObject(obj) && !isArray(obj)) return obj

  return Object.entries(obj).reduce<any>((result, [key, value]) => {
    if (isObject(value) && shouldProcess(value) && maxDepth > 1) {
      Object.entries(
        flattenObject(value, {
          maxDepth: maxDepth - 1,
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

export function objectKeys<Y extends object>(obj: Y): (keyof Y)[] {
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
) {
  const keys = isString(path)
    ? path.split(/\[(.*?)\]|\./).filter(Boolean)
    : [path]

  for (const key of keys) {
    if (!obj) break

    obj = obj[key]
  }

  return obj === undefined ? fallback : obj
}

export function memoizeObject(func: typeof getObject) {
  const cache = new WeakMap()

  function memoizedFunc<Y>(
    obj: Dict,
    path: number | string,
    fallback?: any,
  ): Y {
    if (isUndefined(obj)) return func(obj, path, fallback)

    if (!cache.has(obj)) cache.set(obj, new Map())

    const map = cache.get(obj)

    if (map.has(path)) return map.get(path)

    const value = func(obj, path, fallback)

    map.set(path, value)

    return value as Y
  }

  return memoizedFunc
}

export const getMemoizedObject = memoizeObject(getObject)

export function wrapWithKey<Y>(obj: Y, key?: string) {
  if (key) {
    return { [key]: obj }
  } else {
    return obj
  }
}
