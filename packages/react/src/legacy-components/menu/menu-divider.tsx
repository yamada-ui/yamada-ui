import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useMenu } from "./menu-context"

/**
 * @deprecated Use `MenuSeparatorProps` instead.
 */
export interface MenuDividerProps extends HTMLUIProps<"hr"> {}

/**
 * @deprecated Use `MenuSeparator` instead.
 */
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
