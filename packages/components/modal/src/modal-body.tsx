import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalBodyProps extends HTMLUIProps {}

export const ModalBody = forwardRef<ModalBodyProps, "div">(
  ({ className, __css, ...rest }, ref) => {
    const { styles, scrollBehavior } = useModal()

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      overflow: scrollBehavior === "inside" ? "auto" : undefined,
      ...(__css ? __css : styles.body),
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-modal__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
