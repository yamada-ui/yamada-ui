import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import type {
  UIMotionComponent,
  MotionPropsWithoutChildren,
} from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, findChildren, funcAll, getValidChildren } from "@yamada-ui/utils"
import { useMemo } from "react"
import type { PropsWithChildren } from "react"
import { usePopover } from "./popover"
import type { PopoverProps } from "."
import { PopoverCloseButton } from "."

export type PopoverContentProps = MotionPropsWithoutChildren<"section"> &
  PropsWithChildren & {
    /**
     * The props of the container element.
     */
    containerProps?: Omit<HTMLUIProps<"div">, "children">
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

    const Component = useMemo(
      () => motion(as) as unknown as UIMotionComponent<"section">,
      [as],
    )

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

    zIndex ??= z
    zIndex ??= (css?.zIndex ?? css?.z) as CSSUIProps["zIndex"]

    return (
      <ui.div
        {...getPopperProps({
          style: { visibility: isOpen ? "visible" : "hidden" },
        })}
        className="ui-popover"
        width={width}
        minWidth={minWidth}
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
