import type { PropsWithChildren, ReactElement, ReactNode } from "react"
import type {
  MotionProps,
  MotionTransitionProps,
} from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  PropGetter,
  ThemeProps,
} from "../../core"
import type { UsePopperProps } from "../../hooks/use-popper"
import { AnimatePresence } from "motion/react"
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react"
import { motion } from "../../components/motion"
import { Portal } from "../../components/portal"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useEventListener } from "../../hooks/use-event-listener"
import { useOutsideClick } from "../../hooks/use-outside-click"
import { usePopper } from "../../hooks/use-popper"
import {
  cx,
  getOwnerDocument,
  getOwnerWindow,
  handlerAll,
  mergeRefs,
} from "../../utils"
import { scaleFadeProps, slideFadeProps } from "../transitions"

interface TooltipOptions {
  /**
   * The animation of the tooltip.
   *
   * @default 'scale'
   */
  animation?: "bottom" | "left" | "none" | "right" | "scale" | "top"
  /**
   * The delay before hiding the tooltip.
   *
   * @default 0
   */
  closeDelay?: number
  /**
   * If `true`, the tooltip will hide on click.
   *
   * @default false
   */
  closeOnClick?: boolean
  /**
   * If `true`, the tooltip will hide on pressing Esc key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * If `true`, the tooltip will hide while the mouse is down.
   *
   * @default false
   */
  closeOnMouseDown?: boolean
  /**
   * If `true`, the tooltip will hide while the pointer is down.
   *
   * @default false
   */
  closeOnPointerDown?: boolean
  /**
   * If `true`, the tooltip will hide on scroll.
   *
   * @default false
   */
  closeOnScroll?: boolean
  /**
   * If `true`, the tooltip will be initially shown.
   *
   * @deprecated Use `defaultOpen` instead.
   */
  defaultIsOpen?: boolean
  /**
   * If `true`, the tooltip will be initially shown.
   */
  defaultOpen?: boolean
  /**
   * If `true`, the tooltip will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * If `true`, the tooltip will be disabled.
   *
   * @default false
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the tooltip will be shown.
   *
   * @deprecated Use `open` instead.
   */
  isOpen?: boolean
  /**
   * The label of the tooltip.
   */
  label?: ReactNode
  /**
   * If `true`, the tooltip will be shown.
   */
  open?: boolean
  /**
   * The delay before showing the tooltip.
   *
   * @default 0
   */
  openDelay?: number
  /**
   * If `true`, the element will be transported to the end of document.body.
   */
  withPortal?: boolean
  /**
   * Props for portal component.
   */
  portalProps?: Pick<PortalProps, "appendToParentPortal" | "containerRef">
  /**
   * Callback to run when the tooltip hides.
   */
  onClose?: () => void
  /**
   * Callback to run when the tooltip shows.
   */
  onOpen?: () => void
}

export interface TooltipProps
  extends Omit<MotionProps, "animation" | "children" | "offset">,
    PropsWithChildren,
    ThemeProps<"Tooltip">,
    Omit<UsePopperProps, "enabled">,
    TooltipOptions {}

const getTooltipProps = (
  animation: TooltipProps["animation"] = "scale",
  duration?: TooltipProps["duration"],
) => {
  const custom = {
    duration,
    enter: { visibility: "visible" },
    reverse: true,
    transitionEnd: { exit: { visibility: "hidden" } },
  }

  switch (animation) {
    case "scale":
      return {
        ...scaleFadeProps,
        custom: { ...custom, scale: 0.95 },
      }
    case "top":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetY: -16 },
      }
    case "right":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 16 },
      }
    case "left":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: -16 },
      }
    case "bottom":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetY: 16 },
      }
  }
}

/**
 * `Tooltip` is a component that displays short information, such as supplementary details for an element.
 *
 * @see Docs https://yamada-ui.com/components/overlay/tooltip
 */
