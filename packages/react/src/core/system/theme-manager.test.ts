import type { ThemeScheme } from "./index.types"
import { createThemeSchemeManager, themeSchemeManager } from "./theme-manager"
import { THEME_SCHEME_STORAGE_KEY } from "./theme-script"

describe("themeModeManager", () => {
  describe("localStorage", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test("gets initial theme scheme", () => {
      const manager = themeSchemeManager.localStorage
      expect(manager.get()()).toBe("base")
    })

    test("sets and gets theme scheme", () => {
      const manager = themeSchemeManager.localStorage
      manager.set("green" as ThemeScheme)()
      expect(manager.get()()).toBe("green")
    })

    test("returns default value if invalid value is in localStorage", () => {
      localStorage.setItem("colorMode", "invalid")
      const manager = themeSchemeManager.localStorage
      expect(manager.get()()).toBe("base")
    })
  })

  describe("cookieStorage", () => {
    const originalDocumentCookie = document.cookie

    afterEach(() => {
      document.cookie = originalDocumentCookie
    })

    test("gets initial theme scheme", () => {
      const manager = themeSchemeManager.cookieStorage
      expect(manager.get()()).toBe("base")
    })

    test("sets and gets theme scheme", () => {
      const manager = themeSchemeManager.cookieStorage
      manager.set("red" as ThemeScheme)()
      expect(manager.get()()).toBe("red")
    })
  })

  describe("ssr", () => {
    test("gets theme scheme from cookie", () => {
      const cookie = `${THEME_SCHEME_STORAGE_KEY}=blue`
      const manager = themeSchemeManager.ssr(cookie)
      expect(manager.get()(THEME_SCHEME_STORAGE_KEY)).toBe("blue")
    })
  })

  describe("createThemeSchemeManager", () => {
    test("creates manager with localStorage type", () => {
      const manager = createThemeSchemeManager("local")
      expect(manager.type).toBe("localStorage")
    })

    test("creates manager with cookie type", () => {
      const manager = createThemeSchemeManager("cookie")
      expect(manager.type).toBe("cookie")
    })

    test("creates manager with ssr type", () => {
      const manager = createThemeSchemeManager("ssr", "colorMode=dark")
      expect(manager.type).toBe("cookie")
      expect(manager.ssr).toBeTruthy()
    })
  })
})
