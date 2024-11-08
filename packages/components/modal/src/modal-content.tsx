import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PropsWithChildren } from "react"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { ModalCloseButton } from "./modal-close-button"
import { useModalContext } from "./modal-context"
import { useModalContent } from "./use-modal-content"

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
      describedbyId,
      duration,
      labelledbyId,
      scrollBehavior,
      styles,
      withCloseButton,
      onClose,
    } = useModalContext()

    const { cloneChildren, customModalCloseButton, computedModalContentProps } =
      useModalContent({ animation, children, duration })

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
        aria-describedby={describedbyId}
        aria-labelledby={labelledbyId}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        __css={css}
        {...computedModalContentProps}
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
