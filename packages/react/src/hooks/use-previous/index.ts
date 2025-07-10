"use client"

import { useEffect, useRef } from "react"

/**
 * `usePrevious` is a custom hook for obtaining the previous value.
 *
 * @see https://yamada-ui.com/hooks/use-previous
 */
export const usePrevious = <T>(value: T) => {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
