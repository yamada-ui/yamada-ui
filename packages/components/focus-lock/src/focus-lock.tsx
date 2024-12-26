import type { FC } from "@yamada-ui/core"
import type { FocusableElement } from "@yamada-ui/utils"
import type { ReactNode, RefObject } from "react"
import { getAllFocusable, interopDefault } from "@yamada-ui/utils"
import { useCallback } from "react"
import ReactFocusLock from "react-focus-lock"

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
  contentRef?: RefObject<HTMLElement>
  /**
   * If `true`, focus trapping will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * `ref` of the element to return focus to when `FocusLock` unmounts.
   */
  finalFocusRef?: RefObject<FocusableElement>
  /**
   * `ref` of the element to receive focus initially.
   */
  initialFocusRef?: RefObject<FocusableElement>
  /**
   * If `true`, focus trapping will be disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
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
 * @see Docs https://yamada-ui.com/components/other/focus-lock
 */

export const FocusLock: FC<FocusLockProps> = ({
  autoFocus,
  children,
  contentRef,
  isDisabled,
  disabled = isDisabled,
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

FocusLock.displayName = "FocusLock"
FocusLock.__ui__ = "FocusLock"
