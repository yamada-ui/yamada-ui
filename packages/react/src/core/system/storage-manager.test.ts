import { createStorageManager } from "./storage-manager"

describe("createStorageManager", () => {
  describe("localStorage storage", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test("get returns default value when nothing stored", () => {
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.get()).toBe("light")
    })

    test("get returns stored value", () => {
      localStorage.setItem("color-mode", "dark")
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.get()).toBe("dark")
    })

    test("set stores value in localStorage", () => {
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      manager.set("dark")
      expect(localStorage.getItem("color-mode")).toBe("dark")
    })

    test("default returns stored default value", () => {
      localStorage.setItem("default-color-mode", "dark")
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.default("light" as any)).toBe("dark")
    })

    test("default returns fallback when nothing stored", () => {
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.default("light" as any)).toBe("light")
    })

    test("get handles localStorage errors gracefully", () => {
      const mockGetItem = vi
        .spyOn(Storage.prototype, "getItem")
        .mockImplementation(() => {
          throw new Error("Access denied")
        })
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.get()).toBe("light")
      mockGetItem.mockRestore()
    })

    test("default handles localStorage errors gracefully", () => {
      const mockGetItem = vi
        .spyOn(Storage.prototype, "getItem")
        .mockImplementation(() => {
          throw new Error("Access denied")
        })
      const manager = createStorageManager(
        "localStorage",
        "color-mode",
        "light",
      )
      expect(manager.default("light" as any)).toBe("light")
      mockGetItem.mockRestore()
    })
  })

  describe("cookie storage", () => {
    test("get returns value from cookie string", () => {
      const manager = createStorageManager(
        "cookie",
        "color-mode",
        "light",
        "color-mode=dark; other=value",
      )
      expect(manager.get()).toBe("dark")
    })

    test("get returns default when cookie not found", () => {
      const manager = createStorageManager(
        "cookie",
        "color-mode",
        "light",
        "other=value",
      )
      expect(manager.get()).toBe("light")
    })

    test("default returns value from cookie string", () => {
      const manager = createStorageManager(
        "cookie",
        "color-mode",
        "light",
        "default-color-mode=dark",
      )
      expect(manager.default("light" as any)).toBe("dark")
    })

    test("set stores value in document.cookie", () => {
      const manager = createStorageManager("cookie", "color-mode", "light")
      manager.set("dark")
      expect(document.cookie).toContain("color-mode=dark")
    })

    test("cookie storage without cookie string reads from document.cookie", () => {
      document.cookie = "color-mode=dark; max-age=31536000; path=/"
      const manager = createStorageManager("cookie", "color-mode", "light")
      expect(manager.get()).toBe("dark")
    })
  })
})
