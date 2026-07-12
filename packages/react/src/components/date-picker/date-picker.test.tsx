import type { DatePickerProps } from "."
import { useState } from "react"
import { a11y, render, screen } from "#test"
import { DatePicker } from "."

const ControlledDatePicker = ({ defaultValue, ...props }: DatePickerProps) => {
  const [value, setValue] = useState<Date | undefined>(defaultValue as Date)

  return <DatePicker value={value} onChange={setValue} {...props} />
}

describe("<DatePicker />", () => {
  test("renders component correctly", async () => {
    await a11y(<DatePicker />)
  })

  test("renders with defaultValue", () => {
    render(<DatePicker defaultValue={new Date(2024, 0, 15)} />)

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("January 15, 2024")
  })

  test("renders with range mode", () => {
    render(<DatePicker range rootProps={{ "data-testid": "root" }} />)

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toBeInTheDocument()
    expect(inputs[1]).toBeInTheDocument()
    expect(inputs[2]).toBeUndefined()
  })

  test("renders with multiple mode", () => {
    render(<DatePicker multiple placeholder="Select dates" />)

    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument()
  })

  test("shows clear icon when value exists", () => {
    render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    expect(screen.getByTestId("icon")).toHaveAttribute("role", "button")
  })

  test("shows calendar icon when no value exists", () => {
    render(<DatePicker clearable iconProps={{ "data-testid": "icon" }} />)

    expect(screen.getByTestId("icon")).not.toHaveAttribute("role", "button")
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

    expect(screen.getByTestId("icon")).toHaveAttribute("role", "button")
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

    expect(screen.getByTestId("icon")).toHaveAttribute("role", "button")
  })

  test("renders with clearable=false", () => {
    render(
      <DatePicker
        clearable={false}
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    expect(screen.getByTestId("icon")).not.toHaveAttribute("role", "button")
  })

  test("handles disabled state", () => {
    render(<DatePicker disabled placeholder="Select date" />)

    expect(screen.getAllByRole("textbox")[0]).toBeDisabled()
  })

  test("handles readOnly state", () => {
    render(<DatePicker placeholder="Select date" readOnly />)

    expect(screen.getAllByRole("textbox")[0]).toHaveAttribute("readOnly")
  })

  test("handles defaultInputValue", () => {
    render(<DatePicker defaultInputValue="2024-01-15" />)

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("January 15, 2024")
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

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("invalid-date")
  })

  test("handles format with null input", () => {
    render(<DatePicker format={{ input: null }} />)

    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument()
  })

  test("handles custom separator", () => {
    render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        separator=";"
      />,
    )

    expect(screen.getAllByRole("combobox")[0]).toHaveTextContent(";")
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

  test("handles minDate after maxDate correction", () => {
    render(
      <DatePicker
        maxDate={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
        placeholder="Select date"
      />,
    )

    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument()
  })

  test("handles input id and name for range mode", () => {
    render(<DatePicker id="test-id" name="test-name" range />)

    const inputs = screen.getAllByRole("textbox")
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
    expect(inputs[1]).toHaveAttribute("id", "test-id")
    expect(inputs[1]).toHaveAttribute("name", "test-name")
  })

  test("handles custom placeholder", () => {
    render(<DatePicker placeholder="Custom placeholder" />)

    expect(screen.getAllByRole("textbox")[0]).toHaveAttribute(
      "placeholder",
      "Custom placeholder",
    )
  })

  test("handles custom placeholder for range", () => {
    render(<DatePicker placeholder="Custom" range />)

    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0]).toHaveAttribute("placeholder", "Custom")
    expect(inputs[1]).toHaveAttribute("placeholder", "Custom")
  })

  test("handles defaultMonth with minDate", () => {
    render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        minDate={new Date(2025, 5, 1)}
      />,
    )

    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument()
  })

  test("handles defaultMonth with valueProp", () => {
    render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        value={new Date(2024, 5, 15)}
      />,
    )

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("June 15, 2024")
  })

  test("handles defaultMonth with defaultValue", () => {
    render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("June 15, 2024")
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

    expect(screen.getAllByRole("combobox")[0]).toHaveTextContent("~")
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
      <DatePicker defaultOpen calendarProps={{ "data-testid": "calendar" }} />,
    )

    expect(screen.getByTestId("calendar")).toBeInTheDocument()
  })

  test("handles duration prop", () => {
    render(<DatePicker defaultOpen duration={0} />)

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles elementProps", () => {
    render(<DatePicker elementProps={{ "data-testid": "element" }} />)

    expect(screen.getByTestId("element")).toBeInTheDocument()
  })

  test("handles required prop", () => {
    render(<DatePicker placeholder="Select date" required />)

    expect(screen.getAllByRole("textbox")[0]).toBeRequired()
  })

  test("handles controlled value update", () => {
    render(<ControlledDatePicker placeholder="Select date" />)

    expect(screen.getAllByRole("textbox")[0]).toHaveValue("")
  })
})
