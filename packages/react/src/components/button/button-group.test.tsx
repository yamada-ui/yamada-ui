import { a11y } from "#test"
import { ButtonGroup } from "./"

describe("<ButtonGroup />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )
  })
})
