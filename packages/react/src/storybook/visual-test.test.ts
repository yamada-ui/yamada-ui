import {
  isVisualTest,
  setupFixedDateForVisualTest,
  VISUAL_TEST_FIXED_NOW,
} from "#storybook/visual-test"
import { describe, expect, test } from "vitest"

const createVisualTestGlobal = (search = "") =>
  ({
    Date,
    location: { search },
  }) as typeof globalThis

describe("storybook visual-test helpers", () => {
  test("keeps default mode dynamic without visual-test signal", () => {
    const target = createVisualTestGlobal()

    expect(isVisualTest(target)).toBeFalsy()
    expect(setupFixedDateForVisualTest({ globalObject: target })).toBeFalsy()
    expect(target.Date.now()).not.toBe(VISUAL_TEST_FIXED_NOW)
  })

  test("enables visual-test mode via STORYBOOK_VISUAL_TEST env", () => {
    const target = createVisualTestGlobal()

    expect(isVisualTest(target, "true")).toBeTruthy()
    expect(
      setupFixedDateForVisualTest({ envValue: "true", globalObject: target }),
    ).toBeTruthy()
    expect(target.Date.now()).toBe(VISUAL_TEST_FIXED_NOW)
    expect(new target.Date().getTime()).toBe(VISUAL_TEST_FIXED_NOW)
    expect(
      setupFixedDateForVisualTest({ envValue: "true", globalObject: target }),
    ).toBeFalsy()
  })

  test("enables visual-test mode via URL query", () => {
    const target = createVisualTestGlobal("?visual-test=true")

    expect(isVisualTest(target)).toBeTruthy()
  })
})
