import { useEffect } from "react"
import { useCallbackRef } from "../../utils"

/**
 * `useTimeout` is a custom hook that executes a function after a specified number of milliseconds.
 *
 * @see https://yamada-ui.com/hooks/use-timeout
 */
export const useTimeout = (
  callback: (...args: any[]) => void,
  delay: null | number,
) => {
  const func = useCallbackRef(callback)

  useEffect(() => {
    if (delay == null) return undefined

    let timeoutId: null | number = null

    timeoutId = window.setTimeout(func, delay)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [delay, func])
}
