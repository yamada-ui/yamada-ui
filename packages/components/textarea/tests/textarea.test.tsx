import { a11y, render } from "@yamada-ui/test"
import { Textarea } from "../src"

describe("<Textarea />", () => {
  test("Textarea renders correctly", async () => {
    const { container } = render(
      <Textarea aria-label="Enter notes" defaultValue="hello" />,
    )
    await a11y(container)
  })
})
