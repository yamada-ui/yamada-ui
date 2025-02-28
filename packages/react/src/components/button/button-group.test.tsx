import { a11y, render } from "../../../test"
import { Button } from "./button"
import { ButtonGroup } from "./button-group"

describe("<Button />", () => {
  test.todo("passes a11y test", async () => {
    await a11y(
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(ButtonGroup.displayName).toBe("ButtonGroup")
    expect(ButtonGroup.__ui__).toBe("ButtonGroup")
  })

  test("sets `className` correctly", () => {
    const { getByRole } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )

    expect(getByRole("group")).toHaveClass("ui-group")
  })

  test("renders HTML tag correctly", () => {
    const { getByRole } = render(
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )

    expect(getByRole("group").tagName).toBe("DIV")
  })

  test.todo("`attached` style is applied correctly", () => {
    const { getByRole } = render(
      <ButtonGroup variant="outline" attached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )

    const buttonGroup = getByRole("group")

    expect(buttonGroup.firstChild).toHaveStyle({
      borderBottomRightRadius: "0px",
      borderTopRightRadius: "0px",
    })

    expect(buttonGroup.lastChild).toHaveStyle({
      borderBottomLeftRadius: "0px",
      borderTopLeftRadius: "0px",
    })
  })

  test.todo("`attached` column style is applied correctly", () => {
    const { getByRole } = render(
      <ButtonGroup variant="outline" attached flexDirection="column">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )

    const buttonGroup = getByRole("group")

    expect(buttonGroup.firstChild).toHaveStyle({
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
    })

    expect(buttonGroup.lastChild).toHaveStyle({
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
    })
  })
})
