import { a11y, render, screen } from "#test"
import { Box } from "./box"

describe("<Box />", () => {
  test("renders component correctly", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("renders HTML tag correctly", () => {
    render(<Box>Box</Box>)
    expect(screen.getByText("Box").tagName).toBe("DIV")
  })
})
