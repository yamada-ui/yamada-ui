import type { CSSUIObject, FC } from "../../core"
import type { ModalOverlayProps } from "./modal-overlay"
import { cx } from "../../utils"
import { useDialog } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"

export interface DialogOverlayProps extends ModalOverlayProps {}

export const DialogOverlay: FC<DialogOverlayProps> = ({
  className,
  ...rest
}) => {
  const styles = useDialog()

  const css: CSSUIObject = { ...styles.overlay }

  return (
    <ModalOverlay
      className={cx("ui-dialog__overlay", className)}
      __css={css}
      {...rest}
    />
  )
}

DialogOverlay.__ui__ = "DialogOverlay"
