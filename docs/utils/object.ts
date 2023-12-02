import type { Dict } from "@yamada-ui/react"

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

export const pickObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
): { [P in K]: T[P] } => {
  const result = {} as { [P in K]: T[P] }

  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key]
  })

  return result
}

export const splitObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
) => {
  const picked: Dict = {}
  const omitted: Dict = {}

  for (const [key, value] of Object.entries(obj)) {
    if (keys.includes(key as T[K])) {
      picked[key] = value
    } else {
      omitted[key] = value
    }
  }

  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>]
}
