import { a11y, page, render } from "#test/browser"
import { Box } from "./box"

describe("<Box />", () => {
  test("renders component correctly", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("renders HTML tag correctly", async () => {
    await render(<Box>Box</Box>)

    expect(page.getByText("Box").element().tagName).toBe("DIV")
  })
})
