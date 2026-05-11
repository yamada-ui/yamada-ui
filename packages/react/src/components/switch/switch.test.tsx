import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
import { Switch } from "./"

describe("<Switch />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Switch>Switch</Switch>)
  })

  test("is checked when defaultChecked is set", () => {
    render(<Switch defaultChecked>Switch</Switch>)

    expect(screen.getByRole("switch", { name: /Switch/i })).toBeChecked()
  })

  test("renders the icon node", () => {
    render(<Switch icon={<BoxIcon data-testid="icon" />}>Switch</Switch>)

    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  test("passes labelProps to the label element", () => {
    render(
      <Switch data-testid="switch" labelProps={{ "data-testid": "label" }}>
        Switch
      </Switch>,
    )

    const label = screen.getByTestId("label")

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent("Switch")
  })

  test("does not render the label element when children is not provided", () => {
    render(<Switch data-testid="switch" />)

    expect(
      screen.getByTestId("switch").querySelector(".ui-switch__label"),
    ).toBeNull()
  })
})
