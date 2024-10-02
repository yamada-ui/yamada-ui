import type { UsageTheme } from "@yamada-ui/core"
import { baseTheme, defaultTheme } from "@yamada-ui/theme"
import { merge, omitObject } from "@yamada-ui/utils"
import {
  extendBaseTheme,
  extendComponent,
  extendComponentDefaultProps,
  extendComponentSize,
  extendComponentVariant,
  extendStyle,
  extendTheme,
  extendToken,
} from "../src"

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

describe("extendToken", () => {
  test("should merge default token", () => {
    const token = extendToken("colors", { muted: "#333333" })

    const expected = {
      ...defaultTheme.colors,
      muted: "#333333",
    }

    expect(token).toStrictEqual(expected)
  })

  test("returns default token even if no token is set", () => {
    const token = extendToken("colors")

    const expected = {
      ...defaultTheme.colors,
    }

    expect(token).toStrictEqual(expected)
  })
})

describe("extendStyle", () => {
  test("should merge default style", () => {
    const style = extendStyle("resetStyle", {
      span: { display: "inline-block" },
    })

    const expected = {
      ...defaultTheme.styles.resetStyle,
      span: { display: "inline-block" },
    }

    expect(style).toStrictEqual(expected)
  })
})

describe("extendComponent", () => {
  test("should merge component default style", () => {
    const style = extendComponent("Tag", {
      baseStyle: { display: "block" },
    })

    const expected = merge(defaultTheme.components["Tag"], {
      baseStyle: { display: "block" },
    })

    expect(style).toStrictEqual(expected)
  })

  test("returns default style even if no style is set", () => {
    const style = extendComponent("Tag")

    const expected = defaultTheme.components["Tag"]

    expect(style).toStrictEqual(expected)
  })
})

describe("extendComponentSize", () => {
  test("should merge component default size", () => {
    const sizes = extendComponentSize("Tag", {
      "3xl": {
        fontSize: "3xl",
      },
    })

    const expected = {
      ...defaultTheme.components["Tag"].sizes,
      "3xl": {
        fontSize: "3xl",
      },
    }

    expect(sizes).toStrictEqual(expected)
  })

  test("returns default size even if no size is set", () => {
    const sizes = extendComponentSize("Tag")

    const expected = defaultTheme.components["Tag"].sizes

    expect(sizes).toStrictEqual(expected)
  })
})

describe("extendComponentVariant", () => {
  test("should merge component default variant", () => {
    const variants = extendComponentVariant("Tag", {
      muted: {
        bg: "#333333",
      },
    })

    const expected = {
      ...defaultTheme.components["Tag"].variants,
      muted: {
        bg: "#333333",
      },
    }

    expect(variants).toStrictEqual(expected)
  })

  test("returns default variant even if no variant is set", () => {
    const variants = extendComponentVariant("Tag")

    const expected = defaultTheme.components["Tag"].variants

    expect(variants).toStrictEqual(expected)
  })
})

describe("extendComponentDefaultProps", () => {
  test("should merge component default props", () => {
    const defaultProps = extendComponentDefaultProps("Tag", {
      colorScheme: "blue",
    })

    const expected = {
      ...defaultTheme.components["Tag"].defaultProps,
      colorScheme: "blue",
    }

    expect(defaultProps).toStrictEqual(expected)
  })

  test("returns default props even if no props is set", () => {
    const variants = extendComponentDefaultProps("Tag")

    const expected = defaultTheme.components["Tag"].defaultProps

    expect(variants).toStrictEqual(expected)
  })
})
