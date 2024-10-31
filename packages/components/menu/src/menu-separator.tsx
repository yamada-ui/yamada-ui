import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMenu } from "./menu-context"

export interface MenuSeparatorProps extends HTMLUIProps<"hr"> {}

export const MenuSeparator = forwardRef<MenuSeparatorProps, "hr">(
  ({ className, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.separator }

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
