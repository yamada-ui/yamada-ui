import type { ReactNode } from "react"
import type { HTMLUIProps } from "../../core"
import { forwardRef, ui, useComponentMultiStyle } from "../../core"
import { cx, dataAttr } from "../../utils"

interface StrengthMeterIndicatorProps extends HTMLUIProps {
  label?: ReactNode
}

const getDefaultStrengthMeterIndicatorProps = (
  percent: number,
): StrengthMeterIndicatorProps => {
  switch (true) {
    case percent < 33:
      return { label: "Low", _selected: { bg: "red.500" } }
    case percent < 66:
      return { label: "Medium", _selected: { bg: "orange.500" } }
    default:
      return { label: "High", _selected: { bg: "green.500" } }
  }
}

interface PasswordInputStrengthMeterOptions {
  /**
   * The value of the password strength meter.
   */
  value: number
  /**
   * The maximum value of the password strength meter.
   *
   * @default 4
   */
  max?: number
  /**
   * If `true`, the password strength meter will display the label.
   *
   * @default true
   */
  withLabel?: boolean
  /**
   * The props of the password strength meter indicator.
   */
  getStrengthMeterIndicatorProps?: (
    percent: number,
  ) => StrengthMeterIndicatorProps
}

export interface PasswordInputStrengthMeterProps
  extends HTMLUIProps,
    PasswordInputStrengthMeterOptions {}

export const PasswordInputStrengthMeter = forwardRef<
  PasswordInputStrengthMeterProps,
  "div"
>((props, ref) => {
  const [
    styles,
    {
      className,
      max = 4,
      value,
      withLabel = true,
      getStrengthMeterIndicatorProps = getDefaultStrengthMeterIndicatorProps,
      ...rest
    },
  ] = useComponentMultiStyle("PasswordInput", props)

  const percent = (value / max) * 100

  const { label, ...indicatorProps } = getStrengthMeterIndicatorProps(percent)

  return (
    <ui.div
      ref={ref}
      className={cx("ui-password-input__strength-meter", className)}
      aria-label="Password strength meter"
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={value}
      role="meter"
      __css={{ ...styles.strengthMeter }}
      {...rest}
    >
      <ui.div
        ref={ref}
        className="ui-password-input__strength-meter-indicators"
        __css={{ ...styles.strengthMeterIndicators }}
        {...rest}
      >
        {Array.from({ length: max }).map((_, index) => (
          <ui.div
            key={index}
            data-selected={dataAttr(index < value)}
            __css={{ ...styles.strengthMeterIndicator }}
            {...indicatorProps}
          />
        ))}
      </ui.div>

      {withLabel && label ? (
        <ui.span __css={{ ...styles.strengthMeterLabel }}>{label}</ui.span>
      ) : null}
    </ui.div>
  )
})

PasswordInputStrengthMeter.displayName = "PasswordInputStrengthMeter"
PasswordInputStrengthMeter.__ui__ = "PasswordInputStrengthMeter"
