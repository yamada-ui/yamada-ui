import { shorthandStyles } from "@yamada-ui/react/core"

export interface ShorthandMap {
  longhandToShorthands: ReadonlyMap<string, readonly string[]>
  shorthandSet: ReadonlySet<string>
  shorthandToLonghand: ReadonlyMap<string, string>
}

let cache: ShorthandMap | null = null

// When multiple shorthand props map to the same longhand, we pick the first one
// encountered in `Object.entries(shorthandStyles)`. This order is stable for the
// currently-shipped @yamada-ui/react but not a contract — see the regression test
// in `index.test.ts` that pins the current behavior. TODO: replace with an
// explicit priority list once the shorthand map is materialized into static data.
export const getShorthandMap = (): ShorthandMap => {
  if (cache) return cache

  const shorthandSet = new Set<string>()
  const shorthandToLonghand = new Map<string, string>()
  const longhandToShorthands = new Map<string, string[]>()

  if (shorthandStyles && typeof shorthandStyles === "object") {
    for (const [short, def] of Object.entries(shorthandStyles)) {
      const properties = (def as { properties?: readonly unknown[] } | null)
        ?.properties
      if (!Array.isArray(properties) || properties.length === 0) continue
      const long = properties[0]
      if (typeof long !== "string") continue

      shorthandSet.add(short)
      shorthandToLonghand.set(short, long)
      const shorts = longhandToShorthands.get(long) ?? []
      shorts.push(short)
      longhandToShorthands.set(long, shorts)
    }
  }

  cache = { longhandToShorthands, shorthandSet, shorthandToLonghand }
  return cache
}
