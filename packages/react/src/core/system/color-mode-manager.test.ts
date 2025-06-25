import { createColorModeManager } from "./color-mode-manager"
import { colorModeManager } from "./color-mode-manager"
import { COLOR_MODE_STORAGE_KEY } from "./color-mode-script"

describe("colorModeManager", () => {
  describe("localStorage", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test("gets initial color mode", () => {
      const manager = colorModeManager.localStorage
      expect(manager.get()()).toBe("light")
    })

    test("sets and gets color mode", () => {
      const manager = colorModeManager.localStorage
      manager.set("dark")()
      expect(manager.get()()).toBe("dark")
    })

    test("returns default value if invalid value is in localStorage", () => {
      localStorage.setItem("colorMode", "invalid")
      const manager = colorModeManager.localStorage
      expect(manager.get()()).toBe("light")
    })
  })

  describe("cookieStorage", () => {
    const originalDocumentCookie = document.cookie

    afterEach(() => {
      document.cookie = originalDocumentCookie
    })

    test("gets initial color mode", () => {
      const manager = colorModeManager.cookieStorage
      expect(manager.get()()).toBe("light")
    })

    test("sets and gets color mode", () => {
      const manager = colorModeManager.cookieStorage
      manager.set("dark")()
      expect(manager.get()()).toBe("dark")
    })
  })

  describe("ssr", () => {
    test("gets color mode from cookie", () => {
      const cookie = `${COLOR_MODE_STORAGE_KEY}=dark`
      const manager = colorModeManager.ssr(cookie)
      expect(manager.get()(COLOR_MODE_STORAGE_KEY)).toBe("dark")
    })
  })

  describe("createColorModeManager", () => {
    test("creates manager with localStorage type", () => {
      const manager = createColorModeManager("local")
      expect(manager.type).toBe("localStorage")
    })

    test("creates manager with cookie type", () => {
      const manager = createColorModeManager("cookie")
      expect(manager.type).toBe("cookie")
    })

    test("creates manager with ssr type", () => {
      const manager = createColorModeManager("ssr", "colorMode=dark")
      expect(manager.type).toBe("cookie")
      expect(manager.ssr).toBeTruthy()
    })
  })
})
