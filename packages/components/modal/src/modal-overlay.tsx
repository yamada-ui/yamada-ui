import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef } from "@yamada-ui/motion"
import { fadeProps } from "@yamada-ui/transitions"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalOverlayProps extends MotionProps {}

export const ModalOverlay = motionForwardRef<ModalOverlayProps, "div">(
  ({ className, __css, onClick, ...rest }, ref) => {
    const {
      styles,
      closeOnOverlay,
      onOverlayClick,
      onClose,
      animation,
      duration,
    } = useModal()

    const css: CSSUIObject = {
      ...(__css ? __css : styles.overlay),
    }

    const props = animation !== "none" ? fadeProps : {}

    return (
      <motion.div
        ref={ref}
        className={cx("ui-modal__overlay", className)}
        custom={{ duration }}
        __css={css}
        onClick={handlerAll(onClick, onOverlayClick, (ev) => {
          ev.stopPropagation()
          if (closeOnOverlay) onClose?.()
        })}
        {...props}
        {...rest}
      />
    )
  },
)
