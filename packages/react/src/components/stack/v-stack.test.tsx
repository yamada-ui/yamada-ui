import { a11y, page, render } from "#test/browser"
import { Box } from "../box"
import { VStack } from "./v-stack"

const TestComponent = () => (
  <VStack data-testid="v-stack">
    <Box>VStack Item</Box>
  </VStack>
)

describe("<VStack />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(VStack.displayName).toBe("StackVertical")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)
    await expect
      .element(page.getByTestId("v-stack"))
      .toHaveClass("ui-stack--vertical")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)
    expect(page.getByTestId("v-stack").element().tagName).toBe("DIV")
  })

  test("renders v-stack correctly", async () => {
    await render(<TestComponent />)

    await expect.element(page.getByTestId("v-stack")).toHaveStyle({
      flexDirection: "column",
    })
  })
})
