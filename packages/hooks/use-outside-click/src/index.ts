import { getOwnerDocument, useCallbackRef } from "@yamada-ui/utils"
import { RefObject, useEffect, useRef } from "react"

export type UseOutsideClickProps = {
  enabled?: boolean
  ref: React.RefObject<HTMLElement>
  handler?: (ev: Event) => void
}

export const useOutsideClick = ({
  ref,
  handler,
  enabled = true,
}: UseOutsideClickProps) => {
  const handlerRef = useCallbackRef(handler)

  const state = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  })

  useEffect(() => {
    if (!enabled) return

    const onPointerDown = (ev: MouseEvent | TouchEvent) => {
      if (isValidEvent(ev, ref)) state.current.isPointerDown = true
    }

    const onMouseUp = (ev: MouseEvent) => {
      if (state.current.ignoreEmulatedMouseEvents) {
        state.current.ignoreEmulatedMouseEvents = false

        return
      }

      if (state.current.isPointerDown && handler && isValidEvent(ev, ref)) {
        state.current.isPointerDown = false

        handlerRef(ev)
      }
    }

    const onTouchEnd = (ev: TouchEvent) => {
      state.current.ignoreEmulatedMouseEvents = true

      if (handler && state.current.isPointerDown && isValidEvent(ev, ref)) {
        state.current.isPointerDown = false

        handlerRef(ev)
      }
    }

    const doc = getOwnerDocument(ref.current)

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
  }, [handler, ref, handlerRef, state, enabled])
}

const isValidEvent = (
  ev: MouseEvent | TouchEvent,
  ref: RefObject<HTMLElement>,
) => {
  const target = ev.target as HTMLElement

  if ("button" in ev && ev.button > 0) return false

  if (target) if (!getOwnerDocument(target).contains(target)) return false

  return !ref.current?.contains(target)
}
