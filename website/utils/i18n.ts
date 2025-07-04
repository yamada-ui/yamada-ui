import { CONSTANTS } from "@/constants"

export type Locale = (typeof CONSTANTS.I18N.LOCALES)[number]
export type Lang = Locale extends `${infer M}-${string}` ? M : never

export const langs = CONSTANTS.I18N.LOCALES.map(
  (locale) => locale.split("-")[0]!,
) as Lang[]

export function getLang(locale?: string) {
  return (locale?.split("-")[0] ??
    CONSTANTS.I18N.DEFAULT_LOCALE.split("-")[0]) as Lang
}

export function getLocale(lang?: string) {
  if (!lang) {
    return CONSTANTS.I18N.DEFAULT_LOCALE
  } else {
    return (
      CONSTANTS.I18N.LOCALES.find((locale) => locale.startsWith(lang)) ??
      CONSTANTS.I18N.DEFAULT_LOCALE
    )
  }
}
