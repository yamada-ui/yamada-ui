import { render, screen } from "#test"
import { extendConfig, extendTheme } from "./ui-provider"

describe("UIProvider", () => {
  test("renders children correctly", () => {
    render(<div data-testid="child">Hello</div>)

    expect(screen.getByTestId("child")).toHaveTextContent("Hello")
  })
})

describe("extendTheme", () => {
  test("merges custom theme with default theme", () => {
    const result = extendTheme({
      colors: { custom: "#000" },
    })

    expect((result as any).colors.custom).toBe("#000")
    expect((result as any).colors).toBeDefined()
  })
})

describe("extendConfig", () => {
  test("merges custom config with default config", () => {
    const result = extendConfig({ defaultColorMode: "dark" })

    expect(result.defaultColorMode).toBe("dark")
  })
})
