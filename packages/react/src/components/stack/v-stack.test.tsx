import { a11y, render, screen } from "../../../test"
import { Box } from "../box"
import { VStack } from "./v-stack"

const TestComponent = () => (
  <VStack data-testid="v-stack">
    <Box>VStack Item</Box>
  </VStack>
)

describe("<VStack />", () => {
  test("passes a11y test", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(VStack.displayName).toBe("StackVertical")
    expect(VStack.__styled__).toBe("StackVertical")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("v-stack")).toHaveClass("ui-stack--vertical")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("v-stack").tagName).toBe("DIV")
  })

  test("renders v-stack correctly", () => {
    render(<TestComponent />)

    expect(screen.getByTestId("v-stack")).toHaveStyle({
      flexDirection: "column",
    })
  })
})
