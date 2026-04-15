import {
  setupVisualTestRuntimeContract,
  VISUAL_TEST_UUID_PREFIX,
} from "#storybook/visual-test"
import { describe, expect, test } from "vitest"
import { createVisualTestGlobal } from "./test-utils"

describe("storybook visual-test random sources", () => {
  test("pins Math.random and crypto.randomUUID in visual-test mode", () => {
    const { target } = createVisualTestGlobal()
    const { target: target2 } = createVisualTestGlobal()

    expect(
      setupVisualTestRuntimeContract({
        envValue: "true",
        globalObject: target,
      }),
    ).toBeTruthy()
    expect(
      setupVisualTestRuntimeContract({
        envValue: "true",
        globalObject: target2,
      }),
    ).toBeTruthy()

    const firstRandom = target.Math.random()
    const secondRandom = target.Math.random()

    expect(firstRandom).not.toBe(0.5)
    expect(secondRandom).not.toBe(0.5)
    expect(firstRandom).toBe(target2.Math.random())
    expect(secondRandom).toBe(target2.Math.random())
    expect(target.crypto.randomUUID()).toBe(
      `${VISUAL_TEST_UUID_PREFIX}000000000001`,
    )
    expect(target.crypto.randomUUID()).toBe(
      `${VISUAL_TEST_UUID_PREFIX}000000000002`,
    )
  })
})
