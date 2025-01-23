import type { CSSUIObject, FC } from "../../core"
import type { ModalOverlayProps } from "./modal-overlay"
import { cx } from "../../utils"
import { useDrawer } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"

export interface DrawerOverlayProps extends ModalOverlayProps {}

export const DrawerOverlay: FC<DrawerOverlayProps> = ({
  className,
  ...rest
}) => {
  const styles = useDrawer()

  const css: CSSUIObject = { ...styles.overlay }

  return (
    <ModalOverlay
      className={cx("ui-drawer__overlay", className)}
      __css={css}
      {...rest}
    />
  )
}

DrawerOverlay.__ui__ = "DrawerOverlay"
