import { a11y, render } from "@yamada-ui/test"
import { Button, ButtonGroup } from "../src"

describe("<Button />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>,
    )
  })

  test("`isAttached` style is applied correctly", () => {
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

  test("`isAttached` column style is applied correctly", () => {
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
