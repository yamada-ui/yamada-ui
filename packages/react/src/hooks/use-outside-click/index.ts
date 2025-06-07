import type { RefObject } from "react"
import { useCallback, useEffect, useRef } from "react"
import { getDocument, useCallbackRef } from "../../utils"

export interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement | null>
  enabled?: boolean
  handler?: (ev: Event) => void
}

/**
 * `useOutsideClick` is a custom hook that detects click events outside of an element.
 *
 * @see https://yamada-ui.com/hooks/use-outside-click
 */
export const useOutsideClick = ({
  ref,
  enabled = true,
  handler,
}: UseOutsideClickProps) => {
  const handlerRef = useCallbackRef(handler)

  const state = useRef({
    ignoreEmulatedMouseEvents: false,
    isPointerDown: false,
  })

  const onPointerDown = useCallback(
    (ev: MouseEvent | TouchEvent) => {
      if (isValidEvent(ev, ref)) state.current.isPointerDown = true
    },
    [ref],
  )

  const onMouseUp = useCallback(
    (ev: MouseEvent) => {
      if (state.current.ignoreEmulatedMouseEvents) {
        state.current.ignoreEmulatedMouseEvents = false

        return
      }

      if (state.current.isPointerDown && handler && isValidEvent(ev, ref)) {
        state.current.isPointerDown = false

        handlerRef(ev)
      }
    },
    [handler, handlerRef, ref],
  )

  const onTouchEnd = useCallback(
    (ev: TouchEvent) => {
      state.current.ignoreEmulatedMouseEvents = true

      if (state.current.isPointerDown && handler && isValidEvent(ev, ref)) {
        state.current.isPointerDown = false

        handlerRef(ev)
      }
    },
    [handler, handlerRef, ref],
  )

  useEffect(() => {
    if (!enabled) return

    const doc = getDocument(ref.current)

    doc.addEventListener("mousedown", onPointerDown, true)
    doc.addEventListener("mouseup", onMouseUp, true)
    doc.addEventListener("touchstart", onPointerDown, true)
    doc.addEventListener("touchend", onTouchEnd, true)

    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true)
      doc.removeEventListener("mouseup", onMouseUp, true)
      doc.removeEventListener("touchstart", onPointerDown, true)
      doc.removeEventListener("touchend", onTouchEnd, true)
    }
  }, [
    handler,
    ref,
    handlerRef,
    state,
    enabled,
    onPointerDown,
    onMouseUp,
    onTouchEnd,
  ])
}

const isValidEvent = (
  ev: MouseEvent | TouchEvent,
  ref: RefObject<HTMLElement | null>,
) => {
  const target = ev.target as HTMLElement | null

  if ("button" in ev && ev.button > 0) return false

  if (target) if (!getDocument(target).contains(target)) return false

  return !ref.current?.contains(target)
}
