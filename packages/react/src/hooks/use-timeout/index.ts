"use client"

import { useEffect } from "react"
import { useCallbackRef } from "../../utils"

/**
 * `useTimeout` is a custom hook that executes a function after a specified number of milliseconds.
 *
 * @see https://yamada-ui.com/docs/hooks/use-timeout
 */
export const useTimeout = (
  callback: (...args: any[]) => void,
  delay: null | number,
) => {
  const callbackRef = useCallbackRef(callback)

  useEffect(() => {
    if (delay == null) return undefined

    let timeoutId: NodeJS.Timeout | null = null

    timeoutId = setTimeout(callbackRef, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [delay, callbackRef])
}
