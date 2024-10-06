import { useCallbackRef } from "@yamada-ui/utils"
import { useEffect } from "react"

/**
 * `useInterval` is a custom hook that runs a function at a specified interval.
 *
 * @see Docs https://yamada-ui.com/hooks/use-interval
 */
export const useInterval = (callback: () => void, delay: null | number) => {
  const func = useCallbackRef(callback)

  useEffect(() => {
    let timeoutId: null | number = null

    if (delay !== null) timeoutId = window.setInterval(() => func(), delay)

    return () => {
      if (timeoutId) window.clearInterval(timeoutId)
    }
  }, [delay, func])
}
