import type { CSSUIObject } from "../../core"
import type { ModalHeaderProps } from "./modal-header"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { useDrawer } from "./modal-context"
import { ModalHeader } from "./modal-header"

export interface DrawerHeaderProps extends ModalHeaderProps {}

export const DrawerHeader = forwardRef<DrawerHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader
        ref={ref}
        className={cx("ui-drawer__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DrawerHeader.displayName = "DrawerHeader"
DrawerHeader.__ui__ = "DrawerHeader"
