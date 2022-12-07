import { useCallbackRef } from '@yamada-ui/utils'
import { useEffect } from 'react'

export const useInterval = (callback: () => void, delay: number | null) => {
  const func = useCallbackRef(callback)

  useEffect(() => {
    let id: number | null = null

    if (delay !== null) id = window.setInterval(() => func(), delay)

    return () => {
      if (id) window.clearInterval(id)
    }
  }, [delay, func])
}
