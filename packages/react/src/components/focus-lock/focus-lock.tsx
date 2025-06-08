import type { ReactNode, RefObject } from "react"
import type { FC } from "../../core"
import { useCallback } from "react"
import ReactFocusLock from "react-focus-lock"
import { getFocusableElements, interopDefault } from "../../utils"

const InternalFocusLock = interopDefault(ReactFocusLock)

export interface FocusLockProps {
  children: ReactNode
  /**
   * If `true`, the first focusable element within the `children` will auto-focused once `FocusLock` mounts.
   *
   * @default false
   */
  autoFocus?: boolean
  /**
   * The `ref` of the wrapper for which the focus-lock wraps.
   */
  contentRef?: RefObject<HTMLElement | null>
  /**
   * If `true`, focus trapping will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * `ref` of the element to return focus to when `FocusLock` unmounts.
   */
  finalFocusRef?: RefObject<HTMLElement | null>
  /**
   * `ref` of the element to receive focus initially.
   */
  initialFocusRef?: RefObject<HTMLElement | null>
  /**
   * Enables aggressive focus capturing within iframes.
   * - If `true`: keep focus in the lock, no matter where lock is active.
   * - If `false`:  allows focus to move outside of iframe.
   *
   * @default false
   */
  lockFocusAcrossFrames?: boolean
  /**
   * If `true`, disables text selections inside, and outside focus lock.
   *
   * @default false
   */
  persistentFocus?: boolean
  /**
   * If `true`, focus will be restored to the element that triggered the `FocusLock` once it unmounts.
   *
   * @default false
   */
  restoreFocus?: boolean
}

/**
 * `FocusLock` is a component that improves accessibility by restricting focus within elements such as modals and dialogs, and locking the focus within that range.
 *
 * @see https://yamada-ui.com/components/focus-lock
 */
export const FocusLock: FC<FocusLockProps> = ({
  autoFocus,
  children,
  contentRef,
  disabled,
  finalFocusRef,
  initialFocusRef,
  lockFocusAcrossFrames,
  persistentFocus,
  restoreFocus,
}) => {
  const returnFocus = restoreFocus && !finalFocusRef

  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus()
    } else if (contentRef?.current) {
      const focusables = getFocusableElements(contentRef.current)

      if (focusables.length === 0)
        requestAnimationFrame(() => {
          contentRef.current?.focus()
        })
    }
  }, [initialFocusRef, contentRef])

  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus()
  }, [finalFocusRef])

  return (
    <InternalFocusLock
      autoFocus={autoFocus}
      crossFrame={lockFocusAcrossFrames}
      disabled={disabled}
      persistentFocus={persistentFocus}
      returnFocus={returnFocus}
      onActivation={onActivation}
      onDeactivation={onDeactivation}
    >
      {children}
    </InternalFocusLock>
  )
}
