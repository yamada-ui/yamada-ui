import { system } from "#test"
import { gradient } from "./gradient"

describe("gradient", () => {
  const options = { system }

  test("handles not values", () => {
    expect(gradient(null, options)).toBeNull()
    expect(gradient(undefined, options)).toBeUndefined()
  })

  test("handles global values", () => {
    expect(gradient("inherit", options)).toBe("inherit")
    expect(gradient("initial", options)).toBe("initial")
    expect(gradient("none", options)).toBe("none")
    expect(gradient("revert", options)).toBe("revert")
    expect(gradient("unset", options)).toBe("unset")
  })

  test("returns url for non-function values", () => {
    expect(gradient("image.png", options)).toBe("url('image.png')")
    expect(gradient("/path/to/image.jpg", options)).toBe(
      "url('/path/to/image.jpg')",
    )
  })

  test("returns value if getCSSFunction fails", () => {
    expect(gradient("invalid()", options)).toBe("invalid()")
  })

  test("returns value if no colors provided", () => {
    expect(gradient("linear(to-r)", options)).toBe("linear(to-r)")
  })

  test("appends -gradient to type", () => {
    const result = gradient("linear(to-r, red, blue)", options)
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("keeps existing -gradient suffix", () => {
    const result = gradient("linear-gradient(to-r, red, blue)", options)
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("handles direction shorthands", () => {
    expect(gradient("linear(to-b, red, blue)", options)).toBe(
      "linear-gradient(to bottom, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-t, red, blue)", options)).toBe(
      "linear-gradient(to top, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-l, red, blue)", options)).toBe(
      "linear-gradient(to left, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-r, red, blue)", options)).toBe(
      "linear-gradient(to right, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-tl, red, blue)", options)).toBe(
      "linear-gradient(to top left, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-tr, red, blue)", options)).toBe(
      "linear-gradient(to top right, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-bl, red, blue)", options)).toBe(
      "linear-gradient(to bottom left, var(--ui-colors-red), var(--ui-colors-blue))",
    )
    expect(gradient("linear(to-br, red, blue)", options)).toBe(
      "linear-gradient(to bottom right, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("passes through non-shorthand directions", () => {
    const result = gradient("linear(45deg, red, blue)", options)
    expect(result).toBe(
      "linear-gradient(45deg, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("handles radial gradient", () => {
    const result = gradient("radial(circle, red, blue)", options)
    expect(result).toBe(
      "radial-gradient(circle, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("handles conic gradient", () => {
    const result = gradient("conic(from 0deg, red, blue)", options)
    expect(result).toBe(
      "conic-gradient(from 0deg, var(--ui-colors-red), var(--ui-colors-blue))",
    )
  })

  test("handles color with ratio", () => {
    const result = gradient("linear(to-r, red 0%, blue 100%)", options)
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red) 0%, var(--ui-colors-blue) 100%)",
    )
  })

  test("handles color with multiple ratio stops", () => {
    const result = gradient("linear(to-r, red 0% 50%, blue 100%)", options)
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red) 0% 50%, var(--ui-colors-blue) 100%)",
    )
  })

  test("handles color with CSS function ratio", () => {
    const result = gradient(
      "linear(to-r, red calc(10% + 5%), blue 100%)",
      options,
    )
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red) calc(10% + 5%), var(--ui-colors-blue) 100%)",
    )
  })

  test("resolves color tokens", () => {
    const result = gradient("linear(to-r, primary, secondary)", options)
    expect(result).toContain("linear-gradient(")
    expect(result).toContain("to right")
  })

  test("resolves color tokens with ratio", () => {
    const result = gradient("linear(to-r, primary 50%, secondary)", options)
    expect(result).toContain("linear-gradient(")
    expect(result).toContain("to right")
  })

  test("handles direction value in colors", () => {
    const result = gradient("linear(to-r, to bottom, red, blue)", options)
    expect(result).toContain("to bottom")
  })

  test("handles multiple colors", () => {
    const result = gradient("linear(to-r, red, green, blue, yellow)", options)
    expect(result).toBe(
      "linear-gradient(to right, var(--ui-colors-red), var(--ui-colors-green), var(--ui-colors-blue), var(--ui-colors-yellow))",
    )
  })
})
