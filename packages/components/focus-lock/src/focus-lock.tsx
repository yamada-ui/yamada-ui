import type { FocusableElement } from "@yamada-ui/utils"
import { getAllFocusable, interopDefault } from "@yamada-ui/utils"
import type { FC, ReactNode, RefObject } from "react"
import { useCallback } from "react"
import ReactFocusLock from "react-focus-lock"

const InternalFocusLock = interopDefault(ReactFocusLock)

export type FocusLockProps = {
  /**
   * `ref` of the element to receive focus initially.
   */
  initialFocusRef?: RefObject<FocusableElement>
  /**
   * `ref` of the element to return focus to when `FocusLock` unmounts.
   */
  finalFocusRef?: RefObject<FocusableElement>
  /**
   * The `ref` of the wrapper for which the focus-lock wraps.
   */
  contentRef?: RefObject<HTMLElement>
  /**
   * If `true`, focus will be restored to the element that triggered the `FocusLock` once it unmounts.
   *
   * @default false
   */
  restoreFocus?: boolean
  children: ReactNode
  /**
   * If `true`, focus trapping will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the first focusable element within the `children` will auto-focused once `FocusLock` mounts.
   *
   * @default false
   */
  autoFocus?: boolean
  /**
   * If `true`, disables text selections inside, and outside focus lock.
   *
   * @default false
   */
  persistentFocus?: boolean
  /**
   * Enables aggressive focus capturing within iframes.
   * - If `true`: keep focus in the lock, no matter where lock is active.
   * - If `false`:  allows focus to move outside of iframe.
   *
   * @default false
   */
  lockFocusAcrossFrames?: boolean
}

export const FocusLock: FC<FocusLockProps> = ({
  initialFocusRef,
  finalFocusRef,
  contentRef,
  restoreFocus,
  children,
  isDisabled,
  autoFocus,
  persistentFocus,
  lockFocusAcrossFrames,
}) => {
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

  return (
    <InternalFocusLock
      crossFrame={lockFocusAcrossFrames}
      persistentFocus={persistentFocus}
      autoFocus={autoFocus}
      disabled={isDisabled}
      onActivation={onActivation}
      onDeactivation={onDeactivation}
      returnFocus={returnFocus}
    >
      {children}
    </InternalFocusLock>
  )
}
