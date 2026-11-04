import { isSafari, isWebKit } from "./dom"

describe("DOM", () => {
  describe("isWebKit", () => {
    test("should return true in WebKit", () => {
      expect(isWebKit()).toBe(true)
    })
  })

  describe("isSafari", () => {
    const platformDescriptor = Object.getOwnPropertyDescriptor(
      navigator,
      "platform",
    )
    const vendorDescriptor = Object.getOwnPropertyDescriptor(
      navigator,
      "vendor",
    )

    afterEach(() => {
      if (platformDescriptor)
        Object.defineProperty(navigator, "platform", platformDescriptor)
      else delete (navigator as any).platform

      if (vendorDescriptor)
        Object.defineProperty(navigator, "vendor", vendorDescriptor)
      else delete (navigator as any).vendor
    })

    test("should return true in Safari-like WebKit", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "MacIntel",
      })
      Object.defineProperty(navigator, "vendor", {
        configurable: true,
        value: "Apple Computer, Inc.",
      })

      expect(isSafari()).toBe(true)
    })
  })
})
