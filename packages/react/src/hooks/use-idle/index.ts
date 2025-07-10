"use client"

import { useEffect, useRef, useState } from "react"

const DEFAULT_EVENTS: (keyof DocumentEventMap)[] = [
  "keypress",
  "mousemove",
  "touchmove",
  "click",
  "scroll",
]

const DEFAULT_OPTIONS = {
  events: DEFAULT_EVENTS,
  initialState: true,
}

export interface IdleOptions {
  events?: (keyof DocumentEventMap)[]
  initialState?: boolean
}

/**
 * `useIdle` is a custom hook that detects whether the user has been idle for a certain amount of time in milliseconds.
 *
 * @see https://yamada-ui.com/hooks/use-idle
 */
export const useIdle = (timeout: number, options?: IdleOptions) => {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options }
  const [idle, setIdle] = useState<boolean>(initialState)
  const timeoutId = useRef<NodeJS.Timeout>(undefined)

  useEffect(() => {
    const handleEvent = () => {
      setIdle(false)

      if (timeoutId.current) clearTimeout(timeoutId.current)

      timeoutId.current = setTimeout(() => setIdle(true), timeout)
    }

    events.forEach((event) => document.addEventListener(event, handleEvent))

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, handleEvent),
      )
    }
  }, [events, timeout])

  return idle
}
