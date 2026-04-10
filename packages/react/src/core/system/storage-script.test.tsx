import { render } from "#test"
import * as utils from "../../utils"
import {
  ColorModeScript,
  getStorageScript,
  ThemeSchemeScript,
} from "./storage-script"

function mockSsr() {
  return vi.spyOn(utils, "createdDom").mockReturnValue(false)
}

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
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders a script tag during SSR", () => {
    mockSsr()
    const { container } = render(<ColorModeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeTruthy()
  })

  test("renders with nonce during SSR", () => {
    mockSsr()
    const { container } = render(<ColorModeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    const script = container.querySelector("script")
    expect(script?.getAttribute("nonce")).toBe("test-nonce")
  })

  test("returns null when DOM is available", () => {
    const { container } = render(<ColorModeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeNull()
  })
})

describe("ThemeSchemeScript", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders a script tag during SSR", () => {
    mockSsr()
    const { container } = render(<ThemeSchemeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeTruthy()
  })

  test("renders with nonce during SSR", () => {
    mockSsr()
    const { container } = render(<ThemeSchemeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    const script = container.querySelector("script")
    expect(script?.getAttribute("nonce")).toBe("test-nonce")
  })

  test("returns null when DOM is available", () => {
    const { container } = render(<ThemeSchemeScript />, { withProvider: false })
    const script = container.querySelector("script")
    expect(script).toBeNull()
  })
})
