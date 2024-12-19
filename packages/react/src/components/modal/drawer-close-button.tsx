import type { CSSUIObject } from "../../core"
import type { ModalCloseButtonProps } from "./modal-close-button"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { ModalCloseButton } from "./modal-close-button"
import { useDrawer } from "./modal-context"

export interface DrawerCloseButtonProps extends ModalCloseButtonProps {}

export const DrawerCloseButton = forwardRef<DrawerCloseButtonProps, "button">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.closeButton }

    return (
      <ModalCloseButton
        ref={ref}
        className={cx("ui-drawer__close-button", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DrawerCloseButton.displayName = "DrawerCloseButton"
DrawerCloseButton.__ui__ = "DrawerCloseButton"
