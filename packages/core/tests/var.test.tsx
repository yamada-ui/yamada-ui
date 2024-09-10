import { renderHook } from "@yamada-ui/test"
import type { CSSUIObject, StyledTheme, ThemeConfig, UsageTheme } from "../src"
import {
  createVars,
  ThemeProvider,
  transformTheme,
  useCreateVars,
} from "../src"

const theme: UsageTheme = {
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "61em",
    xl: "80em",
    "2xl": "90em",
  },
}

const config: ThemeConfig = {
  initialThemeScheme: "base",
  initialColorMode: "light",
  var: { prefix: "ui" },
  breakpoint: { direction: "down" },
}

const transformedTheme = transformTheme(theme, config) as StyledTheme

describe("var", () => {
  describe("useCreateVars", () => {
    test("returns styles with theme values", async () => {
      const { result } = renderHook(
        () => useCreateVars({ color: "primary" }, ["color"]),
        {
          wrapper: ({ children }) => (
            <ThemeProvider theme={theme} config={config}>
              {children}
            </ThemeProvider>
          ),
        },
      )

      const [vars, variableProps] = result.current

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: "primary",
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
      })
    })
  })

  describe("createVars", () => {
    test("should create variables and variable props", () => {
      const css: CSSUIObject = {
        color: "primary",
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: "primary",
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
      })
    })

    test("should create not token vars and variable props", () => {
      const css: CSSUIObject = {
        textAlign: "center",
      }

      const [vars, variableProps] = createVars(css, ["textAlign"])(
        transformedTheme,
      )

      expect(vars).toStrictEqual([
        {
          name: "textAlign-0",
          token: undefined,
          value: "center",
        },
      ])

      expect(variableProps).toStrictEqual({
        textAlign: "$textAlign-0",
      })
    })

    test("should create variables and variable props with custom format", () => {
      const css: CSSUIObject = {
        transform: "rotate-reverse",
      }

      const [vars, variableProps] = createVars(
        css,
        ["transform"],
        (name, index) => `ui-${name}-${index}`,
      )(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "ui-transform-0",
          token: undefined,
          value: "rotate-reverse",
        },
      ])

      expect(variableProps).toStrictEqual({
        transform: "$ui-transform-0",
      })
    })

    test("should omit not included keys", () => {
      const css: CSSUIObject = {
        color: "primary",
        borderColor: "primary",
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: "primary",
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
      })
    })

    test("should create variables and variable props with dark mode", () => {
      const css: CSSUIObject = {
        color: ["primary", "secondary"],
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: ["primary", "secondary"],
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
      })
    })

    test("should create variables and variable props with responsive object", () => {
      const css: CSSUIObject = {
        color: { base: "primary", md: "secondary" },
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: { base: "primary", md: "secondary" },
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
      })
    })

    test("should create variables and variable props with nested object", () => {
      const css: CSSUIObject = {
        color: "primary",
        _dark: {
          color: "secondary",
        },
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: "primary",
        },
        {
          name: "color-1",
          token: "colors",
          value: "secondary",
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
        _dark: {
          color: "$color-1",
        },
      })
    })

    test("should create variables and variable props with nested object and dark mode", () => {
      const css: CSSUIObject = {
        color: ["primary", "secondary"],
        _focus: {
          color: ["warning", "danger"],
        },
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: ["primary", "secondary"],
        },
        {
          name: "color-1",
          token: "colors",
          value: ["warning", "danger"],
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
        _focus: {
          color: "$color-1",
        },
      })
    })

    test("should create variables and variable props with nested object and responsive object", () => {
      const css: CSSUIObject = {
        color: { base: "primary", md: "secondary" },
        _focus: {
          color: { base: "warning", md: "danger" },
        },
      }

      const [vars, variableProps] = createVars(css, ["color"])(transformedTheme)

      expect(vars).toStrictEqual([
        {
          name: "color-0",
          token: "colors",
          value: { base: "primary", md: "secondary" },
        },
        {
          name: "color-1",
          token: "colors",
          value: { base: "warning", md: "danger" },
        },
      ])

      expect(variableProps).toStrictEqual({
        color: "$color-0",
        _focus: {
          color: "$color-1",
        },
      })
    })
  })
})
