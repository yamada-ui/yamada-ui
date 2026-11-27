import type {
  Breakpoint,
  BreakpointDirection,
  ResponsiveObject,
  System,
} from "../../core"
import { runIfFn } from "@yamada-ui/utils"
import { useMemo } from "react"
import { DEFAULT_BREAKPOINT_DIRECTION, useSystem } from "../../core"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useBreakpointValue` is a custom hook that returns the value of the current breakpoint from the provided object.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see https://yamada-ui.com/docs/hooks/use-breakpoint-value
 */
export const useBreakpointValue = <Y>(
  values:
    | ((direction: BreakpointDirection) => ResponsiveObject<Y, false>)
    | ResponsiveObject<Y, false>,
): Y => {
  const system = useSystem()
  const breakpoint = useBreakpoint()
  const direction =
    system.config.breakpoint?.direction ?? DEFAULT_BREAKPOINT_DIRECTION

  return useMemo(
    () => getBreakpointValue<Y>(runIfFn(values, direction))(system, breakpoint),
    [values, system, breakpoint, direction],
  )
}

export const getBreakpointValue =
  <Y>(values: ResponsiveObject<Y, false> = {}) =>
  (system: System, breakpoint: Breakpoint): Y => {
    const breakpoints = system.breakpoints.keys

    if (!breakpoints.length)
      console.warn("getBreakpointValue: `breakpoints` is undefined.")

    const currentIndex = breakpoints.indexOf(breakpoint)

    for (let i = currentIndex; 0 < i; i--) {
      const nextBreakpoint = breakpoints[i]

      if (nextBreakpoint && values.hasOwnProperty(nextBreakpoint))
        return values[nextBreakpoint] as Y
    }

    return values.base as Y
  }
