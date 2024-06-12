import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import type {
  HTMLMotionProps,
  MotionTransitionProperties,
} from "@yamada-ui/motion"
import { motion, AnimatePresence } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useEventListener } from "@yamada-ui/use-event-listener"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import type { UsePopperProps } from "@yamada-ui/use-popper"
import { usePopper } from "@yamada-ui/use-popper"
import type { PropGetter } from "@yamada-ui/utils"
import {
  cx,
  handlerAll,
  mergeRefs,
  getOwnerWindow,
  getOwnerDocument,
} from "@yamada-ui/utils"
import type { ReactElement, ReactNode, Ref } from "react"
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react"

type TooltipOptions = {
  /**
   * The label of the tooltip.
   */
  label?: ReactNode
  /**
   * If `true`, the tooltip will be shown.
   */
  isOpen?: boolean
  /**
   * If `true`, the tooltip will be initially shown.
   */
  defaultIsOpen?: boolean
  /**
   * Callback to run when the tooltip shows.
   */
  onOpen?: () => void
  /**
   * Callback to run when the tooltip hides.
   */
  onClose?: () => void
  /**
   * If `true`, the tooltip will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The delay before showing the tooltip.
   *
   * @default 0
   */
  openDelay?: number
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
   * If `true`, the tooltip will hide on scroll.
   *
   * @default false
   */
  closeOnScroll?: boolean
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
   * If `true`, the tooltip will hide on pressing Esc key.
   *
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * The animation of the tooltip.
   *
   * @default 'scale'
   */
  animation?: "scale" | "top" | "right" | "left" | "bottom" | "none"
  /**
   * The animation duration.
   */
  duration?: MotionTransitionProperties["duration"]
  /**
   * Props for portal component.
   */
  portalProps?: Pick<PortalProps, "appendToParentPortal" | "containerRef">
  /**
   * If `true`, the element will be transported to the end of document.body.
   */
  withPortal?: boolean
}

export type TooltipProps = Omit<HTMLUIProps<"div">, "offset"> &
  ThemeProps<"Tooltip"> &
  Omit<HTMLMotionProps<"div">, "color" | "style" | "variants" | "transition"> &
  Pick<UsePopperProps, "modifiers" | "gutter" | "offset" | "placement"> &
  TooltipOptions

const getTooltipProps = (
  animation: TooltipProps["animation"] = "scale",
  duration?: TooltipProps["duration"],
) => {
  const custom = {
    reverse: true,
    duration,
    enter: { visibility: "visible" },
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
export const Tooltip = forwardRef<TooltipProps, "div">(
  (
    {
      closeOnPointerDown,
      z: zProp,
      zIndex: zIndexProp,
      portalProps,
      withPortal = true,
      ...props
    },
    ref,
  ) => {
    let [{ z, zIndex, ...styles }, mergedProps] = useComponentStyle(
      "Tooltip",
      props,
    )
    const {
      className,
      children,
      label,
      placement,
      modifiers,
      gutter,
      offset,
      openDelay = 0,
      closeDelay = 0,
      isDisabled,
      closeOnClick,
      closeOnScroll,
      closeOnMouseDown,
      closeOnEsc = true,
      animation,
      duration,
      isOpen: isOpenProp,
      defaultIsOpen: defaultIsOpenProp,
      onOpen: onOpenProp,
      onClose: onCloseProp,
      ...rest
    } = omitThemeProps(mergedProps)

    closeOnPointerDown = closeOnMouseDown

    const labelId = useId()
    const { isOpen, onOpen, onClose } = useDisclosure({
      isOpen: isOpenProp,
      defaultIsOpen: defaultIsOpenProp,
      onOpen: onOpenProp,
      onClose: onCloseProp,
    })
    const triggerRef = useRef<HTMLElement>(null)
    const openTimeout = useRef<number>()
    const closeTimeout = useRef<number>()
    const { referenceRef, getPopperProps, transformOrigin } = usePopper({
      enabled: isOpen,
      placement,
      modifiers,
      gutter,
      offset,
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
      () => (isOpen && closeOnPointerDown ? closeWithDelay() : undefined),
      [isOpen, closeOnPointerDown, closeWithDelay],
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
        onPointerEnter: handlerAll(props.onPointerEnter, openWithDelay),
        onClick: handlerAll(props.onClick, onClick),
        onPointerDown: handlerAll(props.onPointerDown, onPointerDown),
        onFocus: handlerAll(props.onFocus, openWithDelay),
        onBlur: handlerAll(props.onBlur, closeWithDelay),
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

    if (!label) return <>{children}</>

    const child = Children.only(children) as ReactElement & {
      ref?: Ref<HTMLElement>
    }

    const trigger = cloneElement(
      child,
      getTriggerProps(
        { ...child.props, "aria-describedby": labelId },
        child.ref,
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
          id={labelId}
          style={{
            border: "0px",
            clip: "rect(0px, 0px, 0px, 0px)",
            height: "1px",
            width: "1px",
            margin: "-1px",
            padding: "0px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute",
          }}
        >
          {label}
        </ui.span>

        <AnimatePresence>
          {isOpen ? (
            <Portal isDisabled={!withPortal} {...portalProps}>
              <ui.div
                {...getPopperProps()}
                zIndex={resolvedZIndex}
                pointerEvents="none"
              >
                <ui.div
                  as={motion.div}
                  ref={ref}
                  className={cx("ui-tooltip", className)}
                  role="tooltip"
                  style={{ transformOrigin }}
                  {...(animation !== "none"
                    ? getTooltipProps(animation, duration)
                    : {})}
                  initial="exit"
                  animate={isOpen ? "enter" : "exit"}
                  exit="exit"
                  __css={css}
                  {...rest}
                >
                  {label}
                </ui.div>
              </ui.div>
            </Portal>
          ) : null}
        </AnimatePresence>
      </>
    )
  },
)
