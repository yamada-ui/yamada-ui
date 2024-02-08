import { render, a11y, screen } from "@yamada-ui/test"
import { Motion } from "../src"

describe("<Motion />", () => {
  test("Motion renders correctly", async () => {
    await a11y(<Motion />)
  })

  test("Motion renders correctly with className", async () => {
    render(<Motion data-testid="motion" />)
    const container = screen.getByTestId("motion")
    expect(container).toHaveClass("ui-motion")
  })

  test("Motion renders correctly with div", async () => {
    const { container } = render(<Motion />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
  })
})
