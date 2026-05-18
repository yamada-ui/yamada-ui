import { shorthandStyles, standardStyles } from "@yamada-ui/react/core"

export interface ShorthandMap {
  longhandToShorthands: ReadonlyMap<string, readonly string[]>
  shorthandToLonghand: ReadonlyMap<string, string>
}

let cache: ShorthandMap | null = null

export function getShorthandMap(): ShorthandMap {
  if (cache) return cache

  const shorthandToLonghand = new Map<string, string>()
  const longhandToShorthands = new Map<string, string[]>()

  const standardByRef = new WeakMap<object, string>()
  for (const [name, def] of Object.entries(standardStyles)) {
    if (def && typeof def === "object") standardByRef.set(def, name)
  }

  for (const [short, def] of Object.entries(shorthandStyles)) {
    let long: string | undefined

    if (def && typeof def === "object") long = standardByRef.get(def)

    if (!long) {
      const properties = (def as { properties?: readonly unknown[] } | null)
        ?.properties
      if (
        Array.isArray(properties) &&
        properties.length === 1 &&
        typeof properties[0] === "string"
      ) {
        long = properties[0]
      }
    }

    if (!long) continue

    shorthandToLonghand.set(short, long)
    const shorts = longhandToShorthands.get(long) ?? []
    shorts.push(short)
    longhandToShorthands.set(long, shorts)
  }

  cache = { longhandToShorthands, shorthandToLonghand }
  return cache
}
