import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMenu } from "./menu-context"

export interface MenuGroupProps extends HTMLUIProps<"li"> {
  /**
   * The label of the group.
   */
  label?: string
  /**
   * Props for menu group element.
   */
  labelProps?: HTMLUIProps<"span">
}

export const MenuGroup = forwardRef<MenuGroupProps, "li">(
  ({ className, children, label, labelProps, ...rest }, ref) => {
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
            className={cx("ui-menu__item--group-label")}
            __css={styles.groupLabel}
            {...labelProps}
          >
            {label}
          </ui.span>
        ) : null}

        <ui.ul className="ui-menu__item__group">{children}</ui.ul>
      </ui.li>
    )
  },
)
