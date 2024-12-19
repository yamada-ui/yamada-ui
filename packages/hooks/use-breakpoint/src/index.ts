import type { ResponsiveObject, StyledTheme, Theme } from "@yamada-ui/core"
import type { DependencyList } from "react"
import { useTheme } from "@yamada-ui/core"
import { createdDom, useUpdateEffect } from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

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

  return breakpoint as Theme["breakpoints"]
}

/**
 * `useBreakpointValue` is a custom hook that returns the value of the current breakpoint from the provided object.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint-value
 */
export const useBreakpointValue = <T>(values: ResponsiveObject<T>): T => {
  const { theme } = useTheme()
  const breakpoint = useBreakpoint()

  return useMemo(
    () => getBreakpointValue<T>(values)(theme, breakpoint),
    [values, theme, breakpoint],
  )
}

export const getBreakpointValue =
  <T>(values: ResponsiveObject<T> = {}) =>
  (theme: StyledTheme | undefined, breakpoint: Theme["breakpoints"]): T => {
    if (!theme) {
      console.warn("getBreakpointValue: `theme` is undefined.")
    }

    const breakpoints = theme?.__breakpoints?.keys ?? []

    if (!breakpoints.length) {
      console.warn("getBreakpointValue: `breakpoints` is undefined.")
    }

    const currentIndex = breakpoints.indexOf(breakpoint)

    for (let i = currentIndex; 0 < i; i--) {
      const nextBreakpoint = breakpoints[i]

      if (nextBreakpoint && values.hasOwnProperty(nextBreakpoint)) {
        return values[nextBreakpoint] as T
      }
    }

    return values.base as T
  }

/**
 * `useBreakpointState` is a custom hook that takes a responsive object as an initial state and returns a state corresponding to the current breakpoint.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint-state
 */
export const useBreakpointState = <T>(initialState: ResponsiveObject<T>) => {
  const state = useBreakpointValue(initialState)

  return useState(state)
}

/**
 * `useBreakpointEffect` is a custom hook that executes a specific callback function when the breakpoint changes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint-effect
 */
export const useBreakpointEffect = (
  callback: (breakpoint: Theme["breakpoints"]) => void,
  deps: DependencyList,
) => {
  const breakpoint = useBreakpoint()

  useEffect(() => {
    callback(breakpoint)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, ...deps])
}

/**
 * `useUpdateBreakpointEffect` is a custom hook that skips the side effect on the initial render and executes a specific callback function when the breakpoint changes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-update-breakpoint-effect
 */
export const useUpdateBreakpointEffect = (
  callback: (breakpoint: Theme["breakpoints"]) => void,
  deps: DependencyList,
) => {
  const breakpoint = useBreakpoint()

  useUpdateEffect(() => {
    callback(breakpoint)
  }, [breakpoint, ...deps])
}
