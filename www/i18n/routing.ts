import { defineRouting } from "next-intl/routing"
import { CONSTANTS } from "@/constants"
import { getLang } from "@/utils/i18n"

export const routing = defineRouting({
  defaultLocale: CONSTANTS.I18N.DEFAULT_LOCALE,
  localePrefix: {
    mode: "as-needed",
    prefixes: Object.fromEntries(
      CONSTANTS.I18N.LOCALES.filter(
        (locale) => locale !== CONSTANTS.I18N.DEFAULT_LOCALE,
      ).map((locale) => [locale, `/${getLang(locale)}`]),
    ),
  },
  locales: CONSTANTS.I18N.LOCALES,
})
