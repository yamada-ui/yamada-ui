import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useDrawer } from "./modal-context"

export interface DrawerDragBarProps extends HTMLUIProps {}

export const DrawerDragBar = forwardRef<DrawerDragBarProps, "div">(
  ({ className, __css, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.dragBar }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-drawer__drag-bar", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DrawerDragBar.displayName = "DrawerDragBar"
DrawerDragBar.__ui__ = "DrawerDragBar"
