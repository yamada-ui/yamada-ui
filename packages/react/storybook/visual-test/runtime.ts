import type { SetupVisualTestRuntimeOptions, VisualTestGlobal } from "./types"
import {
  VISUAL_TEST_LOCALE,
  VISUAL_TEST_ONLINE,
  VISUAL_TEST_TIME_ZONE,
  VISUAL_TEST_USER_AGENT,
} from "./constants"
import { setupFixedDateForVisualTest } from "./date"
import { isVisualTest } from "./detection"
import { setupIntlForVisualTest } from "./intl"
import { setupNavigatorForVisualTest } from "./navigator"
import { setupRandomSourcesForVisualTest } from "./random"
import { clearCookiesForVisualTest, clearStorageForVisualTest } from "./storage"

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
  setupRandomSourcesForVisualTest(globalObject)
  setupNavigatorForVisualTest(globalObject, locale, online, userAgent)
  setupIntlForVisualTest(globalObject, locale, timeZone)

  const documentElement = globalObject.document?.documentElement

  if (documentElement) {
    documentElement.lang = locale
  }

  globalObject.__YAMADA_UI_RUNTIME_CONTRACT_APPLIED__ = true

  return true
}
