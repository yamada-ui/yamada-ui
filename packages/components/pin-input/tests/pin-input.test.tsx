import { a11y, act, render, screen, waitFor } from "@yamada-ui/test"
import { PinInput } from "../src"

describe("<PinInput />", () => {
  test("renders with no errors", async () => {
    const { container } = render(<PinInput />)
    await a11y(container)
  })

  test("renders the correct number of input elements", () => {
    render(<PinInput items={5} />)
    const inputs = screen.getAllByRole("textbox")
    expect(inputs).toHaveLength(5)
  })

  test("id prop applies correctly", () => {
    const testId = "test"
    const { container } = render(<PinInput id={testId} />)

    expect(container.querySelector(`#${testId}-0`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-1`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-2`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-3`)).toBeInTheDocument()
  })

  test('allows alphanumeric input when type is "alphanumeric"', async () => {
    const { user, findAllByRole } = render(<PinInput type="alphanumeric" />)

    const inputs = await findAllByRole("textbox")
    const firstInput = inputs[0]

    await user.tab()
    await user.paste("a1")

    await waitFor(() => {
      expect(firstInput).toHaveValue("a1")
    })
  })

  test("calls onChange and onComplete appropriately", async () => {
    const handleChange = vi.fn()
    const handleComplete = vi.fn()
    const { user, findAllByRole } = render(
      <PinInput
        onChange={handleChange}
        onComplete={handleComplete}
        items={2}
      />,
    )

    const inputs = await findAllByRole("textbox")

    await user.type(inputs[0], "1")

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith("1")
    })

    await user.type(inputs[1], "2")

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith("12")
      expect(handleComplete).toHaveBeenCalledWith("12")
    })
  })

  test('input type should be "password" when mask is true', () => {
    render(<PinInput mask={true} />)

    const inputs = screen.getAllByPlaceholderText("○")

    inputs.forEach((input) => {
      expect(input).toHaveAttribute("type", "password")
    })
  })

  test("correctly applies custom placeholder to each input", () => {
    const customPlaceholder = "t"
    const { container } = render(<PinInput placeholder={customPlaceholder} />)

    const inputs = container.querySelectorAll(
      `input[placeholder="${customPlaceholder}"]`,
    )

    expect(inputs).toHaveLength(4)
  })

  test('sets autoComplete to "one-time-code" when otp is true', () => {
    render(<PinInput otp={true} />)

    const inputs = screen.getAllByRole("textbox")
    inputs.forEach((input) => {
      expect(input).toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test('does not set autoComplete to "one-time-code" when otp is false', () => {
    render(<PinInput otp={false} />)

    const inputs = screen.getAllByRole("textbox")
    inputs.forEach((input) => {
      expect(input).not.toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test("correctly sets defaultValue into each input", () => {
    const defaultValue = "1234"

    render(<PinInput defaultValue={defaultValue} />)

    const inputs = screen.getAllByRole("textbox")

    inputs.forEach((input, index) => {
      expect(input).toHaveValue(defaultValue[index])
    })

    expect(inputs).toHaveLength(defaultValue.length)
  })

  test("correct behavior on input focus", async () => {
    const { user, findAllByRole } = render(<PinInput />)

    const inputs = (await findAllByRole("textbox")) as HTMLInputElement[]
    const firstInput = inputs[0]
    const secondInput = inputs[1]

    await waitFor(() => {
      expect(firstInput.placeholder).toBe("○")
    })

    await act(async () => {
      await user.tab()
    })

    await waitFor(() => {
      expect(document.activeElement).toBe(firstInput)
      expect(firstInput.placeholder).toBe("")
    })

    await act(async () => {
      await user.click(secondInput)
    })

    await waitFor(() => {
      expect(firstInput.placeholder).toBe("○")
      expect(document.activeElement).toBe(secondInput)
      expect(secondInput.placeholder).toBe("")
    })
  })

  test("focus moves to previous input on backspace if current input is empty and manageFocus is true", async () => {
    const { user, findAllByRole } = render(
      <PinInput defaultValue="123" manageFocus={true} />,
    )

    const inputs = await findAllByRole("textbox")
    const lastInput = inputs[3]

    await act(async () => {
      await user.click(lastInput)
      await user.keyboard("[Backspace]")
    })

    await waitFor(() => {
      expect(document.activeElement).toStrictEqual(inputs[2])

      expect(inputs[2]).toHaveValue("")
    })
  })

  test("does not move focus on backspace if manageFocus is false", async () => {
    const { user, findAllByRole } = render(
      <PinInput defaultValue="123" manageFocus={false} />,
    )

    const inputs = await findAllByRole("textbox")
    const lastInput = inputs[3]

    await act(async () => {
      await user.click(lastInput)
      await user.keyboard("[Backspace]")
    })

    await waitFor(() => {
      expect(document.activeElement).toStrictEqual(lastInput)
    })
  })

  test("does not move focus if current input is not empty", async () => {
    const { user, findAllByRole } = render(
      <PinInput defaultValue="1234" items={4} manageFocus={true} />,
    )

    const inputs = await findAllByRole("textbox")
    const thirdInput = inputs[2]

    await act(async () => {
      await user.click(thirdInput)
      await user.keyboard("[arrowleft][Backspace]")
    })

    await waitFor(() => {
      expect(document.activeElement).toStrictEqual(thirdInput)

      expect(thirdInput).toHaveValue("3")
    })
  })

  test("automatically focuses the first input on mount if autoFocus is true", async () => {
    const { findAllByRole } = render(<PinInput autoFocus={true} />)

    await act(async () => {
      await new Promise((resolve) => requestAnimationFrame(resolve))
    })

    const inputs = await findAllByRole("textbox")
    const firstInput = inputs[0]

    await waitFor(() => {
      expect(document.activeElement).toStrictEqual(firstInput)
    })
  })

  test("does not focus the first input on mount if autoFocus is false", async () => {
    const { findAllByRole } = render(<PinInput autoFocus={false} />)

    await new Promise((resolve) => requestAnimationFrame(resolve))

    const inputs = await findAllByRole("textbox")
    const firstInput = inputs[0]

    await waitFor(() => {
      expect(document.activeElement).not.toStrictEqual(firstInput)
    })
  })

  test("correct input behavior when pasting a value of 2 characters", async () => {
    const { user, findAllByRole } = render(<PinInput />)

    const inputs = await findAllByRole("textbox")
    const firstInput = inputs[0]

    await user.click(firstInput)
    await user.paste("12")

    await waitFor(() => {
      expect(firstInput).toHaveValue("12")
    })
  })

  test("correct input behavior when pasting a value of more than 2 characters", async () => {
    const testValue = "1234"
    const { user, findAllByRole } = render(<PinInput />)

    const inputs = await findAllByRole("textbox")

    await act(async () => {
      await user.tab()
      await user.paste(testValue)
    })

    await waitFor(() => {
      inputs.forEach((input, index) => {
        expect(input).toHaveValue(testValue[index])
      })
    })
  })

  test("the change in value does not impact other values", async () => {
    const defaultValue = "1234"
    const { user, findAllByRole } = render(
      <PinInput defaultValue={defaultValue} />,
    )

    const inputs = await findAllByRole("textbox")

    await act(async () => {
      await user.tab()
      await user.type(inputs[0], "9")
    })

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("9")
      expect(inputs[1]).toHaveValue("2")
      expect(inputs[2]).toHaveValue("3")
      expect(inputs[3]).toHaveValue("4")
    })

    await act(async () => {
      await user.click(inputs[2])
      await user.type(inputs[2], "{backspace}")
    })

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("9")
      expect(inputs[1]).toHaveValue("2")
      expect(inputs[2]).toHaveValue("")
      expect(inputs[3]).toHaveValue("4")
    })
  })
})
