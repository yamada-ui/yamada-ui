import { a11y } from "#test"
import { VisuallyHidden } from "./"

describe("<VisuallyHidden />", () => {
  test("renders component correctly", async () => {
    await a11y(<VisuallyHidden>Test</VisuallyHidden>)
  })
})
