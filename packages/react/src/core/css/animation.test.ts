import type { System, UsageTheme } from "../system"
import { animation, keyframes } from "./animation"

const createMockOptions = () => ({
  css: () => () => ({}),
  system: {
    config: {},
    cssMap: {},
  } as unknown as System,
  theme: {} as UsageTheme,
})

describe("animation", () => {
  test("returns null/undefined as-is", () => {
    const options = createMockOptions()
    expect(animation(null, options)).toBeNull()
    expect(animation(undefined, options)).toBeUndefined()
  })

  test("returns global values as-is", () => {
    const options = createMockOptions()
    expect(animation("inherit", options)).toBe("inherit")
    expect(animation("none", options)).toBe("none")
  })

  test("handles object value with animation properties", () => {
    const options = createMockOptions()
    options.css = (() => () => ({
      animationDuration: "1s",
      animationName: "fadeIn",
      animationTimingFunction: "ease-in",
    })) as any

    const result = animation(
      {
        duration: "1s",
        keyframes: { from: { opacity: 0 }, to: { opacity: 1 } },
        timingFunction: "ease-in",
      },
      options,
    )
    expect(result).toContain("fadeIn")
    expect(result).toContain("1s")
    expect(result).toContain("ease-in")
  })

  test("handles comma-separated string values", () => {
    const options = createMockOptions()
    const result = animation("fadeIn, slideUp", options)
    expect(result).toContain(",")
  })

  test("handles simple string value", () => {
    const options = createMockOptions()
    const result = animation("fadeIn", options)
    expect(result).toBe("fadeIn")
  })
})

describe("keyframes", () => {
  test("returns null/undefined as-is", () => {
    const options = createMockOptions()
    expect(keyframes(null, options)).toBeNull()
    expect(keyframes(undefined, options)).toBeUndefined()
  })

  test("returns string value as-is", () => {
    const options = createMockOptions()
    expect(keyframes("fadeIn", options)).toBe("fadeIn")
  })

  test("processes object value with css function", () => {
    const options = createMockOptions()
    options.css = (() => () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    })) as any

    const result = keyframes(
      { from: { opacity: 0 }, to: { opacity: 1 } },
      options,
    )
    // should return a keyframe name (string)
    expect(typeof result).toBe("string")
  })
})
