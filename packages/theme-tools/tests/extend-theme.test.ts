import type { UsageTheme } from "@yamada-ui/core"
import { defaultTheme, baseTheme } from "@yamada-ui/theme"
import { omitObject } from "@yamada-ui/utils"
import { extendBaseTheme, extendTheme } from "../src"

describe("mergeStyle", () => {
  test("should merge default theme", () => {
    const source: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: "#000" },
    }

    expect(extendTheme(source)()).toEqual(expected)
  })

  test("should merge base theme", () => {
    const source: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      ...baseTheme,
      colors: { ...baseTheme.colors, primary: "#000" },
    }

    expect(extendBaseTheme(source)()).toEqual(expected)
  })

  test("should many merge theme", () => {
    const source1: UsageTheme = {
      colors: { primary: "#000" },
    }

    const source2: UsageTheme = {
      colors: { primary: "#FFF", secondary: "red" },
    }

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: "#000", secondary: "red" },
    }

    expect(extendTheme(source1, source2)()).toEqual(expected)
  })

  test("should not merge", () => {
    const source: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      colors: { primary: "#000" },
    }

    expect(extendTheme(source)({ merge: false })).toEqual(expected)
  })

  test("should correctly handle function themes", () => {
    const source = (theme: UsageTheme) => ({
      colors: { ...theme.colors, tertiary: "#FF0" },
    })

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, tertiary: "#FF0" },
    }

    expect(extendTheme(source)()).toEqual(expected)
  })

  test("should correctly handle multiple function themes", () => {
    const source1 = (theme: UsageTheme) => ({
      colors: { ...theme.colors, tertiary: "#FF0" },
    })

    const source2 = (theme: UsageTheme) => ({
      colors: { ...theme.colors, quaternary: "#00F" },
    })

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, tertiary: "#FF0", quaternary: "#00F" },
    }

    expect(extendTheme(source1, source2)()).toEqual(expected)
  })

  test("should correctly handle theme with omitted keys", () => {
    const source: UsageTheme = {
      colors: { primary: "#000", secondary: "#FFF" },
    }

    const expected = {
      ...omitObject(defaultTheme, ["colors"]),
      colors: { primary: "#000", secondary: "#FFF" },
    }

    expect(extendTheme(source)({ omit: ["colors"] })).toEqual(expected)
  })

  test("should correctly handle theme with picked keys", () => {
    const source: UsageTheme = {
      zIndices: { "zen-oh": Infinity },
    }

    const expected = {
      zIndices: {
        ...defaultTheme.zIndices,
        "zen-oh": Infinity,
      },
    }

    expect(extendTheme(source)({ pick: ["zIndices"] })).toEqual(expected)
  })

  test("should return an empty object when merge is false and no extensions are provided", () => {
    expect(extendTheme()({ merge: false })).toEqual({})
  })

  test("should not modify the original objects", () => {
    const source: UsageTheme = {
      colors: { primary: "#000" },
    }

    extendTheme(source)()

    expect(source).toEqual({ colors: { primary: "#000" } })
  })
})
