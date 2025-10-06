"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FormatNumberStyle } from "./format-number.style"
import type { FormatNumberOptions } from "./use-format-number"
import { createComponent, styled } from "../../core"
import { formatNumberStyle } from "./format-number.style"
import { useFormatNumber } from "./use-format-number"

export interface FormatNumberProps
  extends Omit<HTMLStyledProps<"span">, "style">,
    ThemeProps<FormatNumberStyle>,
    FormatNumberOptions {
  /**
   * The numeric value to be formatted.
   */
  value: number
}

const {
  PropsContext: FormatNumberPropsContext,
  usePropsContext: useFormatNumberPropsContext,
  withContext,
} = createComponent<FormatNumberProps, FormatNumberStyle>(
  "format-number",
  formatNumberStyle,
)

export { FormatNumberPropsContext, useFormatNumberPropsContext }

/**
 * `Format` is used to format dates, numbers, and bytes according to a specific locale.
 *
 * @see https://yamada-ui.com/docs/components/format
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
