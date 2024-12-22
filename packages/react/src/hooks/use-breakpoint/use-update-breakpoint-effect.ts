import type { DependencyList } from "react"
import type { Theme } from "../../core"
import { useUpdateEffect } from "../../utils"
import { useBreakpoint } from "./use-breakpoint"

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