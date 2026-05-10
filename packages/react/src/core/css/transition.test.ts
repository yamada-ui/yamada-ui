import { system } from "#test"
import { generateTransition } from "./transition"

describe("generateTransition", () => {
  describe("transition type", () => {
    test("returns transition properties for known group", () => {
      const transform = generateTransition("transition")
      const result = transform("common", { prev: {}, system })
      expect(result.transition).toBeDefined()
      expect(result.transitionDuration).toBe("200ms")
      expect(result.transitionTimingFunction).toBe(
        "cubic-bezier(0.42, 0, 0.58, 1)",
      )
    })

    test("preserves existing transitionDuration from prev", () => {
      const transform = generateTransition("transition")
      const result = transform("common", {
        prev: { transitionDuration: "500ms" },
        system,
      })
      expect(result.transitionDuration).toBe("500ms")
    })

    test("preserves existing transitionTimingFunction from prev", () => {
      const transform = generateTransition("transition")
      const result = transform("common", {
        prev: { transitionTimingFunction: "ease-in" },
        system,
      })
      expect(result.transitionTimingFunction).toBe("ease-in")
    })

    test("returns value as-is for unknown transition group", () => {
      const transform = generateTransition("transition")
      expect(transform("200ms ease", { prev: {}, system })).toBe("200ms ease")
    })

    test("defaults to transition type", () => {
      const transform = generateTransition()
      const result = transform("colors", { prev: {}, system })
      expect(result.transition).toBeDefined()
    })
  })

  describe("property type", () => {
    test("returns property list for known group", () => {
      const transform = generateTransition("property")
      const result = transform("colors", { prev: {}, system })
      expect(result).toContain("color")
    })

    test("returns value as-is for unknown property group", () => {
      const transform = generateTransition("property")
      expect(transform("opacity", { prev: {}, system })).toBe("opacity")
    })
  })
})
