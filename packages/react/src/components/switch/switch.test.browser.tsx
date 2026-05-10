import { page, render } from "#test/browser"
import { Switch } from "./"

describe("<Switch />", () => {
  test("toggles checked state on click", async () => {
    const { user } = await render(<Switch data-testid="switch">Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })
    const switchRoot = page.getByTestId("switch")

    await user.click(switchRoot)

    await expect.element(switchElement).toBeChecked()
  })

  test("toggles checked state when Space is pressed on the focused input", async () => {
    const { user } = await render(<Switch>Switch</Switch>)

    const switchElement = page.getByRole("switch", { name: /Switch/i })

    await user.tab()
    await expect.element(switchElement).toHaveFocus()
    await expect.element(switchElement).not.toBeChecked()

    await user.keyboard(" ")

    await expect.element(switchElement).toBeChecked()
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
    await expect.element(onIcon.query()).not.toBeInTheDocument()

    const switchElement = page.getByRole("switch", { name: /Switch/i })
    const switchRoot = page.getByTestId("switch")

    await user.click(switchRoot)

    await expect.element(switchElement).toBeChecked()
    await expect.element(onIcon).toBeInTheDocument()
    await expect.element(offIcon.query()).not.toBeInTheDocument()
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

    const switchElement = page.getByRole("switch", { name: /Switch/i })

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
    await expect.element(switchElement).toBeChecked()
  })
})
