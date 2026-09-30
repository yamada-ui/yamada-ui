import type { UsageTheme } from "../system"
import { system } from "#test"
import { animation, injectKeyframes, keyframes } from "./animation"

const createMockOptions = () => ({
  css: () => () => ({}),
  system,
  theme: {} as UsageTheme,
})

describe("animation", () => {
  test("handles not values", () => {
    const options = createMockOptions()
    expect(animation(null, options)).toBeNull()
    expect(animation(undefined, options)).toBeUndefined()
  })

  test("handles global values", () => {
    const options = createMockOptions()
    expect(animation("inherit", options)).toBe("inherit")
    expect(animation("none", options)).toBe("none")
  })

  test("handles object values", () => {
    const options = createMockOptions()
    options.css = () => () => ({
      animationDuration: "1s",
      animationName: "fadeIn",
      animationTimingFunction: "ease-in",
      delay: "1s",
    })

    const result = animation(
      {
        delay: "1s",
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
  test("inserts styles into the shadow root", () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    const headStyleCount = document.head.querySelectorAll("style").length

    injectKeyframes({ from: { opacity: 0 }, to: { opacity: 1 } }, shadowRoot)

    expect(shadowRoot.querySelector("style")?.parentNode).toBe(shadowRoot)
    expect(document.head.querySelectorAll("style")).toHaveLength(headStyleCount)
  })

  test("handles not values", () => {
    const options = createMockOptions()
    expect(keyframes(null, options)).toBeNull()
    expect(keyframes(undefined, options)).toBeUndefined()
  })

  test("handles string values", () => {
    const options = createMockOptions()
    expect(keyframes("fadeIn", options)).toBe("fadeIn")
  })

  test("handles object values", () => {
    const options = createMockOptions()
    options.css = () => () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    })

    const result = keyframes(
      { from: { opacity: 0 }, to: { opacity: 1 } },
      options,
    )
    expect(typeof result).toBe("string")
  })
})
