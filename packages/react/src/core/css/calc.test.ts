import type { System } from "../system"
import { generateCalc } from "./calc"

const createMockSystem = (): System =>
  ({
    config: {},
    cssMap: {
      "sizes.md": { ref: "var(--ui-sizes-md)", var: "--ui-sizes-md" },
    },
  }) as unknown as System

describe("generateCalc", () => {
  const options = { system: createMockSystem() }

  test("returns null/undefined as-is", () => {
    const transform = generateCalc("sizes")
    expect(transform(null, options)).toBeNull()
    expect(transform(undefined, options)).toBeUndefined()
  })

  test("returns global values as-is", () => {
    const transform = generateCalc("sizes")
    expect(transform("inherit", options)).toBe("inherit")
    expect(transform("initial", options)).toBe("initial")
  })

  test("returns non-function values as-is", () => {
    const transform = generateCalc("sizes")
    expect(transform("100px", options)).toBe("100px")
  })

  test("processes calc() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("calc(100% - 20px)", options)
    expect(result).toBe("calc(100% - 20px)")
  })

  test("processes min() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("min(100px, 50%)", options)
    expect(result).toBe("min(100px, 50%)")
  })

  test("processes max() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("max(100px, 50%)", options)
    expect(result).toBe("max(100px, 50%)")
  })

  test("processes clamp() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("clamp(10px, 50%, 100px)", options)
    expect(result).toBe("clamp(10px, 50%, 100px)")
  })

  test("processes clamp() with only two values", () => {
    const transform = generateCalc("sizes")
    const result = transform("clamp(10px, 100px)", options)
    expect(result).toBe("clamp(10px, 100%, 100px)")
  })

  test("processes minmax() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("minmax(100px, 1fr)", options)
    expect(result).toBe("minmax(100px, 1fr)")
  })

  test("processes fit-content() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("fit-content(300px)", options)
    expect(result).toBe("fit-content(300px)")
  })

  test("resolves token references in calc", () => {
    const transform = generateCalc("sizes")
    const result = transform("calc(md + 10px)", options)
    expect(result).toContain("calc(")
    expect(result).toContain("var(--ui-sizes-md)")
  })

  test("returns original value for unknown function type", () => {
    const transform = generateCalc("sizes")
    const result = transform("other(100px)", options)
    expect(result).toBe("other(100px)")
  })

  test("handles min/max with more than two values", () => {
    const transform = generateCalc("sizes")
    const result = transform("min(100px, 50%, 200px)", options)
    expect(result).toBe("min(100px, 50%, 200px)")
  })
})
