import * as React from "react"

export const useSafeLayoutEffect = Boolean(globalThis.document)
  ? React.useLayoutEffect
  : React.useEffect

export function useUnmountEffect(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(() => () => callback(), [])
}

/**
 * `useUpdateEffect` is a custom hook that skips side effects on the initial render, and only runs them when the dependency array changes.
 *
 * @see https://yamada-ui.com/docs/hooks/use-update-effect
 */
export function useUpdateEffect(
  callback: React.EffectCallback,
  deps: React.DependencyList,
) {
  const renderCycleRef = React.useRef(false)
  const effectCycleRef = React.useRef(false)

  React.useEffect(() => {
    const mounted = renderCycleRef.current
    const run = mounted && effectCycleRef.current

    if (run) return callback()

    effectCycleRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  React.useEffect(() => {
    renderCycleRef.current = true

    return () => {
      renderCycleRef.current = false
    }
  }, [])
}
