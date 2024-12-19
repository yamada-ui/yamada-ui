import { render, screen } from "../../../test"
import { Container } from "./container"

describe("<Container />", () => {
  test("renders container correctly", () => {
    render(<Container>Container</Container>)
  })

  test("centerContent - prop works correctly", () => {
    render(<Container centerContent>Container</Container>)

    expect(screen.getByText("Container")).toHaveStyle({ alignItems: "center" })
  })
})
