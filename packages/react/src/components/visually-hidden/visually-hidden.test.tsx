import { render, screen } from "#test"
import { VisuallyHidden } from "./"

describe("<VisuallyHidden />", () => {
  test("VisuallyHidden renders correctly", () => {
    render(<VisuallyHidden>Test</VisuallyHidden>)
    const el = screen.getByText("Test")
    expect(el.textContent).toBe("Test")
  })
})
