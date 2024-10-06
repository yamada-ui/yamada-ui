import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalHeaderProps extends HTMLUIProps<"header"> {}

export const ModalHeader = forwardRef<ModalHeaderProps, "header">(
  ({ className, __css, ...rest }, ref) => {
    const { styles } = useModal()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
      ...(__css ? __css : styles.header),
    }

    return (
      <ui.header
        ref={ref}
        className={cx("ui-modal__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

ModalHeader.displayName = "ModalHeader"
ModalHeader.__ui__ = "ModalHeader"
