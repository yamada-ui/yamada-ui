import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { fadeProps } from "@yamada-ui/transitions"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalOverlayProps extends MotionProps {}

export const ModalOverlay = motionForwardRef<ModalOverlayProps, "div">(
  ({ className, onClick, __css, ...rest }, ref) => {
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
        ref={ref}
        className={cx("ui-modal__overlay", className)}
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
  },
)

ModalOverlay.displayName = "ModalOverlay"
ModalOverlay.__ui__ = "ModalOverlay"
