import { a11y, hasSuppressHydrationWarning, render, screen } from "#test"
import { createStyled } from "./styled"

describe("createStyled", () => {
  test("passes a11y", async () => {
    const Component = createStyled("div")
    await a11y(<Component>content</Component>)
  })

  test("creates a styled component with a simple HTML element", () => {
    const Component = createStyled("div")
    render(<Component data-testid="el">Hello</Component>)
    const el = screen.getByTestId("el")
    expect(el).toBeInTheDocument()
    expect(el.textContent).toBe("Hello")
  })

  test("creates a styled component with a name", () => {
    const Component = createStyled("div", {
      name: "TestComponent",
    })
    expect(Component.displayName).toBe("TestComponent")
  })

  test("creates a styled component with custom displayName", () => {
    const Component = createStyled("div", {
      displayName: "TestComponent",
    })
    expect(Component.displayName).toBe("TestComponent")
  })

  test("falls back to 'StyledComponent' when no displayName or name", () => {
    const Component = createStyled("div")
    expect(Component.displayName).toBe("StyledComponent")
  })

  test("applies `className` from css", () => {
    const Component = createStyled("div")
    render(
      <Component css={{ color: "red" }} data-testid="el">
        test
      </Component>,
    )
    expect(screen.getByTestId("el").className).toMatch(/css-.*/)
  })

  test("inherits `suppressHydrationWarning` from a parent styled component and allows overriding it", () => {
    const Component1 = createStyled("div")
    const Component2 = createStyled("div")
    const Component3 = createStyled("div")
    render(
      <Component1 suppressHydrationWarning>
        <Component2 data-testid="el2">
          <Component3 data-testid="el3" suppressHydrationWarning={false}>
            test
          </Component3>
        </Component2>
      </Component1>,
    )
    expect(hasSuppressHydrationWarning(screen.getByTestId("el2"))).toBeTruthy()
    expect(hasSuppressHydrationWarning(screen.getByTestId("el3"))).toBeFalsy()
  })
})
