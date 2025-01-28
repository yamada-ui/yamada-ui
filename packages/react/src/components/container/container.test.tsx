import { render, screen } from "../../../test"
import { Container } from "./"

describe("<Container />", () => {
  test("renders container correctly", () => {
    render(<Container.Root>Container</Container.Root>)
  })

  test("centerContent - prop works correctly", () => {
    render(<Container.Root centerContent>Container</Container.Root>)

    expect(screen.getByText("Container")).toHaveStyle({ alignItems: "center" })
  })
})
