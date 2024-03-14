import { a11y, render } from "@yamada-ui/test"
import { InfiniteScrollArea } from "../src"

describe("<InfiniteScrollArea />", () => {
  test("InfiniteScrollArea renders correctly", async () => {
    const { container } = render(<InfiniteScrollArea />)
    await a11y(container)
  })
})
