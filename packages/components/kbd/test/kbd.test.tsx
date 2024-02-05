import { a11y, render } from "@yamada-ui/test"
import { Kbd } from "../src"

describe("<Kbd />", () => {
  test("Kbd renders correctly", async () => {
    const { container } = render(<Kbd>enter</Kbd>)
    await a11y(container)
  })
})
