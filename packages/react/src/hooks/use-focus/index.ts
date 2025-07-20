"use client"

import type { RefObject } from "react"
import { useCallback, useRef } from "react"
import {
  getActiveElement,
  getDocument,
  getFocusableElements,
  isRefObject,
  isSafari,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { useEventListener } from "../use-event-listener"

export interface UseFocusOnShowProps {
  focusTarget?: HTMLElement | null | RefObject<HTMLElement | null>
  preventScroll?: boolean
  shouldFocus?: boolean
  visible?: boolean
}

/**
 * `useFocusOnShow` is a custom hook that focuses on the target element when it is shown.
 *
 * @see https://yamada-ui.com/hooks/use-focus-on-show
 */
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
    if (!target || !trulyShouldFocusRef.current) return

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
  }, [target, focusRefOrEl, preventScroll])

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

/**
 * `useFocusOnPointerDown` is a custom hook that focuses on the target element when it is clicked.
 *
 * @see https://yamada-ui.com/hooks/use-focus-on-pointer-down
 */
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
