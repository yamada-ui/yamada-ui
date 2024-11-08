import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useModalContext } from "./modal-context"

export interface ModalBodyProps extends HTMLUIProps {}

export const ModalBody = forwardRef<ModalBodyProps, "div">(
  ({ className, __css, ...rest }, ref) => {
    const { describedbyId, scrollBehavior, styles } = useModalContext()

    const css: CSSUIObject = {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      overflow: scrollBehavior === "inside" ? "auto" : undefined,
      ...(__css ? __css : styles.body),
    }

    return (
      <ui.div
        id={describedbyId}
        ref={ref}
        className={cx("ui-modal__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

ModalBody.displayName = "ModalBody"
ModalBody.__ui__ = "ModalBody"
