import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMenu } from "./menu"

export type MenuDividerProps = HTMLUIProps<"hr">

export const MenuDivider = forwardRef(({ className, ...rest }, ref) => {
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
})
