import { render, screen } from "#test"
import { VisuallyHidden } from "./"

describe("<VisuallyHidden />", () => {
  test("renders component correctly", () => {
    render(<VisuallyHidden>Test</VisuallyHidden>)
    const el = screen.getByText("Test")
    expect(el.textContent).toBe("Test")
  })
})
