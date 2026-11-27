"use client"

import { useLocale as useLocaleNextIntl } from "next-intl"
import { getLang } from "@/utils/i18n"

export function useLocale() {
  const locale = useLocaleNextIntl()
  const lang = getLang(locale)

  return { lang, locale }
}
