import type { CSSUIObject } from "../../core"
import type { ModalFooterProps } from "./modal-footer"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { useDialog } from "./modal-context"
import { ModalFooter } from "./modal-footer"

export interface DialogFooterProps extends ModalFooterProps {}

export const DialogFooter = forwardRef<DialogFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter
        ref={ref}
        className={cx("ui-dialog__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DialogFooter.displayName = "DialogFooter"
DialogFooter.__ui__ = "DialogFooter"
