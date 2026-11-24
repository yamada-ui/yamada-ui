"use client"

import type { DependencyList } from "react"
import type { Breakpoint, BreakpointDirection } from "../../core"
import { useEffect } from "react"
import { DEFAULT_BREAKPOINT_DIRECTION, useSystem } from "../../core"
import { useBreakpoint } from "./use-breakpoint"

/**
 * `useBreakpointEffect` is a custom hook that executes a specific callback function when the breakpoint changes.
 *
 * @see https://yamada-ui.com/docs/hooks/use-breakpoint-effect
 */
export const useBreakpointEffect = (
  callback: (breakpoint: Breakpoint, direction: BreakpointDirection) => void,
  deps: DependencyList,
) => {
  const { config } = useSystem()
  const breakpoint = useBreakpoint()
  const direction = config.breakpoint?.direction ?? DEFAULT_BREAKPOINT_DIRECTION

  useEffect(() => {
    callback(breakpoint, direction)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, direction, ...deps])
}
