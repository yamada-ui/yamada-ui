import type { CSSUIObject, CSSUIProps, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { ReactElement } from "react"
import type { TooltipOptions } from "./use-tooltip"
import { omitThemeProps, ui, useComponentStyle } from "@yamada-ui/core"
import { AnimatePresence, motion, motionForwardRef } from "@yamada-ui/motion"
import { Portal } from "@yamada-ui/portal"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx } from "@yamada-ui/utils"
import { Children, cloneElement, isValidElement } from "react"
import { useTooltip } from "./use-tooltip"

export interface TooltipProps
  extends Omit<MotionProps, "animation" | "offset">,
    ThemeProps<"Tooltip">,
    TooltipOptions {
  children: ReactElement
}

interface ChildProps {
  [key: string]: any
}

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
      duration,
      _label,
      offset: _offset,
      ...rest
    } = omitThemeProps(mergedProps)

    const { id, isOpen, transformOrigin, getPopperProps, getTriggerProps } =
      useTooltip({
        ...rest,
        _label,
        withPortal,
      })

    if (!_label) return children

    const child = Children.only(children) as ReactElement<ChildProps>
    if (!isValidElement(child)) {
      throw new Error("Tooltip children must be a valid React element")
    }

    const trigger = cloneElement(
      child,
      getTriggerProps(
        child.props as ChildProps,
        (child as { ref?: any } & ReactElement).ref,
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

    const motionProps =
      animation !== "none" ? getTooltipProps(animation, duration) : {}

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
          {_label}
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
                  {...motionProps}
                  animate="enter"
                  exit="exit"
                  initial="exit"
                  __css={css}
                >
                  {_label}
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
