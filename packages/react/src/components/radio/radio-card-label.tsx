import type { HTMLUIProps } from "../../core"
import { forwardRef } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useRadioCardContext } from "./radio-context"

export interface RadioCardLabelProps extends HTMLUIProps {
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

export const RadioCardLabel = forwardRef<RadioCardLabelProps, "div">(
  (
    { className, children, withIcon, contentProps, iconProps, ...rest },
    ref,
  ) => {
    const {
      styles,
      withIcon: defaultWithIcon,
      getIconProps,
      iconProps: defaultIconProps,
    } = useRadioCardContext()

    withIcon ??= defaultWithIcon

    return (
      <ui.div
        ref={ref}
        className={cx("ui-radio-card__label", className)}
        __css={{ ...styles.label }}
        {...rest}
      >
        <ui.span
          className="ui-radio-card__label-content"
          __css={{ ...styles.labelContent }}
          {...contentProps}
        >
          {children}
        </ui.span>

        {withIcon ? (
          <ui.div
            className="ui-radio-card__icon"
            __css={{ ...styles.icon }}
            {...getIconProps({ ...defaultIconProps, ...iconProps })}
          />
        ) : null}
      </ui.div>
    )
  },
)

RadioCardLabel.displayName = "RadioCardLabel"
RadioCardLabel.__ui__ = "RadioCardLabel"
