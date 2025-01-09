import type { StyledTheme, ThemeConfig, UsageTheme } from "../theme.types"
import type { CSSObject } from "./css.types"
import { renderHook } from "../../../test"
import { ThemeProvider } from "../../providers/theme-provider"
import { pseudos } from "../pseudos"
import { transformTheme } from "../theme"
import { css } from "./css"
import { createVars, useCreateVars } from "./use-var"

const theme: UsageTheme = {
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "61em",
    xl: "80em",
    "2xl": "90em",
  },
  colors: {
    blue: {
      50: "#e2edfd",
      100: "#cfe0fc",
      200: "#adcbfa",
      300: "#8bb5f8",
      400: "#659cf6",
      500: "#4387f4",
      600: "#186bf2",
      700: "#0c59d4",
      800: "#0a47a9",
      900: "#07357d",
      950: "#062c6a",
    },
    green: {
      50: "#e0f5e6",
      100: "#d0f1d9",
      200: "#a9e5b9",
      300: "#86da9c",
      400: "#5fce7d",
      500: "#3cc360",
      600: "#31a04f",
      700: "#28813f",
      800: "#1d5e2e",
      900: "#133e1f",
      950: "#0d2b15",
    },
    red: {
      50: "#fdeae8",
      100: "#fbd9d5",
      200: "#f6b2ac",
      300: "#f28c82",
      400: "#ee6a5d",
      500: "#ea4334",
      600: "#de2817",
      700: "#b42013",
      800: "#8a190f",
      900: "#66120b",
      950: "#530f09",
    },
    yellow: {
      50: "#fef4d7",
      100: "#feefc3",
      200: "#fde290",
      300: "#fdd663",
      400: "#fcc931",
      500: "#fbbd04",
      600: "#ce9b03",
      700: "#a67d03",
      800: "#795b02",
      900: "#503d01",
      950: "#372a01",
    },
  },
  semantics: {
    colors: {
      danger: "red.500",
      primary: "blue.500",
      secondary: "red.500",
      tertiary: "green.500",
      warning: "yellow.500",
    },
    colorSchemes: {
      danger: "red",
      primary: "blue",
      secondary: "red",
      tertiary: "green",
      warning: "yellow",
    },
  },
}

const config: ThemeConfig = {
  breakpoint: { direction: "down" },
  initialColorMode: "light",
  initialThemeScheme: "base",
  var: { prefix: "ui" },
}

const transformedTheme = transformTheme(theme, config) as StyledTheme

describe("useCreateVars", () => {
  test("returns styles with theme values", () => {
    const { result } = renderHook(
      () => useCreateVars({ color: "primary" }, ["color"]),
      {
        wrapper: ({ children }) => (
          <ThemeProvider config={config} theme={theme}>
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
        value: {
          base: "primary",
        },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
  })
})

describe("createVars", () => {
  test("should create variables and variable props", () => {
    const cssObj: CSSObject = {
      color: "primary",
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary" },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "--ui-color-0": "var(--ui-colors-primary)",
    })
  })

  test("should create not token vars and variable props", () => {
    const cssObj: CSSObject = {
      textAlign: "center",
    }
    const [vars, variableProps] = createVars(cssObj, ["textAlign"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "textAlign-0",
        token: undefined,
        value: { base: "center" },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      textAlign: "$textAlign-0",
    })
    expect(result).toStrictEqual({
      "--ui-textAlign-0": "center",
    })
  })

  test("should create variables and variable props with custom format", () => {
    const cssObj: CSSObject = {
      transform: "rotate-reverse",
    }
    const [vars, variableProps] = createVars(cssObj, ["transform"], {
      format: (name, index) => `${name}-${index}`,
    })(transformedTheme)
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "transform-0",
        token: undefined,
        value: { base: "rotate-reverse" },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      transform: "$transform-0",
    })
    expect(result).toStrictEqual({
      "--ui-transform-0": "rotate-reverse",
    })
  })

  test("should omit not included keys", () => {
    const cssObj: CSSObject = {
      borderColor: "primary",
      color: "primary",
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-1",
        token: "colors",
        value: { base: "primary" },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-1",
    })
    expect(result).toStrictEqual({
      "--ui-color-1": "var(--ui-colors-primary)",
    })
  })

  test("should create variables and variable props with dark mode", () => {
    const cssObj: CSSObject = {
      color: ["primary", "secondary"],
    }

    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: ["primary", "secondary"] },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "--ui-color-0": "var(--ui-colors-primary)",
      [pseudos._dark]: {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
    })
  })

  test("should create variables and variable props with responsive object", () => {
    const cssObj: CSSObject = {
      color: { base: "primary", md: "secondary" },
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary", md: "secondary" },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "@media screen and (max-width: 768px)": {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
      "--ui-color-0": "var(--ui-colors-primary)",
    })
  })

  test("should create variables and variable props with nested object", () => {
    const cssObj: CSSObject = {
      color: "primary",
      _dark: {
        color: "secondary",
      },
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary", _dark: { base: "secondary" } },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "--ui-color-0": "var(--ui-colors-primary)",
      [pseudos._dark]: {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
    })
  })

  test("should create variables and variable props with nested object and dark mode", () => {
    const cssObj: CSSObject = {
      color: ["primary", "secondary"],
      _focus: {
        color: ["warning", "danger"],
      },
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: {
          base: ["primary", "secondary"],
          _focus: { base: ["warning", "danger"] },
        },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "&:focus, &[data-focus]": {
        "--ui-color-0": "var(--ui-colors-warning)",
        [pseudos._dark]: {
          "--ui-color-0": "var(--ui-colors-danger)",
        },
      },
      "--ui-color-0": "var(--ui-colors-primary)",
      [pseudos._dark]: {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
    })
  })

  test("should create variables and variable props with nested object and responsive object", () => {
    const cssObj: CSSObject = {
      color: { base: "primary", md: "secondary" },
      _focus: {
        color: { base: "warning", md: "danger" },
      },
    }

    const [vars, variableProps] = createVars(cssObj, ["color"])(
      transformedTheme,
    )
    const result = css({ vars })(transformedTheme)

    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: {
          base: "primary",
          md: "secondary",
          _focus: { base: "warning", md: "danger" },
        },
        __prefix: "ui",
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "$color-0",
    })
    expect(result).toStrictEqual({
      "&:focus, &[data-focus]": {
        "@media screen and (max-width: 768px)": {
          "--ui-color-0": "var(--ui-colors-danger)",
        },
        "--ui-color-0": "var(--ui-colors-warning)",
      },
      "@media screen and (max-width: 768px)": {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
      "--ui-color-0": "var(--ui-colors-primary)",
    })
  })
})
