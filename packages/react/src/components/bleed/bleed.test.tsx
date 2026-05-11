import { a11y, render, screen } from "#test"
import { Bleed } from "./bleed"

describe("<Bleed />", () => {
  test("renders component correctly", async () => {
    await a11y(<Bleed>Box</Bleed>)
  })

  test("uses `div` as default tag", () => {
    render(<Bleed>Box</Bleed>)

    expect(screen.getByText("Box").tagName).toBe("DIV")
  })
})
