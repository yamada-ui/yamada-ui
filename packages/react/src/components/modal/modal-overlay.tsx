import type { CSSUIObject, FC } from "../../core"
import type { MotionProps } from "../motion"
import { cx, handlerAll } from "../../utils"
import { motion } from "../motion"
import { fadeProps } from "../transitions"
import { useModal } from "./modal-context"

export interface ModalOverlayProps extends MotionProps {}

export const ModalOverlay: FC<ModalOverlayProps> = ({
  className,
  onClick,
  __css,
  ...rest
}) => {
  const {
    animation,
    closeOnOverlay,
    duration,
    styles,
    onClose,
    onOverlayClick,
  } = useModal()

  const css: CSSUIObject = {
    h: "100dvh",
    left: 0,
    position: "fixed",
    top: 0,
    w: "100vw",
    ...(__css ? __css : styles.overlay),
  }

  const props = animation !== "none" ? fadeProps : {}

  return (
    <motion.div
      className={cx("ui-modal__overlay", className)}
      aria-hidden
      custom={{ duration }}
      onClick={handlerAll(onClick, onOverlayClick, (ev) => {
        ev.stopPropagation()
        if (closeOnOverlay) onClose?.()
      })}
      __css={css}
      {...props}
      {...rest}
    />
  )
}

ModalOverlay.__ui__ = "ModalOverlay"
