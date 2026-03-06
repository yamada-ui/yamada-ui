import type { UsageTheme } from "../system"
import { generateStyle } from "./style"

describe("generateStyle", () => {
  test("returns style from theme with prefix", () => {
    const transform = generateStyle("textStyles")
    const theme = {
      styles: {
        textStyles: {
          heading: { fontSize: "2xl", fontWeight: "bold" },
        },
      },
    } as unknown as UsageTheme
    const result = transform("heading", { prev: {}, system: {} as any, theme })
    expect(result).toStrictEqual({ fontSize: "2xl", fontWeight: "bold" })
  })

  test("returns style from theme without prefix using dot notation", () => {
    const transform = generateStyle()
    const theme = {
      styles: {
        textStyles: {
          "heading.xl": { fontSize: "4xl" },
        },
      },
    } as unknown as UsageTheme
    const result = transform("textStyles.heading.xl", {
      prev: {},
      system: {} as any,
      theme,
    })
    expect(result).toStrictEqual({ fontSize: "4xl" })
  })

  test("skips properties already in prev", () => {
    const transform = generateStyle("textStyles")
    const theme = {
      styles: {
        textStyles: {
          heading: { color: "red", fontSize: "2xl" },
        },
      },
    } as unknown as UsageTheme
    const result = transform("heading", {
      prev: { fontSize: "1rem" },
      system: {} as any,
      theme,
    })
    expect(result).toStrictEqual({ color: "red" })
  })

  test("returns empty object when style not found", () => {
    const transform = generateStyle("textStyles")
    const theme = { styles: {} } as unknown as UsageTheme
    const result = transform("missing", { prev: {}, system: {} as any, theme })
    expect(result).toStrictEqual({})
  })
})
