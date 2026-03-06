import { focusRingStyle, generateFocusRing } from "./focus-ring"

describe("generateFocusRing", () => {
  const selector = "&:focus-visible"

  test("generates outline focus ring style", () => {
    const transform = generateFocusRing(selector)
    const result = transform("outline", {
      prev: {},
      system: {} as any,
    })
    expect(result["--focus-ring-color"]).toBe("{colorScheme.outline}")
    expect(result.outlineColor).toBe("{focus-ring-color}")
    expect(result[selector]).toStrictEqual(focusRingStyle.outline)
  })

  test("generates none focus ring style", () => {
    const transform = generateFocusRing(selector)
    const result = transform("none", {
      prev: {},
      system: {} as any,
    })
    expect(result[selector]).toStrictEqual(focusRingStyle.none)
  })

  test("falls back to none for unknown value", () => {
    const transform = generateFocusRing(selector)
    const result = transform("unknown", {
      prev: {},
      system: {} as any,
    })
    expect(result[selector]).toStrictEqual(focusRingStyle.none)
  })

  test("uses existing focus-ring-color from prev", () => {
    const transform = generateFocusRing(selector)
    const result = transform("outline", {
      prev: { "--focus-ring-color": "blue" },
      system: {} as any,
    })
    expect(result["--focus-ring-color"]).toBe("blue")
  })
})
