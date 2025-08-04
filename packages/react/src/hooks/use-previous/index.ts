"use client"

import { useEffect, useRef } from "react"

/**
 * `usePrevious` is a custom hook for obtaining the previous value.
 *
 * @see https://yamada-ui.com/hooks/use-previous
 */
export const usePrevious = <Y>(value: Y) => {
  const ref = useRef<undefined | Y>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
