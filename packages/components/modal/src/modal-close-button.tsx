import type { CloseButtonProps } from "@yamada-ui/close-button"
import type { CSSUIObject } from "@yamada-ui/core"
import { CloseButton } from "@yamada-ui/close-button"
import { forwardRef } from "@yamada-ui/core"
import { cx, handlerAll } from "@yamada-ui/utils"
import { useModal } from "./modal-context"

export interface ModalCloseButtonProps extends CloseButtonProps {}

export const ModalCloseButton = forwardRef<ModalCloseButtonProps, "button">(
  ({ onClick, __css, ...rest }, ref) => {
    const { styles, onClose } = useModal()

    const css: CSSUIObject = {
      position: "absolute",
      ...(__css ? __css : styles.closeButton),
    }

    return (
      <CloseButton
        ref={ref}
        className={cx("ui-modal__close-button")}
        aria-label="Close modal"
        onClick={handlerAll(onClick, (ev) => {
          ev.stopPropagation()
          onClose?.()
        })}
        __css={css}
        {...rest}
      />
    )
  },
)

ModalCloseButton.displayName = "ModalCloseButton"
ModalCloseButton.__ui__ = "ModalCloseButton"
