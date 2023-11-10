import { useRef, useEffect, useCallback, useState } from "react"

export const useHover = <T extends HTMLElement = HTMLDivElement>() => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<T>(null)

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
