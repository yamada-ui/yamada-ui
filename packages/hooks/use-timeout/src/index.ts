import { useCallbackRef } from "@yamada-ui/utils"
import { useEffect } from "react"

/**
 * `useTimeout` is a custom hook that executes a function after a specified number of milliseconds.
 *
 * @see Docs https://yamada-ui.com/hooks/use-timeout
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
