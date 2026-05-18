import { isChrome } from "./dom"

describe("DOM", () => {
  describe("isChrome", () => {
    test("should return true in Chromium", () => {
      expect(isChrome()).toBe(true)
    })
  })
})
