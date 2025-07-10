import { CONSTANT } from "../constant"
import CONTENT_EN from "../i18n/content.en.json"
import CONTENT_JA from "../i18n/content.ja.json"
import UI_EN from "../i18n/ui.en.json"
import UI_JA from "../i18n/ui.ja.json"

export type Locale = (typeof locales)[number]

export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

export const otherLocales = CONSTANT.I18N.LOCALES.map(
  ({ value }) => value,
).filter((locale) => locale !== CONSTANT.I18N.DEFAULT_LOCALE)

export type UI = typeof UI_EN

export const ui = { en: UI_EN, ja: UI_JA }
export const contents = { en: CONTENT_EN, ja: CONTENT_JA }

export const getUI = (locale: Locale) => ui[locale]
export const getContents = (locale: Locale) => contents[locale]
