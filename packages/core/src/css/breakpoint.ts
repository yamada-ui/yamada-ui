import type { Dict } from "@yamada-ui/utils"
import { keysFormObject, getPx } from "@yamada-ui/utils"
import type { BreakpointDirection } from "../theme.types"

type BreakpointQuery = {
  breakpoint: string
  minW: number | undefined
  maxW: number | undefined
  query: string | undefined
  maxWQuery: string | undefined
  minWQuery: string | undefined
  minMaxQuery: string | undefined
}

export type BreakpointQueries = BreakpointQuery[]

type Breakpoints = {
  keys: string[]
  isResponsive: (obj: Dict) => boolean
  queries: BreakpointQueries
}

export const createQuery = (min?: number, max?: number): string | undefined => {
  const query = ["@media screen"]

  if (min) query.push("and", `(min-width: ${min}px)`)
  if (max) query.push("and", `(max-width: ${max}px)`)

  return query.length > 1 ? query.join(" ") : undefined
}

const createQueries = (
  breakpoints: Dict,
  direction: BreakpointDirection,
): BreakpointQueries => {
  const isDown = direction === "down"

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

    const maxWQuery = createQuery(undefined, maxW)
    const minWQuery = createQuery(minW)
    const minMaxQuery = createQuery(minW, maxW)
    const query = direction === "down" ? maxWQuery : minWQuery

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

const transformBreakpoints = (
  breakpoints: Dict,
  direction: BreakpointDirection,
): Dict => {
  return Object.fromEntries(
    Object.entries(breakpoints)
      .map(([name, value]) => [name, getPx(value)] as const)
      .sort((a, b) => {
        if (direction === "down") {
          return b[1] - a[1]
        } else {
          return a[1] - b[1]
        }
      }),
  )
}

export const analyzeBreakpoints = (
  breakpoints: Dict,
  direction: BreakpointDirection = "down",
): Breakpoints | undefined => {
  if (!breakpoints) return

  breakpoints.base = direction === "down" ? "9999px" : "0px"

  breakpoints = transformBreakpoints(breakpoints, direction)

  const keys = keysFormObject(breakpoints)

  const queries = createQueries(breakpoints, direction)

  const isResponsive = (obj: Dict) => {
    const providedKeys = Object.keys(obj)

    return (
      providedKeys.length > 0 && providedKeys.every((key) => keys.includes(key))
    )
  }

  return {
    keys,
    isResponsive,
    queries,
  }
}

export type AnalyzeBreakpointsReturn = ReturnType<typeof analyzeBreakpoints>

export const getMinMaxQuery = (
  queries: BreakpointQueries,
  direction: BreakpointDirection,
  pickKey: string[] = [],
) => {
  const omitQueries = queries.filter(
    ({ breakpoint }) => breakpoint !== "base" && pickKey.includes(breakpoint),
  )

  const minQuery = omitQueries.sort((a, b) => (a.minW ?? 0) - (b.minW ?? 0))[0]
  const maxQuery = omitQueries.sort((a, b) => (b.maxW ?? 0) - (a.maxW ?? 0))[0]

  if (direction === "down") {
    return { minQuery, maxQuery }
  } else {
    return { minQuery, maxQuery }
  }
}
