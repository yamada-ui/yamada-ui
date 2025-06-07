import type { RefObject } from "react"
import { useCallback, useRef } from "react"
import {
  getActiveElement,
  getDocument,
  getFocusableElements,
  isRefObject,
  isSafari,
  isTabbableElement,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { useEventListener } from "../use-event-listener"

export interface UseFocusOnHideProps {
  focusTarget?: HTMLElement | null | RefObject<HTMLElement | null>
  shouldFocus?: boolean
  visible?: boolean
}

const preventReturnFocus = (el: HTMLElement | null) => {
  if (!el) return false

  const activeElement = getActiveElement(getDocument(el))

  if (!activeElement) return false
  if (el.contains(activeElement)) return false
  if (isTabbableElement(activeElement)) return true

  return false
}

export const useFocusOnHide = <T extends HTMLElement>(
  refOrEl: RefObject<null | T> | T,
  { focusTarget: focusRefOrEl, shouldFocus, visible }: UseFocusOnHideProps,
) => {
  const trulyShouldFocus = shouldFocus && !visible

  useUpdateEffect(() => {
    const target = isRefObject(refOrEl) ? refOrEl.current : refOrEl
    const focusTarget = isRefObject(focusRefOrEl)
      ? focusRefOrEl.current
      : focusRefOrEl

    if (!trulyShouldFocus) return

    if (preventReturnFocus(target)) return

    const el = focusTarget ?? target

    if (el)
      requestAnimationFrame(() => {
        el.focus()
      })
  }, [trulyShouldFocus])
}

export interface UseFocusOnShowProps {
  focusTarget?: HTMLElement | null | RefObject<HTMLElement | null>
  preventScroll?: boolean
  shouldFocus?: boolean
  visible?: boolean
}

export const useFocusOnShow = <T extends HTMLElement>(
  refOrEl: RefObject<null | T> | T,
  {
    focusTarget: focusRefOrEl,
    preventScroll,
    shouldFocus,
    visible,
  }: UseFocusOnShowProps = {
    preventScroll: true,
    shouldFocus: false,
  },
) => {
  const target = isRefObject(refOrEl) ? refOrEl.current : refOrEl
  const trulyShouldFocus = shouldFocus && visible
  const trulyShouldFocusRef = useRef(trulyShouldFocus)
  const lastVisibleRef = useRef(visible)

  useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible)
      trulyShouldFocusRef.current = trulyShouldFocus

    lastVisibleRef.current = visible
  }, [visible, trulyShouldFocus])

  const onFocus = useCallback(() => {
    if (!visible || !target || !trulyShouldFocusRef.current) return

    trulyShouldFocusRef.current = false

    if (target.contains(document.activeElement as HTMLElement)) return

    const focusTarget = isRefObject(focusRefOrEl)
      ? focusRefOrEl.current
      : focusRefOrEl

    if (focusTarget) {
      requestAnimationFrame(() => {
        focusTarget.focus({ preventScroll })
      })
    } else {
      const tabbableEls = getFocusableElements(target)

      if (tabbableEls.length > 0) {
        requestAnimationFrame(() => {
          tabbableEls[0]?.focus({ preventScroll })
        })
      } else {
        requestAnimationFrame(() => {
          target.focus({ preventScroll })
        })
      }
    }
  }, [visible, target, focusRefOrEl, preventScroll])

  useUpdateEffect(() => {
    requestAnimationFrame(() => {
      onFocus()
    })
  }, [onFocus])

  useEventListener(target, "transitionend", onFocus)
}

export interface UseFocusOnMouseDownProps {
  ref: RefObject<HTMLElement | null>
  elements?: (HTMLElement | null | RefObject<HTMLElement | null>)[]
  enabled?: boolean
}

export const useFocusOnPointerDown = ({
  ref,
  elements,
  enabled,
}: UseFocusOnMouseDownProps) => {
  useEventListener(
    () => getDocument(ref.current),
    "pointerdown",
    (ev) => {
      if (!isSafari() || !enabled) return
      const target = ev.target as HTMLElement

      const els = elements ?? [ref]

      const validTarget = els.some((elOrRef) => {
        const el = isRefObject(elOrRef) ? elOrRef.current : elOrRef

        return el?.contains(target) || el === target
      })

      if (
        getActiveElement(getDocument(ref.current)) !== target &&
        validTarget
      ) {
        ev.preventDefault()

        target.focus()
      }
    },
  )
}
