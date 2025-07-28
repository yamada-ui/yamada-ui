"use client"

import { useCallback, useRef, useState } from "react"
import { useCallbackRef } from "../../utils"

export type DisclosureCallback<Y, M> = [Y] extends [never]
  ? () => M
  : undefined extends Y
    ? (value?: Y) => M
    : (value: Y) => M

export interface UseDisclosureProps<
  Y = never,
  M = never,
  D = Promise<void> | void,
  H = Promise<void> | void,
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
  onClose?: DisclosureCallback<M, H>
  /**
   * Callback invoked to open the element.
   */
  onOpen?: DisclosureCallback<Y, D>
}

/**
 * `useDisclosure` is a custom hook that helps handle common open/close or toggle scenarios.
 * It can be used to control components such as `Modal`, `Dialog`, `Drawer`, etc.
 *
 * @see https://yamada-ui.com/hooks/use-disclosure
 */
export const useDisclosure = <
  Y = never,
  M = never,
  D = Promise<void> | void,
  H = Promise<void> | void,
>({
  defaultOpen = false,
  open: controlledOpen,
  timing,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UseDisclosureProps<Y, M, D, H> = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen)

  const timingRef = useRef(timing ?? "after")
  const handleOpen = useCallbackRef(onOpenProp)
  const handleClose = useCallbackRef(onCloseProp)

  const controlled = controlledOpen !== undefined
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const onOpen = useCallback(
    async (value: Y) => {
      if (timingRef.current === "before") await handleOpen(value)

      if (!controlled) setUncontrolledOpen(true)

      if (timingRef.current === "after") await handleOpen(value)
    },
    [controlled, handleOpen, timingRef],
  ) as DisclosureCallback<Y, D>

  const onClose = useCallback(
    async (value: M) => {
      if (timingRef.current === "before") await handleClose(value)

      if (!controlled) setUncontrolledOpen(false)

      if (timingRef.current === "after") await handleClose(value)
    },
    [controlled, handleClose, timingRef],
  ) as DisclosureCallback<M, H>

  const onToggle = useCallback(
    async (value: M | Y) =>
      !open ? await onOpen(value as Y) : await onClose(value as M),
    [open, onOpen, onClose],
  ) as DisclosureCallback<M, H> | DisclosureCallback<Y, D>

  return {
    open,
    onClose,
    onOpen,
    onToggle,
  }
}

export type UseDisclosureReturn<
  Y = never,
  M = never,
  D = Promise<void> | void,
  H = Promise<void> | void,
> = ReturnType<typeof useDisclosure<Y, M, D, H>>
