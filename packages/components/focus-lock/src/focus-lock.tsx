import { FocusableElement, getAllFocusable } from '@yamada-ui/utils'
import { FC, ReactNode, RefObject, useCallback } from 'react'
import ReactFocusLock from 'react-focus-lock'

export type FocusLockProps = {
  initialFocusRef?: RefObject<FocusableElement>
  finalFocusRef?: RefObject<FocusableElement>
  contentRef?: RefObject<HTMLElement>
  restoreFocus?: boolean
  children: ReactNode
  isDisabled?: boolean
  autoFocus?: boolean
  persistentFocus?: boolean
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
    <ReactFocusLock
      crossFrame={lockFocusAcrossFrames}
      persistentFocus={persistentFocus}
      autoFocus={autoFocus}
      disabled={isDisabled}
      onActivation={onActivation}
      onDeactivation={onDeactivation}
      returnFocus={returnFocus}
    >
      {children}
    </ReactFocusLock>
  )
}
