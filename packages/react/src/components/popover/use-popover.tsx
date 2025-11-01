"use client"

import type { FocusEvent, KeyboardEvent, RefObject } from "react"
import type { Direction, PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import type { UsePopperProps } from "../../hooks/use-popper"
import type { Dict } from "../../utils"
import type { PopupAnimationProps } from "./popover"
import { useCallback, useEffect, useId, useRef } from "react"
import { useEnvironment, useSplitProps } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { useFocusOnShow } from "../../hooks/use-focus"
import { useOutsideClick } from "../../hooks/use-outside-click"
import { popperProps, usePopper } from "../../hooks/use-popper"
import {
  ariaAttr,
  assignRef,
  contains,
  cx,
  dataAttr,
  focusTransfer,
  focusTrap,
  getEventRelatedTarget,
  handlerAll,
  mergeRefs,
  runKeyAction,
  scrollLock,
  useUnmountEffect,
} from "../../utils"

export interface UsePopoverProps
  extends Omit<UseDisclosureProps, "timing">,
    UsePopperProps<"button"> {
  /**
   * If `true`, focus will be transferred to the first interactive element when the popover opens.
   *
   * @default true
   */
  autoFocus?: boolean
  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   *
   * @default false
   */
  blockScrollOnMount?: boolean
  /**
   * If `true`, the popover will close when you blur out it by clicking outside or tabbing out.
   *
   * @default true
   */
  closeOnBlur?: boolean
  /**
   * If `true`, the popover will hide on pressing Esc key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, the popover will hide on scroll.
   *
   * @default false
   */
  closeOnScroll?: boolean
  /**
   * If `true`, the popover will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The `ref` of the element that should receive focus when the popover opens.
   */
  initialFocusRef?: RefObject<HTMLElement | null>
  /**
   * If `true`, the popover will be modal.
   *
   * - scrolling is blocked.
   * - focus is trapped within the popover.
   *
   * @default false
   */
  modal?: boolean
  /**
   * If `true`, the popover will be opened when click on the field.
   *
   * @default true
   */
  openOnClick?: boolean
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end'
   */
  placement?: Direction
  /**
   * Update the position of the floating element, re-rendering the component if required.
   */
  updateRef?: RefObject<() => void>
}

export const usePopover = ({
  autoFocus = true,
  autoUpdate,
  modal = false,
  blockScrollOnMount = modal,
  closeOnBlur = true,
  closeOnEsc = true,
  closeOnScroll,
  defaultOpen,
  disabled,
  elements,
  flip,
  gutter,
  initialFocusRef,
  matchWidth,
  middleware,
  offset,
  open: openProp,
  openOnClick = true,
  placement = "end",
  platform,
  preventOverflow,
  strategy,
  transform,
  updateRef,
  whileElementsMounted,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UsePopoverProps = {}) => {
  const { getDocument } = useEnvironment()
  const headerId = useId()
  const bodyId = useId()
  const contentId = useId()
  const anchorRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLElement>(null)
  const openTimeout = useRef<NodeJS.Timeout>(undefined)
  const closeTimeout = useRef<NodeJS.Timeout>(undefined)
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

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLElement>) => {
      runKeyAction(ev, {
        Escape: () => {
          if (!closeOnEsc) return

          onClose()

          triggerRef.current?.focus()
        },
      })
    },
    [closeOnEsc, onClose],
  )

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)
      const popup = relatedTarget?.hasAttribute("data-popup")

      if (contains(triggerRef.current, relatedTarget)) return
      if (contains(contentRef.current, relatedTarget)) return
      if (contains(contentRef.current, ev.target) && popup) return

      if (closeOnBlur) onClose()
    },
    [closeOnBlur, onClose],
  )

  useEventListener(getDocument(), "scroll", () => {
    if (open && closeOnScroll) onClose()
  })

  useFocusOnShow(contentRef, {
    focusTarget: initialFocusRef,
    shouldFocus: autoFocus,
    visible: open,
  })

  useOutsideClick({
    ref: [contentRef, triggerRef],
    enabled: open && closeOnBlur,
    handler: onClose,
  })

  useEffect(() => {
    if (!open || !modal) return

    return focusTrap(contentRef.current)
  }, [open, modal])

  useEffect(() => {
    if (!open || !blockScrollOnMount) return

    return scrollLock(contentRef.current)
  }, [open, modal, blockScrollOnMount])

  useEffect(() => {
    if (!open || modal) return

    return focusTransfer(contentRef.current, triggerRef.current)
  }, [open, modal])

  useUnmountEffect(() => {
    clearTimeout(openTimeout.current)
    clearTimeout(closeTimeout.current)
  })

  const getTriggerProps: PropGetter<"button"> = useCallback(
    ({ ref, ...props } = {}) => ({
      "aria-controls": open ? contentId : undefined,
      "aria-disabled": ariaAttr(disabled),
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      role: "button",
      ...props,
      ref: mergeRefs(ref, triggerRef, (node) => {
        if (anchorRef.current == null) refs.setReference(node)
      }),
      onBlur: handlerAll(props.onBlur, (ev) =>
        !contains(contentRef.current, getEventRelatedTarget(ev)) && closeOnBlur
          ? onClose()
          : void 0,
      ),
      onClick: handlerAll(
        props.onClick,
        !open ? (!disabled && openOnClick ? onOpen : undefined) : onClose,
      ),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
    }),
    [
      closeOnBlur,
      contentId,
      disabled,
      onClose,
      onKeyDown,
      onOpen,
      open,
      openOnClick,
      refs,
    ],
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
        "aria-hidden": !open,
        "aria-labelledby": cx(ariaLabelledby, hasHeader ? headerId : undefined),
        "aria-modal": modal ? "true" : undefined,
        "data-close": dataAttr(!open),
        "data-open": dataAttr(open),
        "data-popup": dataAttr(true),
        role: "dialog",
        tabIndex: -1,
        ...props,
        ref: mergeRefs(ref, contentRef),
        onBlur: handlerAll(props.onBlur, onBlur),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [getDocument, headerId, bodyId, contentId, open, modal, onBlur, onKeyDown],
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

export type UsePopoverReturn = ReturnType<typeof usePopover>

export const popoverProps: (
  | keyof PopupAnimationProps
  | keyof UsePopoverProps
)[] = [
  ...popperProps,
  "autoFocus",
  "blockScrollOnMount",
  "closeOnBlur",
  "closeOnEsc",
  "closeOnScroll",
  "openOnClick",
  "disabled",
  "initialFocusRef",
  "modal",
  "updateRef",
  "defaultOpen",
  "onOpen",
  "onClose",
  "animationScheme",
  "duration",
]

export const usePopoverProps = <
  Y extends Dict = Dict,
  M extends keyof PopupAnimationProps | keyof UsePopoverProps =
    | keyof PopupAnimationProps
    | keyof UsePopoverProps,
>(
  props: Y,
  omitKeys?: M[],
) => {
  return useSplitProps(
    props,
    popoverProps.filter((key) => !omitKeys?.includes(key as M)),
  ) as unknown as [
    keyof PopupAnimationProps | keyof UsePopoverProps extends M
      ? PopupAnimationProps & UsePopoverProps
      : Omit<PopupAnimationProps & UsePopoverProps, M>,
    Omit<
      Y,
      keyof PopupAnimationProps | keyof UsePopoverProps extends M
        ? keyof PopupAnimationProps | keyof UsePopoverProps
        : Exclude<keyof PopupAnimationProps | keyof UsePopoverProps, M>
    >,
  ]
}
