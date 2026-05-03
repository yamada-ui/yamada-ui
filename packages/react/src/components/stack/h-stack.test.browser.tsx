import { a11y, page, render } from "#test/browser"
import { Box } from "../box"
import { HStack } from "./h-stack"

const TestComponent = () => (
  <HStack data-testid="h-stack">
    <Box>HStack Item</Box>
  </HStack>
)

describe("<HStack />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(HStack.displayName).toBe("StackHorizontal")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)
    await expect
      .element(page.getByTestId("h-stack"))
      .toHaveClass("ui-stack--horizontal")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)
    expect(page.getByTestId("h-stack").element().tagName).toBe("DIV")
  })

  test("renders h-stack correctly", async () => {
    await render(<TestComponent />)

    await expect
      .element(page.getByTestId("h-stack"))
      .toHaveStyle({ flexDirection: "row" })
  })
})
