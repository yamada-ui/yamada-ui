import { a11y, render, screen } from "../../../test"
import { BoxIcon } from "../icon"
import { Switch } from "./"

describe("<Switch />", () => {
  test("Switch renders correctly", async () => {
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
})
