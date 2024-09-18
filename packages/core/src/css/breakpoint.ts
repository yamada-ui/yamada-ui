import type { Dict } from "@yamada-ui/utils"
import { getPx } from "@yamada-ui/utils"
import type { BreakpointDirection, BreakpointOptions } from "../theme.types"

interface BreakpointQuery {
  breakpoint: string
  minW: number | undefined
  maxW: number | undefined
  query: string | undefined
  maxWQuery: string | undefined
  minWQuery: string | undefined
  minMaxQuery: string | undefined
}

export type BreakpointQueries = BreakpointQuery[]

export interface Breakpoints {
  keys: string[]
  isResponsive: (obj: Dict, strict?: boolean) => boolean
  queries: BreakpointQueries
}

export function createQuery(
  min: number | undefined,
  max: number | undefined,
  identifier: string = "@media screen",
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
  options: BreakpointOptions,
): BreakpointQueries {
  const { direction, identifier } = options
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
      minW,
      maxW,
      query,
      maxWQuery,
      minWQuery,
      minMaxQuery,
    }
  })
}

function transformBreakpoints(
  breakpoints: Dict,
  options: BreakpointOptions,
): Dict {
  return Object.fromEntries(
    Object.entries(breakpoints)
      .map(([name, value]) => [name, getPx(value)] as const)
      .sort((a, b) => {
        if (options.direction !== "up") {
          return b[1] - a[1]
        } else {
          return a[1] - b[1]
        }
      }),
  )
}

export function analyzeBreakpoints(
  breakpoints: Dict,
  options: BreakpointOptions = {},
): Breakpoints | undefined {
  if (!breakpoints) return

  options.base ??= "9999px"
  options.direction ??= "down"

  breakpoints.base = options.direction !== "up" ? options.base : "0px"

  breakpoints = transformBreakpoints(breakpoints, options)

  const keys = Object.keys(breakpoints)

  const queries = createQueries(breakpoints, options)

  const isResponsive = (obj: Dict, strict: boolean = false) => {
    const providedKeys = Object.keys(obj)

    if (!providedKeys.length) return false

    if (strict && !providedKeys.includes("base")) return false

    return providedKeys.every((key) => keys.includes(key))
  }

  return {
    keys,
    isResponsive,
    queries,
  }
}

export type AnalyzeBreakpointsReturn = ReturnType<typeof analyzeBreakpoints>

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
    return { minQuery, maxQuery }
  } else {
    return { minQuery, maxQuery }
  }
}
