import type { ThemeTokens } from "../../core"
import { useCallback, useMemo, useRef, useSyncExternalStore } from "react"
import { useEnvironment } from "../../providers/environment-provider"
import { useTheme } from "../../providers/theme-provider"
import { createdDom, isUndefined, noop } from "../../utils"

/**
 * `useBreakpoint` is a custom hook that returns the current breakpoint.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see https://yamada-ui.com/hooks/use-breakpoint
 */
export const useBreakpoint = () => {
  const animationFrameId = useRef(0)
  const { theme } = useTheme()
  const { getWindow } = useEnvironment()
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

  const getBreakpoint = useCallback(
    (width?: number) => {
      if (isUndefined(width)) {
        const win = getWindow()

        if (!win || hasContainer || !hasQueries) return "base"

        for (const { breakpoint, query } of queries) {
          const mql = win.matchMedia(query)

          if (mql.matches) return breakpoint
        }
      } else {
        for (const { breakpoint, maxW, minW } of queries) {
          if (direction !== "up") {
            if ((minW ?? 0) <= width) return breakpoint
          } else {
            if (width <= (maxW ?? Infinity)) return breakpoint
          }
        }
      }

      return "base"
    },
    [direction, getWindow, hasContainer, hasQueries, queries],
  )

  const breakpointRef = useRef<ThemeTokens["breakpoints"]>(getBreakpoint())

  const subscribe = useCallback(
    (listener: () => void) => {
      if (!hasContainer || !hasQueries) {
        const observer = queries.map(({ breakpoint, query }): (() => void) => {
          const mql = getWindow()?.matchMedia(query)

          const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) breakpointRef.current = breakpoint

            listener()
          }

          mql?.addEventListener("change", onChange)

          return () => {
            mql?.removeEventListener("change", onChange)
          }
        })

        return () => {
          observer.forEach((unobserve) => unobserve())
        }
      } else if (createdDom()) {
        const observer = new ResizeObserver(([entry]) => {
          if (!entry) return

          cancelAnimationFrame(animationFrameId.current)

          const { width } = entry.contentRect

          breakpointRef.current = getBreakpoint(width)

          animationFrameId.current = requestAnimationFrame(listener)
        })

        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
          observer.disconnect()

          if (process.env.NODE_ENV !== "test")
            cancelAnimationFrame(animationFrameId.current)
        }
      } else {
        return noop
      }
    },
    [containerRef, getBreakpoint, getWindow, hasContainer, hasQueries, queries],
  )

  const getSnapshot = useCallback(() => {
    return breakpointRef.current
  }, [])

  const breakpoint = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  return breakpoint as ThemeTokens["breakpoints"]
}
