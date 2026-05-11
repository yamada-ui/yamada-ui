import { renderHook } from "#test"
import { createSystem, defaultSystem } from "./create-system"
import { useSystem } from "./system-provider"

describe("defaultSystem", () => {
  test("has expected default structure", () => {
    expect(defaultSystem.breakpoints).toBeDefined()
    expect(defaultSystem.config).toStrictEqual({})
    expect(defaultSystem.cssMap).toStrictEqual({})
    expect(defaultSystem.cssVars).toStrictEqual({})
    expect(defaultSystem.layers).toBeDefined()
    expect(defaultSystem.utils.getClassName).toBeDefined()
  })
})

describe("createSystem", () => {
  test("creates a system from empty theme", () => {
    const system = createSystem({})
    expect(system.breakpoints).toBeDefined()
    expect(system.cssMap).toBeDefined()
    expect(system.cssVars).toBeDefined()
    expect(system.layers).toBeDefined()
    expect(system.utils.getClassName).toBeDefined()
  })

  test("creates a system with colors", () => {
    const system = createSystem({
      colors: {
        red: { 500: "#ff0000" },
      },
    })
    expect(system.cssMap["colors.red.500"]).toBeDefined()
  })

  test("creates a system with semantic tokens", () => {
    const system = createSystem({
      colors: { red: { 500: "#ff0000" } },
      semanticTokens: {
        colors: { primary: "red.500" },
      },
    })
    expect(system.cssMap["colors.primary"]).toBeDefined()
  })

  test("uses custom var prefix from config", () => {
    const system = createSystem(
      { colors: { red: { 500: "#ff0000" } } },
      { css: { varPrefix: "custom" } },
    )
    const ref = system.cssMap["colors.red.500"]?.ref
    expect(ref).toContain("--custom-")
  })

  test("creates getClassName with prefix", () => {
    const system = createSystem({}, { css: { varPrefix: "ui" } })
    const className = system.utils.getClassName("button")
    expect(className).toBe("ui-button")
  })

  test("getClassName returns empty string for falsy block", () => {
    const system = createSystem({})
    const className = system.utils.getClassName("")
    expect(className).toBe("")
  })

  test("creates system with breakpoints", () => {
    const system = createSystem({
      breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
      },
    })
    expect(system.breakpoints.queries.length).toBeGreaterThan(0)
  })

  test("creates system with layers disabled", () => {
    const system = createSystem({}, { css: { layers: false } })
    expect(system.layers.atRule).toBeUndefined()
    expect(system.layers.names).toStrictEqual([])
  })

  test("creates system with themeSchemes", () => {
    const system = createSystem({
      colors: { red: { 500: "#ff0000" } },
      themeSchemes: {
        dark: {
          colors: { red: { 500: "#cc0000" } },
        },
      },
    })
    const hasDarkThemeCondition = Object.keys(system.cssVars).some((key) =>
      key.includes("data-theme=dark"),
    )
    expect(hasDarkThemeCondition).toBeTruthy()
  })

  test("creates negative space tokens", () => {
    const system = createSystem({
      spaces: { md: "1rem" },
    })
    expect(system.cssMap["spaces.-md"]).toBeDefined()
  })

  test("handles responsive config", () => {
    const system = createSystem(
      {
        breakpoints: {
          sm: "30em",
          md: "48em",
          lg: "62em",
          xl: "80em",
          "2xl": "96em",
        },
      },
      { theme: { responsive: true } },
    )
    expect(system.breakpoints).toBeDefined()
  })
})

describe("useSystem", () => {
  test("returns system from provider", () => {
    const { result } = renderHook(() => useSystem())
    expect(result.current.breakpoints).toBeDefined()
    expect(result.current.cssMap).toBeDefined()
    expect(result.current.layers).toBeDefined()
  })
})
