"use client"

import { useEffect, useMemo, useRef } from "react"

export interface UseFieldSizingProps {
  value?: string
}

export const useFieldSizing = <Y extends HTMLElement>({
  value = "",
}: UseFieldSizingProps) => {
  const ref = useRef<Y>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const text = useMemo(
    () => (
      <span
        ref={textRef}
        style={{
          opacity: 0,
          overflow: "hidden",
          position: "absolute",
          whiteSpace: "nowrap",
          zIndex: -1,
        }}
        aria-hidden
      >
        {value}
      </span>
    ),
    [value],
  )

  useEffect(() => {
    if (!textRef.current) return

    const { width } = textRef.current.getBoundingClientRect()

    if (ref.current) ref.current.style.width = `${width}px`
  }, [value])

  return { ref, text }
}

export type UseFieldSizingReturn = ReturnType<typeof useFieldSizing>
