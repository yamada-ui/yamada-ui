import { render } from "#test"
import {
  ColorModeScript,
  getStorageScript,
  ThemeSchemeScript,
} from "./storage-script"

describe("getStorageScript", () => {
  describe("colorMode", () => {
    test("generates localStorage script", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        defaultValue: "light",
      })
      expect(script).toContain("localStorage")
      expect(script).toContain("light")
    })

    test("generates cookie script", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        type: "cookie",
        defaultValue: "light",
      })
      expect(script).toContain("cookie")
      expect(script).toContain("light")
    })

    test("uses custom key", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        key: "my-color-mode",
        defaultValue: "dark",
      })
      expect(script).toContain("my-color-mode")
    })

    test("uses default key when not provided", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        defaultValue: "light",
      })
      expect(script).toContain("color-mode")
    })
  })

  describe("themeScheme", () => {
    test("generates localStorage script", () => {
      const script = getStorageScript(
        "themeScheme",
        "theme-scheme",
      )({
        defaultValue: "base",
      })
      expect(script).toContain("localStorage")
    })

    test("generates cookie script", () => {
      const script = getStorageScript(
        "themeScheme",
        "theme-scheme",
      )({
        type: "cookie",
        defaultValue: "base",
      })
      expect(script).toContain("cookie")
    })
  })
})

describe("ColorModeScript", () => {
  test("renders a script tag", () => {
    const { container } = render(<ColorModeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeTruthy()
  })

  test("renders with nonce", () => {
    const { container } = render(<ColorModeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    const script = container.querySelector("script")
    expect(script?.getAttribute("nonce")).toBe("test-nonce")
  })
})

describe("ThemeSchemeScript", () => {
  test("renders a script tag", () => {
    const { container } = render(<ThemeSchemeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeTruthy()
  })

  test("renders with nonce", () => {
    const { container } = render(<ThemeSchemeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    const script = container.querySelector("script")
    expect(script?.getAttribute("nonce")).toBe("test-nonce")
  })
})
