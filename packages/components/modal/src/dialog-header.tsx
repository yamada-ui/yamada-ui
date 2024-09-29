import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useDialog } from "./modal-context"
import type { ModalHeaderProps } from "./modal-header"
import { ModalHeader } from "./modal-header"

export interface DialogHeaderProps extends ModalHeaderProps {}

export const DialogHeader = forwardRef<DialogHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader
        ref={ref}
        className={cx("ui-dialog__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DialogHeader.displayName = "DialogHeader"
DialogHeader.__ui__ = "DialogHeader"
