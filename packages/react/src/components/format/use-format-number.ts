"use client"

import type { Locale } from "../../providers/i18n-provider"
import type { AnyString } from "../../utils"
import { useCallback, useRef } from "react"
import { i18nCache, useI18n } from "../../providers/i18n-provider"

export const getFormatNumber = i18nCache(Intl.NumberFormat)

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  /**
   * The locale string to use for formatting.
   *
   * @default 'en-US'
   */
  locale?: AnyString | Locale
}

/**
 * `useFormatNumber` is a custom hook that returns the formatted number.
 *
 * @see https://yamada-ui.com/docs/hooks/use-format-number
 */
export const useFormatNumber = (
  value: number,
  options?: FormatNumberOptions,
) => {
  const numberFormat = useNumberFormat(options)

  return numberFormat(value)
}

export type UseFormatNumberReturn = ReturnType<typeof useFormatNumber>

export const useNumberFormat = ({
  locale,
  ...options
}: FormatNumberOptions = {}) => {
  const { locale: defaultLocale } = useI18n()
  const memoizedOptions = useRef(options)

  locale ??= defaultLocale

  const numberFormat = useCallback(
    (value: number, options?: Intl.NumberFormatOptions) => {
      const formatter = getFormatNumber(locale, {
        ...memoizedOptions.current,
        ...options,
      })

      return formatter.format(value)
    },
    [locale],
  )

  return numberFormat
}

export type UseNumberFormatReturn = ReturnType<typeof useNumberFormat>
