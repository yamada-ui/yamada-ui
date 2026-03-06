import type { Dict } from "../../utils"
import { system } from "#test"
import { transforms } from "./config"

describe("bgClip", () => {
  const options = { prev: {}, system }

  test("sets color to transparent when value is text", () => {
    const prev: Dict = {}
    const result = transforms.bgClip("text", { ...options, prev })
    expect(result).toBe("text")
    expect(prev.color).toBe("transparent")
  })

  test("does not override existing color when value is text", () => {
    const prev: Dict = { color: "red" }
    const result = transforms.bgClip("text", { ...options, prev })
    expect(result).toBe("text")
    expect(prev.color).toBe("red")
  })

  test("initializes prev when undefined and value is text", () => {
    const result = transforms.bgClip("text", { ...options, prev: undefined })
    expect(result).toBe("text")
  })

  test("returns value as-is for non-text values", () => {
    expect(transforms.bgClip("border-box", options)).toBe("border-box")
    expect(transforms.bgClip("padding-box", options)).toBe("padding-box")
    expect(transforms.bgClip("content-box", options)).toBe("content-box")
  })
})

describe("deg", () => {
  test("handles null and undefined", () => {
    expect(transforms.deg(null)).toBeNull()
    expect(transforms.deg(undefined)).toBeUndefined()
  })

  test("returns CSS variable as-is", () => {
    expect(transforms.deg("var(--angle)")).toBe("var(--angle)")
  })

  test("appends deg to unitless string", () => {
    expect(transforms.deg("45")).toBe("45deg")
    expect(transforms.deg("90")).toBe("90deg")
  })

  test("appends deg to number", () => {
    expect(transforms.deg(45)).toBe("45deg")
    expect(transforms.deg(0)).toBe("0deg")
  })

  test("returns value as-is when already has deg", () => {
    expect(transforms.deg("45deg")).toBe("45deg")
    expect(transforms.deg("180deg")).toBe("180deg")
  })

  test("returns value as-is for other units", () => {
    expect(transforms.deg("0.5turn")).toBe("0.5turn")
    expect(transforms.deg("3.14rad")).toBe("3.14rad")
    expect(transforms.deg("100grad")).toBe("100grad")
  })
})

describe("content", () => {
  test("wraps object with content empty string", () => {
    expect(transforms.content({ position: "absolute" })).toStrictEqual({
      content: "''",
      position: "absolute",
    })
  })

  test("does not override content in object", () => {
    expect(
      transforms.content({ content: "'*'", position: "absolute" }),
    ).toStrictEqual({
      content: "'*'",
      position: "absolute",
    })
  })

  test("returns non-object value as-is", () => {
    expect(transforms.content("''")).toBe("''")
    expect(transforms.content("normal")).toBe("normal")
  })
})

describe("px", () => {
  test("handles null and undefined", () => {
    expect(transforms.px(null)).toBeNull()
    expect(transforms.px(undefined)).toBeUndefined()
  })

  test("appends px to unitless string", () => {
    expect(transforms.px("16")).toBe("16px")
    expect(transforms.px("0")).toBe("0px")
  })

  test("appends px to number", () => {
    expect(transforms.px(16)).toBe("16px")
    expect(transforms.px(0)).toBe("0px")
  })

  test("returns value as-is when already has unit", () => {
    expect(transforms.px("16px")).toBe("16px")
    expect(transforms.px("1rem")).toBe("1rem")
    expect(transforms.px("50%")).toBe("50%")
    expect(transforms.px("10em")).toBe("10em")
  })
})

describe("fraction", () => {
  test("converts number <= 1 to percentage", () => {
    expect(transforms.fraction(0.5)).toBe("50%")
    expect(transforms.fraction(1)).toBe("100%")
    expect(transforms.fraction(0)).toBe("0%")
    expect(transforms.fraction(0.333)).toBe("33.300000000000004%")
  })

  test("returns number > 1 as-is", () => {
    expect(transforms.fraction(2)).toBe(2)
    expect(transforms.fraction(100)).toBe(100)
  })

  test("returns non-number value as-is", () => {
    expect(transforms.fraction("50%")).toBe("50%")
    expect(transforms.fraction("auto")).toBe("auto")
  })
})

describe("truncated", () => {
  test("returns truncation styles when true", () => {
    expect(transforms.truncated(true)).toStrictEqual({
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    })
  })

  test("returns undefined when false", () => {
    expect(transforms.truncated(false)).toBeUndefined()
  })
})
