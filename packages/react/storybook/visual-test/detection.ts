import type { VisualTestGlobal } from "./types"
import {
  VISUAL_TEST_LOCALE,
  VISUAL_TEST_ONLINE,
  VISUAL_TEST_TIME_ZONE,
  VISUAL_TEST_USER_AGENT,
} from "./constants"

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
