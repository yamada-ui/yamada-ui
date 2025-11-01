"use client"

import type { MouseEvent, RefObject } from "react"
import type { Direction, PropGetter } from "../../core"
import type { UsePopperProps } from "../../hooks/use-popper"
import { useCallback, useId, useRef } from "react"
import { useEnvironment } from "../../core"
import { usePopper } from "../../hooks/use-popper"
import {
  ariaAttr,
  assignRef,
  cx,
  dataAttr,
  handlerAll,
  mergeRefs,
} from "../../utils"

export interface UseNativePopoverProps extends UsePopperProps<"button"> {
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
  popover?: "" | "auto" | "hint" | "manual" | true
  /**
   * The target element ID for the popover trigger.
   * If not provided, a generated ID will be used.
   */
  popoverTarget?: string
  /**
   * The action for the popover target.
   *
   * @default 'toggle'
   */
  popoverTargetAction?: "hide" | "show" | "toggle"
  /**
   * Update the position of the floating element, re-rendering the component if required.
   */
  updateRef?: RefObject<() => void>
}

export const useNativePopover = ({
  autoUpdate,
  disabled = false,
  elements,
  flip,
  gutter,
  matchWidth,
  middleware,
  offset,
  placement = "end",
  platform,
  popover = "auto",
  popoverTarget,
  popoverTargetAction = "toggle",
  preventOverflow,
  strategy,
  transform,
  updateRef,
  whileElementsMounted,
}: UseNativePopoverProps = {}) => {
  const { getDocument } = useEnvironment()
  const headerId = useId()
  const bodyId = useId()
  const generatedContentId = useId()
  const contentId = popoverTarget ?? generatedContentId
  const anchorRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { refs, update, getPopperProps } = usePopper<"button">({
    autoUpdate,
    elements,
    flip,
    gutter,
    matchWidth,
    middleware,
    offset,
    placement,
    platform,
    preventOverflow,
    strategy,
    transform,
    whileElementsMounted,
  })

  assignRef(updateRef, update)

  const onClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      if (!disabled) return

      ev.preventDefault()
      ev.stopPropagation()
    },
    [disabled],
  )

  const getTriggerProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => {
      return {
        type: "button",
        "aria-controls": contentId,
        "aria-disabled": ariaAttr(disabled),
        "aria-haspopup": "dialog",
        popoverTarget: contentId,
        popoverTargetAction,
        role: "button",
        ...props,
        ref: mergeRefs(ref, triggerRef, (node) => {
          if (anchorRef.current == null) refs.setReference(node)
        }),
        onClick: handlerAll(props.onClick, onClick),
      }
    },
    [contentId, disabled, onClick, popoverTargetAction, refs],
  )

  const getAnchorProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ...props,
      ref: mergeRefs(ref, anchorRef, refs.setReference),
    }),
    [refs.setReference],
  )

  const getPositionerProps: PropGetter = useCallback(getPopperProps, [
    getPopperProps,
  ])

  const getContentProps: PropGetter = useCallback(
    ({
      ref,
      "aria-describedby": ariaDescribedby,
      "aria-labelledby": ariaLabelledby,
      ...props
    } = {}) => {
      const hasHeader = !!getDocument()?.getElementById(headerId)
      const hasBody = !!getDocument()?.getElementById(bodyId)

      return {
        id: contentId,
        "aria-describedby": cx(ariaDescribedby, hasBody ? bodyId : undefined),
        "aria-labelledby": cx(ariaLabelledby, hasHeader ? headerId : undefined),
        "data-popup": dataAttr(true),
        popover: popover === true ? "" : popover,
        role: "dialog",
        tabIndex: -1,
        ...props,
        ref: mergeRefs(ref, contentRef),
      }
    },
    [getDocument, headerId, bodyId, contentId, popover],
  )

  const getHeaderProps: PropGetter = useCallback(
    (props) => ({ id: headerId, ...props }),
    [headerId],
  )

  const getBodyProps: PropGetter = useCallback(
    (props) => ({ id: bodyId, ...props }),
    [bodyId],
  )

  const getFooterProps: PropGetter = useCallback((props) => ({ ...props }), [])

  const getCloseTriggerProps: PropGetter<"button"> = useCallback(
    (props = {}) => {
      return {
        popoverTarget: contentId,
        popoverTargetAction: "hide",
        ...props,
      }
    },
    [contentId],
  )

  return {
    getAnchorProps,
    getBodyProps,
    getCloseTriggerProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
  }
}

export type UseNativePopoverReturn = ReturnType<typeof useNativePopover>
