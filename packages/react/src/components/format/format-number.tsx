import type { HTMLUIProps, ThemeProps } from "../../core"
import type { FormatNumberStyle } from "./format-number.style"
import { createComponent, ui } from "../../core"
import { formatNumberStyle } from "./format-number.style"
import { useFormatNumber } from "./use-format-number"

export interface FormatNumberProps
  extends Omit<HTMLUIProps, "style">,
    ThemeProps<FormatNumberStyle>,
    Intl.NumberFormatOptions {
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

export const {
  PropsContext: FormatNumberPropsContext,
  usePropsContext: useFormatNumberPropsContext,
  withContext,
} = createComponent<FormatNumberProps, FormatNumberStyle>(
  "formatNumber",
  formatNumberStyle,
)

/**
 * `FormatNumber` is used to format numbers to a specific locale and options.
 *
 * @see Docs https://yamada-ui.com/components/other/format-number
 */
export const FormatNumber = withContext<"span", FormatNumberProps>(
  ({
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
  }) => {
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

    return <ui.span {...rest}>{text}</ui.span>
  },
)()
