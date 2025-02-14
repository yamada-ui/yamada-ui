import type { CSSUIObject } from "../../core"
import type { CloseButtonProps } from "../close-button"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { ModalCloseButton } from "./modal-close-button"
import { useDialog } from "./modal-context"

export interface DialogCloseButtonProps extends CloseButtonProps {}

export const DialogCloseButton = forwardRef<DialogCloseButtonProps, "button">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx("ui-dialog__close-button", className)}
        aria-label="Close dialog"
        __css={css}
        {...rest}
      />
    )
  },
)

DialogCloseButton.displayName = "DialogCloseButton"
DialogCloseButton.__ui__ = "DialogCloseButton"
