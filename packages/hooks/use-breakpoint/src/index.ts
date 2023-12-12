import type { Theme, ResponsiveObject } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import { createdDom } from "@yamada-ui/utils"
import { useState, useMemo, useEffect } from "react"

/**
 * `useBreakpoint` is a custom hook that returns the current breakpoint.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint
 */
export const useBreakpoint = () => {
  const { theme } = useTheme()

  if (!theme)
    throw Error(
      "useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`",
    )

  const breakpoints = theme.__breakpoints

  if (!breakpoints)
    throw Error(
      "useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`",
    )

  const queries = useMemo(
    () =>
      breakpoints.queries.map(({ breakpoint, minMaxQuery }) => ({
        breakpoint,
        query: minMaxQuery?.replace("@media screen and ", "") ?? "",
      })),
    [breakpoints],
  )

  const [breakpoint, setBreakpoint] = useState(() => {
    const isBrowser = createdDom()

    if (!isBrowser) return "base"

    for (const { breakpoint, query } of queries) {
      const mql = window.matchMedia(query)

      if (mql.matches) return breakpoint
    }
  })

  useEffect(() => {
    const observer = queries.map(({ breakpoint, query }): (() => void) => {
      const mql = window.matchMedia(query)

      const onChange = (e: MediaQueryListEvent) => {
        if (e.matches) setBreakpoint(breakpoint)
      }

      if (typeof mql.addEventListener === "function")
        mql.addEventListener("change", onChange)

      return () => {
        if (typeof mql.removeEventListener === "function")
          mql.removeEventListener("change", onChange)
      }
    })

    return () => {
      observer.forEach((unobserve) => unobserve())
    }
  }, [queries])

  return breakpoint as Theme["breakpoints"]
}

/**
 * `useBreakpointValue` is a custom hook that returns the value of the current breakpoint from the provided object.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint-value
 */
export const useBreakpointValue = <T extends any>(
  values: ResponsiveObject<T>,
): T => {
  const { theme } = useTheme()

  if (!theme)
    throw Error(
      "useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`",
    )

  const breakpoints = theme.__breakpoints?.keys

  if (!breakpoints)
    throw Error(
      "useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`",
    )

  const breakpoint = useBreakpoint()

  const computedBreakpoint = breakpoints.reduce((prev, current) => {
    if (prev === breakpoint || current === breakpoint) {
      if (
        prev === "base" ||
        (!values.hasOwnProperty(prev) && values.hasOwnProperty(current))
      ) {
        return current
      } else {
        return prev
      }
    } else {
      return prev
    }
  }, "base")

  return values[computedBreakpoint] as T
}
