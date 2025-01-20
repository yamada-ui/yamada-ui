import type { ThemeTokens } from "../../core"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "../../providers/theme-provider"
import { createdDom } from "../../utils"

/**
 * `useBreakpoint` is a custom hook that returns the current breakpoint.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint
 */
export const useBreakpoint = () => {
  const animationFrameId = useRef(0)
  const { theme } = useTheme()

  const breakpoints = theme.__breakpoints
  const {
    containerRef,
    direction = "down",
    identifier = "@media screen",
  } = theme.__config?.breakpoint ?? {}
  const hasContainer = !!containerRef

  if (!breakpoints) {
    console.warn(
      "useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`",
    )
  }

  const queries = useMemo(() => {
    if (!breakpoints) return []

    return breakpoints.queries.map(
      ({ breakpoint, maxW, minMaxQuery, minW }) => {
        const searchValue =
          identifier === "@media screen"
            ? "@media screen and "
            : `${identifier} `
        const query = minMaxQuery?.replace(searchValue, "") ?? ""

        return {
          breakpoint,
          maxW,
          minW,
          query,
        }
      },
    )
  }, [breakpoints, identifier])

  const hasQueries = !!queries.length

  const [breakpoint, setBreakpoint] = useState(() => {
    if (!createdDom() || hasContainer || !hasQueries) return "base"

    for (const { breakpoint, query } of queries) {
      const mql = window.matchMedia(query)

      if (mql.matches) return breakpoint
    }
  })

  const getBreakpoint = useCallback(
    (width: number) => {
      for (const { breakpoint, maxW, minW } of queries) {
        if (direction !== "up") {
          if ((minW ?? 0) <= width) return breakpoint
        } else {
          if (width <= (maxW ?? Infinity)) return breakpoint
        }
      }

      return "base"
    },
    [queries, direction],
  )

  useEffect(() => {
    if (!hasContainer || !hasQueries) return

    if (!createdDom()) return

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return

      cancelAnimationFrame(animationFrameId.current)

      const { width } = entry.contentRect

      animationFrameId.current = requestAnimationFrame(() => {
        const breakpoint = getBreakpoint(width)

        setBreakpoint(breakpoint)
      })
    })

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      observer.disconnect()

      if (process.env.NODE_ENV !== "test")
        cancelAnimationFrame(animationFrameId.current)
    }
  }, [hasQueries, hasContainer, containerRef, getBreakpoint])

  useEffect(() => {
    if (hasContainer || !hasQueries) return

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
  }, [queries, hasQueries, hasContainer])

  return breakpoint as ThemeTokens["breakpoints"]
}
