import type { DatePickerProps } from "."
import { useState } from "react"
import { vi } from "vitest"
import { a11y, page, render } from "#test/browser"
import { DatePicker } from "."
import { InputPropsContext } from "../input"

const ControlledDatePicker = ({ defaultValue, ...props }: DatePickerProps) => {
  const [value, setValue] = useState<Date | undefined>(defaultValue as Date)

  return <DatePicker value={value} onChange={setValue} {...props} />
}

describe("<DatePicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<DatePicker />)
  })

  test("sets `displayName` correctly", () => {
    expect(DatePicker.displayName).toBe("DatePickerRoot")
  })

  test("sets `className` correctly", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-date-picker__root")
    await expect
      .element(page.getByTestId("icon"))
      .toHaveClass("ui-date-picker__icon")
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveClass("ui-date-picker__field")
  })

  test("merges root props without overwriting user props", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    const { user: _user } = await render(
      <DatePicker
        className="from-root"
        defaultOpen
        rootProps={{
          className: "from-user",
          style: {
            backgroundColor: "rgb(0, 0, 255)",
            color: "rgb(255, 0, 0)",
          },
          "data-testid": "root",
          onClick: onUserClick,
        }}
        onClick={onRootClick}
      />,
    )

    const el = page.getByTestId("root")
    await _user.click(page.getByRole("combobox").first())

    await expect.element(el).toHaveClass("from-root", "from-user")
    await expect.element(el).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect.element(el).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })
    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges input context props without overwriting user props", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    const { user: _user } = await render(
      <InputPropsContext
        value={{
          className: "from-root",
          style: { color: "rgb(255, 0, 0)" },
          onClick: onRootClick,
        }}
      >
        <DatePicker
          className="from-user"
          style={{ backgroundColor: "rgb(0, 0, 255)" }}
          defaultOpen
          rootProps={{ "data-testid": "root" }}
          onClick={onUserClick}
        />
      </InputPropsContext>,
    )

    const root = page.getByTestId("root")
    const el = page.getByRole("combobox").first()

    await _user.click(el)

    await expect.element(root).toHaveClass("from-root", "from-user")
    await expect.element(el).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect.element(el).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })
    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("renders HTML tag correctly", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveProperty("tagName", "DIV")
    await expect
      .element(page.getByTestId("icon"))
      .toHaveProperty("tagName", "DIV")
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveProperty("tagName", "DIV")
  })

  test("renders with defaultValue", async () => {
    const { user: _user } = await render(
      <DatePicker defaultValue={new Date(2024, 0, 15)} />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("January 15, 2024")
  })

  test("renders with range mode", async () => {
    const { user: _user } = await render(
      <DatePicker range rootProps={{ "data-testid": "root" }} />,
    )

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toBeInTheDocument()
    await expect.element(inputs.nth(1)).toBeInTheDocument()
    await expect.element(inputs.nth(2).query()).not.toBeInTheDocument()
  })

  test("renders with multiple mode", async () => {
    const { user: _user } = await render(
      <DatePicker multiple placeholder="Select dates" />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeInTheDocument()
  })

  test("shows clear icon when value exists", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await expect.element(icon).toHaveAttribute("role", "button")
  })

  test("shows calendar icon when no value exists", async () => {
    const { user: _user } = await render(
      <DatePicker clearable iconProps={{ "data-testid": "icon" }} />,
    )

    const icon = page.getByTestId("icon")
    await expect.element(icon).not.toHaveAttribute("role", "button")
  })

  test("clears value when clear icon is clicked", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("January 15, 2024")

    const icon = page.getByTestId("icon")
    await _user.click(icon)

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("clears range value when clear icon is clicked", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("January 15, 2024")
    await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")

    const icon = page.getByTestId("icon")
    await _user.click(icon)

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("")
      await expect.element(inputs.nth(1)).toHaveValue("")
    })
  })

  test("shows clear icon for range value with start only", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await expect.element(icon).toHaveAttribute("role", "button")
  })

  test("shows clear icon for range value with end only", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await expect.element(icon).toHaveAttribute("role", "button")
  })

  test("renders with clearable=false", async () => {
    const { user: _user } = await render(
      <DatePicker
        clearable={false}
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await expect.element(icon).not.toHaveAttribute("role", "button")
  })

  test("opens on click", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" />,
    )

    const field = page.getByRole("combobox").first()
    await _user.click(field)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("opens on input focus when openOnFocus is true", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("does not open on input focus when openOnFocus is false", async () => {
    await render(<DatePicker openOnFocus={false} placeholder="Select date" />)

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles input change for single date", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")

    await expect.element(input).toHaveValue("2024-01-15")
  })

  test("handles input change for range date", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.first())
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-15")

    await expect.element(inputs.first()).toHaveValue("2024-01-15")
  })

  test("handles Enter key on single date input", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date start input", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.first())
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-15")
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date end input", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 10),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.nth(1))
    await _user.clear(inputs.nth(1))
    await _user.type(inputs.nth(1), "2024-01-20")
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")
    })
  })

  test("handles Backspace key on multiple date input", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()
    await _user.keyboard("{Backspace}")

    await vi.waitFor(async () => {
      await expect
        .element(page.getByText("January 15, 2024"))
        .toBeInTheDocument()
      await expect
        .element(page.getByText("January 16, 2024").query())
        .not.toBeInTheDocument()
    })
  })

  test("handles Backspace key on range date end input", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.nth(1))

    // Clear the end input value first
    await _user.clear(inputs.nth(1))
    await _user.click(inputs.nth(1))
    await _user.keyboard("{Backspace}")

    // After backspace on empty end input, should clear both and focus start
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("")
      await expect.element(inputs.nth(1)).toHaveValue("")
    })
  })

  test("handles blur on single date", async () => {
    const { user: _user } = await render(
      <DatePicker
        openOnChange={false}
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "invalid")
    await _user.tab()

    // On blur with invalid value, input should be cleared
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles blur on range date resets input value", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        openOnChange={false}
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.first())

    // Type a valid date string within range as input
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-18")

    // Tab twice: start → end → outside field
    await _user.tab()
    await _user.tab()

    // On blur, range input should show the formatted date value (clamped within range)
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 18, 2024")
    })
  })

  test("handles blur on multiple date input", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        openOnChange={false}
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()
    await _user.type(input, "something")
    await _user.tab()

    // On blur with multiple, input value should be cleared
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles input with pattern", async () => {
    const { user: _user } = await render(
      <DatePicker pattern={/[^0-9-]/g} placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "abc2024-01-15xyz")

    await expect.element(input).toHaveValue("2024-01-15")
  })

  test("does not allow input when allowInput is false", async () => {
    const { user: _user } = await render(
      <DatePicker allowInput={false} placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.clear(input)
    await _user.type(input, "2024-01-15")

    await expect.element(input).toHaveValue("")
  })

  test("handles disabled state", async () => {
    const { user: _user } = await render(
      <DatePicker disabled placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeDisabled()
  })

  test("handles readOnly state", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" readOnly />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveAttribute("readOnly")
  })

  test("handles onChange callback", async () => {
    const onChange = vi.fn()

    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select" onChange={onChange} />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")
    await _user.keyboard("{Enter}")

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("handles onInputChange callback", async () => {
    const onInputChange = vi.fn()

    const { user: _user } = await render(
      <DatePicker placeholder="Select" onInputChange={onInputChange} />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")

    await vi.waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith("2024-01-15")
    })
  })

  test("handles closeOnChange", async () => {
    const { user: _user } = await render(
      <DatePicker closeOnChange defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles closeOnChange as function", async () => {
    const { user: _user } = await render(
      <DatePicker
        closeOnChange={(ev) => ev.target.value.length > 5}
        defaultOpen
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-15")

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles openOnChange as function", async () => {
    const { user: _user } = await render(
      <DatePicker
        openOnChange={(ev) => ev.target.value.length > 1}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.clear(input)
    await _user.type(input, "20")

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles defaultInputValue", async () => {
    const { user: _user } = await render(
      <DatePicker defaultInputValue="2024-01-15" />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("January 15, 2024")
  })

  test("handles defaultInputValue for range", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultInputValue={{ end: "2024-01-20", start: "2024-01-15" }}
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("January 15, 2024")
    await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")
  })

  test("handles defaultInputValue with invalid date string for range", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultInputValue={{ end: "invalid", start: "invalid" }}
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("invalid")
    await expect.element(inputs.nth(1)).toHaveValue("invalid")
  })

  test("handles defaultInputValue with invalid date string for single", async () => {
    const { user: _user } = await render(
      <DatePicker defaultInputValue="invalid-date" />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("invalid-date")
  })

  test("handles format with null input", async () => {
    const { user: _user } = await render(
      <DatePicker format={{ input: null }} />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeInTheDocument()
  })

  test("handles custom separator", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        separator=";"
      />,
    )

    await expect
      .element(page.getByRole("combobox").first())
      .toHaveTextContent(";")
  })

  test("handles max for multiple mode", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        max={2}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.clear(input)
    await _user.type(input, "2024-01-17")

    // Should not add more when max is reached
    await expect.element(input).toHaveValue("")
  })

  test("handles excludeDate", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        excludeDate={(date) => date.getDay() === 0}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)

    // Try to type a Sunday
    await _user.clear(input)
    await _user.type(input, "2024-01-07")
    await _user.click(input)
    await _user.keyboard("{Enter}")

    // The excluded date should not be set
    await expect.element(input).toHaveValue("2024-01-07")
  })

  test("handles allowInputBeyond=false with minDate", async () => {
    const minDate = new Date(2024, 0, 10)

    const { user: _user } = await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        minDate={minDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-05")
    await _user.keyboard("{Enter}")

    // Should clamp to minDate
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 10, 2024")
    })
  })

  test("handles allowInputBeyond=false with maxDate", async () => {
    const maxDate = new Date(2024, 0, 20)

    const { user: _user } = await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        maxDate={maxDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-25")
    await _user.keyboard("{Enter}")

    // Should clamp to maxDate
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 20, 2024")
    })
  })

  test("handles allowInputBeyond=true", async () => {
    const { user: _user } = await render(
      <DatePicker
        allowInputBeyond
        defaultOpen
        maxDate={new Date(2024, 0, 20)}
        minDate={new Date(2024, 0, 10)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-01-05")
    await _user.keyboard("{Enter}")

    // Should allow dates beyond bounds
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 5, 2024")
    })
  })

  test("handles Enter key on multiple date input", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()
    await _user.type(input, "2024-01-16")
    await _user.keyboard("{Enter}")

    // Input should be cleared after adding
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles Enter key on multiple date input keeps already-selected date", async () => {
    const onChange = vi.fn()
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
        onChange={onChange}
      />,
    )

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()
    await _user.type(input, "2024-01-15")
    await _user.keyboard("{Enter}")

    // Input cleared, but the existing date stays in the array (no toggle-off)
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
    expect(onChange).not.toHaveBeenCalled()
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveTextContent("January 15, 2024")
  })

  test("handles Enter key on multiple date input does not remove when max is reached", async () => {
    const onChange = vi.fn()
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        max={2}
        multiple
        placeholder="Select dates"
        onChange={onChange}
      />,
    )

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.focus()
    await _user.type(input, "2024-01-17")
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
    expect(onChange).not.toHaveBeenCalled()
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveTextContent("January 15, 2024")
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveTextContent("January 16, 2024")
    await expect
      .element(page.getByText("January 17, 2024").query())
      .not.toBeInTheDocument()
  })

  test("handles onClear with multiple value", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await _user.click(icon)

    // After clear, no tags should remain
    await vi.waitFor(async () => {
      await expect
        .element(page.getByText(/January 15, 2024/).query())
        .not.toBeInTheDocument()
    })
  })

  test("handles focusOnClear=false", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear={false}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await _user.click(icon)

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles focusOnClear with allowInput=false", async () => {
    const { user: _user } = await render(
      <DatePicker
        allowInput={false}
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await _user.click(icon)

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles closeOnSelect for single date via calendar click", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const validDay = page.getByRole("gridcell").first()

    await _user.click(validDay)

    // closeOnSelect defaults to true for single, so dialog should close
    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("dialog").query())
        .not.toBeInTheDocument()
    })
  })

  test("handles closeOnSelect=false keeps dialog open after calendar click", async () => {
    const { user: _user } = await render(
      <DatePicker
        closeOnSelect={false}
        defaultOpen
        placeholder="Select date"
      />,
    )

    const validDay = page.getByRole("gridcell").first()

    await _user.click(validDay)

    // closeOnSelect is false, so dialog should remain open
    await expect.element(page.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles openOnClick=false", async () => {
    const { user: _user } = await render(
      <DatePicker
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const field = page.getByRole("combobox").first()
    await _user.click(field)

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles onFieldFocus when allowInput is false and openOnFocus is true", async () => {
    const { user: _user } = await render(
      <DatePicker allowInput={false} openOnFocus placeholder="Select date" />,
    )

    const field = page.getByRole("combobox").first()
    await _user.click(field)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles onMouseDown when openOnFocus is true", async () => {
    const onMouseDown = vi.fn()

    document.addEventListener("mousedown", onMouseDown)

    try {
      const { user: _user } = await render(
        <DatePicker placeholder="Select date" />,
      )

      const field = page.getByRole("combobox").first()
      const fieldEl = await field.findElement()
      expect(
        fieldEl.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        ),
      ).toBeFalsy()

      // mouseDown should be prevented and stopped
      expect(onMouseDown).not.toHaveBeenCalled()
    } finally {
      document.removeEventListener("mousedown", onMouseDown)
    }
  })

  test("handles clear icon keyboard events", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await _user.click(icon)
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles clear icon Space key", async () => {
    const onChange = vi.fn()

    const { user: _user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = page.getByTestId("icon")
    await _user.click(icon)
    await _user.keyboard(" ")

    // The onClear should have been triggered via Space key
    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(undefined)
    })
  })

  test("handles controlled value update", async () => {
    const { user: _user } = await render(
      <ControlledDatePicker placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("")
  })

  test("handles valueProp update for range", async () => {
    const RangeControlled = () => {
      const [value, setValue] = useState<{
        end?: Date
        start?: Date
      }>({ end: undefined, start: undefined })

      return (
        <div>
          <button
            data-testid="set-value"
            onClick={() =>
              setValue({
                end: new Date(2024, 0, 20),
                start: new Date(2024, 0, 15),
              })
            }
          >
            Set
          </button>
          <DatePicker range value={value} onChange={setValue} />
        </div>
      )
    }

    const { user: _user } = await render(<RangeControlled />)

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("")

    await _user.click(page.getByTestId("set-value"))

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 15, 2024")
      await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")
    })
  })

  test("handles valueProp update for single", async () => {
    const SingleControlled = () => {
      const [value, setValue] = useState<Date | undefined>(undefined)

      return (
        <div>
          <button
            data-testid="set-value"
            onClick={() => setValue(new Date(2024, 0, 15))}
          >
            Set
          </button>
          <DatePicker value={value} onChange={setValue} />
        </div>
      )
    }

    const { user: _user } = await render(<SingleControlled />)

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("")

    await _user.click(page.getByTestId("set-value"))

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles input change for range with existing start value", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.nth(1))
    await _user.clear(inputs.nth(1))
    await _user.type(inputs.nth(1), "2024-01-20")

    await expect.element(inputs.nth(1)).toHaveValue("2024-01-20")
  })

  test("handles input change for range with existing end value", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.first())
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-15")

    await expect.element(inputs.first()).toHaveValue("2024-01-15")
  })

  test("handles click on range field focuses start input when both empty", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" range />,
    )

    const field = page.getByRole("combobox").first()
    await _user.click(field)

    // Start input should be focused
    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveFocus()
  })

  test("handles click on range field focuses end input when only start is set", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = page.getByRole("combobox").first()
    const fieldEl = await field.findElement()
    if (fieldEl instanceof HTMLElement) fieldEl.click()

    // End input should be focused since start has value
    const inputs = page.getByRole("textbox")
    await vi.waitFor(async () => {
      await expect.element(inputs.nth(1)).toHaveFocus()
    })
  })

  test("handles click on range field focuses start input when end is set", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = page.getByRole("combobox").first()
    const fieldEl = await field.findElement()
    if (fieldEl instanceof HTMLElement) fieldEl.click()

    // Start input should be focused when end is already set
    const inputs = page.getByRole("textbox")
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveFocus()
    })
  })

  test("handles custom render for multiple mode", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        render={({ value, onClear }) => (
          <button data-testid="custom-tag" onClick={onClear}>
            {value}
          </button>
        )}
      />,
    )

    await expect.element(page.getByTestId("custom-tag")).toBeInTheDocument()
    await expect
      .element(page.getByTestId("custom-tag"))
      .toHaveTextContent("January 15, 2024")
  })

  test("handles custom render onClear removes item", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        render={({ value, onClear }) => (
          <button data-testid={`tag-${value}`} onClick={onClear}>
            {value}
          </button>
        )}
      />,
    )

    const tag = page.getByTestId("tag-January 15, 2024")
    await _user.click(tag)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByTestId("tag-January 15, 2024").query())
        .not.toBeInTheDocument()
      await expect
        .element(page.getByTestId("tag-January 16, 2024"))
        .toBeInTheDocument()
    })
  })

  test("handles parseDate", async () => {
    const parseDate = vi.fn((value: string) => {
      const parts = value.split("/")
      if (parts.length === 3) {
        return new Date(
          Number(parts[0]),
          Number(parts[1]) - 1,
          Number(parts[2]),
        )
      }
      return undefined
    })

    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        parseDate={parseDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024/1/15")
    await _user.click(input)
    await _user.keyboard("{Enter}")

    await vi.waitFor(() => {
      expect(parseDate).toHaveBeenCalledWith("2024/1/15")
    })
  })

  test("handles minDate after maxDate correction", async () => {
    // When minDate > maxDate, maxDate should be set to minDate
    const { user: _user } = await render(
      <DatePicker
        maxDate={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeInTheDocument()
  })

  test("handles defaultValue for range with inputValue", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("January 15, 2024")
    await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")
  })

  test("handles input id and name for range mode", async () => {
    const { user: _user } = await render(
      <DatePicker id="test-id" name="test-name" range />,
    )

    const inputs = page.getByRole("textbox")
    // When start is empty, start input gets id/name
    await expect.element(inputs.first()).toHaveAttribute("id", "test-id")
    await expect.element(inputs.first()).toHaveAttribute("name", "test-name")
  })

  test("handles input id and name for range mode with start value", async () => {
    const { user: _user } = await render(
      <DatePicker
        id="test-id"
        name="test-name"
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        range
      />,
    )

    const inputs = page.getByRole("textbox")
    // When start has value, end input gets id/name
    await expect.element(inputs.nth(1)).toHaveAttribute("id", "test-id")
    await expect.element(inputs.nth(1)).toHaveAttribute("name", "test-name")
  })

  test("handles Enter key on range start input moves focus to end input", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await _user.click(inputs.first())
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-15")
    await _user.keyboard("{Enter}")

    // After entering start date, focus should move to end input
    await vi.waitFor(async () => {
      await expect.element(inputs.nth(1)).toHaveFocus()
    })
  })

  test("handles Enter key with invalid date does nothing", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "invalid")
    await _user.click(input)
    await _user.keyboard("{Enter}")

    // Should not update the value for invalid date
    await expect.element(input).toHaveValue("invalid")
  })

  test("handles Enter key with empty value does nothing", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.click(input)
    await _user.keyboard("{Enter}")

    await expect.element(input).toHaveValue("")
  })

  test("handles custom placeholder", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Custom placeholder" />,
    )

    const input = page.getByRole("textbox").first()
    await expect
      .element(input)
      .toHaveAttribute("placeholder", "Custom placeholder")
  })

  test("handles custom placeholder for range", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Custom" range />,
    )

    const inputs = page.getByRole("textbox")
    await expect
      .element(inputs.first())
      .toHaveAttribute("placeholder", "Custom")
    await expect.element(inputs.nth(1)).toHaveAttribute("placeholder", "Custom")
  })

  test("handles Backspace on single date input edits text normally", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={new Date(2024, 0, 15)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.keyboard("{Backspace}")

    // Single date allows normal text editing on Backspace
    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 15, 202")
    })
  })

  test("handles defaultMonth with minDate", async () => {
    const minDate = new Date(2025, 5, 1)

    const { user: _user } = await render(
      <DatePicker defaultMonth={new Date(2024, 0, 1)} minDate={minDate} />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeInTheDocument()
  })

  test("handles defaultMonth with valueProp", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        value={new Date(2024, 5, 15)}
      />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("June 15, 2024")
  })

  test("handles defaultMonth with defaultValue", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("June 15, 2024")
  })

  test("handles input change for multiple with valid date updates month", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen multiple placeholder="Select dates" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)
    await _user.clear(input)
    await _user.type(input, "2024-06-15")

    // The month should be updated
    await expect.element(input).toHaveValue("2024-06-15")
  })

  test("handles range separator", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
        separator="~"
      />,
    )

    // Range uses separator between inputs
    await expect
      .element(page.getByRole("combobox").first())
      .toHaveTextContent("~")
  })

  test("handles Enter key on range end input with existing start value", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox")

    // Focus on start and update with minDate constraint from end value
    await _user.click(inputs.first())
    await _user.clear(inputs.first())
    await _user.type(inputs.first(), "2024-01-10")
    await _user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 10, 2024")
    })
  })

  test("handles input with composing state (IME)", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await _user.click(input)

    // Simulate composition
    const inputEl = await input.findElement()
    inputEl.dispatchEvent(new Event("compositionstart", { bubbles: true }))
    await _user.click(input)
    await _user.keyboard("{Enter}")

    // Should not process during IME composition
    await expect.element(input).toHaveValue("")
  })

  test("handles disabled state prevents keyboard actions", async () => {
    await render(<DatePicker defaultOpen disabled placeholder="Select date" />)

    const input = page.getByRole("textbox").first()
    const inputEl = await input.findElement()
    inputEl.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    )

    await expect.element(input).toHaveValue("")
  })

  test("handles contentProps", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        contentProps={{ "data-testid": "content" } as any}
      />,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("handles custom icon", async () => {
    const { user: _user } = await render(
      <DatePicker icon={<span data-testid="custom-icon">icon</span>} />,
    )

    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("handles animationScheme prop", async () => {
    const { user: _user } = await render(
      <DatePicker animationScheme="inline-start" defaultOpen />,
    )

    await expect.element(page.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles calendarProps", async () => {
    const { user: _user } = await render(
      <DatePicker
        defaultOpen
        calendarProps={{ "data-testid": "calendar" } as any}
      />,
    )

    await expect.element(page.getByTestId("calendar")).toBeInTheDocument()
  })

  test("handles duration prop", async () => {
    const { user: _user } = await render(
      <DatePicker defaultOpen duration={0} />,
    )

    await expect.element(page.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles elementProps", async () => {
    const { user: _user } = await render(
      <DatePicker elementProps={{ "data-testid": "element" } as any} />,
    )

    await expect.element(page.getByTestId("element")).toBeInTheDocument()
  })

  test("handles required prop", async () => {
    const { user: _user } = await render(
      <DatePicker placeholder="Select date" required />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toBeRequired()
  })
})
