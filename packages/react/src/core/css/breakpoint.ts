import type { Dict } from "../../utils"
import type {
  Breakpoint,
  BreakpointConfig,
  DefineThemeBreakpointTokens,
} from "../theme"
import { getPx, isObject } from "../../utils"

interface BreakpointQuery {
  breakpoint: Breakpoint
  maxW: number | undefined
  maxWQuery: string | undefined
  minMaxQuery: string | undefined
  minW: number | undefined
  minWQuery: string | undefined
  query: string | undefined
}

export interface Breakpoints {
  getQuery: (key: string) => string | undefined
  isResponsive: (obj: any, strict?: boolean) => boolean
  isResponsiveKey: (key: string) => boolean
  keys: Breakpoint[]
  queries: BreakpointQuery[]
  queriesObj: { [key: string]: BreakpointQuery }
}

export function createQuery(
  min: number | undefined,
  max: number | undefined,
  identifier = "@media screen",
): string | undefined {
  const query = [identifier]

  if (min) query.push("and", `(min-width: ${min}px)`)
  if (max) query.push("and", `(max-width: ${max}px)`)

  return query.length > 1
    ? query.join(" ").replace(/^@container(\s+\w*)?\s+and/, `@container$1`)
    : undefined
}

function createQueries(breakpoints: Dict<number>, config: BreakpointConfig) {
  const { direction, identifier } = config
  const down = direction !== "up"

  const queryEntries = Object.entries(breakpoints)
    .map(([breakpoint, width], i, entry) => {
      const [, relatedWidth] = entry[i + 1] ?? []
      let minW = down ? relatedWidth : width
      let maxW = down ? width : relatedWidth

      if (breakpoint === "base") {
        if (down) {
          maxW = undefined
        } else {
          minW = undefined
        }
      }

      if (down) {
        if (minW) minW += 1
      } else {
        if (maxW) maxW -= 1
      }

      const maxWQuery = createQuery(undefined, maxW, identifier)
      const minWQuery = createQuery(minW, undefined, identifier)
      const minMaxQuery = createQuery(minW, maxW, identifier)
      const query = down ? maxWQuery : minWQuery

      return [
        breakpoint,
        {
          breakpoint: breakpoint as Breakpoint,
          maxW,
          maxWQuery,
          minMaxQuery,
          minW,
          minWQuery,
          query,
        },
      ] as const
    })
    .sort((a, b) =>
      down
        ? (b[1].maxW ?? Infinity) - (a[1].maxW ?? Infinity)
        : (a[1].minW ?? 0) - (b[1].minW ?? 0),
    )

  const queries = queryEntries.map(([_, query]) => query)
  const queriesObj = Object.fromEntries(queryEntries)

  return { queries, queriesObj }
}

function transformBreakpoints(
  breakpoints: Dict,
  config: BreakpointConfig,
): Dict {
  return Object.fromEntries(
    Object.entries(breakpoints)
      .map(([name, value]) => [name, getPx(value)] as const)
      .sort((a, b) => {
        if (config.direction !== "up") {
          return b[1] - a[1]
        } else {
          return a[1] - b[1]
        }
      }),
  )
}

export function createBreakpoints(
  breakpoints: DefineThemeBreakpointTokens | undefined,
  config: BreakpointConfig = {},
): Breakpoints | undefined {
  if (!breakpoints) return

  config.base ??= "9999px"
  config.direction ??= "down"

  breakpoints.base = config.direction !== "up" ? config.base : "0px"

  const transformedBreakpoints = transformBreakpoints(breakpoints, config)
  const { queries, queriesObj } = createQueries(transformedBreakpoints, config)
  const keys = Object.keys(queriesObj) as Breakpoint[]

  function isResponsive(obj: any, strict = false) {
    if (!isObject(obj)) return false

    const providedKeys = Object.keys(obj) as Breakpoint[]

    if (!providedKeys.length) return false

    if (strict && !providedKeys.includes("base")) return false

    return providedKeys.every((key) => keys.includes(key))
  }

  function isResponsiveKey(key: string) {
    return key in queriesObj
  }

  function getQuery(key: string) {
    return key in queriesObj ? queriesObj[key]?.query : undefined
  }

  return {
    getQuery,
    isResponsive,
    isResponsiveKey,
    keys,
    queries,
    queriesObj,
  }
}
