import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMenu } from "./menu"

export type MenuGroupProps = HTMLUIProps<"div"> & {
  /**
   * The label of the group.
   */
  label?: string
}

export const MenuGroup = forwardRef<MenuGroupProps, "div">(
  ({ className, label, children, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.group }

    return (
      <ui.li
        ref={ref}
        className={cx("ui-menu__item", "ui-menu__item--group", className)}
        role="group"
        __css={css}
        {...rest}
      >
        {label ? (
          <ui.span
            className={cx("ui-menu__group-label")}
            __css={styles.groupLabel}
          >
            {label}
          </ui.span>
        ) : null}

        <ui.ul className="ui-menu__group">{children}</ui.ul>
      </ui.li>
    )
  },
)
