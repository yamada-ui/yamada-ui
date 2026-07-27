import type { CSSVars } from "./index.types"
import { renderHook } from "#test"
import { createSystem, defaultSystem } from "./create-system"
import { useSystem } from "./system-provider"
import { createVarRules } from "./var"

describe("defaultSystem", () => {
  test("has expected default structure", () => {
    expect(defaultSystem.breakpoints).toBeDefined()
    expect(defaultSystem.config).toStrictEqual({})
    expect(defaultSystem.cssMap).toStrictEqual({})
    expect(defaultSystem.cssVars).toStrictEqual({ light: {}, dark: {} })
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
      colors: {
        blue: { 500: "#0000ff" },
        red: { 500: "#ff0000" },
      },
      semanticTokens: {
        colors: { primary: ["red.500", "blue.500"] },
      },
      themeSchemes: {
        dark: {
          colors: { red: { 500: "#cc0000" } },
        },
      },
    })

    expect(system.cssVars.dark[system.cssMap["colors.primary"]!.var]).toBe(
      "var(--ui-colors-blue-500)",
    )
    expect(system.cssVars.themes?.dark).toBeDefined()
  })

  test("creates light and dark variables from color mode values", () => {
    const system = createSystem({
      colors: {
        blue: { 500: "#0000ff" },
        red: { 500: "#ff0000" },
      },
      semanticTokens: {
        colors: { primary: ["red.500", "blue.500"] },
      },
    })
    const variable = system.cssMap["colors.primary"]!.var

    expect(system.cssVars.light[variable]).toBe("var(--ui-colors-red-500)")
    expect(system.cssVars.dark[variable]).toBe("var(--ui-colors-blue-500)")
  })

  test("creates negative space tokens", () => {
    const system = createSystem({
      spaces: { md: "1rem" },
    })
    expect(system.cssMap["spaces.-md"]).toBeDefined()
  })

  test("creates responsive variables for each color mode", () => {
    const system = createSystem(
      {
        breakpoints: {
          md: "48em",
        },
        colors: {
          blue: { 500: "#0000ff" },
          red: { 500: "#ff0000" },
        },
        semanticTokens: {
          colors: {
            primary: {
              base: ["red.500", "blue.500"],
              md: ["blue.500", "red.500"],
            },
          },
        },
      },
      { theme: { responsive: true } },
    )
    const query = system.breakpoints.getQuery("md")!
    const variable = system.cssMap["colors.primary"]!.var

    expect(system.cssVars.light[query][variable]).toBe(
      "var(--ui-colors-blue-500)",
    )
    expect(system.cssVars.dark[query][variable]).toBe(
      "var(--ui-colors-red-500)",
    )
  })
})

describe("useSystem", () => {
  test("uses the shadow root for keyframe styles", () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    const { result } = renderHook(() => useSystem(), {
      providerProps: { rootNode: shadowRoot },
    })

    expect(result.current.rootNode).toBe(shadowRoot)
    expect(
      shadowRoot.querySelector('style[data-emotion="css"]')?.parentNode,
    ).toBe(shadowRoot)
  })

  test("returns system from provider", () => {
    const { result } = renderHook(() => useSystem())
    expect(result.current.breakpoints).toBeDefined()
    expect(result.current.cssMap).toBeDefined()
    expect(result.current.layers).toBeDefined()
  })
})

describe("createVarRules", () => {
  test("creates rules for color modes and theme scopes", () => {
    const cssVars: CSSVars = {
      light: { "--ui-colors-bg": "#fff" },
      dark: { "--ui-colors-bg": "#000" },
      themes: {
        blue: {
          light: { "--ui-colors-bg": "#def" },
          dark: { "--ui-colors-bg": "#001" },
        },
      },
    }

    expect(createVarRules(":host, :root", cssVars)).toStrictEqual({
      ":host([data-mode=dark]), :root[data-mode=dark], [data-mode=dark]": {
        "--ui-colors-bg": "#000",
      },
      ":host([data-theme=blue]), :root[data-theme=blue], [data-theme=blue], [data-theme=blue] [data-mode=light], :host([data-theme=blue]) [data-mode=light]":
        {
          "--ui-colors-bg": "#def",
        },
      ":host([data-theme=blue][data-mode=dark]), :root[data-theme=blue][data-mode=dark], [data-theme=blue][data-mode=dark], [data-theme=blue] [data-mode=dark], [data-mode=dark] [data-theme=blue], :host([data-theme=blue]) [data-mode=dark], :host([data-mode=dark]) [data-theme=blue]":
        {
          "--ui-colors-bg": "#001",
        },
      ":host, :root, [data-mode=light]": { "--ui-colors-bg": "#fff" },
    })
  })

  test("omits empty color mode and theme rules", () => {
    const cssVars: CSSVars = {
      light: { "--ui-colors-bg": "#fff" },
      dark: {},
      themes: {
        blue: { light: {}, dark: {} },
      },
    }

    expect(createVarRules(":host, :root", cssVars)).toStrictEqual({
      ":host, :root, [data-mode=light]": { "--ui-colors-bg": "#fff" },
    })
  })
})
