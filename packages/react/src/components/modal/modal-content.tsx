import type { PropsWithChildren } from "react"
import type { CSSUIObject, FC } from "../../core"
import type { MotionProps, MotionTransitionProps } from "../motion"
import type { ModalProps } from "./modal"
import { cx, findChildren, getValidChildren } from "../../utils"
import { motion } from "../motion"
import { scaleFadeProps, slideFadeProps } from "../transitions"
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

export const ModalContent: FC<ModalContentProps> = ({
  className,
  children,
  __css,
  ...rest
}) => {
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
}

ModalContent.__ui__ = "ModalContent"
