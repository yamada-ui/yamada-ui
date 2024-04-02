import { a11y, render } from "@yamada-ui/test"
import { Swipeable } from "../src"

describe("<Swipeable />", () => {
  test("Swipeable renders correctly", async () => {
    const { container } = render(<Swipeable />)
    await a11y(container)
  })
})
