import { Kbd } from "."
import { a11y, render, screen } from "../../../test"

describe("<Kbd />", () => {
  test("Kbd renders a11y correctly", async () => {
    await a11y(<Kbd>enter</Kbd>)
  })
  test("Kbd renders correctly", async () => {
    render(<Kbd>enter</Kbd>)
    await a11y(screen.getByText("enter"))
  })
})
