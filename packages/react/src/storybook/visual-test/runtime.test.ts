import {
  getVisualTestLocale,
  getVisualTestOnline,
  getVisualTestTimeZone,
  getVisualTestUserAgent,
  isVisualTest,
  setupVisualTestRuntimeContract,
  VISUAL_TEST_FIXED_NOW,
  VISUAL_TEST_LOCALE,
  VISUAL_TEST_ONLINE,
  VISUAL_TEST_TIME_ZONE,
  VISUAL_TEST_USER_AGENT,
} from "#storybook/visual-test"
import { describe, expect, test } from "vitest"
import { createVisualTestGlobal } from "./test-utils"

describe("storybook visual-test runtime", () => {
  test("keeps default mode dynamic without visual-test signal", () => {
    const { target, localStorage, sessionStorage } = createVisualTestGlobal()

    expect(isVisualTest(target)).toBeFalsy()
    expect(setupVisualTestRuntimeContract({ globalObject: target })).toBeFalsy()
    expect(target.Date.now()).not.toBe(VISUAL_TEST_FIXED_NOW)
    expect(target.document.documentElement.lang).toBe("")
    expect(localStorage.cleared).toBeFalsy()
    expect(sessionStorage.cleared).toBeFalsy()
  })

  test("applies runtime contract via STORYBOOK_VISUAL_TEST env", () => {
    const { target, localStorage, sessionStorage } = createVisualTestGlobal()

    expect(isVisualTest(target, "true")).toBeTruthy()
    expect(
      setupVisualTestRuntimeContract({
        envValue: "true",
        globalObject: target,
      }),
    ).toBeTruthy()

    expect(target.Date.now()).toBe(VISUAL_TEST_FIXED_NOW)
    expect(new target.Date().getTime()).toBe(VISUAL_TEST_FIXED_NOW)
    expect(getVisualTestLocale(target)).toBe(VISUAL_TEST_LOCALE)
    expect(getVisualTestOnline(target)).toBe(VISUAL_TEST_ONLINE)
    expect(getVisualTestTimeZone(target)).toBe(VISUAL_TEST_TIME_ZONE)
    expect(getVisualTestUserAgent(target)).toBe(VISUAL_TEST_USER_AGENT)
    expect(target.document.documentElement.lang).toBe(VISUAL_TEST_LOCALE)
    expect(target.navigator.language).toBe(VISUAL_TEST_LOCALE)
    expect(target.navigator.languages).toStrictEqual([VISUAL_TEST_LOCALE])
    expect(target.navigator.onLine).toBe(VISUAL_TEST_ONLINE)
    expect(target.navigator.userAgent).toBe(VISUAL_TEST_USER_AGENT)
    expect(localStorage.cleared).toBeTruthy()
    expect(sessionStorage.cleared).toBeTruthy()
    expect(
      new target.Intl.DateTimeFormat(undefined, {
        year: "numeric",
      }).resolvedOptions().timeZone,
    ).toBe(VISUAL_TEST_TIME_ZONE)
    expect(new target.Intl.NumberFormat().resolvedOptions().locale).toContain(
      VISUAL_TEST_LOCALE,
    )
    expect(
      setupVisualTestRuntimeContract({
        envValue: "true",
        globalObject: target,
      }),
    ).toBeFalsy()
  })

  test("enables visual-test mode via URL query", () => {
    const { target } = createVisualTestGlobal("?visual-test=true")

    expect(isVisualTest(target)).toBeTruthy()
  })
})
