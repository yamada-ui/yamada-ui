import { page, render } from "#test/browser"
import { ButtonGroup } from "./"

describe("<ButtonGroup />", () => {
  test("`attached` column style is applied correctly", async () => {
    await render(
      <ButtonGroup.Root variant="outline" attached flexDirection="column">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    const style = getComputedStyle(page.getByRole("group").element())

    expect(style.flexDirection).toBe("column")
  })
})
