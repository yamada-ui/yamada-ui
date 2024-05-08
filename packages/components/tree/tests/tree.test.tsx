import { a11y, render } from "@yamada-ui/test"
import { Tree } from "../src"

describe("<Tree />", () => {
  test("Tree renders correctly", async () => {
    const { container } = render(<Tree />)
    await a11y(container)
  })
})
