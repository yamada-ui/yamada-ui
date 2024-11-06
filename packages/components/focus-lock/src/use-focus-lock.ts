import type { FocusableElement } from "@yamada-ui/utils"
import type { RefObject } from "react"
import { getAllFocusable } from "@yamada-ui/utils"
import { useCallback } from "react"

interface UseFocusLockProps {
  contentRef?: RefObject<HTMLElement>
  finalFocusRef?: RefObject<FocusableElement>
  initialFocusRef?: RefObject<FocusableElement>
  restoreFocus?: boolean
}

export function useFocusLock({
  contentRef,
  finalFocusRef,
  initialFocusRef,
  restoreFocus,
}: UseFocusLockProps) {
  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus()
    } else if (contentRef?.current) {
      const focusables = getAllFocusable(contentRef.current)

      if (focusables.length === 0)
        requestAnimationFrame(() => {
          contentRef.current?.focus()
        })
    }
  }, [initialFocusRef, contentRef])

  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus()
  }, [finalFocusRef])

  const returnFocus = restoreFocus && !finalFocusRef

  return {
    returnFocus,
    onActivation,
    onDeactivation,
  }
}
