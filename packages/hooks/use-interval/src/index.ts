import { useCallbackRef } from "@yamada-ui/utils"
import { useEffect } from "react"

export const useInterval = (callback: () => void, delay: number | null) => {
  const func = useCallbackRef(callback)

  useEffect(() => {
    let timeoutId: number | null = null

    if (delay !== null) timeoutId = window.setInterval(() => func(), delay)

    return () => {
      if (timeoutId) window.clearInterval(timeoutId)
    }
  }, [delay, func])
}
