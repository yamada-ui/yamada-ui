import type { Dict } from "./assertion.js"

export const getObject = (obj: Dict, path: string) => {
  const keys = path.split(".")

  return keys.reduce((obj, key) => obj[key] ?? {}, obj)
}

export const omitObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const result: Dict = {}

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as K)) return

    result[key] = obj[key]
  })

  return result as Omit<T, K>
}
