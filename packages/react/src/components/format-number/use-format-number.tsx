"use client"

import { i18nCache, useI18n } from "../../providers/i18n-provider"

const getNumberFormatter = i18nCache(Intl.NumberFormat)

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  locale?: string
}

/**
 * `useFormatNumber` is a custom hook that returns the formatted number.
 *
 * @see https://yamada-ui.com/hooks/use-format-number
 */
export const useFormatNumber = (
  value: number,
  { locale, ...options }: FormatNumberOptions = {},
) => {
  const { locale: defaultLocale } = useI18n()

  locale ??= defaultLocale

  const formatter = getNumberFormatter(locale, options)

  return formatter.format(value)
}

export type UseFormatNumberReturn = ReturnType<typeof useFormatNumber>
