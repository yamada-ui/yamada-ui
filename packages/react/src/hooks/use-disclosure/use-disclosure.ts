"use client"

import { useCallback, useRef, useState } from "react"
import { useCallbackRef } from "../../utils"

export interface UseDisclosureProps<
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
> {
  /**
   * If `true`, the element will be initially opened.
   */
  defaultOpen?: boolean
  /**
   * If `true`, the element will be opened.
   */
  open?: boolean
  /**
   * The timing of the open and close.
   *
   * @default 'after'
   */
  timing?: "after" | "before"
  /**
   * Callback invoked to close the element.
   */
  onClose?: M
  /**
   * Callback invoked to open the element.
   */
  onOpen?: Y
}

/**
 * `useDisclosure` is a custom hook that helps handle common open/close or toggle scenarios.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see https://yamada-ui.com/hooks/use-disclosure
 */
export const useDisclosure = <
  Y extends (...args: any[]) => Promise<void> | void = () => void,
  M extends (...args: any[]) => Promise<void> | void = () => void,
>({
  defaultOpen = false,
  open: controlledOpen,
  timing,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UseDisclosureProps<Y, M> = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen)

  const timingRef = useRef(timing ?? "after")
  const handleOpen = useCallbackRef(onOpenProp)
  const handleClose = useCallbackRef(onCloseProp)

  const controlled = controlledOpen !== undefined
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const onOpen = useCallback(
    async (...args: Parameters<Y>) => {
      if (timingRef.current === "before") await handleOpen(...args)

      if (!controlled) setUncontrolledOpen(true)

      if (timingRef.current === "after") await handleOpen(...args)
    },
    [controlled, handleOpen, timingRef],
  ) as Y

  const onClose = useCallback(
    async (...args: Parameters<M>) => {
      if (timingRef.current === "before") await handleClose(...args)

      if (!controlled) setUncontrolledOpen(false)

      if (timingRef.current === "after") await handleClose(...args)
    },
    [controlled, handleClose, timingRef],
  ) as M

  const onToggle = useCallback(
    async (...args: Parameters<M> | Parameters<Y>) =>
      !open
        ? onOpen(...(args as Parameters<Y>))
        : onClose(...(args as Parameters<M>)),
    [open, onOpen, onClose],
  ) as M | Y

  return {
    open,
    onClose,
    onOpen,
    onToggle,
  }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>
