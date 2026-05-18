import { a11y, render, screen } from "#test"
import { Box } from "../box"
import { HStack } from "./h-stack"

describe("<HStack />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <HStack>
        <Box>HStack Item</Box>
      </HStack>,
    )
  })

  test("renders with row direction", () => {
    render(
      <HStack data-testid="h-stack">
        <Box>HStack Item</Box>
      </HStack>,
    )

    expect(screen.getByTestId("h-stack")).toHaveStyle({ flexDirection: "row" })
  })
})
