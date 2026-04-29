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
    const root = page.getByTestId("switch")
    await expect.element(root).toHaveClass("ui-switch__root")
    const el = root.element()
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
    const { user } = await render(<Switch data-testid="switch">Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })
    const switchRoot = page.getByTestId("switch")

    await user.click(switchRoot)

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
    const { user } = await render(
      <Switch
        data-testid="switch"
        icon={{
          off: <span data-testid="icon-off">OFF</span>,
          on: <span data-testid="icon-on">ON</span>,
        }}
      >
        Switch
      </Switch>,
    )

    const offIcon = page.getByTestId("icon-off")
    const onIcon = page.getByTestId("icon-on")

    await expect.element(offIcon).toBeInTheDocument()
    await expect.element(onIcon).not.toBeInTheDocument()

    const switchElement = page.getByRole("switch", { name: /Switch/i })
    const switchRoot = page.getByTestId("switch")

    await user.click(switchRoot)

    await expect.element(switchElement).toBeChecked()
    await expect.element(onIcon).toBeInTheDocument()
    await expect.element(offIcon).not.toBeInTheDocument()
  })

  test("merges root and input consumer className and style props", async () => {
    await render(
      <Switch
        className="custom-root"
        data-testid="switch"
        inputProps={{
          className: "custom-input",
          style: { color: "tomato" },
          "data-testid": "switch-input",
        }}
      >
        Switch
      </Switch>,
    )

    const root = page.getByTestId("switch")
    const input = page.getByTestId("switch-input")

    expect(root).toHaveClass("ui-switch__root")
    expect(root).toHaveClass("custom-root")
    expect(input).toHaveClass("custom-input")
    expect(input).toHaveStyle({ color: "tomato", width: "1px" })
  })

  test("merges consumer handlers with internal input behavior", async () => {
    const order: string[] = []
    const onChange = vi.fn(() => order.push("onChange"))
    const onInputChange = vi.fn(() => order.push("input:onChange"))
    const onInputKeyDown = vi.fn(() => order.push("input:onKeyDown"))
    const onFocus = vi.fn()
    const onInputFocus = vi.fn()
    const onBlur = vi.fn()
    const onInputBlur = vi.fn()

    const { user } = await render(
      <Switch
        inputProps={{
          onBlur: onInputBlur,
          onChange: onInputChange,
          onFocus: onInputFocus,
          onKeyDown: onInputKeyDown,
        }}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      >
        Switch
      </Switch>,
    )

    const switchElement = page
      .getByRole("switch", { name: /Switch/i })
      .element()

    await user.tab()
    await user.keyboard("{Enter}")
    await user.tab()

    expect(onInputKeyDown).toHaveBeenCalledTimes(2)
    expect(onInputChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onFocus).toHaveBeenCalledTimes(1)
    expect(onInputFocus).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(onInputBlur).toHaveBeenCalledTimes(1)
    expect(order).toStrictEqual([
      "input:onKeyDown",
      "input:onChange",
      "onChange",
      "input:onKeyDown",
    ])
    expect(switchElement).toBeChecked()
  })

  test("composes forwarded ref and inputProps ref on the input element", async () => {
    const order: string[] = []
    const forwardedRef = vi.fn((node: HTMLInputElement | null) => {
      if (node) order.push("forwarded")
    })
    const inputPropsRef = vi.fn((node: HTMLInputElement | null) => {
      if (node) order.push("inputProps")
    })

    await render(
      <Switch ref={forwardedRef} inputProps={{ ref: inputPropsRef }}>
        Switch
      </Switch>,
    )

    const switchElement = page
      .getByRole("switch", { name: /Switch/i })
      .element()

    expect(inputPropsRef).toHaveBeenCalledWith(switchElement)
    expect(forwardedRef).toHaveBeenCalledWith(switchElement)
    expect(order).toStrictEqual(["inputProps", "forwarded"])
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
