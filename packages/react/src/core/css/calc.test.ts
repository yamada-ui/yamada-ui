import { system } from "#test"
import { generateCalc } from "./calc"

describe("generateCalc", () => {
  const options = { system }

  test("handles not values", () => {
    const transform = generateCalc("sizes")
    expect(transform(null, options)).toBeNull()
    expect(transform(undefined, options)).toBeUndefined()
    expect(transform("(100px)", options)).toBe("(100px)")
  })

  test("handles global values", () => {
    const transform = generateCalc("sizes")
    expect(transform("inherit", options)).toBe("inherit")
    expect(transform("initial", options)).toBe("initial")
  })

  test("handles non-function values", () => {
    const transform = generateCalc("sizes")
    expect(transform("100px", options)).toBe("100px")
  })

  test("handles calc() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("calc(100% - 20px)", options)
    expect(result).toBe("calc(100% - 20px)")
  })

  test("handles min() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("min(100px, 50%)", options)
    expect(result).toBe("min(100px, 50%)")
  })

  test("handles max() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("max(100px, 50%)", options)
    expect(result).toBe("max(100px, 50%)")
  })

  test("handles clamp() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("clamp(10px, 50%, 100px)", options)
    expect(result).toBe("clamp(10px, 50%, 100px)")
  })

  test("handles clamp() with only two values", () => {
    const transform = generateCalc("sizes")
    const result = transform("clamp(10px, 100px)", options)
    expect(result).toBe("clamp(10px, 100%, 100px)")
  })

  test("handles minmax() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("minmax(100px, 1fr)", options)
    expect(result).toBe("minmax(100px, 1fr)")
  })

  test("handles fit-content() function", () => {
    const transform = generateCalc("sizes")
    const result = transform("fit-content(300px)", options)
    expect(result).toBe("fit-content(300px)")
  })

  test("handles token references", () => {
    const transform = generateCalc("sizes")
    const result = transform("calc(md + 10px)", options)
    expect(result).toContain("calc(")
    expect(result).toContain("var(--ui-sizes-md)")
  })

  test("handles unknown function type", () => {
    const transform = generateCalc("sizes")
    const result = transform("other(100px)", options)
    expect(result).toBe("other(100px)")
  })

  test("handles min/max with multiple values", () => {
    const transform = generateCalc("sizes")
    const result = transform("min(100px, 50%, 200px)", options)
    expect(result).toBe("min(100px, 50%, 200px)")
  })

  test("handles nested values", () => {
    const transform = generateCalc("sizes")
    const result = transform("calc(min(100px, 50%) + 20px)", options)
    expect(result).toBe("calc(min(100px, 50%) + 20px)")
  })
})
