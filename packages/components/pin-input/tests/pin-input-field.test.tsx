import { a11y, render } from "@yamada-ui/test"
import { PinInput, PinInputField } from "../src"

describe("<PinInputField />", () => {
  test("renders correctly", async () => {
    const { container } = render(
      <PinInput>
        <PinInputField />
      </PinInput>,
    )
    await a11y(container)
  })
})
