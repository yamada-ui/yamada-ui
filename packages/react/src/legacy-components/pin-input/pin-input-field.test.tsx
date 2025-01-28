import { PinInput, PinInputField } from "."
import { a11y, render } from "../../../test"

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
