import type { VisualTestGlobal } from "./types"

const dateTimeFormatTimeZone = (
  timeZone: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  if (options?.timeZone) return options

  return { ...options, timeZone }
}

export const setupIntlForVisualTest = (
  globalObject: VisualTestGlobal,
  locale: string,
  timeZone: string,
) => {
  const DateTimeFormat = globalObject.Intl.DateTimeFormat
  const NumberFormat = globalObject.Intl.NumberFormat

  const PatchedDateTimeFormat = function (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) {
    return new DateTimeFormat(
      locales ?? locale,
      dateTimeFormatTimeZone(timeZone, options),
    )
  }

  PatchedDateTimeFormat.prototype = DateTimeFormat.prototype
  PatchedDateTimeFormat.supportedLocalesOf =
    DateTimeFormat.supportedLocalesOf.bind(DateTimeFormat)

  const PatchedNumberFormat = function (
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions,
  ) {
    return new NumberFormat(locales ?? locale, options)
  }

  PatchedNumberFormat.prototype = NumberFormat.prototype
  PatchedNumberFormat.supportedLocalesOf =
    NumberFormat.supportedLocalesOf.bind(NumberFormat)

  globalObject.Intl.DateTimeFormat =
    PatchedDateTimeFormat as unknown as typeof Intl.DateTimeFormat
  globalObject.Intl.NumberFormat =
    PatchedNumberFormat as unknown as typeof Intl.NumberFormat

  const datePrototype = globalObject.Date.prototype
  const dateToLocaleDateString = datePrototype.toLocaleDateString
  const dateToLocaleString = datePrototype.toLocaleString
  const dateToLocaleTimeString = datePrototype.toLocaleTimeString

  datePrototype.toLocaleDateString = function (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) {
    return dateToLocaleDateString.call(
      this,
      locales ?? locale,
      dateTimeFormatTimeZone(timeZone, options),
    )
  }

  datePrototype.toLocaleString = function (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) {
    return dateToLocaleString.call(
      this,
      locales ?? locale,
      dateTimeFormatTimeZone(timeZone, options),
    )
  }

  datePrototype.toLocaleTimeString = function (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) {
    return dateToLocaleTimeString.call(
      this,
      locales ?? locale,
      dateTimeFormatTimeZone(timeZone, options),
    )
  }
}
