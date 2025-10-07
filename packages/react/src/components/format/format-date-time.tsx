"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FormatDateTimeStyle } from "./format-date-time.style"
import type { FormatDateTimeOptions } from "./use-format-date-time"
import { createComponent, styled } from "../../core"
import { formatDateTimeStyle } from "./format-date-time.style"
import { useFormatDateTime } from "./use-format-date-time"

export interface FormatDateTimeProps
  extends HTMLStyledProps<"span">,
    ThemeProps<FormatDateTimeStyle>,
    FormatDateTimeOptions {
  /**
   * The date time to format
   */
  value: Date
}

const {
  PropsContext: FormatDateTimePropsContext,
  usePropsContext: useFormatDateTimePropsContext,
  withContext,
} = createComponent<FormatDateTimeProps, FormatDateTimeStyle>(
  "format-date-time",
  formatDateTimeStyle,
)

export { FormatDateTimePropsContext, useFormatDateTimePropsContext }

/**
 * `Format` is used to format dates, numbers, and bytes according to a specific locale.
 *
 * @see https://yamada-ui.com/docs/components/format
 */
export const FormatDateTime = withContext(
  ({
    calendar,
    dateStyle,
    day,
    dayPeriod,
    era,
    formatMatcher,
    fractionalSecondDigits,
    hour,
    hour12,
    hourCycle,
    locale,
    localeMatcher,
    minute,
    month,
    numberingSystem,
    second,
    timeStyle,
    timeZone,
    timeZoneName,
    value,
    weekday,
    year,
    ...rest
  }) => {
    const text = useFormatDateTime(value, {
      calendar,
      dateStyle,
      day,
      dayPeriod,
      era,
      formatMatcher,
      fractionalSecondDigits,
      hour,
      hour12,
      hourCycle,
      locale,
      localeMatcher,
      minute,
      month,
      numberingSystem,
      second,
      timeStyle,
      timeZone,
      timeZoneName,
      weekday,
      year,
    })

    return <styled.span {...rest}>{text}</styled.span>
  },
)()
