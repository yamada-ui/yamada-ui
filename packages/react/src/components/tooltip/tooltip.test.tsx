import { Tooltip } from "."
import { a11y, render, screen } from "../../../test"
import { Text } from "../text"

describe("<Tooltip />", () => {
  test("renders tag correctly", async () => {
    await a11y(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Tooltip.name).toBe("Tooltip")
  })

  test("sets `className` correctly", () => {
    render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = screen.getByRole("tooltip")
    expect(el).toHaveClass("ui-tooltip__content")
    expect(el.parentElement).toHaveClass("ui-tooltip__positioner")
    expect(screen.getByText("Trigger")).toHaveClass("ui-tooltip__trigger")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
    const el = screen.getByRole("tooltip")
    expect(el.tagName).toBe("DIV")
    expect(el.parentElement?.tagName).toBe("DIV")
  })
})
