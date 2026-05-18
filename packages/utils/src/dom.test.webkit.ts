import { isSafari, isWebKit } from "./dom"

describe("DOM", () => {
  describe("isWebKit", () => {
    test("should return true in WebKit", () => {
      expect(isWebKit()).toBe(true)
    })
  })

  describe("isSafari", () => {
    test("should return true in WebKit", () => {
      expect(isSafari()).toBe(true)
    })
  })
})
