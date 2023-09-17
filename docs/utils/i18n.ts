import { CONSTANT } from '../constant'

export type Locale = (typeof locales)[number]

export const locales = CONSTANT.I18N.LOCALES.map(({ value }) => value)

export const otherLocales = CONSTANT.I18N.LOCALES.map(({ value }) => value).filter(
  (locale) => locale !== CONSTANT.I18N.DEFAULT_LOCALE,
)
