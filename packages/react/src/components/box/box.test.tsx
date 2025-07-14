import { render, screen } from "@/test"
import { a11y } from "@/test"
import { Box } from "./box"

describe("<Box />", () => {
  test("passes a11y test", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("renders HTML tag correctly", () => {
    render(<Box>Box</Box>)
    expect(screen.getByText("Box").tagName).toBe("DIV")
  })
})
