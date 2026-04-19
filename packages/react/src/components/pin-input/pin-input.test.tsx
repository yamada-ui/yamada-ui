import { a11y, page, render } from "#test/browser"
import { PinInput } from "."

const getInputs = () =>
  page.getByRole("textbox").elements() as HTMLInputElement[]
const inputText = (input: HTMLInputElement | undefined, value: string) => {
  if (!input) return

  input.value = value
  input.dispatchEvent(new Event("input", { bubbles: true }))
}

describe("<PinInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PinInput.Root />)
  })

  test("sets `displayName` correctly", () => {
    expect(PinInput.Root.name).toBe("PinInputRoot")
    expect(PinInput.Field.name).toBe("PinInputField")
  })

  test("sets `className` correctly", async () => {
    await render(
      <PinInput.Root data-testid="root">
        <PinInput.Field data-testid="field" index={0} />
      </PinInput.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-pin-input__root")
    await expect
      .element(page.getByTestId("field"))
      .toHaveClass("ui-pin-input__field")
  })

  test("renders the correct number of input elements", async () => {
    await render(<PinInput.Root items={5} />)
    expect(getInputs()).toHaveLength(5)
  })

  test("id prop applies correctly", async () => {
    const testId = "test"
    const { container } = await render(<PinInput.Root id={testId} />)

    expect(container.querySelector(`#${testId}`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-1`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-2`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-3`)).toBeInTheDocument()
  })

  test('allows alphanumeric input when type is "alphanumeric"', async () => {
    await render(<PinInput.Root type="alphanumeric" />)

    const [firstInput] = getInputs()
    inputText(firstInput, "a1")

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

  test('input type should be "password" when mask is true', async () => {
    await render(<PinInput.Root mask />)

    const inputs = page.getByPlaceholder("◯").elements() as HTMLInputElement[]

    inputs.forEach((input) => {
      expect(input).toHaveAttribute("type", "password")
    })
  })

  test("correctly applies custom placeholder to each input", async () => {
    const customPlaceholder = "t"
    const { container } = await render(
      <PinInput.Root placeholder={customPlaceholder} />,
    )

    const inputs = container.querySelectorAll(
      `input[placeholder="${customPlaceholder}"]`,
    )

    expect(inputs).toHaveLength(4)
  })

  test('sets autoComplete to "one-time-code" when otp is true', async () => {
    await render(<PinInput.Root otp />)

    const inputs = getInputs()
    inputs.forEach((input) => {
      expect(input).toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test('does not set autoComplete to "one-time-code" when otp is false', async () => {
    await render(<PinInput.Root otp={false} />)

    const inputs = getInputs()
    inputs.forEach((input) => {
      expect(input).not.toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test("correctly sets defaultValue into each input", async () => {
    const defaultValue = "1234"

    await render(<PinInput.Root defaultValue={defaultValue} />)

    const inputs = getInputs()

    inputs.forEach((input, index) => {
      expect(input).toHaveValue(defaultValue[index])
    })

    expect(inputs).toHaveLength(defaultValue.length)
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

  test("focus moves to previous input on backspace if current input is empty and manageFocus is true", async () => {
    await render(<PinInput.Root defaultValue="123" manageFocus />)

    const inputs = getInputs()
    const lastInput = inputs[3]

    lastInput?.focus()
    lastInput?.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Backspace", bubbles: true }),
    )

    await expect.poll(() => document.activeElement).toStrictEqual(inputs[2])
    expect(inputs[2]).toHaveValue("")
  })

  test("does not move focus on backspace if manageFocus is false", async () => {
    await render(<PinInput.Root defaultValue="123" manageFocus={false} />)

    const inputs = getInputs()
    const lastInput = inputs[3]

    lastInput?.focus()
    lastInput?.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Backspace", bubbles: true }),
    )

    await expect.poll(() => document.activeElement).toStrictEqual(lastInput)
  })

  test("focus move input on arrowRight or arrowLeft if manageFocus is true", async () => {
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

  test("automatically focuses the first input on mount if autoFocus is true", async () => {
    await render(<PinInput.Root autoFocus />)

    await new Promise((resolve) => requestAnimationFrame(resolve))

    const [firstInput] = getInputs()

    await expect.poll(() => document.activeElement).toStrictEqual(firstInput)
  })

  test("does not focus the first input on mount if autoFocus is false", async () => {
    await render(<PinInput.Root autoFocus={false} />)

    await new Promise((resolve) => requestAnimationFrame(resolve))

    const [firstInput] = getInputs()

    await expect.poll(() => document.activeElement === firstInput).toBe(false)
  })

  test("correct input behavior when pasting a value of 2 characters", async () => {
    await render(<PinInput.Root />)

    const [firstInput] = getInputs()
    inputText(firstInput, "12")

    await expect.poll(() => firstInput?.value).toBe("12")
  })

  test("correct input behavior when pasting a value of more than 2 characters", async () => {
    const testValue = "1234"
    await render(<PinInput.Root />)
    const [firstInput] = getInputs()
    inputText(firstInput, testValue)

    await expect
      .poll(() =>
        getInputs()
          .map((input) => input.value)
          .join(""),
      )
      .toBe(testValue)
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
