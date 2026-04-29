import { page, render, renderHook } from "#test/browser"
import { createStyled, useColorSchemeContext } from "./styled"

describe("createStyled", () => {
  test("creates a styled component with a simple HTML element", async () => {
    const StyledDiv = createStyled("div", { displayName: "StyledDiv" })
    await render(<StyledDiv data-testid="el">Hello</StyledDiv>)
    await expect.element(page.getByTestId("el")).toBeInTheDocument()
    expect(page.getByTestId("el").element().textContent).toBe("Hello")
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

  test("applies className from css", async () => {
    const StyledDiv = createStyled("div", {
      displayName: "Styled",
    })
    await render(
      <StyledDiv css={{ color: "red" }} data-testid="el">
        test
      </StyledDiv>,
    )
    await expect.element(page.getByTestId("el")).toBeInTheDocument()
  })
})

describe("useColorSchemeContext", () => {
  test("returns undefined when used without provider", async () => {
    const { result } = await renderHook(() => useColorSchemeContext())
    expect(result.current).toBeUndefined()
  })
})
