import type { Dict } from "./assertion.js"

export const getObject = (obj: Dict, path: string) => {
  const keys = path.split(".")

  return keys.reduce((obj, key) => obj[key] ?? {}, obj)
}

export const omitObject = <Y extends Dict, M extends keyof Y>(
  obj: Y,
  keys: M[],
): Omit<Y, M> => {
  const result: Dict = {}

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as M)) return

    result[key] = obj[key]
  })

  return result as Omit<Y, M>
}
