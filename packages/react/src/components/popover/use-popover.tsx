"use client"

import type { FocusEvent, KeyboardEvent, RefObject } from "react"
import type { PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import type { UsePopperProps } from "../../hooks/use-popper"
import { useCallback, useEffect, useId, useRef } from "react"
import { useEnvironment } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { useFocusOnShow } from "../../hooks/use-focus"
import { useOutsideClick } from "../../hooks/use-outside-click"
import { usePopper } from "../../hooks/use-popper"
import {
  contains,
  cx,
  dataAttr,
  focusTransfer,
  focusTrap,
  getEventRelatedTarget,
  getWindow,
  handlerAll,
  mergeRefs,
  scrollLock,
  useUnmountEffect,
} from "../../utils"

export interface UsePopoverProps
  extends Omit<UseDisclosureProps, "timing">,
    UsePopperProps {
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
   * The delay before hiding the popover.
   *
   * @default 0
   */
  closeDelay?: number
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
   * The delay before showing the popover.
   *
   * @default 0
   */
  openDelay?: number
}

export const usePopover = ({
  autoFocus = true,
  autoUpdate,
  blockScrollOnMount = false,
  closeDelay = 0,
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
  modal = false,
  offset,
  open: openProp,
  openDelay = 0,
  placement = "end",
  platform,
  preventOverflow,
  strategy,
  transform,
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
  const { refs, getPopperProps } = usePopper<"button">({
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

  const onForceClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)

      closeTimeout.current = undefined
    }

    onClose()
  }, [onClose])

  const onDelayOpen = useCallback(() => {
    if (!disabled && !openTimeout.current) {
      if (open) onForceClose()

      openTimeout.current = getWindow(refs.reference.current).setTimeout(() => {
        onOpen()
        openTimeout.current = undefined
      }, openDelay)
    }
  }, [disabled, open, onForceClose, refs.reference, onOpen, openDelay])

  const onDelayClose = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)
      openTimeout.current = undefined
    }

    closeTimeout.current = getWindow(refs.reference.current).setTimeout(
      onForceClose,
      closeDelay,
    )
  }, [closeDelay, onForceClose, refs.reference])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (closeOnEsc && ev.key === "Escape") {
        onDelayClose()

        triggerRef.current?.focus()
      }
    },
    [closeOnEsc, onDelayClose],
  )

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)
      const popup = relatedTarget?.hasAttribute("data-popup")

      if (contains(contentRef.current, relatedTarget)) return
      if (contains(contentRef.current, ev.target) && popup) return

      if (closeOnBlur) onDelayClose()
    },
    [closeOnBlur, onDelayClose],
  )

  useEventListener(getDocument(), "scroll", () => {
    if (open && closeOnScroll) onForceClose()
  })

  useFocusOnShow(contentRef, {
    focusTarget: initialFocusRef,
    shouldFocus: autoFocus,
    visible: open,
  })

  useOutsideClick({
    ref: contentRef,
    enabled: open,
    handler: () => {
      onDelayClose()
    },
  })

  useEffect(() => {
    if (!open || !modal) return

    return focusTrap(contentRef.current)
  }, [open, modal])

  useEffect(() => {
    if (!open || !modal || !blockScrollOnMount) return

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
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      role: "button",
      ...props,
      ref: mergeRefs(ref, triggerRef, (node) => {
        if (anchorRef.current == null) refs.setReference(node)
      }),
      onClick: handlerAll(props.onClick, !open ? onDelayOpen : onDelayClose),
    }),
    [contentId, onDelayClose, onDelayOpen, open, refs],
  )

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
    getAnchorProps,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
    onClose: onForceClose,
    onDelayClose,
    onDelayOpen,
    onOpen,
  }
}

export type UsePopoverReturn = ReturnType<typeof usePopover>
