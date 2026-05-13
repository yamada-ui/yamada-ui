"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { splitText } from "./animate-text"

export interface UseAnimateTextProps {
  children: string
  delayStep: number
  duration: number
  loop?: boolean
  repeatDelay?: number
  splitBy?: "char" | "word"
  onAnimationComplete?: () => void
}

export const useAnimateText = ({
  children,
  delayStep,
  duration,
  loop = false,
  repeatDelay = 2500,
  splitBy = "char",
  onAnimationComplete,
}: UseAnimateTextProps) => {
  const items = useMemo(() => splitText(children, splitBy), [children, splitBy])
  const [iteration, setIteration] = useState(0)
  const onCompleteRef = useRef(onAnimationComplete)
  onCompleteRef.current = onAnimationComplete

  useEffect(() => {
    if (items.length === 0) return
    const totalMs = ((items.length - 1) * delayStep + duration) * 1000
    const completeTimer = window.setTimeout(() => {
      onCompleteRef.current?.()
    }, totalMs)
    let restartTimer: number | undefined
    if (loop) {
      restartTimer = window.setTimeout(() => {
        setIteration((n) => n + 1)
      }, totalMs + repeatDelay)
    }
    return () => {
      window.clearTimeout(completeTimer)
      if (restartTimer !== undefined) window.clearTimeout(restartTimer)
    }
  }, [iteration, items.length, delayStep, duration, loop, repeatDelay])

  return { items, iteration }
}
