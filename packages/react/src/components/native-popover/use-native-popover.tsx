"use client"

import type { SyntheticEvent } from "react"
import type { PropGetter } from "../../core"
import { useCallback, useId, useRef, useState } from "react"
import { handlerAll, mergeRefs } from "../../utils"

interface NativeToggleEvent extends SyntheticEvent {
  newState: "closed" | "open"
  oldState: "closed" | "open"
}

export interface UseNativePopoverProps {
  /**
   * If `true`, the popover will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The mode of the popover.
   *
   * @default 'auto'
   */
  popover?: "auto" | "manual"
}

export const useNativePopover = ({
  disabled = false,
  popover = "auto",
}: UseNativePopoverProps = {}) => {
  const headerId = useId()
  const bodyId = useId()
  const contentId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const getTriggerProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ref: mergeRefs(ref, triggerRef),
      type: "button",
      disabled,
      popovertarget: contentId,
      popovertargetaction: "toggle",
    }),
    [contentId, disabled],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      id: contentId,
      popover,
      ...props,
      ref: mergeRefs(ref, contentRef),
      onToggle: handlerAll(props.onToggle, (ev: NativeToggleEvent) => {
        setOpen(ev.newState === "open")
      }),
    }),
    [contentId, popover],
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

  return {
    open,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getTriggerProps,
  }
}

export type UseNativePopoverReturn = ReturnType<typeof useNativePopover>
