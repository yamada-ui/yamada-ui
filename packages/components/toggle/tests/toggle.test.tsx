import { a11y, render } from "@yamada-ui/test"
import { Toggle } from "../src"

describe("<Toggle />", () => {
  test("Toggle renders correctly", async () => {
    const { container } = render(<Toggle />)
    await a11y(container)
  })
})
