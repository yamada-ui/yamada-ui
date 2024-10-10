import type { CSSUIObject } from "@yamada-ui/core"
import type { ModalOverlayProps } from "./modal-overlay"
import { motionForwardRef } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useDrawer } from "./modal-context"
import { ModalOverlay } from "./modal-overlay"

export interface DrawerOverlayProps extends ModalOverlayProps {}

export const DrawerOverlay = motionForwardRef<DrawerOverlayProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.overlay }

    return (
      <ModalOverlay
        ref={ref}
        className={cx("ui-drawer__overlay", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DrawerOverlay.displayName = "DrawerOverlay"
DrawerOverlay.__ui__ = "DrawerOverlay"
