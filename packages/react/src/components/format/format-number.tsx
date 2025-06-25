"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FormatNumberStyle } from "./format-number.style"
import { createComponent, styled } from "../../core"
import { formatNumberStyle } from "./format-number.style"
import { useFormatNumber } from "./use-format-number"

export interface FormatNumberProps
  extends Omit<HTMLStyledProps, "style">,
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
  "format-number",
  formatNumberStyle,
)

/**
 * `FormatNumber` is used to format numbers to a specific locale and options.
 *
 * @see https://yamada-ui.com/components/format-number
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

    return <styled.span {...rest}>{text}</styled.span>
  },
)()
