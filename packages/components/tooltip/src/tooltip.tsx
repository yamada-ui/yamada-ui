/* eslint-disable perfectionist/sort-interfaces */
/* eslint-disable perfectionist/sort-objects */
import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { UsePopperProps } from "@yamada-ui/use-popper"
import type { ReactElement, ReactNode, Ref } from "react"
import { omitThemeProps, ui, useComponentStyle } from "@yamada-ui/core"
import { AnimatePresence, motion, motionForwardRef } from "@yamada-ui/motion"
import { Portal } from "@yamada-ui/portal"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useEventListener } from "@yamada-ui/use-event-listener"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import { usePopper } from "@yamada-ui/use-popper"
import {
  cx,
  getOwnerDocument,
  getOwnerWindow,
  handlerAll,
  mergeRefs,
} from "@yamada-ui/utils"
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react"

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
   */
  defaultIsOpen?: boolean
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProps["duration"]
  /**
   * If `true`, the tooltip will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the tooltip will be shown.
   */
  open?: boolean
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
  extends Omit<MotionProps, "animation" | "offset">,
    ThemeProps<"Tooltip">,
    Pick<UsePopperProps, "gutter" | "modifiers" | "offset" | "placement">,
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
export const Tooltip = motionForwardRef<TooltipProps, "div">(
  (
    { withPortal = true, z: zProp, zIndex: zIndexProp, portalProps, ...props },
    ref,
  ) => {
    let [{ z, zIndex, ...styles }, mergedProps] = useComponentStyle(
      "Tooltip",
      props,
    )
    const {
      className,
      animation,
      children,
      closeDelay = 0,
      closeOnClick,
      closeOnEsc = true,
      closeOnMouseDown = false,
      closeOnPointerDown = false,
      closeOnScroll,
      defaultIsOpen: defaultIsOpenProp,
      duration,
      gutter,
      isDisabled,
      open: openProp,
      isOpen: isOpenProp,
      label,
      modifiers,
      offset,
      openDelay = 0,
      placement,
      onClose: onCloseProp,
      onOpen: onOpenProp,
      ...rest
    } = omitThemeProps(mergedProps)

    const effectiveCloseOnPointerDown = closeOnPointerDown || closeOnMouseDown

    const id = useId()
    const controlledOpenProp = openProp ?? isOpenProp
    const { isOpen, onClose, onOpen } = useDisclosure({
      defaultIsOpen: defaultIsOpenProp,
      isOpen: controlledOpenProp,
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

        closeTimeout.current = undefined
      }

      onClose()
    }, [onClose])

    const openWithDelay = useCallback(() => {
      if (!isDisabled && !openTimeout.current) {
        if (isOpen) closeNow()

        const win = getOwnerWindow(triggerRef.current)

        openTimeout.current = win.setTimeout(onOpen, openDelay)
      }
    }, [isDisabled, isOpen, openDelay, closeNow, onOpen])

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

    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (!label) return <>{children}</>

    const child = Children.only(children) as {
      ref?: Ref<HTMLElement>
    } & ReactElement

    const trigger = cloneElement(
      child,
      getTriggerProps({ ...child.props, "aria-describedby": id }, child.ref),
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
          {isOpen ? (
            <Portal isDisabled={!withPortal} {...portalProps}>
              <ui.div
                {...getPopperProps()}
                pointerEvents="none"
                zIndex={resolvedZIndex}
              >
                <motion.div
                  ref={ref}
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
  },
)

Tooltip.displayName = "Tooltip"
Tooltip.__ui__ = "Tooltip"
