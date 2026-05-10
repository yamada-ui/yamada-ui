import { a11y, render, screen } from "#test"
import { Box } from "../box"
import { VStack } from "./v-stack"

describe("<VStack />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <VStack>
        <Box>VStack Item</Box>
      </VStack>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(VStack.displayName).toBe("StackVertical")
  })

  test("sets `className` correctly", () => {
    render(
      <VStack data-testid="v-stack">
        <Box>VStack Item</Box>
      </VStack>,
    )

    expect(screen.getByTestId("v-stack")).toHaveClass("ui-stack--vertical")
  })

  test("renders HTML tag correctly", () => {
    render(
      <VStack data-testid="v-stack">
        <Box>VStack Item</Box>
      </VStack>,
    )

    expect(screen.getByTestId("v-stack").tagName).toBe("DIV")
  })

  test("renders with column direction", () => {
    render(
      <VStack data-testid="v-stack">
        <Box>VStack Item</Box>
      </VStack>,
    )

    expect(screen.getByTestId("v-stack")).toHaveStyle({
      flexDirection: "column",
    })
  })
})
