import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { cx, getValidChildren, findChildren } from "@yamada-ui/utils"
import type { PropsWithChildren } from "react"
import { DialogCloseButton } from "./dialog-close-button"
import type { ModalProps } from "./modal"
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
        custom: { scale: 0.95, reverse: true, duration },
      }
    case "top":
      return {
        ...slideFadeProps,
        custom: { offsetY: -16, reverse: true, duration },
      }
    case "right":
      return {
        ...slideFadeProps,
        custom: { offsetX: 16, reverse: true, duration },
      }
    case "left":
      return {
        ...slideFadeProps,
        custom: { offsetX: -16, reverse: true, duration },
      }
    case "bottom":
      return {
        ...slideFadeProps,
        custom: { offsetY: 16, reverse: true, duration },
      }
  }
}

export interface ModalContentProps
  extends Omit<
      MotionProps<"section">,
      "transition" | "scrollBehavior" | "animation" | "children"
    >,
    PropsWithChildren {}

export const ModalContent = motionForwardRef<ModalContentProps, "section">(
  ({ className, children, __css, ...rest }, ref) => {
    const {
      styles,
      scrollBehavior,
      withCloseButton,
      onClose,
      animation,
      duration,
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
      overflow: scrollBehavior === "inside" ? "hidden" : "auto",
      ...(__css ? __css : styles.container),
    }

    return (
      <motion.section
        role="dialog"
        aria-modal="true"
        ref={ref}
        className={cx("ui-modal", className)}
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
