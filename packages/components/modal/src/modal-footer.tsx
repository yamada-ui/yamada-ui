import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalFooterProps extends HTMLUIProps<"footer"> {}

export const ModalFooter = forwardRef<ModalFooterProps, "footer">(
  ({ className, __css, ...rest }, ref) => {
    const { styles } = useModal()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      ...(__css ? __css : styles.footer),
    }

    return (
      <ui.footer
        ref={ref}
        className={cx("ui-modal__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

ModalFooter.displayName = "ModalFooter"
ModalFooter.__ui__ = "ModalFooter"
