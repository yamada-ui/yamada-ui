"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { createdDom } from "../../utils"

export interface ObserverRect extends Omit<DOMRectReadOnly, "toJSON"> {}

const defaultRect: ObserverRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
}

/**
 * `useResizeObserver` is a custom hook that tracks changes in the size and position of an element.
 *
 * @see https://yamada-ui.com/hooks/use-resize-observer
 */
export const useResizeObserver = <Y extends HTMLElement = any>() => {
  const id = useRef(0)
  const ref = useRef<Y>(null)
  const [rect, setRect] = useState<ObserverRect>(defaultRect)

  const observer = useMemo(() => {
    if (!createdDom()) return null

    return new ResizeObserver(([entry]) => {
      if (!entry) return

      cancelAnimationFrame(id.current)

      id.current = requestAnimationFrame(() => {
        if (ref.current) setRect(entry.contentRect)
      })
    })
  }, [])

  useEffect(() => {
    if (ref.current) observer?.observe(ref.current)

    return () => {
      observer?.disconnect()

      if (id.current) cancelAnimationFrame(id.current)
    }
  }, [observer])

  return [ref, rect] as const
}

export const useElementSize = <Y extends HTMLElement = any>() => {
  const [ref, { height, width }] = useResizeObserver<Y>()

  return { ref, height, width }
}
