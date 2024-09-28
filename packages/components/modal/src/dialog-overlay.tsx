import type { CSSUIObject } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useDialog } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"
import type { ModalOverlayProps } from "./modal-overlay"

export interface DialogOverlayProps extends ModalOverlayProps {}

export const DialogOverlay = motionForwardRef<DialogOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx("ui-dialog__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DialogOverlay.displayName = "DialogOverlay"
DialogOverlay.__ui__ = "DialogOverlay"
