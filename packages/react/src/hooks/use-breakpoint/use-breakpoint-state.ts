import type { ResponsiveObject } from "../../core"
import { useState } from "react"
import { useBreakpointValue } from "./use-breakpoint-value"

/**
 * `useBreakpointState` is a custom hook that takes a responsive object as an initial state and returns a state corresponding to the current breakpoint.
 *
 * @see https://yamada-ui.com/hooks/use-breakpoint-state
 */
export const useBreakpointState = <T>(initialState: ResponsiveObject<T>) => {
  const state = useBreakpointValue(initialState)

  return useState(state)
}
