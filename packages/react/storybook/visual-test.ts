type VisualTestStorage = Pick<Storage, "clear">

export interface VisualTestGlobal {
  Date: DateConstructor
  Intl: typeof Intl
  __YAMADA_UI_FIXED_DATE_APPLIED__?: boolean
  __YAMADA_UI_RUNTIME_CONTRACT_APPLIED__?: boolean
  __YAMADA_UI_VISUAL_TEST__?: boolean
  __YAMADA_UI_VISUAL_TEST_LOCALE__?: string
  __YAMADA_UI_VISUAL_TEST_ONLINE__?: boolean
  __YAMADA_UI_VISUAL_TEST_TIME_ZONE__?: string
  __YAMADA_UI_VISUAL_TEST_USER_AGENT__?: string
  document?: {
    cookie: string
    documentElement?: { lang: string }
  }
  IS_CHROMATIC?: boolean
  localStorage?: VisualTestStorage
  location?: { search: string }
  navigator?: {
    language?: string
    languages?: readonly string[]
    userAgent?: string
    onLine?: boolean
  }
  sessionStorage?: VisualTestStorage
}

interface SetupVisualTestRuntimeOptions {
  envValue?: string
  globalObject?: VisualTestGlobal
  locale?: string
  timeZone?: string
  userAgent?: string
  online?: boolean
}

interface SetupFixedDateOptions {
  envValue?: string
  globalObject?: VisualTestGlobal
}

export const VISUAL_TEST_FIXED_NOW = Date.UTC(2025, 3, 15, 13, 24, 36)
export const VISUAL_TEST_LOCALE = "en-US"
export const VISUAL_TEST_ONLINE = true
export const VISUAL_TEST_TIME_ZONE = "UTC"
export const VISUAL_TEST_USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (like Gecko) Chrome/124.0.0.0 Safari/537.36"
export const VISUAL_TEST_VIEWPORT_WIDTH = 1200

const dateTimeFormatTimeZone = (
  timeZone: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  if (options?.timeZone) return options

  return { ...options, timeZone }
}

const clearStorageForVisualTest = (storage?: VisualTestStorage) => {
  try {
    storage?.clear()
  } catch {}
}

const clearCookiesForVisualTest = (globalObject: VisualTestGlobal) => {
  try {
    const cookies = globalObject.document?.cookie

    if (!cookies) return

    cookies.split(";").forEach((cookie) => {
      const key = cookie.split("=")[0]?.trim()

      if (!key) return

      globalObject.document!.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
    })
  } catch {}
}

const setNavigatorRuntimeValue = <Y>(
  navigator: NonNullable<VisualTestGlobal["navigator"]>,
  key: "language" | "languages" | "onLine" | "userAgent",
  value: Y,
) => {
  try {
    Object.defineProperty(navigator, key, {
      configurable: true,
      get: () => value,
    })
  } catch {}
}

const setupNavigatorForVisualTest = (
  globalObject: VisualTestGlobal,
  locale: string,
  online: boolean,
  userAgent: string,
) => {
  const navigator = globalObject.navigator

  if (!navigator) return

  setNavigatorRuntimeValue(navigator, "language", locale)
  setNavigatorRuntimeValue(navigator, "languages", [locale])
  setNavigatorRuntimeValue(navigator, "onLine", online)
  setNavigatorRuntimeValue(navigator, "userAgent", userAgent)
}

const setupIntlForVisualTest = (
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

export const isVisualTest = (
  globalObject: VisualTestGlobal,
  envValue?: string,
) => {
  if (envValue === "true") return true
  if (globalObject.__YAMADA_UI_VISUAL_TEST__) return true
  if (globalObject.IS_CHROMATIC) return true

  const search = globalObject.location?.search

  if (!search) return false

  const params = new URLSearchParams(search)

  return params.get("visual-test") === "true"
}

export const getVisualTestLocale = (
  globalObject = globalThis as unknown as VisualTestGlobal,
) => globalObject.__YAMADA_UI_VISUAL_TEST_LOCALE__ ?? VISUAL_TEST_LOCALE

export const getVisualTestTimeZone = (
  globalObject = globalThis as unknown as VisualTestGlobal,
) => globalObject.__YAMADA_UI_VISUAL_TEST_TIME_ZONE__ ?? VISUAL_TEST_TIME_ZONE

export const getVisualTestOnline = (
  globalObject = globalThis as unknown as VisualTestGlobal,
) => globalObject.__YAMADA_UI_VISUAL_TEST_ONLINE__ ?? VISUAL_TEST_ONLINE

export const getVisualTestUserAgent = (
  globalObject = globalThis as unknown as VisualTestGlobal,
) => globalObject.__YAMADA_UI_VISUAL_TEST_USER_AGENT__ ?? VISUAL_TEST_USER_AGENT

export const setupFixedDateForVisualTest = ({
  envValue,
  globalObject = globalThis as unknown as VisualTestGlobal,
}: SetupFixedDateOptions = {}) => {
  if (
    !isVisualTest(globalObject, envValue) ||
    globalObject.__YAMADA_UI_FIXED_DATE_APPLIED__
  ) {
    return false
  }

  const RealDate = globalObject.Date

  class MockDate extends RealDate {
    constructor(...args: unknown[]) {
      if (!args.length) {
        super(VISUAL_TEST_FIXED_NOW)

        return
      }

      super(...(args as ConstructorParameters<typeof Date>))
    }

    static now() {
      return VISUAL_TEST_FIXED_NOW
    }
  }

  globalObject.Date = MockDate as DateConstructor
  globalObject.__YAMADA_UI_FIXED_DATE_APPLIED__ = true

  return true
}

export const setupVisualTestRuntimeContract = ({
  envValue,
  globalObject = globalThis as unknown as VisualTestGlobal,
  locale = VISUAL_TEST_LOCALE,
  timeZone = VISUAL_TEST_TIME_ZONE,
  userAgent = VISUAL_TEST_USER_AGENT,
  online = VISUAL_TEST_ONLINE,
}: SetupVisualTestRuntimeOptions = {}) => {
  if (
    !isVisualTest(globalObject, envValue) ||
    globalObject.__YAMADA_UI_RUNTIME_CONTRACT_APPLIED__
  ) {
    return false
  }

  globalObject.__YAMADA_UI_VISUAL_TEST__ = true
  globalObject.__YAMADA_UI_VISUAL_TEST_LOCALE__ = locale
  globalObject.__YAMADA_UI_VISUAL_TEST_ONLINE__ = online
  globalObject.__YAMADA_UI_VISUAL_TEST_TIME_ZONE__ = timeZone
  globalObject.__YAMADA_UI_VISUAL_TEST_USER_AGENT__ = userAgent

  clearStorageForVisualTest(globalObject.localStorage)
  clearStorageForVisualTest(globalObject.sessionStorage)
  clearCookiesForVisualTest(globalObject)
  setupFixedDateForVisualTest({ envValue, globalObject })
  setupNavigatorForVisualTest(globalObject, locale, online, userAgent)
  setupIntlForVisualTest(globalObject, locale, timeZone)

  const documentElement = globalObject.document?.documentElement

  if (documentElement) {
    documentElement.lang = locale
  }

  globalObject.__YAMADA_UI_RUNTIME_CONTRACT_APPLIED__ = true

  return true
}
