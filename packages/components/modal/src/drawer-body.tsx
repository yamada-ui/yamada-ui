import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ModalBodyProps } from "./modal-body"
import { ModalBody } from "./modal-body"
import { useDrawer } from "./modal-context"

export interface DrawerBodyProps extends ModalBodyProps {}

export const DrawerBody = forwardRef<DrawerBodyProps, "main">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.body }

    return (
      <ModalBody
        ref={ref}
        className={cx("ui-drawer__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DrawerBody.displayName = "DrawerBody"
DrawerBody.__ui__ = "DrawerBody"
