import type { UsageTheme } from "../../core"
import defaultTheme, { baseTheme } from "../"
import { omitObject } from "../../utils"
import { extendBaseTheme, extendTheme } from "./extend-theme"

describe("extendTheme", () => {
  test("should merge default theme", () => {
    const customTheme: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: "#000" },
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("should many merge theme", () => {
    const customTheme1: UsageTheme = {
      colors: { primary: "#000" },
    }

    const customTheme2: UsageTheme = {
      colors: { primary: "#FFF", secondary: "red" },
    }

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: "#000", secondary: "red" },
    }

    expect(extendTheme(customTheme1, customTheme2)()).toStrictEqual(expected)
  })

  test("should not merge", () => {
    const customTheme: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      colors: { primary: "#000" },
    }

    expect(extendTheme(customTheme)({ merge: false })).toStrictEqual(expected)
  })

  test("should correctly handle function themes", () => {
    const customTheme = (theme: UsageTheme) => ({
      colors: { ...theme.colors, tertiary: "#FF0" },
    })

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, tertiary: "#FF0" },
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("should correctly handle multiple function themes", () => {
    const customTheme1 = (theme: UsageTheme) => ({
      colors: { ...theme.colors, tertiary: "#FF0" },
    })

    const customTheme2 = (theme: UsageTheme) => ({
      colors: { ...theme.colors, quaternary: "#00F" },
    })

    const expected = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, quaternary: "#00F", tertiary: "#FF0" },
    }

    expect(extendTheme(customTheme1, customTheme2)()).toStrictEqual(expected)
  })

  test("should correctly handle theme with omitted keys", () => {
    const customTheme: UsageTheme = {
      colors: { primary: "#000", secondary: "#FFF" },
    }

    const expected = {
      ...omitObject(defaultTheme, ["colors"]),
      colors: { primary: "#000", secondary: "#FFF" },
    }

    expect(extendTheme(customTheme)({ omit: ["colors"] })).toStrictEqual(
      expected,
    )
  })

  test("should correctly handle theme with picked keys", () => {
    const customTheme: UsageTheme = {
      zIndices: { "zen-oh": Infinity },
    }

    const expected = {
      zIndices: {
        ...defaultTheme.zIndices,
        "zen-oh": Infinity,
      },
    }

    expect(extendTheme(customTheme)({ pick: ["zIndices"] })).toStrictEqual(
      expected,
    )
  })

  test("should return an empty object when merge is false and no extensions are provided", () => {
    expect(extendTheme()({ merge: false })).toStrictEqual({})
  })

  test("should not modify the original objects", () => {
    const customTheme: UsageTheme = {
      colors: { primary: "#000" },
    }

    extendTheme(customTheme)()

    expect(customTheme).toStrictEqual({ colors: { primary: "#000" } })
  })
})

describe("extendBaseTheme", () => {
  test("should merge base theme", () => {
    const customTheme: UsageTheme = {
      colors: { primary: "#000" },
    }

    const expected = {
      ...baseTheme,
      colors: { ...baseTheme.colors, primary: "#000" },
    }

    expect(extendBaseTheme(customTheme)()).toStrictEqual(expected)
  })
})
