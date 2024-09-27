import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, findChildren, funcAll, getValidChildren } from "@yamada-ui/utils"
import { useMemo } from "react"
import type { PropsWithChildren } from "react"
import { usePopover } from "./popover"
import type { PopoverProps } from "./popover"
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
      containerProps,
      children,
      w,
      width,
      minW,
      minWidth,
      maxW,
      maxWidth,
      z,
      zIndex,
      __css,
      ...rest
    },
    ref,
  ) => {
    const {
      isOpen,
      closeOnButton,
      getPopperProps,
      getPopoverProps,
      onAnimationComplete,
      animation,
      duration,
      styles,
    } = usePopover()

    const validChildren = getValidChildren(children)
    const [customPopoverCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      PopoverCloseButton,
    )

    const Component = useMemo(() => motion(as), [as])

    const css = __css ?? styles.container ?? {}

    const computedCSS: CSSUIObject = {
      position: "relative",
      w: "100%",
      display: "flex",
      flexDirection: "column",
      outline: 0,
      ...css,
    }

    width ??= w
    width ??= (css?.width ?? css?.w) as CSSUIProps["width"]
    minWidth ??= minW
    minWidth ??= (css?.minWidth ?? css?.minW) as CSSUIProps["minWidth"]
    maxWidth ??= maxW
    maxWidth ??= (css?.maxWidth ?? css?.maxW) as CSSUIProps["maxWidth"]

    zIndex ??= z
    zIndex ??= (css?.zIndex ?? css?.z) as CSSUIProps["zIndex"]

    return (
      <ui.div
        {...getPopperProps({
          style: { visibility: isOpen ? "visible" : "hidden" },
        })}
        className="ui-popover"
        outline="none"
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        zIndex={zIndex}
        {...containerProps}
      >
        <Component
          className={cx("ui-popover__content", className)}
          {...(animation !== "none"
            ? getPopoverContentProps(animation, duration)
            : {})}
          {...getPopoverProps(rest, ref)}
          initial="exit"
          animate={isOpen ? "enter" : "exit"}
          exit="exit"
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
