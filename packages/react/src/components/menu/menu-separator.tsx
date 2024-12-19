import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useMenu } from "./menu-context"

export interface MenuSeparatorProps extends HTMLUIProps<"hr"> {}

export const MenuSeparator = forwardRef<MenuSeparatorProps, "hr">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.divider, ...styles.separator }

    return (
      <ui.hr
        ref={ref}
        className={cx("ui-menu__separator", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

MenuSeparator.displayName = "MenuSeparator"
MenuSeparator.__ui__ = "MenuSeparator"
