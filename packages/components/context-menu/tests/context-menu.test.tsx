import { a11y, render } from "@yamada-ui/test"
import { ContextMenu } from "../src"

describe("<ContextMenu />", () => {
  test("ContextMenu renders correctly", async () => {
    const { container } = render(<ContextMenu />)
    await a11y(container)
  })
})
