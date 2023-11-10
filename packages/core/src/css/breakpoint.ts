import { keysFormObject, createdDom, Dict } from "@yamada-ui/utils"

export type BreakpointQuery = {
  breakpoint: string
  minW: number | undefined
  maxW: number | undefined
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

const createQuery = (min?: number, max?: number): string | undefined => {
  const query = ["@media screen"]

  if (min) query.push("and", `(min-width: ${min}px)`)
  if (max) query.push("and", `(max-width: ${max}px)`)

  return query.length > 1 ? query.join(" ") : undefined
}

const createQueries = (breakpoints: Dict): BreakpointQueries => {
  return Object.entries(breakpoints).map(([breakpoint, maxW], i, entry) => {
    let [, minW] = entry[i - 1] ?? []

    maxW = breakpoint !== "base" ? maxW : undefined

    if (minW) minW += 1

    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: createQuery(undefined, maxW),
      minWQuery: createQuery(minW),
      minMaxQuery: createQuery(minW, maxW),
    }
  })
}

const transformBreakpoints = (breakpoints: Dict): Dict => {
  const isBrowser = createdDom()
  const fontSize = isBrowser
    ? parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    : 16

  return Object.fromEntries(
    Object.entries(breakpoints)
      .map(([name, value]) => {
        if (value.includes("px")) {
          value = parseFloat(value)

          return [name, value]
        } else {
          value = parseFloat(value)
          value = value * fontSize

          return [name, value]
        }
      })
      .sort((a, b) => (a[1] as number) - (b[1] as number)),
  )
}

export const analyzeBreakpoints = (
  breakpoints: Dict,
): Breakpoints | undefined => {
  if (!breakpoints) return

  breakpoints.base = "9999px"

  breakpoints = transformBreakpoints(breakpoints)

  const keys = keysFormObject(breakpoints)

  const queries = createQueries(breakpoints)

  return {
    keys,
    isResponsive: (obj: Dict) => {
      const _keys = Object.keys(obj)

      return _keys.length > 0 && _keys.every((key) => keys.includes(key))
    },
    queries,
  }
}

export type AnalyzeBreakpointsReturn = ReturnType<typeof analyzeBreakpoints>
