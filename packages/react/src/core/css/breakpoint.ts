import type { Dict } from "../../utils"
import type {
  BreakpointConfig,
  BreakpointDirection,
  DefineThemeBreakpointTokens,
} from "../theme"
import { getPx, isObject } from "../../utils"

interface BreakpointQuery {
  breakpoint: string
  maxW: number | undefined
  maxWQuery: string | undefined
  minMaxQuery: string | undefined
  minW: number | undefined
  minWQuery: string | undefined
  query: string | undefined
}

export type BreakpointQueries = BreakpointQuery[]

export interface Breakpoints {
  getQuery: (key: string) => string | undefined
  isResponsive: (obj: any, strict?: boolean) => boolean
  keys: string[]
  queries: BreakpointQueries
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

function createQueries(
  breakpoints: Dict,
  config: BreakpointConfig,
): BreakpointQueries {
  const { direction, identifier } = config
  const isDown = direction !== "up"

  return Object.entries(breakpoints).map(([breakpoint, width], i, entry) => {
    const [, relatedWidth] = entry[i + 1] ?? []
    let minW = isDown ? relatedWidth : width
    let maxW = isDown ? width : relatedWidth

    if (breakpoint === "base") {
      if (isDown) {
        maxW = undefined
      } else {
        minW = undefined
      }
    }

    if (isDown) {
      if (minW) minW += 1
    } else {
      if (maxW) maxW -= 1
    }

    const maxWQuery = createQuery(undefined, maxW, identifier)
    const minWQuery = createQuery(minW, undefined, identifier)
    const minMaxQuery = createQuery(minW, maxW, identifier)
    const query = isDown ? maxWQuery : minWQuery

    return {
      breakpoint,
      maxW,
      maxWQuery,
      minMaxQuery,
      minW,
      minWQuery,
      query,
    }
  })
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

  breakpoints = transformBreakpoints(breakpoints, config)

  const keys = Object.keys(breakpoints)

  const queries = createQueries(breakpoints, config)

  function isResponsive(obj: any, strict = false) {
    if (!isObject(obj)) return false

    const providedKeys = Object.keys(obj)

    if (!providedKeys.length) return false

    if (strict && !providedKeys.includes("base")) return false

    return providedKeys.every((key) => keys.includes(key))
  }

  function getQuery(key: string) {
    return queries.find(({ breakpoint }) => breakpoint === key)?.query
  }

  return {
    getQuery,
    isResponsive,
    keys,
    queries,
  }
}

export type CreateBreakpointsReturn = ReturnType<typeof createBreakpoints>

export function getMinMaxQuery(
  queries: BreakpointQueries,
  direction: BreakpointDirection,
  pickKey: string[] = [],
) {
  const omitQueries = queries.filter(
    ({ breakpoint }) => breakpoint !== "base" && pickKey.includes(breakpoint),
  )

  const minQuery = omitQueries.sort((a, b) => (a.minW ?? 0) - (b.minW ?? 0))[0]
  const maxQuery = omitQueries.sort((a, b) => (b.maxW ?? 0) - (a.maxW ?? 0))[0]

  if (direction !== "up") {
    return { maxQuery, minQuery }
  } else {
    return { maxQuery, minQuery }
  }
}
