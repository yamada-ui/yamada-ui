"use client"

import type { Locale } from "../../providers/i18n-provider"
import type { AnyString } from "../../utils"
import { useCallback, useRef } from "react"
import { i18nCache, useI18n } from "../../providers/i18n-provider"

export const getFormatDateTime = i18nCache(Intl.DateTimeFormat)

export interface FormatDateTimeOptions extends Intl.DateTimeFormatOptions {
  /**
   * The locale string to use for formatting.
   *
   * @default 'en-US'
   */
  locale?: AnyString | Locale
}

/**
 * `useFormatDateTime` is a custom hook that returns the formatted date time.
 *
 * @see https://yamada-ui.com/docs/hooks/use-format-date-time
 */
export const useFormatDateTime = (
  value: Date,
  options?: FormatDateTimeOptions,
) => {
  const dateTimeFormat = useDateTimeFormat(options)

  return dateTimeFormat(value)
}

export type UseFormatDateTimeReturn = ReturnType<typeof useFormatDateTime>

export const useDateTimeFormat = ({
  locale,
  ...options
}: FormatDateTimeOptions = {}) => {
  const { locale: defaultLocale } = useI18n()
  const memoizedOptions = useRef(options)

  locale ??= defaultLocale

  const dateTimeFormat = useCallback(
    (value: Date, options?: Intl.DateTimeFormatOptions) => {
      const formatter = getFormatDateTime(locale, {
        ...memoizedOptions.current,
        ...options,
      })

      return formatter.format(value)
    },
    [locale],
  )

  return dateTimeFormat
}

export type UseDateTimeFormatReturn = ReturnType<typeof useDateTimeFormat>
