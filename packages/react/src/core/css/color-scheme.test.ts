import type { System } from "../system"
import { colorScheme } from "./color-scheme"

const createMockSystem = (): System =>
  ({
    config: { css: { varPrefix: "ui" } },
    cssMap: {},
  }) as unknown as System

describe("colorScheme", () => {
  test("creates color scheme variables for a single value", () => {
    const options = { system: createMockSystem() }
    const result = colorScheme("blue", options)
    expect(result).toBeDefined()
    expect(typeof result).toBe("object")
  })

  test("creates color scheme variables for color mode array", () => {
    const options = { system: createMockSystem() }
    const result = colorScheme(["blue", "red"], options)
    expect(result).toBeDefined()
    const keys = Object.keys(result)
    const hasDarkCondition = keys.some((key) => key.includes("dark"))
    expect(hasDarkCondition).toBeTruthy()
  })
})
