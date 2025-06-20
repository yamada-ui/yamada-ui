import { useEffect } from "react"
import { useCallbackRef } from "../../utils"

/**
 * `useInterval` is a custom hook that runs a function at a specified interval.
 *
 * @see https://yamada-ui.com/hooks/use-interval
 */
export const useInterval = (callback: () => void, delay: null | number) => {
  const callbackRef = useCallbackRef(callback)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    if (delay !== null) timeoutId = setInterval(callbackRef, delay)

    return () => {
      if (timeoutId) clearInterval(timeoutId)
    }
  }, [delay, callbackRef])
}
