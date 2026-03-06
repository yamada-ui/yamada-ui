import { render, renderHook, screen } from "#test"
import { createStyled, useColorSchemeContext } from "./styled"

describe("createStyled", () => {
  test("creates a styled component with a simple HTML element", () => {
    const StyledDiv = createStyled("div", { displayName: "StyledDiv" })
    render(<StyledDiv data-testid="el">Hello</StyledDiv>)
    expect(screen.getByTestId("el")).toBeInTheDocument()
    expect(screen.getByTestId("el").textContent).toBe("Hello")
  })

  test("creates a styled component with a name", () => {
    const StyledDiv = createStyled("div", {
      name: "TestComponent",
    })
    expect(StyledDiv.displayName).toBe("TestComponent")
  })

  test("creates a styled component with custom displayName", () => {
    const StyledDiv = createStyled("div", {
      displayName: "CustomName",
    })
    expect(StyledDiv.displayName).toBe("CustomName")
  })

  test("falls back to 'StyledComponent' when no displayName or name", () => {
    const StyledDiv = createStyled("div")
    expect(StyledDiv.displayName).toBe("StyledComponent")
  })

  test("applies className from css", () => {
    const StyledDiv = createStyled("div", {
      displayName: "Styled",
    })
    render(
      <StyledDiv css={{ color: "red" }} data-testid="el">
        test
      </StyledDiv>,
    )
    const el = screen.getByTestId("el")
    expect(el).toBeInTheDocument()
  })
})

describe("useColorSchemeContext", () => {
  test("returns undefined when used without provider", () => {
    const { result } = renderHook(() => useColorSchemeContext())
    expect(result.current).toBeUndefined()
  })
})
