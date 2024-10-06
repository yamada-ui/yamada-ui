import type { CSSUIObject } from "@yamada-ui/core"
import type { ModalBodyProps } from "./modal-body"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
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
