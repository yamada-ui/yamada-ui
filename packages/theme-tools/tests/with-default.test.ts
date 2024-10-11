import type { ThemeComponents } from "@yamada-ui/core"
import { defaultTheme } from "@yamada-ui/theme"
import { isObject } from "@yamada-ui/utils"
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
} from "../src"

describe("withDefaultSize", () => {
  test("should change default size", () => {
    const customTheme = withDefaultSize({
      size: "lg",
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (isObject(styles.defaultProps)) {
          styles.defaultProps.size = "lg"
        } else {
          styles.defaultProps = { size: "lg" }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("The default size of the specified components is changed", () => {
    const components = ["Tag"]

    const customTheme = withDefaultSize({
      size: "lg",
      components,
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (components.includes(name)) {
          if (isObject(styles.defaultProps)) {
            styles.defaultProps.size = "lg"
          } else {
            styles.defaultProps = { size: "lg" }
          }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })
})

describe("withDefaultVariant", () => {
  test("should change default variant", () => {
    const customTheme = withDefaultVariant({
      variant: "solid",
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (isObject(styles.defaultProps)) {
          styles.defaultProps.variant = "solid"
        } else {
          styles.defaultProps = { variant: "solid" }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("The default variant of the specified components is changed", () => {
    const components = ["Tag"]

    const customTheme = withDefaultVariant({
      variant: "outline",
      components,
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (components.includes(name)) {
          if (isObject(styles.defaultProps)) {
            styles.defaultProps.variant = "outline"
          } else {
            styles.defaultProps = { variant: "outline" }
          }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })
})

describe("withDefaultColorScheme", () => {
  test("should change default color scheme", () => {
    const customTheme = withDefaultColorScheme({
      colorScheme: "blue",
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (isObject(styles.defaultProps)) {
          styles.defaultProps.colorScheme = "blue"
        } else {
          styles.defaultProps = { colorScheme: "blue" }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("The default color scheme of the specified components is changed", () => {
    const components = ["Tag"]

    const customTheme = withDefaultColorScheme({
      colorScheme: "red",
      components,
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (components.includes(name)) {
          if (isObject(styles.defaultProps)) {
            styles.defaultProps.colorScheme = "red"
          } else {
            styles.defaultProps = { colorScheme: "red" }
          }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })
})

describe("withDefaultProps", () => {
  test("should change default color scheme", () => {
    const customTheme = withDefaultProps({
      defaultProps: { colorScheme: "blue", size: "lg", variant: "outline" },
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (isObject(styles.defaultProps)) {
          styles.defaultProps.size = "lg"
          styles.defaultProps.variant = "outline"
          styles.defaultProps.colorScheme = "blue"
        } else {
          styles.defaultProps = {
            colorScheme: "blue",
            size: "lg",
            variant: "outline",
          }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })

  test("The default color scheme of the specified components is changed", () => {
    const components = ["Tag"]

    const customTheme = withDefaultProps({
      components,
      defaultProps: { colorScheme: "blue", size: "lg", variant: "outline" },
    })

    const expected = {
      ...defaultTheme,
      components: Object.entries(
        defaultTheme.components,
      ).reduce<ThemeComponents>((prev, [name, styles]) => {
        if (components.includes(name)) {
          if (isObject(styles.defaultProps)) {
            styles.defaultProps.size = "lg"
            styles.defaultProps.variant = "outline"
            styles.defaultProps.colorScheme = "blue"
          } else {
            styles.defaultProps = {
              colorScheme: "blue",
              size: "lg",
              variant: "outline",
            }
          }
        }

        prev[name] = styles

        return prev
      }, {}),
    }

    expect(extendTheme(customTheme)()).toStrictEqual(expected)
  })
})
