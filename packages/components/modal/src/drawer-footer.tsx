import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useDrawer } from "./modal-context"
import type { ModalFooterProps } from "./modal-footer"
import { ModalFooter } from "./modal-footer"

export interface DrawerFooterProps extends ModalFooterProps {}

export const DrawerFooter = forwardRef<DrawerFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useDrawer()

    const css: CSSUIObject = { ...styles.footer }

    return (
      <ModalFooter
        ref={ref}
        className={cx("ui-drawer__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
