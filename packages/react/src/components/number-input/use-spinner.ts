import { useCallback, useRef, useState } from "react"
import { useInterval } from "../../hooks/use-interval"
import { useUnmountEffect } from "../../utils"

const INTERVAL = 50
const DELAY = 300

export interface UseSpinnerProps {
  decrement: () => void
  increment: () => void
}

export const useSpinner = ({ decrement, increment }: UseSpinnerProps) => {
  const [spinning, setSpinning] = useState(false)
  const [action, setAction] = useState<"decrement" | "increment" | null>(null)
  const [once, setOnce] = useState(true)
  const timeoutRef = useRef<any>(null)

  useInterval(
    () => {
      if (action === "increment") increment()

      if (action === "decrement") decrement()
    },
    spinning ? INTERVAL : null,
  )

  const up = useCallback(() => {
    if (once) increment()

    timeoutRef.current = setTimeout(() => {
      setOnce(false)
      setSpinning(true)
      setAction("increment")
    }, DELAY)
  }, [increment, once])

  const down = useCallback(() => {
    if (once) decrement()

    timeoutRef.current = setTimeout(() => {
      setOnce(false)
      setSpinning(true)
      setAction("decrement")
    }, DELAY)
  }, [decrement, once])

  const removeTimeout = useCallback(() => clearTimeout(timeoutRef.current), [])

  const stop = useCallback(() => {
    setOnce(true)
    setSpinning(false)
    removeTimeout()
  }, [removeTimeout])

  useUnmountEffect(removeTimeout)

  return { down, spinning, stop, up }
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>
