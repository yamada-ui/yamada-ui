import { render, screen } from "../../../test"
import { VStack } from "./v-stack"

describe("<VStack />", () => {
  test("renders v-stack correctly", () => {
    render(<VStack data-testid="v-stack">VStack</VStack>)

    expect(screen.getByTestId("v-stack")).toHaveStyle({
      flexDirection: "column",
    })
  })
})
