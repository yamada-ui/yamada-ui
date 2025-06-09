import type { PropGetter } from "../../core"
import type { UseDisclosureProps } from "../../hooks/use-disclosure"
import type { UsePopperProps } from "../../hooks/use-popper"
import { useCallback, useId, useRef } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { useOutsideClick } from "../../hooks/use-outside-click"
import { usePopper } from "../../hooks/use-popper"
import {
  cx,
  dataAttr,
  getDocument,
  getWindow,
  handlerAll,
  mergeRefs,
  useUnmountEffect,
} from "../../utils"

export interface UseTooltipProps
  extends Omit<UseDisclosureProps, "timing">,
    UsePopperProps {
  /**
   * The delay before hiding the tooltip.
   *
   * @default 100
   */
  closeDelay?: number
  /**
   * If `true`, the tooltip will hide on click.
   *
   * @default true
   */
  closeOnClick?: boolean
  /**
   * If `true`, the tooltip will hide on pressing Esc key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, the tooltip will hide on scroll.
   *
   * @default false
   */
  closeOnScroll?: boolean
  /**
   * If `true`, the tooltip will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The delay before showing the tooltip.
   *
   * @default 400
   */
  openDelay?: number
}

export const useTooltip = ({
  autoUpdate,
  closeDelay = 100,
  closeOnClick = true,
  closeOnEsc = true,
  closeOnScroll,
  defaultOpen,
  disabled,
  elements,
  flip,
  gutter,
  matchWidth,
  middleware,
  offset,
  open: openProp,
  openDelay = 400,
  placement,
  platform,
  preventOverflow,
  strategy,
  transform,
  whileElementsMounted,
  onClose: onCloseProp,
  onOpen: onOpenProp,
}: UseTooltipProps) => {
  const describedbyId = useId()
  const triggerRef = useRef<HTMLElement>(null)
  const openTimeout = useRef<NodeJS.Timeout>(undefined)
  const closeTimeout = useRef<NodeJS.Timeout>(undefined)
  const isHovered = useRef(false)
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const { getPopperProps, getReferenceProps } = usePopper({
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

      openTimeout.current = getWindow(triggerRef.current).setTimeout(
        onOpen,
        openDelay,
      )
    }
  }, [disabled, open, onForceClose, onOpen, openDelay])

  const onDelayClose = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)
      openTimeout.current = undefined
    }

    closeTimeout.current = getWindow(triggerRef.current).setTimeout(() => {
      if (!isHovered.current) onForceClose()
    }, closeDelay)
  }, [closeDelay, onForceClose])

  useEventListener(
    () => getDocument(triggerRef.current),
    "keydown",
    ({ key }) => {
      if (closeOnEsc && key === "Escape") onDelayClose()
    },
  )

  useEventListener(
    () => getDocument(triggerRef.current),
    "scroll",
    () => {
      if (open && closeOnScroll) onForceClose()
    },
  )

  useOutsideClick({
    ref: triggerRef,
    enabled: open,
    handler: () => {
      onDelayClose()
    },
  })

  useUnmountEffect(() => {
    clearTimeout(openTimeout.current)
    clearTimeout(closeTimeout.current)
  })

  const getTriggerProps: PropGetter<"button"> = useCallback(
    ({ "aria-describedby": ariaDescribedby, ...props } = {}) => {
      return getReferenceProps({
        ...props,
        ref: mergeRefs(props.ref, triggerRef),
        "aria-describedby": cx(
          ariaDescribedby,
          open ? describedbyId : undefined,
        ),
        onBlur: handlerAll(props.onBlur, open ? onDelayClose : undefined),
        onClick: handlerAll(
          props.onClick,
          open && closeOnClick ? onDelayClose : undefined,
        ),
        onFocus: handlerAll(props.onFocus, !open ? onDelayOpen : undefined),
        onPointerEnter: handlerAll(props.onPointerEnter, (ev) => {
          isHovered.current = true

          if (ev.pointerType !== "touch" && !open) onDelayOpen()
        }),
        onPointerLeave: handlerAll(props.onPointerLeave, (ev) => {
          isHovered.current = false

          if (ev.pointerType !== "touch" && open) onDelayClose()
        }),
      })
    },
    [
      getReferenceProps,
      describedbyId,
      onDelayOpen,
      open,
      closeOnClick,
      onDelayClose,
    ],
  )

  const getPositionerProps: PropGetter = useCallback(
    (props) => {
      return getPopperProps(props)
    },
    [getPopperProps],
  )

  const getContentProps: PropGetter = useCallback(
    (props = {}) => ({
      id: describedbyId,
      "data-close": dataAttr(!open),
      "data-open": dataAttr(open),
      role: "tooltip",
      onPointerEnter: handlerAll(props.onPointerEnter, () => {
        isHovered.current = true
      }),
      onPointerLeave: handlerAll(props.onPointerLeave, () => {
        if (isHovered.current) onDelayClose()

        isHovered.current = false
      }),
      ...props,
    }),
    [describedbyId, onDelayClose, open],
  )

  return {
    open,
    getContentProps,
    getPositionerProps,
    getTriggerProps,
    onClose: onForceClose,
    onDelayClose,
    onDelayOpen,
    onOpen,
  }
}

export type UseTooltipReturn = ReturnType<typeof useTooltip>
