import { isFirefox } from "./dom"

describe("DOM", () => {
  describe("isFirefox", () => {
    test("should return true in Firefox", () => {
      expect(isFirefox()).toBe(true)
    })
  })
})
