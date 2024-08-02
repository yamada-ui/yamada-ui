import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Motion } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, findChildren, funcAll, getValidChildren } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { usePopover } from "./popover"
import type { PopoverProps } from "."
import { PopoverCloseButton } from "."

export type PopoverContentProps = Omit<MotionProps<"section">, "children">

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

export const PopoverContent = forwardRef<PopoverContentProps, "section">(
  (
    {
      className,
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

    const resolvedChildren = (): ReactNode => {
      return (
        <>
          {customPopoverCloseButton ??
            (closeOnButton ? <PopoverCloseButton /> : null)}

          {cloneChildren}
        </>
      )
    }

    const popoverProps = { ...rest, children: resolvedChildren() }

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
      >
        <Motion
          as="section"
          className={cx("ui-popover__content", className)}
          {...(animation !== "none"
            ? getPopoverContentProps(animation, duration)
            : {})}
          {...getPopoverProps(popoverProps, ref)}
          initial="exit"
          animate={isOpen ? "enter" : "exit"}
          exit="exit"
          onAnimationComplete={funcAll(
            onAnimationComplete,
            rest.onAnimationComplete,
          )}
          __css={computedCSS}
        />
      </ui.div>
    )
  },
)