export const Tooltip: FC<TooltipProps> = ({
  withPortal = true,
  z: zProp,
  zIndex: zIndexProp,
  portalProps,
  ...props
}) => {
  let [{ z, zIndex, ...styles }, mergedProps] = useComponentStyle(
    "Tooltip",
    props,
  )
  const {
    className,
    animation,
    boundary,
    children,
    closeDelay = 0,
    closeOnClick,
    closeOnEsc = true,
    closeOnMouseDown = false,
    closeOnPointerDown = false,
    closeOnScroll,
    defaultIsOpen,
    defaultOpen = defaultIsOpen,
    isDisabled,
    disabled = isDisabled,
    duration,
    eventListeners,
    flip,
    gutter,
    isOpen,
    label,
    matchWidth,
    modifiers,
    offset,
    open: openProp = isOpen,
    openDelay = 0,
    placement,
    preventOverflow,
    strategy,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const id = useId()
  const { open, onClose, onOpen } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const triggerRef = useRef<HTMLElement>(null)
  const openTimeout = useRef<NodeJS.Timeout>(undefined)
  const closeTimeout = useRef<NodeJS.Timeout>(undefined)
  const { referenceRef, transformOrigin, getPopperProps } = usePopper({
    boundary,
    enabled: open,
    eventListeners,
    flip,
    gutter,
    matchWidth,
    modifiers,
    offset,
    placement,
    preventOverflow,
    strategy,
  })
  const effectiveCloseOnPointerDown = closeOnPointerDown || closeOnMouseDown

  const closeNow = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)

      closeTimeout.current = undefined
    }

    onClose()
  }, [onClose])

  const openWithDelay = useCallback(() => {
    if (!disabled && !openTimeout.current) {
      if (open) closeNow()

      const win = getOwnerWindow(triggerRef.current)

      openTimeout.current = win.setTimeout(onOpen, openDelay)
    }
  }, [disabled, open, openDelay, closeNow, onOpen])

  const closeWithDelay = useCallback(() => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)

      openTimeout.current = undefined
    }

    const win = getOwnerWindow(triggerRef.current)

    closeTimeout.current = win.setTimeout(closeNow, closeDelay)
  }, [closeDelay, closeNow])

  const onClick = useCallback(
    () => (open && closeOnClick ? closeWithDelay() : undefined),
    [open, closeOnClick, closeWithDelay],
  )

  const onPointerDown = useCallback(
    () => (open && effectiveCloseOnPointerDown ? closeWithDelay() : undefined),
    [open, effectiveCloseOnPointerDown, closeWithDelay],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent) =>
      open && ev.key === "Escape" ? closeWithDelay() : undefined,
    [open, closeWithDelay],
  )

  const getTriggerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(triggerRef, ref, referenceRef),
      onBlur: handlerAll(props.onBlur, closeWithDelay),
      onClick: handlerAll(props.onClick, onClick),
      onFocus: handlerAll(props.onFocus, openWithDelay),
      onPointerDown: handlerAll(props.onPointerDown, onPointerDown),
      onPointerEnter: handlerAll(props.onPointerEnter, openWithDelay),
    }),

    [referenceRef, onClick, onPointerDown, openWithDelay, closeWithDelay],
  )

  useEventListener(
    () => getOwnerDocument(triggerRef.current),
    "keydown",
    (ev) => (closeOnEsc ? onKeyDown(ev) : undefined),
  )

  useEventListener(
    () => getOwnerDocument(triggerRef.current),
    "scroll",
    () => (open && closeOnScroll ? closeNow() : undefined),
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
      if (open) closeWithDelay()
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

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!label) return <>{children}</>

  const child = Children.only(children) as ReactElement<any>

  const trigger = cloneElement<any>(
    child,
    getTriggerProps(
      { ...child.props, "aria-describedby": id },
      child.props.ref,
    ),
  )

  const css: CSSUIObject = {
    position: "relative",
    ...styles,
  }

  const resolvedZIndex = (zIndexProp ??
    zProp ??
    zIndex ??
    z) as CSSUIProps["zIndex"]

  return (
    <>
      {trigger}

      <ui.span
        id={id}
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        }}
      >
        {label}
      </ui.span>

      <AnimatePresence>
        {open ? (
          <Portal disabled={!withPortal} {...portalProps}>
            <ui.div
              {...getPopperProps()}
              pointerEvents="none"
              zIndex={resolvedZIndex}
            >
              <motion.div
                className={cx("ui-tooltip", className)}
                style={{ transformOrigin }}
                role="tooltip"
                {...(animation !== "none"
                  ? getTooltipProps(animation, duration)
                  : {})}
                animate="enter"
                exit="exit"
                initial="exit"
                __css={css}
                {...rest}
              >
                {label}
              </motion.div>
            </ui.div>
          </Portal>
        ) : null}
      </AnimatePresence>
    </>
  )
}

Tooltip.__ui__ = "Tooltip"
