import type { DependencyList } from "react"
import type { Breakpoint, BreakpointDirection } from "../../core"
import { DEFAULT_BREAKPOINT_DIRECTION, useSystem } from "../../core"
import { useUpdateEffect } from "../../utils"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useUpdateBreakpointEffect` is a custom hook that skips the side effect on the initial render and executes a specific callback function when the breakpoint changes.
 *
 * @see https://yamada-ui.com/docs/hooks/use-update-breakpoint-effect
 */
export const useUpdateBreakpointEffect = (
  callback: (breakpoint: Breakpoint, direction: BreakpointDirection) => void,
  deps: DependencyList,
) => {
  const { config } = useSystem()
  const breakpoint = useBreakpoint()
  const direction = config.breakpoint?.direction ?? DEFAULT_BREAKPOINT_DIRECTION

  useUpdateEffect(() => {
    callback(breakpoint, direction)
  }, [breakpoint, direction, ...deps])
}
