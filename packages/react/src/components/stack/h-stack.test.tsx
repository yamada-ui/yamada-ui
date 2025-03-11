import { a11y, render, screen } from "../../../test"
import { Box } from "../box"
import { HStack } from "./h-stack"

const TestComponent = () => (
  <HStack data-testid="h-stack">
    <Box>HStack Item</Box>
  </HStack>
)

describe("<HStack />", () => {
  test("passes a11y test", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(HStack.displayName).toBe("StackHorizontal")
    expect(HStack.__ui__).toBe("StackHorizontal")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("h-stack")).toHaveClass("ui-stack--horizontal")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("h-stack").tagName).toBe("DIV")
  })

  test("renders h-stack correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("h-stack")).toHaveStyle({ flexDirection: "row" })
  })
})
