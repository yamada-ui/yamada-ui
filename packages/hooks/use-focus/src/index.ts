import { useEventListener } from '@yamada-ui/use-event-listener'
import {
  FocusableElement,
  getActiveElement,
  getAllFocusable,
  isRefObject,
  isTabbable,
  useSafeLayoutEffect,
  useUpdateEffect,
  isSafari,
} from '@yamada-ui/utils'
import { RefObject, useCallback, useRef } from 'react'

export type UseFocusOnHideProps = {
  focusRef: RefObject<FocusableElement>
  shouldFocus?: boolean
  visible?: boolean
}

const preventReturnFocus = (containerRef: React.RefObject<HTMLElement>) => {
  const el = containerRef.current

  if (!el) return false

  const activeElement = getActiveElement(el)

  if (!activeElement) return false
  if (el.contains(activeElement)) return false
  if (isTabbable(activeElement)) return true

  return false
}

export const useFocusOnHide = (
  containerRef: RefObject<HTMLElement>,
  { shouldFocus: shouldFocusProp, visible, focusRef }: UseFocusOnHideProps,
) => {
  const shouldFocus = shouldFocusProp && !visible

  useUpdateEffect(() => {
    if (!shouldFocus) return

    if (preventReturnFocus(containerRef)) return

    const el = focusRef?.current || containerRef.current

    if (el) {
      requestAnimationFrame(() => {
        el.focus()
      })
    }
  }, [shouldFocus, containerRef, focusRef])
}

export type UseFocusOnShowProps = {
  visible?: boolean
  shouldFocus?: boolean
  preventScroll?: boolean
  focusRef?: React.RefObject<FocusableElement>
}

export const useFocusOnShow = <T extends HTMLElement>(
  target: React.RefObject<T> | T,
  { focusRef, preventScroll, shouldFocus, visible }: UseFocusOnShowProps = {
    preventScroll: true,
    shouldFocus: false,
  },
) => {
  const element = isRefObject(target) ? target.current : target

  const autoFocusValue = shouldFocus && visible
  const autoFocusRef = useRef(autoFocusValue)
  const lastVisibleRef = useRef(visible)

  useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible)
      autoFocusRef.current = autoFocusValue

    lastVisibleRef.current = visible
  }, [visible, autoFocusValue])

  const onFocus = useCallback(() => {
    if (!visible || !element || !autoFocusRef.current) return

    autoFocusRef.current = false

    if (element.contains(document.activeElement as HTMLElement)) return

    if (focusRef?.current) {
      requestAnimationFrame(() => {
        focusRef.current?.focus({ preventScroll })
      })
    } else {
      const tabbableEls = getAllFocusable(element)

      if (tabbableEls.length > 0)
        requestAnimationFrame(() => {
          tabbableEls[0].focus({ preventScroll })
        })
    }
  }, [visible, preventScroll, element, focusRef])

  useUpdateEffect(() => {
    onFocus()
  }, [onFocus])

  useEventListener(element, 'transitionend', onFocus)
}

export type UseFocusOnMouseDownProps = {
  ref: React.RefObject<HTMLElement>
  enabled?: boolean
  elements?: Array<React.RefObject<HTMLElement> | HTMLElement | null>
}

export const useFocusOnPointerDown = ({
  ref,
  elements,
  enabled,
}: UseFocusOnMouseDownProps) => {
  const doc = () => ref.current?.ownerDocument ?? document

  useEventListener(doc, 'pointerdown', (ev) => {
    if (!isSafari() || !enabled) return
    const target = ev.target as HTMLElement

    const els = elements ?? [ref]

    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef
      return el?.contains(target) || el === target
    })

    if (doc().activeElement !== target && isValidTarget) {
      ev.preventDefault()

      target.focus()
    }
  })
}
