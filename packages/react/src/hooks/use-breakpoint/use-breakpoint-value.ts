import type { ThemeTokens, UsageTheme } from "../../core"
import type { StyledTheme } from "../../core"
import type { ResponsiveObject } from "../../core"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useBreakpointValue` is a custom hook that returns the value of the current breakpoint from the provided object.
 * This hook monitors changes in the window size and returns the appropriate value.
 *
 * @see https://yamada-ui.com/hooks/use-breakpoint-value
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
  (
    theme: StyledTheme<UsageTheme> | undefined,
    breakpoint: ThemeTokens["breakpoints"],
  ): T => {
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
