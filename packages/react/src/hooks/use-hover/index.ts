"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * `useHover` is a custom hook that detects whether the pointer has moved over or away from an element.
 *
 * @see https://yamada-ui.com/docs/hooks/use-hover
 */
export const useHover = <Y extends HTMLElement = HTMLDivElement>() => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<Y>(null)

  const onMouseEnter = useCallback(() => setHovered(true), [])
  const onMouseLeave = useCallback(() => setHovered(false), [])

  useEffect(() => {
    const el = ref.current

    if (el) {
      el.addEventListener("mouseenter", onMouseEnter)
      el.addEventListener("mouseleave", onMouseLeave)

      return () => {
        el.removeEventListener("mouseenter", onMouseEnter)
        el.removeEventListener("mouseleave", onMouseLeave)
      }
    }
  }, [onMouseEnter, onMouseLeave])

  return { ref, hovered }
}
