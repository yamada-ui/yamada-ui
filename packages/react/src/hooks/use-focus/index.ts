"use client"

import type { RefObject } from "react"
import { useCallback, useRef } from "react"
import {
  getActiveElement,
  getDocument,
  getFirstFocusableElement,
  isRefObject,
  isSafari,
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
 * @see https://yamada-ui.com/docs/hooks/use-focus-on-show
 */
export const useFocusOnShow = <Y extends HTMLElement>(
  refOrEl: RefObject<null | Y> | Y,
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
  const trulyShouldFocus = shouldFocus && visible
  const focused = useRef(false)

  const getTarget = useCallback(() => {
    return isRefObject(refOrEl) ? refOrEl.current : refOrEl
  }, [refOrEl])

  const getFocusTarget = useCallback(() => {
    return isRefObject(focusRefOrEl) ? focusRefOrEl.current : focusRefOrEl
  }, [focusRefOrEl])

  const onFocus = useCallback(() => {
    const target = getTarget()

    if (!target || !trulyShouldFocus || focused.current) return
    if (target.contains(document.activeElement as HTMLElement)) return

    const focusTarget = getFocusTarget()

    if (focusTarget) {
      requestAnimationFrame(() => {
        focusTarget.focus({ preventScroll })

        focused.current = true
      })
    } else {
      const firstFocusable = getFirstFocusableElement(target)

      if (firstFocusable) {
        requestAnimationFrame(() => {
          firstFocusable.focus({ preventScroll })

          focused.current = true
        })
      } else {
        requestAnimationFrame(() => {
          target.focus({ preventScroll })

          focused.current = true
        })
      }
    }
  }, [getTarget, trulyShouldFocus, getFocusTarget, preventScroll])

  useUpdateEffect(() => {
    focused.current = !trulyShouldFocus
  }, [trulyShouldFocus])

  useUpdateEffect(() => {
    requestAnimationFrame(onFocus)
  }, [onFocus])

  useEventListener(getTarget, "transitionend", onFocus)
}

export interface UseFocusOnMouseDownProps {
  ref: RefObject<HTMLElement | null>
  elements?: (HTMLElement | null | RefObject<HTMLElement | null>)[]
  enabled?: boolean
}

/**
 * `useFocusOnPointerDown` is a custom hook that focuses on the target element when it is clicked.
 *
 * @see https://yamada-ui.com/docs/hooks/use-focus-on-pointer-down
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
