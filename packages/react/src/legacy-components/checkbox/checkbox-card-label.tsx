import type { ReactElement } from "react"
import type { HTMLUIProps } from "../../core"
import { forwardRef } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useCheckboxCardContext } from "./checkbox-context"

export interface CheckboxCardLabelProps extends HTMLUIProps {
  /**
   * The icon of the checkbox card.
   */
  icon?: ReactElement
  /**
   * If `true`, the icon will be displayed.
   *
   * @default true
   */
  withIcon?: boolean
  /**
   * The props for the label content.
   */
  contentProps?: HTMLUIProps<"span">
  /**
   * The props for the icon.
   */
  iconProps?: HTMLUIProps
}

export const CheckboxCardLabel = forwardRef<CheckboxCardLabelProps, "div">(
  (
    {
      className,
      children,
      icon: iconProp,
      withIcon,
      contentProps,
      iconProps,
      ...rest
    },
    ref,
  ) => {
    const {
      icon,
      styles,
      withIcon: defaultWithIcon,
      getIconProps,
      iconProps: defaultIconProps,
    } = useCheckboxCardContext()

    withIcon ??= defaultWithIcon

    return (
      <ui.div
        ref={ref}
        className={cx("ui-checkbox-card__label", className)}
        __css={{ ...styles.label }}
        {...rest}
      >
        <ui.span
          className="ui-checkbox-card__label-content"
          __css={{ ...styles.labelContent }}
          {...contentProps}
        >
          {children}
        </ui.span>

        {withIcon ? (
          <ui.div
            className="ui-checkbox-card__icon"
            __css={{ ...styles.icon }}
            {...getIconProps({ ...defaultIconProps, ...iconProps })}
          >
            {iconProp ?? icon}
          </ui.div>
        ) : null}
      </ui.div>
    )
  },
)

CheckboxCardLabel.displayName = "CheckboxCardLabel"
CheckboxCardLabel.__ui__ = "CheckboxCardLabel"
