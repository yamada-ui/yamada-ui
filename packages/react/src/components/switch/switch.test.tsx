import { a11y, page, render } from "#test/browser"
import { BoxIcon } from "../icon"
import { Switch } from "./"

describe("<Switch />", () => {
  test("renders component correctly", async () => {
    await a11y(<Switch>Switch</Switch>)
  })

  test("sets `displayName` correctly", () => {
    expect(Switch.displayName).toBe("SwitchRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<Switch data-testid="switch">Switch</Switch>)
    const el = page.getByTestId("switch").element()
    expect(el).toHaveClass("ui-switch__root")
    expect(el.children[1]).toHaveClass("ui-switch__track")
    expect(el.children[1]?.children[0]).toHaveClass("ui-switch__thumb")
    expect(el.children[2]).toHaveClass("ui-switch__label")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Switch data-testid="switch">Switch</Switch>)
    const el = page.getByTestId("switch").element()
    expect(el.tagName).toBe("LABEL")
    expect(el.children[0]?.tagName).toBe("INPUT")
    expect(el.children[1]?.tagName).toBe("DIV")
    expect(el.children[1]?.children[0]?.tagName).toBe("DIV")
    expect(el.children[2]?.tagName).toBe("SPAN")
  })

  test("should be checked when clicked", async () => {
    await render(<Switch>Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })

    ;(switchElement.element() as HTMLElement).click()

    await expect.element(switchElement).toBeChecked()
  })

  test("should be checked by default", async () => {
    await render(<Switch defaultChecked>Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })

    await expect.element(switchElement).toBeChecked()
  })

  test("When space key is pressed, the state should be changed", async () => {
    const { user } = await render(<Switch>Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })

    await user.tab()
    await expect.element(switchElement).toHaveFocus()
    await expect.element(switchElement).not.toBeChecked()

    await user.keyboard(" ")

    await expect.element(switchElement).toBeChecked()
  })

  test("The icon should render correctly", async () => {
    const { container } = await render(
      <Switch icon={<BoxIcon />}>Switch</Switch>,
    )

    const icon = container.querySelector("svg")
    expect(icon).toBeInTheDocument()
  })

  test("renders object-form icon and toggles between on and off", async () => {
    const { container } = await render(
      <Switch
        icon={{
          off: <span data-testid="icon-off">OFF</span>,
          on: <span data-testid="icon-on">ON</span>,
        }}
      >
        Switch
      </Switch>,
    )

    expect(
      container.querySelector('[data-testid="icon-off"]'),
    ).toBeInTheDocument()
    expect(container.querySelector('[data-testid="icon-on"]')).toBeNull()

    const switchElement = page.getByRole("switch", { name: /Switch/i })

    ;(switchElement.element() as HTMLElement).click()

    expect(
      container.querySelector('[data-testid="icon-on"]'),
    ).toBeInTheDocument()
    expect(container.querySelector('[data-testid="icon-off"]')).toBeNull()
  })

  test("passes labelProps to the label element", async () => {
    await render(
      <Switch data-testid="switch" labelProps={{ "data-testid": "label" }}>
        Switch
      </Switch>,
    )

    const label = page.getByTestId("label")

    await expect.element(label).toBeInTheDocument()
    await expect.element(label).toHaveTextContent("Switch")
  })

  test("does not render the label element when children is not provided", async () => {
    await render(<Switch data-testid="switch" />)

    const el = page.getByTestId("switch").element()
    const labelElement = el.querySelector(".ui-switch__label")

    expect(labelElement).toBeNull()
  })
})
