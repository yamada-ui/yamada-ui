import type { DependencyList } from "react"
import type { ThemeTokens } from "../../core"
import { useEffect } from "react"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useBreakpointEffect` is a custom hook that executes a specific callback function when the breakpoint changes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-breakpoint-effect
 */
export const useBreakpointEffect = (
  callback: (breakpoint: ThemeTokens["breakpoints"]) => void,
  deps: DependencyList,
) => {
  const breakpoint = useBreakpoint()

  useEffect(() => {
    callback(breakpoint)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, ...deps])
}
