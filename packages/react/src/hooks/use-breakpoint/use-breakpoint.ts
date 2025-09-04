"use client"

import type { Breakpoint } from "../../core"
import { useCallback, useMemo, useRef, useSyncExternalStore } from "react"
import { useEnvironment, useSystem } from "../../core"
import { createdDom, isUndefined, noop } from "../../utils"

/**
 * `useBreakpoint` is a custom hook that returns the current breakpoint.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see https://yamada-ui.com/docs/hooks/use-breakpoint
 */
export const useBreakpoint = () => {
  const animationFrameId = useRef(0)
  const { breakpoints, config } = useSystem()
  const { getWindow } = useEnvironment()
  const {
    containerRef,
    direction = "down",
    identifier = "@media screen",
  } = config.breakpoint ?? {}
  const hasContainer = !!containerRef

  const queries = useMemo(() => {
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

        if (hasContainer || !hasQueries) return "base"

        for (const { breakpoint, query } of queries) {
          const mql = win?.matchMedia(query)

          if (mql?.matches) return breakpoint
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

  const breakpointRef = useRef<Breakpoint>(getBreakpoint())

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

  return breakpoint
}
