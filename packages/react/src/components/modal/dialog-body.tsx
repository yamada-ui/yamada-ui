import type { CSSUIObject } from "../../core"
import type { ModalBodyProps } from "./modal-body"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { ModalBody } from "./modal-body"
import { useDialog } from "./modal-context"

export interface DialogBodyProps extends ModalBodyProps {}

export const DialogBody = forwardRef<DialogBodyProps, "main">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.body }

    return (
      <ModalBody
        ref={ref}
        className={cx("ui-dialog__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DialogBody.displayName = "DialogBody"
DialogBody.__ui__ = "DialogBody"
