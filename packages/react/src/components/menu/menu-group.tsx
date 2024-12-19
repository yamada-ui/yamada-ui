import type { CSSUIObject, HTMLUIProps } from "../../core"
import { useId } from "react"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useMenu } from "./menu-context"

export interface MenuGroupProps extends HTMLUIProps {
  /**
   * The label of the group.
   */
  label?: string
  /**
   * Props for menu group element.
   */
  labelProps?: HTMLUIProps<"header">
}

export const MenuGroup = forwardRef<MenuGroupProps, "div">(
  ({ className, children, label, labelProps, ...rest }, ref) => {
    const { styles } = useMenu()
    const id = useId()
    const labelId = labelProps?.id ?? id

    const css: CSSUIObject = { ...styles.group }

    return (
      <ui.section
        ref={ref}
        className={cx("ui-menu__item", "ui-menu__item--group", className)}
        aria-labelledby={labelId}
        role="group"
        __css={css}
        {...rest}
      >
        {label ? (
          <ui.header
            className={cx("ui-menu__item--group-label")}
            role="presentation"
            __css={styles.groupLabel}
            {...labelProps}
            id={labelId}
          >
            {label}
          </ui.header>
        ) : null}

        <ui.div className="ui-menu__item__group">{children}</ui.div>
      </ui.section>
    )
  },
)

MenuGroup.displayName = "MenuGroup"
MenuGroup.__ui__ = "MenuGroup"
