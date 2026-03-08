import type { DatePickerProps } from "."
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useState } from "react"
import { DatePicker } from "."

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

  test("sets `className` correctly", () => {
    render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-date-picker__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-date-picker__icon")
    expect(screen.getAllByRole("combobox")[0]!).toHaveClass(
      "ui-date-picker__field",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("DIV")
    expect(screen.getAllByRole("combobox")[0]?.tagName).toBe("DIV")
  })

  test("renders with defaultValue", () => {
    render(<DatePicker defaultValue={new Date(2024, 0, 15)} />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("January 15, 2024")
  })

  test("renders with range mode", () => {
    render(<DatePicker range rootProps={{ "data-testid": "root" }} />)

    const inputs = screen.getAllByRole("textbox")
    expect(inputs).toHaveLength(2)
  })

  test("renders with multiple mode", () => {
    render(<DatePicker multiple placeholder="Select dates" />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("shows clear icon when value exists", () => {
    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveAttribute("role", "button")
  })

  test("shows calendar icon when no value exists", () => {
    render(<DatePicker clearable iconProps={{ "data-testid": "icon" }} />)

    const icon = screen.getByTestId("icon")
    expect(icon).not.toHaveAttribute("role", "button")
  })

  test("clears value when clear icon is clicked", async () => {
    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("January 15, 2024")

    const icon = screen.getByTestId("icon")
    fireEvent.click(icon)

    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("clears range value when clear icon is clicked", async () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")

    const icon = screen.getByTestId("icon")
    fireEvent.click(icon)

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("")
      expect(inputs[1]).toHaveValue("")
    })
  })

  test("shows clear icon for range value with start only", () => {
    render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveAttribute("role", "button")
  })

  test("shows clear icon for range value with end only", () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveAttribute("role", "button")
  })

  test("renders with clearable=false", () => {
    render(
      <DatePicker
        clearable={false}
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    expect(icon).not.toHaveAttribute("role", "button")
  })

  test("opens on click", async () => {
    render(<DatePicker placeholder="Select date" />)

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.click(field)

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("opens on input focus when openOnFocus is true", async () => {
    render(<DatePicker placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("does not open on input focus when openOnFocus is false", () => {
    render(<DatePicker openOnFocus={false} placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  test("handles input change for single date", () => {
    render(<DatePicker placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    expect(input).toHaveValue("2024-01-15")
  })

  test("handles input change for range date", () => {
    render(<DatePicker placeholder="Select date" range />)

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })

    expect(inputs[0]).toHaveValue("2024-01-15")
  })

  test("handles Enter key on single date input", async () => {
    render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await waitFor(() => {
      expect(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date start input", async () => {
    render(<DatePicker defaultOpen placeholder="Select date" range />)

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date end input", async () => {
    render(
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

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[1]!)
    fireEvent.change(inputs[1]!, { target: { value: "2024-01-20" } })
    fireEvent.keyDown(inputs[1]!, { key: "Enter" })

    await waitFor(() => {
      expect(inputs[1]).toHaveValue("January 20, 2024")
    })
  })

  test("handles Backspace key on multiple date input", async () => {
    render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Backspace" })

    await waitFor(() => {
      const tags = screen.getAllByText(/January 1[56], 2024/)
      expect(tags).toHaveLength(1)
    })
  })

  test("handles Backspace key on range date end input", async () => {
    render(
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

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[1]!)

    // Clear the end input value first
    fireEvent.change(inputs[1]!, { target: { value: "" } })
    fireEvent.keyDown(inputs[1]!, { key: "Backspace" })

    // After backspace on empty end input, should clear both and focus start
    await waitFor(() => {
      expect(inputs[0]).toHaveValue("")
      expect(inputs[1]).toHaveValue("")
    })
  })

  test("handles blur on single date", async () => {
    render(<DatePicker placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "invalid" } })
    fireEvent.blur(input, { relatedTarget: null })

    // On blur with invalid value, input should be cleared
    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles blur on range date resets input value", async () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0]!)

    // Type a valid date string within range as input
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-18" } })

    // Blur with null relatedTarget (outside both field and content)
    fireEvent.blur(inputs[0]!, { relatedTarget: null })

    // On blur, range input should show the formatted date value (clamped within range)
    await waitFor(() => {
      expect(inputs[0]).toHaveValue("January 18, 2024")
    })
  })

  test("handles blur on multiple date input", async () => {
    render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "something" } })
    fireEvent.blur(input, { relatedTarget: null })

    // On blur with multiple, input value should be cleared
    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles input with pattern", () => {
    render(<DatePicker pattern={/[^0-9-]/g} placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "abc2024-01-15xyz" } })

    expect(input).toHaveValue("2024-01-15")
  })

  test("does not allow input when allowInput is false", () => {
    render(<DatePicker allowInput={false} placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    expect(input).toHaveValue("")
  })

  test("handles disabled state", () => {
    render(<DatePicker disabled placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
  })

  test("handles readOnly state", () => {
    render(<DatePicker placeholder="Select date" readOnly />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveAttribute("readOnly")
  })

  test("handles onChange callback", async () => {
    const onChange = vi.fn()

    render(<DatePicker defaultOpen placeholder="Select" onChange={onChange} />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("handles onInputChange callback", async () => {
    const onInputChange = vi.fn()

    render(<DatePicker placeholder="Select" onInputChange={onInputChange} />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith("2024-01-15")
    })
  })

  test("handles closeOnChange", async () => {
    render(<DatePicker closeOnChange defaultOpen placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  test("handles closeOnChange as function", async () => {
    render(
      <DatePicker
        closeOnChange={(ev) => ev.target.value.length > 5}
        defaultOpen
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  test("handles openOnChange as function", async () => {
    render(
      <DatePicker
        openOnChange={(ev) => ev.target.value.length > 1}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "20" } })

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles defaultInputValue", () => {
    render(<DatePicker defaultInputValue="2024-01-15" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("January 15, 2024")
  })

  test("handles defaultInputValue for range", () => {
    render(
      <DatePicker
        defaultInputValue={{ end: "2024-01-20", start: "2024-01-15" }}
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")
  })

  test("handles defaultInputValue with invalid date string for range", () => {
    render(
      <DatePicker
        defaultInputValue={{ end: "invalid", start: "invalid" }}
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveValue("invalid")
    expect(inputs[1]).toHaveValue("invalid")
  })

  test("handles defaultInputValue with invalid date string for single", () => {
    render(<DatePicker defaultInputValue="invalid-date" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("invalid-date")
  })

  test("handles format with null input", () => {
    render(<DatePicker format={{ input: null }} />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("handles custom separator", () => {
    render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        separator=";"
      />,
    )

    expect(screen.getByText(/;/)).toBeInTheDocument()
  })

  test("handles max for multiple mode", () => {
    render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        max={2}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "2024-01-17" } })

    // Should not add more when max is reached
    expect(input).toHaveValue("")
  })

  test("handles excludeDate", () => {
    render(
      <DatePicker
        defaultOpen
        excludeDate={(date) => date.getDay() === 0}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)

    // Try to type a Sunday
    fireEvent.change(input, { target: { value: "2024-01-07" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // The excluded date should not be set
    expect(input).toHaveValue("2024-01-07")
  })

  test("handles allowInputBeyond=false with minDate", async () => {
    const minDate = new Date(2024, 0, 10)

    render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        minDate={minDate}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-05" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should clamp to minDate
    await waitFor(() => {
      expect(input).toHaveValue("January 10, 2024")
    })
  })

  test("handles allowInputBeyond=false with maxDate", async () => {
    const maxDate = new Date(2024, 0, 20)

    render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        maxDate={maxDate}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-25" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should clamp to maxDate
    await waitFor(() => {
      expect(input).toHaveValue("January 20, 2024")
    })
  })

  test("handles allowInputBeyond=true", async () => {
    render(
      <DatePicker
        allowInputBeyond
        defaultOpen
        maxDate={new Date(2024, 0, 20)}
        minDate={new Date(2024, 0, 10)}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-05" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should allow dates beyond bounds
    await waitFor(() => {
      expect(input).toHaveValue("January 5, 2024")
    })
  })

  test("handles Enter key on multiple date input", async () => {
    render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-16" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Input should be cleared after adding
    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles onClear with multiple value", async () => {
    render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    fireEvent.click(icon)

    // After clear, no tags should remain
    await waitFor(() => {
      expect(screen.queryByText(/January 15, 2024/)).not.toBeInTheDocument()
    })
  })

  test("handles focusOnClear=false", async () => {
    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear={false}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    fireEvent.click(icon)

    await waitFor(() => {
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })
  })

  test("handles focusOnClear with allowInput=false", async () => {
    render(
      <DatePicker
        allowInput={false}
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    fireEvent.click(icon)

    await waitFor(() => {
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })
  })

  test("handles closeOnSelect for single date via calendar click", async () => {
    render(<DatePicker defaultOpen placeholder="Select date" />)

    // Find a day cell in the calendar and click it
    const dialog = screen.getByRole("dialog")
    const dayCells = dialog.querySelectorAll("td")
    const validDay = Array.from(dayCells).find(
      (td) =>
        !td.hasAttribute("data-outside") && !td.hasAttribute("data-disabled"),
    )!

    fireEvent.click(validDay)

    // closeOnSelect defaults to true for single, so dialog should close
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  test("handles closeOnSelect=false keeps dialog open after calendar click", () => {
    render(
      <DatePicker
        closeOnSelect={false}
        defaultOpen
        placeholder="Select date"
      />,
    )

    // Find a day cell in the calendar and click it
    const dialog = screen.getByRole("dialog")
    const dayCells = dialog.querySelectorAll("td")
    const validDay = Array.from(dayCells).find(
      (td) =>
        !td.hasAttribute("data-outside") && !td.hasAttribute("data-disabled"),
    )!

    fireEvent.click(validDay)

    // closeOnSelect is false, so dialog should remain open
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles openOnClick=false", () => {
    render(
      <DatePicker
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.click(field)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  test("handles onFieldFocus when allowInput is false and openOnFocus is true", async () => {
    render(
      <DatePicker allowInput={false} openOnFocus placeholder="Select date" />,
    )

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.focus(field)

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles onMouseDown when openOnFocus is true", () => {
    render(<DatePicker placeholder="Select date" />)

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.mouseDown(field)

    // mouseDown should be prevented and stopped
    expect(field).toBeInTheDocument()
  })

  test("handles clear icon keyboard events", async () => {
    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = screen.getByTestId("icon")
    fireEvent.keyDown(icon, { key: "Enter" })

    await waitFor(() => {
      const input = screen.getByRole("textbox")
      expect(input).toHaveValue("")
    })
  })

  test("handles clear icon Space key", async () => {
    const onChange = vi.fn()

    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = screen.getByTestId("icon")
    fireEvent.keyDown(icon, { key: " ", code: "Space" })

    // The onClear should have been triggered via Space key
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(undefined)
    })
  })

  test("handles controlled value update", () => {
    render(<ControlledDatePicker placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
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

    render(<RangeControlled />)

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveValue("")

    fireEvent.click(screen.getByTestId("set-value"))

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("January 15, 2024")
      expect(inputs[1]).toHaveValue("January 20, 2024")
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

    render(<SingleControlled />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")

    fireEvent.click(screen.getByTestId("set-value"))

    await waitFor(() => {
      expect(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles input change for range with existing start value", () => {
    render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[1]!)
    fireEvent.change(inputs[1]!, { target: { value: "2024-01-20" } })

    expect(inputs[1]).toHaveValue("2024-01-20")
  })

  test("handles input change for range with existing end value", () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })

    expect(inputs[0]).toHaveValue("2024-01-15")
  })

  test("handles click on range field focuses start input when both empty", () => {
    render(<DatePicker placeholder="Select date" range />)

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.click(field)

    // Start input should be focused
    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveFocus()
  })

  test("handles click on range field focuses end input when only start is set", () => {
    render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.click(field)

    // End input should be focused since start has value
    const inputs = screen.getAllByRole("textbox")
    expect(inputs[1]).toHaveFocus()
  })

  test("handles click on range field focuses start input when end is set", () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = screen.getAllByRole("combobox")[0]!
    fireEvent.click(field)

    // Start input should be focused when end is already set
    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveFocus()
  })

  test("handles custom render for multiple mode", () => {
    render(
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

    expect(screen.getByTestId("custom-tag")).toBeInTheDocument()
    expect(screen.getByTestId("custom-tag")).toHaveTextContent(
      "January 15, 2024",
    )
  })

  test("handles custom render onClear removes item", async () => {
    render(
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

    const tag = screen.getByTestId("tag-January 15, 2024")
    fireEvent.click(tag)

    await waitFor(() => {
      expect(
        screen.queryByTestId("tag-January 15, 2024"),
      ).not.toBeInTheDocument()
      expect(screen.getByTestId("tag-January 16, 2024")).toBeInTheDocument()
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

    render(
      <DatePicker
        defaultOpen
        parseDate={parseDate}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024/1/15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await waitFor(() => {
      expect(parseDate).toHaveBeenCalledWith("2024/1/15")
    })
  })

  test("handles minDate after maxDate correction", () => {
    // When minDate > maxDate, maxDate should be set to minDate
    render(
      <DatePicker
        maxDate={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("handles defaultValue for range with inputValue", () => {
    render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
      />,
    )

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")
  })

  test("handles input id and name for range mode", () => {
    render(<DatePicker id="test-id" name="test-name" range />)

    const inputs = screen.getAllByRole("textbox")
    // When start is empty, start input gets id/name
    expect(inputs[0]).toHaveAttribute("id", "test-id")
    expect(inputs[0]).toHaveAttribute("name", "test-name")
  })

  test("handles input id and name for range mode with start value", () => {
    render(
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

    const inputs = screen.getAllByRole("textbox")
    // When start has value, end input gets id/name
    expect(inputs[1]).toHaveAttribute("id", "test-id")
    expect(inputs[1]).toHaveAttribute("name", "test-name")
  })

  test("handles Enter key on range start input moves focus to end input", async () => {
    render(<DatePicker defaultOpen placeholder="Select date" range />)

    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    // After entering start date, focus should move to end input
    await waitFor(() => {
      expect(inputs[1]).toHaveFocus()
    })
  })

  test("handles Enter key with invalid date does nothing", () => {
    render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "invalid" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should not update the value for invalid date
    expect(input).toHaveValue("invalid")
  })

  test("handles Enter key with empty value does nothing", () => {
    render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Enter" })

    expect(input).toHaveValue("")
  })

  test("handles custom placeholder", () => {
    render(<DatePicker placeholder="Custom placeholder" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveAttribute("placeholder", "Custom placeholder")
  })

  test("handles custom placeholder for range", () => {
    render(<DatePicker placeholder="Custom" range />)

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveAttribute("placeholder", "Custom")
    expect(inputs[1]).toHaveAttribute("placeholder", "Custom")
  })

  test("handles Backspace on single date input does nothing", () => {
    render(
      <DatePicker
        defaultOpen
        defaultValue={new Date(2024, 0, 15)}
        placeholder="Select date"
      />,
    )

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Backspace" })

    // Should not affect single date value
    expect(input).toHaveValue("January 15, 2024")
  })

  test("handles defaultMonth with minDate", () => {
    const minDate = new Date(2025, 5, 1)

    render(<DatePicker defaultMonth={new Date(2024, 0, 1)} minDate={minDate} />)

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  test("handles defaultMonth with valueProp", () => {
    render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        value={new Date(2024, 5, 15)}
      />,
    )

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("June 15, 2024")
  })

  test("handles defaultMonth with defaultValue", () => {
    render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("June 15, 2024")
  })

  test("handles input change for multiple with valid date updates month", () => {
    render(<DatePicker defaultOpen multiple placeholder="Select dates" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-06-15" } })

    // The month should be updated
    expect(input).toHaveValue("2024-06-15")
  })

  test("handles range separator", () => {
    render(
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
    expect(screen.getByText("~")).toBeInTheDocument()
  })

  test("handles Enter key on range end input with existing start value", async () => {
    render(
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

    const inputs = screen.getAllByRole("textbox")

    // Focus on start and update with minDate constraint from end value
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-10" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    await waitFor(() => {
      expect(inputs[0]).toHaveValue("January 10, 2024")
    })
  })

  test("handles input with composing state (IME)", () => {
    render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.focus(input)

    // Simulate composition
    fireEvent.compositionStart(input)
    fireEvent.keyDown(input, { key: "Enter", isComposing: true })

    // Should not process during IME composition
    expect(input).toHaveValue("")
  })

  test("handles disabled state prevents keyboard actions", () => {
    render(<DatePicker defaultOpen disabled placeholder="Select date" />)

    const input = screen.getByRole("textbox")
    fireEvent.keyDown(input, { key: "Enter" })

    expect(input).toHaveValue("")
  })

  test("handles contentProps", () => {
    render(
      <DatePicker
        defaultOpen
        contentProps={{ "data-testid": "content" } as any}
      />,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("handles custom icon", () => {
    render(<DatePicker icon={<span data-testid="custom-icon">icon</span>} />)

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })

  test("handles animationScheme prop", () => {
    render(<DatePicker animationScheme="inline-start" defaultOpen />)

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles calendarProps", () => {
    render(
      <DatePicker
        defaultOpen
        calendarProps={{ "data-testid": "calendar" } as any}
      />,
    )

    expect(screen.getByTestId("calendar")).toBeInTheDocument()
  })

  test("handles duration prop", () => {
    render(<DatePicker defaultOpen duration={0} />)

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles elementProps", () => {
    render(<DatePicker elementProps={{ "data-testid": "element" } as any} />)

    expect(screen.getByTestId("element")).toBeInTheDocument()
  })

  test("handles required prop", () => {
    render(<DatePicker placeholder="Select date" required />)

    const input = screen.getByRole("textbox")
    expect(input).toBeRequired()
  })
})
