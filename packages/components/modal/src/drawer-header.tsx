import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useDrawer } from "./modal-context"
import type { ModalHeaderProps } from "./modal-header"
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
