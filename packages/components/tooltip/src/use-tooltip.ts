import type { PropGetter } from "@yamada-ui/core"
import type { MotionTransitionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { UsePopperProps } from "@yamada-ui/use-popper"
import type { ReactNode } from "react"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useEventListener } from "@yamada-ui/use-event-listener"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import { usePopper } from "@yamada-ui/use-popper"
import {
  getOwnerDocument,
  getOwnerWindow,
  handlerAll,
  mergeRefs,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef } from "react"

export interface TooltipOptions
  extends Pick<
    UsePopperProps,
    "gutter" | "modifiers" | "offset" | "placement"
  > {
  animation?: "bottom" | "left" | "none" | "right" | "scale" | "top"
  closeDelay?: number
  closeOnClick?: boolean
  closeOnEsc?: boolean
  closeOnMouseDown?: boolean
  closeOnPointerDown?: boolean
  closeOnScroll?: boolean
  defaultIsOpen?: boolean
  duration?: MotionTransitionProps["duration"]
  isDisabled?: boolean
  isOpen?: boolean
  label?: ReactNode
  openDelay?: number
  withPortal?: boolean
  portalProps?: Pick<PortalProps, "appendToParentPortal" | "containerRef">
  onClose?: () => void
  onOpen?: () => void
}

export const useTooltip = ({
  closeDelay = 0,
  closeOnClick = false,
  closeOnEsc = true,
  closeOnMouseDown = false,
  closeOnPointerDown = false,
  closeOnScroll = false,
  defaultIsOpen,
  gutter,
  isDisabled,
  isOpen: isOpenProp,
  modifiers,
  offset,
  openDelay = 0,
  placement,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: TooltipOptions = {}) => {
  const effectiveCloseOnPointerDown = closeOnPointerDown || closeOnMouseDown

  const id = useId()
  const { isOpen, onClose, onOpen } = useDisclosure({
    defaultIsOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const triggerRef = useRef<HTMLElement>(null)
  const openTimeout = useRef<NodeJS.Timeout>()
  const closeTimeout = useRef<NodeJS.Timeout>()

  const { referenceRef, transformOrigin, getPopperProps } = usePopper({
    enabled: isOpen,
    gutter,
    modifiers,
    offset,
    placement,
  })

  const closeNow = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    closeTimeout.current = undefined
    onClose()
  }, [onClose])

  const openWithDelay = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)
    }
    openTimeout.current = undefined
    if (!isDisabled) {
      const win = getOwnerWindow(triggerRef.current)
      openTimeout.current = win.setTimeout(onOpen, openDelay)
    }
  }, [isDisabled, openDelay, onOpen])

  const closeWithDelay = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)
      openTimeout.current = undefined
    }

    const win = getOwnerWindow(triggerRef.current)
    closeTimeout.current = win.setTimeout(closeNow, closeDelay)
  }, [closeDelay, closeNow])

  const onClick = useCallback(
    () => (isOpen && closeOnClick ? closeWithDelay() : undefined),
    [isOpen, closeOnClick, closeWithDelay],
  )

  const onPointerDown = useCallback(
    () =>
      isOpen && effectiveCloseOnPointerDown ? closeWithDelay() : undefined,
    [isOpen, effectiveCloseOnPointerDown, closeWithDelay],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) =>
      isOpen && ev.key === "Escape" ? closeWithDelay() : undefined,
    [isOpen, closeWithDelay],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(triggerRef, ref, referenceRef),
      "aria-describedby": id,
      onBlur: handlerAll(props.onBlur, closeWithDelay),
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, openWithDelay),
      onPointerDown: handlerAll(props.onPointerDown, onPointerDown),
      onPointerEnter: handlerAll(props.onPointerEnter, openWithDelay),
    }),
    [id, referenceRef, onClick, onPointerDown, openWithDelay, closeWithDelay],
  )

  useEventListener(
    () => getOwnerDocument(triggerRef.current),
    "keydown",
    (ev) => (closeOnEsc ? onKeyDown(ev) : undefined),
  )

  useEventListener(
    () => getOwnerDocument(triggerRef.current),
    "scroll",
    () => (isOpen && closeOnScroll ? closeNow() : undefined),
  )

  useEventListener(
    () => triggerRef.current,
    "pointerleave",
    (e) => {
      if (e.pointerType !== "touch") closeWithDelay()
    },
  )

  useEventListener(
    () => triggerRef.current,
    "touchstart",
    () => {
      if (isOpen) closeWithDelay()
      else openWithDelay()
    },
    { passive: true },
  )

  useOutsideClick({
    ref: triggerRef,
    handler: () => {
      closeWithDelay()
    },
  })

  useEffect(
    () => () => {
      clearTimeout(openTimeout.current)
      clearTimeout(closeTimeout.current)
    },
    [],
  )

  return {
    id,
    isOpen,
    transformOrigin,
    triggerRef,
    getPopperProps,
    getTriggerProps,
  }
}
