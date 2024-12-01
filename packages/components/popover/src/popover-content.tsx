import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import type { PropsWithChildren } from "react"
import type { PopoverProps } from "./popover"
import { ui } from "@yamada-ui/core"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, findChildren, funcAll, getValidChildren } from "@yamada-ui/utils"
import { useMemo } from "react"
import { usePopover } from "./popover"
import { PopoverCloseButton } from "./popover-close-button"

export interface PopoverContentProps
  extends MotionPropsWithoutChildren<"section">,
    PropsWithChildren {
  /**
   * The props of the container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
}

const getPopoverContentProps = (
  animation: PopoverProps["animation"] = "scale",
  duration?: PopoverProps["duration"],
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
        custom: { ...custom, offsetX: 0, offsetY: -16 },
      }
    case "right":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 16, offsetY: 0 },
      }
    case "left":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: -16, offsetY: 0 },
      }
    case "bottom":
      return {
        ...slideFadeProps,
        custom: { ...custom, offsetX: 0, offsetY: 16 },
      }
  }
}

export const PopoverContent = motionForwardRef<PopoverContentProps, "section">(
  (
    {
      as = "section",
      className,
      children,
      maxW,
      maxWidth,
      minW,
      minWidth,
      w,
      width,
      z,
      zIndex,
      containerProps,
      __css,
      ...rest
    },
    ref,
  ) => {
    let {
      animation,
      closeOnButton,
      duration,
      isOpen,
      open,
      styles,
      getPopoverProps,
      getPopperProps,
      onAnimationComplete,
    } = usePopover()

    open ??= isOpen

    const validChildren = getValidChildren(children)
    const [customPopoverCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      PopoverCloseButton,
    )

    const Component = useMemo(() => motion(as), [as])

    const css = __css ?? styles.container ?? {}

    const computedCSS: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      outline: 0,
      position: "relative",
      w: "100%",
      ...css,
    }

    width ??= w
    width ??= (css.width ?? css.w) as CSSUIProps["width"]
    minWidth ??= minW
    minWidth ??= (css.minWidth ?? css.minW) as CSSUIProps["minWidth"]
    maxWidth ??= maxW
    maxWidth ??= (css.maxWidth ?? css.maxW) as CSSUIProps["maxWidth"]

    zIndex ??= z
    zIndex ??= (css.zIndex ?? css.z) as CSSUIProps["zIndex"]

    return (
      <ui.div
        {...getPopperProps({
          style: { visibility: open ? "visible" : "hidden" },
        })}
        className="ui-popover"
        maxWidth={maxWidth}
        minWidth={minWidth}
        outline="none"
        width={width}
        zIndex={zIndex}
        {...containerProps}
      >
        <Component
          className={cx("ui-popover__content", className)}
          {...(animation !== "none"
            ? getPopoverContentProps(animation, duration)
            : {})}
          {...getPopoverProps(rest, ref)}
          animate={open ? "enter" : "exit"}
          exit="exit"
          initial="exit"
          onAnimationComplete={funcAll(
            onAnimationComplete,
            rest.onAnimationComplete,
          )}
          __css={computedCSS}
        >
          {customPopoverCloseButton ??
            (closeOnButton ? <PopoverCloseButton /> : null)}

          {cloneChildren}
        </Component>
      </ui.div>
    )
  },
)

PopoverContent.displayName = "PopoverContent"
PopoverContent.__ui__ = "PopoverContent"
