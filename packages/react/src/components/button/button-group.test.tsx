import { screen } from "@testing-library/react"

import { a11y, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    expect(screen.getByRole("group")).toHaveClass("ui-group")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    expect(screen.getByRole("group").tagName).toBe("DIV")
  })

  test("`attached` column style is applied correctly", async () => {
    await render(
      <ButtonGroup.Root variant="outline" attached flexDirection="column">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>,
    )

    const buttonGroup = screen.getByRole("group")
    const style = getComputedStyle(buttonGroup)

    expect(style.flexDirection).toBe("column")
  })
})
