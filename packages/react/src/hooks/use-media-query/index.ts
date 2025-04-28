import { useCallback, useSyncExternalStore } from "react"
import { useEnvironment } from "../../providers/environment-provider"

/**
 * `useMediaQuery` is a custom hook that detects whether it matches a media query.
 *
 * @see https://yamada-ui.com/hooks/use-media-query
 */
export const useMediaQuery = (query: string, fallback = false): boolean => {
  const { getWindow } = useEnvironment()

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = getWindow()?.matchMedia(query)

      mql?.addEventListener("change", onStoreChange)

      return () => {
        mql?.removeEventListener("change", onStoreChange)
      }
    },
    [getWindow, query],
  )

  const getSnapshot = useCallback(() => {
    return getWindow()?.matchMedia(query).matches ?? fallback
  }, [getWindow, query, fallback])

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
