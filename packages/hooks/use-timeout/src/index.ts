import { useCallbackRef } from '@yamada-ui/utils'
import { useEffect } from 'react'

export function useTimeout(callback: (...args: any[]) => void, delay: number | null) {
  const func = useCallbackRef(callback)

  useEffect(() => {
    if (delay == null) return undefined

    let timeoutId: number | null = null

    timeoutId = window.setTimeout(func, delay)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [delay, func])
}
