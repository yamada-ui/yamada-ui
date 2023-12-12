import { createdDom } from "@yamada-ui/utils"
import { useEffect, useMemo, useRef, useState } from "react"

export type ObserverRect = Omit<DOMRectReadOnly, "toJSON">

const defaultRect: ObserverRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

export const useResizeObserver = <T extends HTMLElement = any>() => {
  const id = useRef(0)
  const ref = useRef<T>(null)
  const [rect, setRect] = useState<ObserverRect>(defaultRect)

  const observer = useMemo(() => {
    const isBrowser = createdDom()

    if (!isBrowser) return null

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

export const useElementSize = <T extends HTMLElement = any>() => {
  const [ref, { width, height }] = useResizeObserver<T>()

  return { ref, width, height }
}
