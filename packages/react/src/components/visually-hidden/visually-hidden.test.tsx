import { page, render } from "#test/browser"
import { VisuallyHidden } from "./"

describe("<VisuallyHidden />", () => {
  test("renders component correctly", async () => {
    await render(<VisuallyHidden>Test</VisuallyHidden>)
    expect(page.getByText("Test").element().textContent).toBe("Test")
  })
})
