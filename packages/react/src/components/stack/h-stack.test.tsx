import { render, screen } from "../../../test"
import { HStack } from "./h-stack"

describe("<HStack />", () => {
  test("renders h-stack correctly", () => {
    render(<HStack data-testid="h-stack">HStack</HStack>)

    expect(screen.getByTestId("h-stack")).toHaveStyle({ flexDirection: "row" })
  })
})
