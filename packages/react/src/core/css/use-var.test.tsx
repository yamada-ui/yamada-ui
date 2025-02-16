import type { CSSObject } from "./index.types"
import { renderHook, styledTheme } from "../../../test"
import { pseudos } from "../pseudos"
import { css } from "./css"
import { createVars, useCreateVars } from "./use-var"

describe("useCreateVars", () => {
  test("returns styles with theme values", () => {
    const { result } = renderHook(() =>
      useCreateVars({ color: "primary" }, ["color"]),
    )
    const [vars, variableProps] = result.current
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: {
          base: "primary",
        },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
    })
  })
})

describe("createVars", () => {
  test("should create variables and variable props", () => {
    const cssObj: CSSObject = {
      color: "primary",
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary" },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
    })
    expect(result).toStrictEqual({
      "--ui-color-0": "var(--ui-colors-primary)",
    })
  })

  test("should create not token vars and variable props", () => {
    const cssObj: CSSObject = {
      textAlign: "center",
    }
    const [vars, variableProps] = createVars(cssObj, ["textAlign"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "textAlign-0",
        token: undefined,
        value: { base: "center" },
      },
    ])
    expect(variableProps).toStrictEqual({
      textAlign: "{textAlign-0}",
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
    })(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "transform-0",
        token: undefined,
        value: { base: "rotate-reverse" },
      },
    ])
    expect(variableProps).toStrictEqual({
      transform: "{transform-0}",
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
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-1",
        token: "colors",
        value: { base: "primary" },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-1}",
    })
    expect(result).toStrictEqual({
      "--ui-color-1": "var(--ui-colors-primary)",
    })
  })

  test("should create variables and variable props with dark mode", () => {
    const cssObj: CSSObject = {
      color: ["primary", "secondary"],
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: ["primary", "secondary"] },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
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
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary", md: "secondary" },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
    })
    expect(result).toStrictEqual({
      "--ui-color-0": "var(--ui-colors-primary)",
      "@media screen and (max-width: 768px)": {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
    })
  })

  test("should create variables and variable props with nested object", () => {
    const cssObj: CSSObject = {
      color: "primary",
      _dark: {
        color: "secondary",
      },
    }
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: { base: "primary", _dark: { base: "secondary" } },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
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
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: {
          base: ["primary", "secondary"],
          _focus: { base: ["warning", "danger"] },
        },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
    })
    expect(result).toStrictEqual({
      "&:is(:focus, [data-focus])": {
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
    const [vars, variableProps] = createVars(cssObj, ["color"])(styledTheme)
    const result = css({ vars })(styledTheme)
    expect(vars).toStrictEqual([
      {
        name: "color-0",
        token: "colors",
        value: {
          base: "primary",
          md: "secondary",
          _focus: { base: "warning", md: "danger" },
        },
      },
    ])
    expect(variableProps).toStrictEqual({
      color: "{color-0}",
    })
    expect(result).toStrictEqual({
      "&:is(:focus, [data-focus])": {
        "--ui-color-0": "var(--ui-colors-warning)",
        "@media screen and (max-width: 768px)": {
          "--ui-color-0": "var(--ui-colors-danger)",
        },
      },
      "--ui-color-0": "var(--ui-colors-primary)",
      "@media screen and (max-width: 768px)": {
        "--ui-color-0": "var(--ui-colors-secondary)",
      },
    })
  })
})
