import type { Breakpoint, ResponsiveObject, System } from "../../core"
import { useMemo } from "react"
import { useSystem } from "../../core"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useBreakpointValue` is a custom hook that returns the value of the current breakpoint from the provided object.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see https://yamada-ui.com/hooks/use-breakpoint-value
 */
export const useBreakpointValue = <Y>(
  values: ResponsiveObject<Y, false>,
): Y => {
  const system = useSystem()
  const breakpoint = useBreakpoint()

  return useMemo(
    () => getBreakpointValue<Y>(values)(system, breakpoint),
    [values, system, breakpoint],
  )
}

export const getBreakpointValue =
  <Y>(values: ResponsiveObject<Y, false> = {}) =>
  (system: System, breakpoint: Breakpoint): Y => {
    const breakpoints = system.breakpoints.keys

    if (!breakpoints.length) {
      console.warn("getBreakpointValue: `breakpoints` is undefined.")
    }

    const currentIndex = breakpoints.indexOf(breakpoint)

    for (let i = currentIndex; 0 < i; i--) {
      const nextBreakpoint = breakpoints[i]

      if (nextBreakpoint && values.hasOwnProperty(nextBreakpoint)) {
        return values[nextBreakpoint] as Y
      }
    }

    return values.base as Y
  }
