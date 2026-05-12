import { a11y, render, screen } from "#test"
import { VisuallyHidden } from "./"

describe("<VisuallyHidden />", () => {
  test("renders component correctly", async () => {
    render(<VisuallyHidden>Test</VisuallyHidden>)

    expect(screen.getByText("Test")).toBeInTheDocument()
    await a11y(<VisuallyHidden>Test</VisuallyHidden>)
  })
})
