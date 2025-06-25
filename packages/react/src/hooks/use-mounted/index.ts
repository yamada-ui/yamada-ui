"use client"

import { useCallback, useState } from "react"
import { useRef } from "react"
import { useSafeLayoutEffect } from "../../utils"

export interface UseMountedProps {
  delay?: number
  rerender?: boolean
}

export function useMounted({
  delay = 0,
  rerender = false,
}: UseMountedProps = {}): [() => boolean, boolean] {
  const mountedRef = useRef(false)
  const [mounted, setMounted] = useState(false)

  useSafeLayoutEffect(() => {
    mountedRef.current = true

    let timeoutId: NodeJS.Timeout | null = null

    if (rerender) {
      if (delay > 0) {
        timeoutId = setTimeout(() => setMounted(true), delay)
      } else {
        setMounted(true)
      }
    }

    return () => {
      mountedRef.current = false

      if (rerender) setMounted(false)

      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, rerender])

  return [useCallback(() => mountedRef.current, []), mounted]
}

export type UseMountedReturn = ReturnType<typeof useMounted>
