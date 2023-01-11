import { useCallbackRef } from '@yamada-ui/utils'
import { useEffect } from 'react'

export function useTimeout(callback: (...args: any[]) => void, delay: number | null) {
  const func = useCallbackRef(callback)

  useEffect(() => {
    if (delay == null) return undefined

    let id: number | null = null

    id = window.setTimeout(func, delay)

    return () => {
      if (id) window.clearTimeout(id)
    }
  }, [delay, func])
}
