import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMenu } from "./menu-context"

export interface MenuDividerProps extends HTMLUIProps<"hr"> {}

export const MenuDivider = forwardRef<MenuDividerProps, "hr">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.divider }

    return (
      <ui.hr
        ref={ref}
        className={cx("ui-menu__divider", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

MenuDivider.displayName = "MenuDivider"
MenuDivider.__ui__ = "MenuDivider"
