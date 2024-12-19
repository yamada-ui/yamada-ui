import type { PropsWithChildren } from "react"
import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import type { MotionPropsWithoutChildren } from "../motion"
import type { PopoverProps } from "./popover"
import { ui } from "../../core"
import { cx, findChildren, funcAll, getValidChildren } from "../../utils"
import { motion } from "../motion"
import { scaleFadeProps, slideFadeProps } from "../transitions"
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

export const PopoverContent: FC<PopoverContentProps> = ({
  ref,
  className,
  children,
  maxW,
  maxWidth = maxW,
  minW,
  minWidth = minW,
  w,
  width = w,
  z,
  zIndex = z,
  containerProps,
  __css,
  ...rest
}) => {
  const {
    animation,
    closeOnButton,
    duration,
    open,
    shouldRenderContent,
    styles,
    getPopoverProps,
    getPopperProps,
    onAnimationComplete,
  } = usePopover()

  if (!shouldRenderContent) return null

  const validChildren = getValidChildren(children)
  const [customPopoverCloseButton, ...cloneChildren] = findChildren(
    validChildren,
    PopoverCloseButton,
  )
  const css = __css ?? styles.container ?? {}
  const computedCSS: CSSUIObject = {
    display: "flex",
    flexDirection: "column",
    outline: 0,
    position: "relative",
    w: "100%",
    ...css,
  }

  width ??= (css.width ?? css.w) as CSSUIProps["width"]
  minWidth ??= (css.minWidth ?? css.minW) as CSSUIProps["minWidth"]
  maxWidth ??= (css.maxWidth ?? css.maxW) as CSSUIProps["maxWidth"]
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
      <motion.section
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
      </motion.section>
    </ui.div>
  )
}

PopoverContent.__ui__ = "PopoverContent"
