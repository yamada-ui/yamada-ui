import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, mergeRefs } from "../../utils"
import { useModal } from "./modal-context"

export interface ModalBodyProps extends HTMLUIProps {}

export const ModalBody = forwardRef<ModalBodyProps, "div">(
  ({ className, __css, ...rest }, ref) => {
    const { bodyRef, scrollBehavior, styles } = useModal()

    const css: CSSUIObject = {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      overflow: scrollBehavior === "inside" ? "auto" : undefined,
      ...(__css ? __css : styles.body),
    }

    return (
      <ui.div
        ref={mergeRefs(bodyRef, ref)}
        className={cx("ui-modal__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

ModalBody.displayName = "ModalBody"
ModalBody.__ui__ = "ModalBody"
