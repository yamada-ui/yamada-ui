import { a11y, render } from "#test"
import { ButtonGroup } from "./"

describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(ButtonGroup.Root.name).toBe("ButtonGroupRoot")
  })

  test("sets `className` correctly", () => {
    const { getByRole } = render(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    expect(getByRole("group")).toHaveClass("ui-group")
  })

  test("renders HTML tag correctly", () => {
    const { getByRole } = render(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    expect(getByRole("group").tagName).toBe("DIV")
  })

  test("`attached` column style is applied correctly", () => {
    const { getByRole } = render(
      <ButtonGroup.Root variant="outline" attached flexDirection="column">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    const buttonGroup = getByRole("group")
    const style = getComputedStyle(buttonGroup)

    expect(style.flexDirection).toBe("column")
  })
})
