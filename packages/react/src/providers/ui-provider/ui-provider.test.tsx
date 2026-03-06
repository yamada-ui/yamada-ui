import { render, screen } from "#test"
import { extendConfig, extendTheme, UIProvider } from "./ui-provider"

describe("UIProvider", () => {
  test("renders children correctly", () => {
    render(
      <UIProvider>
        <div data-testid="child">Hello</div>
      </UIProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("child")).toHaveTextContent("Hello")
  })
})

describe("extendTheme", () => {
  test("merges custom theme with default theme", () => {
    const result = extendTheme({
      colors: { custom: "#000" },
    })

    expect((result as any).colors.custom).toBe("#000")
    expect((result as any).semanticTokens).toBeDefined()
  })
})

describe("extendConfig", () => {
  test("merges custom config with default config", () => {
    const result = extendConfig({ defaultColorMode: "dark" })

    expect(result.defaultColorMode).toBe("dark")
    expect(result.css?.varPrefix).toBe("ui")
  })
})
