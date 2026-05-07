import { a11y, render, renderHook, screen } from "#test"
import { PinInput } from "."
import { usePinInput } from "./use-pin-input"

describe("<PinInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<PinInput.Root />)
  })

  test("sets `displayName` correctly", () => {
    expect(PinInput.Root.name).toBe("PinInputRoot")
    expect(PinInput.Field.name).toBe("PinInputField")
  })

  test("sets `className` correctly", () => {
    render(
      <PinInput.Root data-testid="root">
        <PinInput.Field data-testid="field" index={0} />
      </PinInput.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-pin-input__root")
    expect(screen.getByTestId("field")).toHaveClass("ui-pin-input__field")
  })

  test("merges root className with caller className", () => {
    render(<PinInput.Root className="from-caller" data-testid="root" />)

    expect(screen.getByTestId("root")).toHaveClass("ui-pin-input__root")
    expect(screen.getByTestId("root")).toHaveClass("from-caller")
  })

  test("merges getRootProps values with caller props", () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const { result } = renderHook(() =>
      usePinInput({
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
    expect(rootProps.role).toBe("group")

    rootProps.onClick?.({} as any)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })

  test("renders the correct number of input elements", () => {
    render(<PinInput.Root items={5} />)

    expect(screen.getAllByRole("textbox")).toHaveLength(5)
  })

  test("`id` prop applies correctly", () => {
    const testId = "test"
    const { container } = render(<PinInput.Root id={testId} />)

    expect(container.querySelector(`#${testId}`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-1`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-2`)).toBeInTheDocument()
    expect(container.querySelector(`#${testId}-3`)).toBeInTheDocument()
  })

  test('input type should be "password" when `mask` is true', () => {
    render(<PinInput.Root mask />)

    const inputs = screen.getAllByPlaceholderText("◯")

    inputs.forEach((input) => {
      expect(input).toHaveAttribute("type", "password")
    })
  })

  test("correctly applies custom placeholder to each input", () => {
    const customPlaceholder = "t"

    render(<PinInput.Root placeholder={customPlaceholder} />)

    expect(screen.getAllByPlaceholderText(customPlaceholder)).toHaveLength(4)
  })

  test('sets autoComplete to "one-time-code" when `otp` is true', () => {
    render(<PinInput.Root otp />)

    screen.getAllByRole("textbox").forEach((input) => {
      expect(input).toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test('does not set autoComplete to "one-time-code" when `otp` is false', () => {
    render(<PinInput.Root otp={false} />)

    screen.getAllByRole("textbox").forEach((input) => {
      expect(input).not.toHaveAttribute("autoComplete", "one-time-code")
    })
  })

  test("correctly sets `defaultValue` into each input", () => {
    const defaultValue = "1234"

    render(<PinInput.Root defaultValue={defaultValue} />)

    const inputs = screen.getAllByRole("textbox")

    inputs.forEach((input, index) => {
      expect(input).toHaveValue(defaultValue[index])
    })

    expect(inputs).toHaveLength(defaultValue.length)
  })
})
