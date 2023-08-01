import { CONSTANT } from '../constant'

export const otherLocales = CONSTANT.I18N.LOCALES.map(({ value }) => value).filter(
  (locale) => locale !== CONSTANT.I18N.DEFAULT_LOCALE,
)
