"use client"

import { useCallback, useState } from "react"
import { useRef } from "react"
import { useSafeLayoutEffect } from "../../utils"

export interface UseMountedProps {
  delay?: number
  state?: boolean
}

export function useMounted(props?: {
  delay?: number
  state?: false
}): () => boolean

export function useMounted(props?: { delay?: number; state?: true }): boolean

export function useMounted({ delay = 0, state = false }: UseMountedProps = {}) {
  const mountedRef = useRef(false)
  const [mounted, setMounted] = useState(false)

  useSafeLayoutEffect(() => {
    mountedRef.current = true

    let timeoutId: NodeJS.Timeout | null = null

    if (state) {
      if (delay > 0) {
        timeoutId = setTimeout(() => setMounted(true), delay)
      } else {
        setMounted(true)
      }
    }

    return () => {
      mountedRef.current = false

      if (state) setMounted(false)

      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay, state])

  if (state) {
    return mounted
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCallback(() => mountedRef.current, [])
  }
}

export type UseMountedReturn = ReturnType<typeof useMounted>
