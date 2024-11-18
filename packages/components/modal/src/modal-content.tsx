import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import type { PropsWithChildren } from "react"
import type { ModalProps } from "./modal"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, findChildren, getValidChildren } from "@yamada-ui/utils"
import { DialogCloseButton } from "./dialog-close-button"
import { ModalCloseButton } from "./modal-close-button"
import { useModal } from "./modal-context"

const getModalContentProps = (
  animation: ModalProps["animation"] = "scale",
  duration?: MotionTransitionProps["duration"],
) => {
  switch (animation) {
    case "scale":
      return {
        ...scaleFadeProps,
        custom: { duration, reverse: true, scale: 0.95 },
      }
    case "top":
      return {
        ...slideFadeProps,
        custom: { duration, offsetY: -16, reverse: true },
      }
    case "right":
      return {
        ...slideFadeProps,
        custom: { duration, offsetX: 16, reverse: true },
      }
    case "left":
      return {
        ...slideFadeProps,
        custom: { duration, offsetX: -16, reverse: true },
      }
    case "bottom":
      return {
        ...slideFadeProps,
        custom: { duration, offsetY: 16, reverse: true },
      }
  }
}

export interface ModalContentProps
  extends Omit<
      MotionProps<"section">,
      "animation" | "children" | "scrollBehavior" | "transition"
    >,
    PropsWithChildren {}

export const ModalContent = motionForwardRef<ModalContentProps, "section">(
  ({ className, children, __css, ...rest }, ref) => {
    const {
      animation,
      bodyRef,
      duration,
      headerRef,
      scrollBehavior,
      styles,
      withCloseButton,
      onClose,
    } = useModal()

    const validChildren = getValidChildren(children)

    const [customModalCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      ModalCloseButton,
      DialogCloseButton,
    )

    const props =
      animation !== "none" ? getModalContentProps(animation, duration) : {}

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      maxH: "100%",
      outline: 0,
      overflow: scrollBehavior === "inside" ? "hidden" : "auto",
      position: "relative",
      ...(__css ? __css : styles.container),
    }

    return (
      <motion.section
        ref={ref}
        className={cx("ui-modal", className)}
        aria-describedby={bodyRef.current?.id}
        aria-labelledby={headerRef.current?.id}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        __css={css}
        {...props}
        {...rest}
      >
        {customModalCloseButton ??
          (withCloseButton && onClose ? <ModalCloseButton /> : null)}

        {cloneChildren}
      </motion.section>
    )
  },
)

ModalContent.displayName = "ModalContent"
ModalContent.__ui__ = "ModalContent"
