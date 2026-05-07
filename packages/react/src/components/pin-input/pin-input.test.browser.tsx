import { page, render } from "#test/browser"
import { PinInput } from "."

const getInputs = () =>
  page
    .getByRole("textbox")
    .elements()
    .filter((el) => el instanceof HTMLInputElement)

describe("<PinInput />", () => {
  test('allows alphanumeric input when type is "alphanumeric"', async () => {
    const { user } = await render(
      <>
        <input type="search" data-testid="clipboard-source" />
        <PinInput.Root type="alphanumeric" />
      </>,
    )

    const [firstInput] = getInputs()
    const clipboardSource = page.getByTestId("clipboard-source")

    await user.type(clipboardSource, "a1")
    await user.tripleClick(clipboardSource)
    await user.copy()
    await user.click(firstInput!)
    await user.paste()

    await expect.poll(() => firstInput?.value).toBe("a1")
  })

  test("calls onChange and onComplete appropriately", async () => {
    const handleChange = vi.fn()
    const handleComplete = vi.fn()
    const { user } = await render(
      <PinInput.Root
        items={2}
        onChange={handleChange}
        onComplete={handleComplete}
      />,
    )

    const [firstInput, secondInput] = getInputs()

    await user.type(firstInput!, "1")

    await expect.poll(() => handleChange.mock.lastCall?.[0]).toBe("1")

    await user.type(secondInput!, "2")

    await expect.poll(() => handleChange.mock.lastCall?.[0]).toBe("12")
    expect(handleComplete).toHaveBeenLastCalledWith("12")
  })

  test("correct behavior on input focus", async () => {
    const { user } = await render(<PinInput.Root />)

    const inputs = getInputs()
    const firstInput = inputs[0]
    const secondInput = inputs[1]

    await expect.poll(() => firstInput?.placeholder).toBe("◯")

    await user.tab()

    await expect.poll(() => document.activeElement).toBe(firstInput)
    expect(firstInput?.placeholder).toBe("")

    await user.click(secondInput!)

    await expect.poll(() => firstInput?.placeholder).toBe("◯")
    expect(document.activeElement).toBe(secondInput)
    expect(secondInput?.placeholder).toBe("")
  })

  test("focus moves to previous input on backspace if current input is empty and `manageFocus` is true", async () => {
    const { user } = await render(
      <PinInput.Root defaultValue="12" manageFocus />,
    )

    const inputs = getInputs()
    const currentInput = inputs[2]
    const isFirefox = /firefox/i.test(navigator.userAgent)
    const expectedFocusedInput = isFirefox ? currentInput : inputs[1]

    await user.click(currentInput!)
    await expect.poll(() => document.activeElement).toStrictEqual(currentInput)
    await user.type(currentInput!, "{backspace}")

    await expect
      .poll(() => document.activeElement)
      .toStrictEqual(expectedFocusedInput)
    await expect.poll(() => inputs[1]?.value).toBe("")
  })

  test("does not move focus on backspace if `manageFocus` is false", async () => {
    const { user } = await render(
      <PinInput.Root defaultValue="12" manageFocus={false} />,
    )

    const inputs = getInputs()
    const currentInput = inputs[2]

    await user.click(currentInput!)
    await expect.poll(() => document.activeElement).toStrictEqual(currentInput)
    await user.keyboard("{Backspace}")

    await expect.poll(() => document.activeElement).toStrictEqual(currentInput)
  })

  test("focus moves on `ArrowRight` or `ArrowLeft` if `manageFocus` is true", async () => {
    const { user } = await render(
      <PinInput.Root defaultValue="1234" manageFocus />,
    )

    const inputs = getInputs()
    const firstInput = inputs[0]
    const secondInput = inputs[1]

    await user.click(firstInput!)
    await user.keyboard("{ArrowRight}")

    await expect.poll(() => document.activeElement).toStrictEqual(secondInput)

    await user.keyboard("{ArrowLeft}")

    await expect.poll(() => document.activeElement).toStrictEqual(firstInput)
  })

  test("automatically focuses the first input on mount if `autoFocus` is true", async () => {
    await render(<PinInput.Root autoFocus />)

    const [firstInput] = getInputs()

    await expect.poll(() => document.activeElement).toStrictEqual(firstInput)
  })

  test("does not focus the first input on mount if `autoFocus` is false", async () => {
    await render(<PinInput.Root autoFocus={false} />)

    const [firstInput] = getInputs()

    await expect.poll(() => document.activeElement !== firstInput).toBe(true)
  })

  test("correct input behavior when pasting a value of 2 characters", async () => {
    const { user } = await render(
      <>
        <input type="search" data-testid="clipboard-source" />
        <PinInput.Root />
      </>,
    )

    const [firstInput] = getInputs()
    const clipboardSource = page.getByTestId("clipboard-source")

    await user.type(clipboardSource, "12")
    await user.tripleClick(clipboardSource)
    await user.copy()
    await user.click(firstInput!)
    await user.paste()

    await expect.poll(() => firstInput?.value).toBe("12")
  })

  test("correct input behavior when pasting a value of more than 2 characters", async () => {
    const testValue = "1234"
    const { user } = await render(
      <>
        <input type="search" data-testid="clipboard-source" />
        <PinInput.Root />
      </>,
    )
    const [firstInput] = getInputs()
    const clipboardSource = page.getByTestId("clipboard-source")

    await user.type(clipboardSource, testValue)
    await user.tripleClick(clipboardSource)
    await user.copy()
    await user.click(firstInput!)
    await user.paste()

    await expect
      .poll(() => getInputs().map((input) => input.value))
      .toEqual(testValue.split(""))
  })

  test("the change in value does not impact other values", async () => {
    const defaultValue = "1234"
    const { user } = await render(<PinInput.Root defaultValue={defaultValue} />)

    const inputs = getInputs()

    await user.type(inputs[0]!, "9")

    await expect.poll(() => inputs[0]?.value).toBe("9")
    expect(inputs[1]).toHaveValue("2")
    expect(inputs[2]).toHaveValue("3")
    expect(inputs[3]).toHaveValue("4")

    await user.type(inputs[2]!, "{backspace}")

    await expect.poll(() => inputs[0]?.value).toBe("9")
    expect(inputs[1]).toHaveValue("2")
    expect(inputs[2]).toHaveValue("")
    expect(inputs[3]).toHaveValue("4")
  })
})
