import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
import { Switch } from "./"

describe("<Switch />", () => {
  test("renders component correctly", async () => {
    await a11y(<Switch>Switch</Switch>)
  })

  test("sets `displayName` correctly", () => {
    expect(Switch.displayName).toBe("SwitchRoot")
  })

  test("sets `className` correctly", () => {
    render(<Switch data-testid="switch">Switch</Switch>)
    const el = screen.getByTestId("switch")
    expect(el).toHaveClass("ui-switch__root")
    expect(el.children[1]).toHaveClass("ui-switch__track")
    expect(el.children[1]?.children[0]).toHaveClass("ui-switch__thumb")
    expect(el.children[2]).toHaveClass("ui-switch__label")
  })

  test("renders HTML tag correctly", () => {
    render(<Switch data-testid="switch">Switch</Switch>)
    const el = screen.getByTestId("switch")
    expect(el.tagName).toBe("LABEL")
    expect(el.children[0]?.tagName).toBe("INPUT")
    expect(el.children[1]?.tagName).toBe("DIV")
    expect(el.children[1]?.children[0]?.tagName).toBe("DIV")
    expect(el.children[2]?.tagName).toBe("SPAN")
  })

  test("should be checked when clicked", async () => {
    const { user } = render(<Switch>Switch</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /Switch/i })

    await user.click(switchElement)

    expect(switchElement).toBeChecked()
  })

  test("should be checked by default", async () => {
    render(<Switch defaultChecked>Switch</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /Switch/i })

    expect(switchElement).toBeChecked()
  })

  test("When space key is pressed, the state should be changed", async () => {
    const { user } = render(<Switch>Switch</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /Switch/i })

    await user.tab()
    expect(switchElement).toHaveFocus()
    expect(switchElement).not.toBeChecked()

    await user.keyboard(" ")

    expect(switchElement).toBeChecked()
  })

  test("The icon should render correctly", () => {
    const { container } = render(<Switch icon={<BoxIcon />}>Switch</Switch>)

    const icon = container.querySelector("svg")
    expect(icon).toBeInTheDocument()
  })

  test("renders object-form icon and toggles between on and off", async () => {
    const { user } = render(
      <Switch
        icon={{
          off: <span data-testid="icon-off">OFF</span>,
          on: <span data-testid="icon-on">ON</span>,
        }}
      >
        Switch
      </Switch>,
    )

    expect(screen.getByTestId("icon-off")).toBeInTheDocument()
    expect(screen.queryByTestId("icon-on")).not.toBeInTheDocument()

    const switchElement = await screen.findByRole("switch", { name: /Switch/i })

    await user.click(switchElement)

    expect(screen.getByTestId("icon-on")).toBeInTheDocument()
    expect(screen.queryByTestId("icon-off")).not.toBeInTheDocument()
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

    const el = screen.getByTestId("switch")
    const labelElement = el.querySelector(".ui-switch__label")

    expect(labelElement).toBeNull()
  })
})
