import type { CSSUIObject, HTMLUIProps, ThemeProps } from "../../core"
import { forwardRef, omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"
import { useFormatNumber } from "./use-format-number"

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  /**
   * The numeric value to be formatted.
   */
  value: number
  /**
   * The locale string to use for formatting.
   * @default 'en-US'
   */
  locale?: string
}

export interface FormatNumberProps
  extends Omit<HTMLUIProps, "style">,
    ThemeProps<"FormatNumber">,
    FormatNumberOptions {}

/**
 * `FormatNumber` is used to format numbers to a specific locale and options.
 *
 * @see Docs https://yamada-ui.com/components/other/format-number
 */
export const FormatNumber = forwardRef<FormatNumberProps, "span">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentStyle("FormatNumber", props)
    const {
      className,
      style,
      compactDisplay,
      currency,
      currencyDisplay,
      currencySign,
      locale,
      localeMatcher,
      maximumFractionDigits,
      maximumSignificantDigits,
      minimumFractionDigits,
      minimumIntegerDigits,
      minimumSignificantDigits,
      notation,
      numberingSystem,
      roundingIncrement,
      roundingMode,
      roundingPriority,
      signDisplay,
      trailingZeroDisplay,
      unit,
      unitDisplay,
      useGrouping,
      value,
      ...rest
    } = omitThemeProps(mergedProps)

    const text = useFormatNumber(value, {
      style,
      compactDisplay,
      currency,
      currencyDisplay,
      currencySign,
      locale,
      localeMatcher,
      maximumFractionDigits,
      maximumSignificantDigits,
      minimumFractionDigits,
      minimumIntegerDigits,
      minimumSignificantDigits,
      notation,
      numberingSystem,
      roundingIncrement,
      roundingMode,
      roundingPriority,
      signDisplay,
      trailingZeroDisplay,
      unit,
      unitDisplay,
      useGrouping,
    })

    const css: CSSUIObject = {
      ...styles,
    }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-format-number", className)}
        __css={css}
        {...rest}
      >
        {text}
      </ui.span>
    )
  },
)

FormatNumber.displayName = "FormatNumber"
FormatNumber.__ui__ = "FormatNumber"
