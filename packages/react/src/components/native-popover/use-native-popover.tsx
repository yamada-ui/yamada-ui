"use client"

import type { RefObject, SyntheticEvent } from "react"
import type { Direction, PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import type { UsePopperProps } from "../../hooks/use-popper"
import { useCallback, useId, useRef } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { popperProps, usePopper } from "../../hooks/use-popper"
import { assignRef, handlerAll, mergeRefs } from "../../utils"

interface NativeToggleEvent extends SyntheticEvent {
  newState: "closed" | "open"
  oldState: "closed" | "open"
}

export interface UseNativePopoverProps
  extends Omit<UseDisclosureProps, "timing">,
    UsePopperProps<"button"> {
  /**
   * If `true`, the popover will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end'
   */
  placement?: Direction
  /**
   * The mode of the popover.
   *
   * @default 'auto'
   */
  popover?: "auto" | "manual"
  /**
   * Update the position of the floating element, re-rendering the component if required.
   */
  updateRef?: RefObject<() => void>
}

export const useNativePopover = ({
  autoUpdate,
  defaultOpen,
  disabled = false,
  elements,
  flip,
  gutter,
  matchWidth,
  middleware,
  offset,
  open: openProp,
  placement = "end",
  platform,
  popover = "auto",
  preventOverflow,
  strategy,
  transform,
  updateRef,
  whileElementsMounted,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UseNativePopoverProps = {}) => {
  const headerId = useId()
  const bodyId = useId()
  const contentId = useId()
  const anchorRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const { refs, update, getPopperProps } = usePopper<"button">({
    autoUpdate,
    elements,
    flip,
    gutter,
    matchWidth,
    middleware,
    offset,
    open,
    placement,
    platform,
    preventOverflow,
    strategy,
    transform,
    whileElementsMounted,
  })

  assignRef(updateRef, update)

  const getTriggerProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ref: mergeRefs(ref, triggerRef, (node) => {
        if (anchorRef.current == null) refs.setReference(node)
      }),
      type: "button",
      disabled,
      popovertarget: contentId,
      popovertargetaction: "toggle",
    }),
    [contentId, disabled, refs],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id: contentId,
      popover,
      ...props,
      ref: mergeRefs(ref, contentRef),
      onToggle: handlerAll(props.onToggle, (ev: NativeToggleEvent) => {
        if (ev.newState === "open") {
          onOpen()
        } else {
          onClose()
        }
      }),
    }),
    [contentId, popover, onOpen, onClose],
  )

  const getHeaderProps: PropGetter = useCallback(
    (props) => ({
      id: headerId,
      ...props,
    }),
    [headerId],
  )

  const getBodyProps: PropGetter = useCallback(
    (props) => ({
      id: bodyId,
      ...props,
    }),
    [bodyId],
  )

  const getFooterProps: PropGetter = useCallback((props) => ({ ...props }), [])

  const getAnchorProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ref: mergeRefs(ref, anchorRef, refs.setReference),
    }),
    [refs.setReference],
  )

  const getPositionerProps: PropGetter = useCallback(
    (props) => {
      return getPopperProps(props)
    },
    [getPopperProps],
  )

  return {
    open,
    getAnchorProps,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
    onClose,
    onOpen,
  }
}

export type UseNativePopoverReturn = ReturnType<typeof useNativePopover>

export const nativePopoverProps: (keyof UseNativePopoverProps)[] = [
  ...popperProps,
  "disabled",
  "popover",
  "updateRef",
  "defaultOpen",
  "open",
  "onOpen",
  "onClose",
]
