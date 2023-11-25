import type { HTMLUIProps, CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { HTMLMotionProps } from "@yamada-ui/motion"
import { motion } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import type { DOMAttributes } from "@yamada-ui/utils"
import {
  cx,
  findChildren,
  funcAll,
  getValidChildren,
  omitObject,
} from "@yamada-ui/utils"
import type { ReactNode, RefAttributes } from "react"
import { usePopover } from "./popover"
import type { PopoverProps } from "."
import { PopoverCloseButton } from "."

export type PopoverContentProps = Omit<
  HTMLUIProps<"section">,
  keyof Omit<HTMLMotionProps<"section">, "children">
> &
  Omit<
    HTMLMotionProps<"section">,
    | "color"
    | "style"
    | "onDrag"
    | "onDragEnd"
    | "onDragStart"
    | "onAnimationStart"
    | "variants"
    | "transition"
  >

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
      as = "section",
      className,
      children,
      w,
      width,
      minW,
      minWidth,
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

    const css: CSSUIObject = {
      position: "relative",
      w: "100%",
      display: "flex",
      flexDirection: "column",
      outline: 0,
      ...omitObject(__css ?? styles.container, ["zIndex"]),
    }

    w =
      w ??
      width ??
      ((styles.container?.w ?? styles.container?.width) as CSSUIProps["w"])
    minW =
      minW ??
      minWidth ??
      ((styles.container?.minW ??
        styles.container?.minWidth) as CSSUIProps["minW"])
    zIndex = (zIndex ?? styles.container?.zIndex) as CSSUIProps["zIndex"]

    return (
      <ui.div
        {...getPopperProps({
          style: { visibility: isOpen ? "visible" : "hidden" },
        })}
        className="ui-popover"
        w={w}
        minW={minW}
        zIndex={zIndex}
      >
        <ui.section
          as={motion[as as keyof typeof motion]}
          className={cx("ui-popover__content", className)}
          {...(animation !== "none"
            ? getPopoverContentProps(animation, duration)
            : {})}
          {...(getPopoverProps(
            {
              ...rest,
              children: resolvedChildren(),
            },
            ref,
          ) as Omit<DOMAttributes & RefAttributes<any>, "onDrag">)}
          initial="exit"
          animate={isOpen ? "enter" : "exit"}
          exit="exit"
          onAnimationComplete={funcAll(
            onAnimationComplete,
            rest.onAnimationComplete,
          )}
          __css={css}
        />
      </ui.div>
    )
  },
)
