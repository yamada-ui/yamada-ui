import { useRef, useEffect, useState } from 'react'

const DEFAULT_EVENTS: (keyof DocumentEventMap)[] = [
  'keypress',
  'mousemove',
  'touchmove',
  'click',
  'scroll',
]

const DEFAULT_OPTIONS = {
  events: DEFAULT_EVENTS,
  initialState: true,
}

export type IdleOptions = Partial<{ events: (keyof DocumentEventMap)[]; initialState: boolean }>

export const useIdle = (timeout: number, options?: IdleOptions) => {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options }
  const [idle, setIdle] = useState<boolean>(initialState)
  const timeoutId = useRef<any>(null)

  useEffect(() => {
    const handleEvent = () => {
      setIdle(false)

      if (timeoutId.current) window.clearTimeout(timeoutId.current)

      timeoutId.current = window.setTimeout(() => {
        setIdle(true)
      }, timeout)
    }

    events.forEach((event) => document.addEventListener(event, handleEvent))

    return () => {
      events.forEach((event) => document.removeEventListener(event, handleEvent))
    }
  }, [events, timeout])

  return idle
}
