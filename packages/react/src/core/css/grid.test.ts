import { system } from "#test"
import { grid } from "./grid"

describe("grid", () => {
  const options = { system }

  test("handles not values", () => {
    expect(grid(null, options)).toBeNull()
    expect(grid(undefined, options)).toBeUndefined()
  })

  test("handles global values", () => {
    expect(grid("inherit", options)).toBe("inherit")
    expect(grid("initial", options)).toBe("initial")
    expect(grid("none", options)).toBe("none")
    expect(grid("revert", options)).toBe("revert")
    expect(grid("unset", options)).toBe("unset")
  })

  test("handles plain CSS values", () => {
    expect(grid("1fr", options)).toBe("1fr")
    expect(grid("100px", options)).toBe("100px")
    expect(grid("auto", options)).toBe("auto")
  })

  test("handles multiple space-separated values", () => {
    expect(grid("1fr 1fr 1fr", options)).toBe("1fr 1fr 1fr")
    expect(grid("100px 1fr 1fr", options)).toBe("100px 1fr 1fr")
    expect(grid("auto 1fr auto", options)).toBe("auto 1fr auto")
  })

  test("resolves size tokens", () => {
    const result = grid("md", options)
    expect(result).toContain("var(--ui-sizes-md)")
  })

  test("resolves size tokens in multiple values", () => {
    const result = grid("md 1fr 1fr", options)
    expect(result).toContain("var(--ui-sizes-md)")
    expect(result).toContain("1fr")
  })

  test("handles repeat with fill", () => {
    const result = grid("repeat(fill, 1fr)", options)
    expect(result).toBe("repeat(auto-fill, 1fr)")
  })

  test("handles repeat with fit", () => {
    const result = grid("repeat(fit, 1fr)", options)
    expect(result).toBe("repeat(auto-fit, 1fr)")
  })

  test("handles repeat with numeric count", () => {
    const result = grid("repeat(3, 1fr)", options)
    expect(result).toBe("repeat(3, 1fr)")
  })

  test("handles repeat with size token in tracks", () => {
    const result = grid("repeat(3, md)", options)
    expect(result).toContain("repeat(3,")
    expect(result).toContain("var(--ui-sizes-md)")
  })

  test("handles repeat with nested minmax", () => {
    const result = grid("repeat(fill, minmax(100px, 1fr))", options)
    expect(result).toBe("repeat(auto-fill, minmax(100px, 1fr))")
  })

  test("handles repeat with size tokens in minmax", () => {
    const result = grid("repeat(fill, minmax(sm, 1fr))", options)
    expect(result).toContain("repeat(auto-fill,")
    expect(result).toContain("minmax(")
    expect(result).toContain("var(--ui-sizes-sm)")
  })

  test("handles minmax function", () => {
    const result = grid("minmax(100px, 1fr)", options)
    expect(result).toBe("minmax(100px, 1fr)")
  })

  test("handles minmax with size tokens", () => {
    const result = grid("minmax(2xs, xs)", options)
    expect(result).toContain("minmax(")
    expect(result).toContain("var(--ui-sizes-2xs)")
    expect(result).toContain("var(--ui-sizes-xs)")
  })

  test("handles minmax mixed with plain values", () => {
    const result = grid("minmax(2xs, xs) 1fr 1fr", options)
    expect(result).toContain("minmax(")
    expect(result).toContain("1fr 1fr")
  })

  test("handles min function with size tokens", () => {
    const result = grid("min(100%, sm)", options)
    expect(result).toContain("min(")
    expect(result).toContain("var(--ui-sizes-sm)")
  })

  test("handles repeat with complex nested functions", () => {
    const result = grid("repeat(fill, minmax(min(100%, sm), 1fr))", options)
    expect(result).toContain("repeat(auto-fill,")
    expect(result).toContain("minmax(")
    expect(result).toContain("min(")
  })

  test("handles empty split values", () => {
    expect(grid("", options)).toBe("")
  })

  test("handles fit-content function", () => {
    const result = grid("fit-content(300px)", options)
    expect(result).toBe("fit-content(300px)")
  })

  test("handles fit-content with size token", () => {
    const result = grid("fit-content(md)", options)
    expect(result).toContain("fit-content(")
    expect(result).toContain("var(--ui-sizes-md)")
  })

  test("handles calc function", () => {
    const result = grid("calc(100% - 20px)", options)
    expect(result).toBe("calc(100% - 20px)")
  })

  test("handles calc with size token", () => {
    const result = grid("calc(md + 10px)", options)
    expect(result).toContain("calc(")
    expect(result).toContain("var(--ui-sizes-md)")
  })
})
