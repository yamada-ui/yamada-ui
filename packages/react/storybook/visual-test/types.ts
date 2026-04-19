export type VisualTestStorage = Pick<Storage, "clear">

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
  crypto?: { randomUUID?: () => string }
  document?: {
    cookie: string
    documentElement?: { lang: string }
  }
  IS_CHROMATIC?: boolean
  localStorage?: VisualTestStorage
  location?: { search: string }
  Math?: { random: () => number }
  navigator?: {
    language?: string
    languages?: readonly string[]
    userAgent?: string
    onLine?: boolean
  }
  sessionStorage?: VisualTestStorage
}

export interface SetupVisualTestRuntimeOptions {
  envValue?: string
  globalObject?: VisualTestGlobal
  locale?: string
  timeZone?: string
  userAgent?: string
  online?: boolean
}

export interface SetupFixedDateOptions {
  envValue?: string
  globalObject?: VisualTestGlobal
}
