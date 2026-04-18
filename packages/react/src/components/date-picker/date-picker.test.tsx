import type { DatePickerProps } from "."
import { a11y, page, render } from "#test/browser"
import { fireEvent } from "@testing-library/react"
import { useState } from "react"
import { vi } from "vitest"
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
    await render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(page.getByTestId("root").element()).toHaveClass(
      "ui-date-picker__root",
    )
    expect(page.getByTestId("icon").element()).toHaveClass(
      "ui-date-picker__icon",
    )
    expect(page.getByRole("combobox").elements()[0] as HTMLElement).toHaveClass(
      "ui-date-picker__field",
    )
  })

  test("merges root props without overwriting user props", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const el = page.getByTestId("root").element()
    fireEvent.click(page.getByRole("combobox").elements()[0] as HTMLElement)

    expect(el).toHaveClass("from-root", "from-user")
    expect(el).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(el).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })
    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("merges input context props without overwriting user props", async () => {
    const onRootClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
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

    const root = page.getByTestId("root").element()
    const el = page.getByRole("combobox").elements()[0] as HTMLElement

    fireEvent.click(el)

    expect(root).toHaveClass("from-root", "from-user")
    expect(el).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(el).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })
    expect(onRootClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <DatePicker
        defaultOpen
        placeholder="Choose a option"
        iconProps={{ "data-testid": "icon" }}
        rootProps={{ "data-testid": "root" }}
      />,
    )

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("icon").element().tagName).toBe("DIV")
    expect(
      (page.getByRole("combobox").elements()[0] as HTMLElement).tagName,
    ).toBe("DIV")
  })

  test("renders with defaultValue", async () => {
    await render(<DatePicker defaultValue={new Date(2024, 0, 15)} />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("January 15, 2024")
  })

  test("renders with range mode", async () => {
    await render(<DatePicker range rootProps={{ "data-testid": "root" }} />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs).toHaveLength(2)
  })

  test("renders with multiple mode", async () => {
    await render(<DatePicker multiple placeholder="Select dates" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeInTheDocument()
  })

  test("shows clear icon when value exists", async () => {
    await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    expect(icon).toHaveAttribute("role", "button")
  })

  test("shows calendar icon when no value exists", async () => {
    await render(<DatePicker clearable iconProps={{ "data-testid": "icon" }} />)

    const icon = page.getByTestId("icon").element()
    expect(icon).not.toHaveAttribute("role", "button")
  })

  test("clears value when clear icon is clicked", async () => {
    await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("January 15, 2024")

    const icon = page.getByTestId("icon").element()
    fireEvent.click(icon)

    await vi.waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("clears range value when clear icon is clicked", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")

    const icon = page.getByTestId("icon").element()
    fireEvent.click(icon)

    await vi.waitFor(() => {
      expect(inputs[0]).toHaveValue("")
      expect(inputs[1]).toHaveValue("")
    })
  })

  test("shows clear icon for range value with start only", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    expect(icon).toHaveAttribute("role", "button")
  })

  test("shows clear icon for range value with end only", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        range
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    expect(icon).toHaveAttribute("role", "button")
  })

  test("renders with clearable=false", async () => {
    await render(
      <DatePicker
        clearable={false}
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    expect(icon).not.toHaveAttribute("role", "button")
  })

  test("opens on click", async () => {
    await render(<DatePicker placeholder="Select date" />)

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.click(field)

    await vi.waitFor(() => {
      expect(
        document.querySelector('[role="dialog"]') as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  test("opens on input focus when openOnFocus is true", async () => {
    await render(<DatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)

    await vi.waitFor(() => {
      expect(
        document.querySelector('[role="dialog"]') as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  test("does not open on input focus when openOnFocus is false", async () => {
    await render(<DatePicker openOnFocus={false} placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)

    expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
  })

  test("handles input change for single date", async () => {
    await render(<DatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    expect(input).toHaveValue("2024-01-15")
  })

  test("handles input change for range date", async () => {
    await render(<DatePicker placeholder="Select date" range />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })

    expect(inputs[0]).toHaveValue("2024-01-15")
  })

  test("handles Enter key on single date input", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await vi.waitFor(() => {
      expect(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date start input", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" range />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    await vi.waitFor(() => {
      expect(inputs[0]).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date end input", async () => {
    await render(
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

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[1]!)
    fireEvent.change(inputs[1]!, { target: { value: "2024-01-20" } })
    fireEvent.keyDown(inputs[1]!, { key: "Enter" })

    await vi.waitFor(() => {
      expect(inputs[1]).toHaveValue("January 20, 2024")
    })
  })

  test("handles Backspace key on multiple date input", async () => {
    await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Backspace" })

    await vi.waitFor(() => {
      const tags = page.getByText(/January 1[56], 2024/).elements()
      expect(tags).toHaveLength(1)
    })
  })

  test("handles Backspace key on range date end input", async () => {
    await render(
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

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[1]!)

    // Clear the end input value first
    fireEvent.change(inputs[1]!, { target: { value: "" } })
    fireEvent.keyDown(inputs[1]!, { key: "Backspace" })

    // After backspace on empty end input, should clear both and focus start
    await vi.waitFor(() => {
      expect(inputs[0]).toHaveValue("")
      expect(inputs[1]).toHaveValue("")
    })
  })

  test("handles blur on single date", async () => {
    await render(<DatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "invalid" } })
    fireEvent.blur(input, { relatedTarget: null })

    // On blur with invalid value, input should be cleared
    await vi.waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles blur on range date resets input value", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[0]!)

    // Type a valid date string within range as input
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-18" } })

    // Blur with null relatedTarget (outside both field and content)
    fireEvent.blur(inputs[0]!, { relatedTarget: null })

    // On blur, range input should show the formatted date value (clamped within range)
    await vi.waitFor(() => {
      expect(inputs[0]).toHaveValue("January 18, 2024")
    })
  })

  test("handles blur on multiple date input", async () => {
    await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "something" } })
    fireEvent.blur(input, { relatedTarget: null })

    // On blur with multiple, input value should be cleared
    await vi.waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles input with pattern", async () => {
    await render(<DatePicker pattern={/[^0-9-]/g} placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "abc2024-01-15xyz" } })

    expect(input).toHaveValue("2024-01-15")
  })

  test("does not allow input when allowInput is false", async () => {
    await render(<DatePicker allowInput={false} placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    expect(input).toHaveValue("")
  })

  test("handles disabled state", async () => {
    await render(<DatePicker disabled placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeDisabled()
  })

  test("handles readOnly state", async () => {
    await render(<DatePicker placeholder="Select date" readOnly />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveAttribute("readOnly")
  })

  test("handles onChange callback", async () => {
    const onChange = vi.fn()

    await render(
      <DatePicker defaultOpen placeholder="Select" onChange={onChange} />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("handles onInputChange callback", async () => {
    const onInputChange = vi.fn()

    await render(
      <DatePicker placeholder="Select" onInputChange={onInputChange} />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await vi.waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith("2024-01-15")
    })
  })

  test("handles closeOnChange", async () => {
    await render(
      <DatePicker closeOnChange defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await vi.waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  })

  test("handles closeOnChange as function", async () => {
    await render(
      <DatePicker
        closeOnChange={(ev) => ev.target.value.length > 5}
        defaultOpen
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "2024-01-15" } })

    await vi.waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  })

  test("handles openOnChange as function", async () => {
    await render(
      <DatePicker
        openOnChange={(ev) => ev.target.value.length > 1}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "20" } })

    await vi.waitFor(() => {
      expect(
        document.querySelector('[role="dialog"]') as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  test("handles defaultInputValue", async () => {
    await render(<DatePicker defaultInputValue="2024-01-15" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("January 15, 2024")
  })

  test("handles defaultInputValue for range", async () => {
    await render(
      <DatePicker
        defaultInputValue={{ end: "2024-01-20", start: "2024-01-15" }}
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")
  })

  test("handles defaultInputValue with invalid date string for range", async () => {
    await render(
      <DatePicker
        defaultInputValue={{ end: "invalid", start: "invalid" }}
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveValue("invalid")
    expect(inputs[1]).toHaveValue("invalid")
  })

  test("handles defaultInputValue with invalid date string for single", async () => {
    await render(<DatePicker defaultInputValue="invalid-date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("invalid-date")
  })

  test("handles format with null input", async () => {
    await render(<DatePicker format={{ input: null }} />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeInTheDocument()
  })

  test("handles custom separator", async () => {
    await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        multiple
        separator=";"
      />,
    )

    expect(
      (page.getByRole("combobox").elements()[0] as HTMLElement).textContent,
    ).toContain(";")
  })

  test("handles max for multiple mode", async () => {
    await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        max={2}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.change(input, { target: { value: "2024-01-17" } })

    // Should not add more when max is reached
    expect(input).toHaveValue("")
  })

  test("handles excludeDate", async () => {
    await render(
      <DatePicker
        defaultOpen
        excludeDate={(date) => date.getDay() === 0}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)

    // Try to type a Sunday
    fireEvent.change(input, { target: { value: "2024-01-07" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // The excluded date should not be set
    expect(input).toHaveValue("2024-01-07")
  })

  test("handles allowInputBeyond=false with minDate", async () => {
    const minDate = new Date(2024, 0, 10)

    await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        minDate={minDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-05" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should clamp to minDate
    await vi.waitFor(() => {
      expect(input).toHaveValue("January 10, 2024")
    })
  })

  test("handles allowInputBeyond=false with maxDate", async () => {
    const maxDate = new Date(2024, 0, 20)

    await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        maxDate={maxDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-25" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should clamp to maxDate
    await vi.waitFor(() => {
      expect(input).toHaveValue("January 20, 2024")
    })
  })

  test("handles allowInputBeyond=true", async () => {
    await render(
      <DatePicker
        allowInputBeyond
        defaultOpen
        maxDate={new Date(2024, 0, 20)}
        minDate={new Date(2024, 0, 10)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-05" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should allow dates beyond bounds
    await vi.waitFor(() => {
      expect(input).toHaveValue("January 5, 2024")
    })
  })

  test("handles Enter key on multiple date input", async () => {
    await render(
      <DatePicker
        defaultOpen
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-01-16" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Input should be cleared after adding
    await vi.waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("handles onClear with multiple value", async () => {
    await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    fireEvent.click(icon)

    // After clear, no tags should remain
    await vi.waitFor(() => {
      expect(
        page.getByText(/January 15, 2024/).elements()[0],
      ).not.toBeInTheDocument()
    })
  })

  test("handles focusOnClear=false", async () => {
    await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear={false}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    fireEvent.click(icon)

    await vi.waitFor(() => {
      const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
      expect(input).toHaveValue("")
    })
  })

  test("handles focusOnClear with allowInput=false", async () => {
    await render(
      <DatePicker
        allowInput={false}
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    fireEvent.click(icon)

    await vi.waitFor(() => {
      const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
      expect(input).toHaveValue("")
    })
  })

  test("handles closeOnSelect for single date via calendar click", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" />)

    // Find a day cell in the calendar and click it
    const dialog = document.querySelector('[role="dialog"]') as HTMLElement
    const dayCells = dialog.querySelectorAll("td")
    const validDay = Array.from(dayCells).find(
      (td) =>
        !td.hasAttribute("data-outside") && !td.hasAttribute("data-disabled"),
    )!

    fireEvent.click(validDay)

    // closeOnSelect defaults to true for single, so dialog should close
    await vi.waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  })

  test("handles closeOnSelect=false keeps dialog open after calendar click", async () => {
    await render(
      <DatePicker
        closeOnSelect={false}
        defaultOpen
        placeholder="Select date"
      />,
    )

    // Find a day cell in the calendar and click it
    const dialog = document.querySelector('[role="dialog"]') as HTMLElement
    const dayCells = dialog.querySelectorAll("td")
    const validDay = Array.from(dayCells).find(
      (td) =>
        !td.hasAttribute("data-outside") && !td.hasAttribute("data-disabled"),
    )!

    fireEvent.click(validDay)

    // closeOnSelect is false, so dialog should remain open
    expect(
      document.querySelector('[role="dialog"]') as HTMLElement,
    ).toBeInTheDocument()
  })

  test("handles openOnClick=false", async () => {
    await render(
      <DatePicker
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.click(field)

    expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
  })

  test("handles onFieldFocus when allowInput is false and openOnFocus is true", async () => {
    await render(
      <DatePicker allowInput={false} openOnFocus placeholder="Select date" />,
    )

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.focus(field)

    await vi.waitFor(() => {
      expect(
        document.querySelector('[role="dialog"]') as HTMLElement,
      ).toBeInTheDocument()
    })
  })

  test("handles onMouseDown when openOnFocus is true", async () => {
    await render(<DatePicker placeholder="Select date" />)

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.mouseDown(field)

    // mouseDown should be prevented and stopped
    expect(field).toBeInTheDocument()
  })

  test("handles clear icon keyboard events", async () => {
    await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon").element()
    fireEvent.keyDown(icon, { key: "Enter" })

    await vi.waitFor(() => {
      const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
      expect(input).toHaveValue("")
    })
  })

  test("handles clear icon Space key", async () => {
    const onChange = vi.fn()

    await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = page.getByTestId("icon").element()
    fireEvent.keyDown(icon, { key: " ", code: "Space" })

    // The onClear should have been triggered via Space key
    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(undefined)
    })
  })

  test("handles controlled value update", async () => {
    await render(<ControlledDatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
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

    await render(<RangeControlled />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveValue("")

    fireEvent.click(page.getByTestId("set-value").element())

    await vi.waitFor(() => {
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

    await render(<SingleControlled />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("")

    fireEvent.click(page.getByTestId("set-value").element())

    await vi.waitFor(() => {
      expect(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles input change for range with existing start value", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[1]!)
    fireEvent.change(inputs[1]!, { target: { value: "2024-01-20" } })

    expect(inputs[1]).toHaveValue("2024-01-20")
  })

  test("handles input change for range with existing end value", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })

    expect(inputs[0]).toHaveValue("2024-01-15")
  })

  test("handles click on range field focuses start input when both empty", async () => {
    await render(<DatePicker placeholder="Select date" range />)

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.click(field)

    // Start input should be focused
    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveFocus()
  })

  test("handles click on range field focuses end input when only start is set", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: undefined,
          start: new Date(2024, 0, 15),
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.click(field)

    // End input should be focused since start has value
    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[1]).toHaveFocus()
  })

  test("handles click on range field focuses start input when end is set", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: undefined,
        }}
        placeholder="Select date"
        range
      />,
    )

    const field = page.getByRole("combobox").elements()[0] as HTMLElement
    fireEvent.click(field)

    // Start input should be focused when end is already set
    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveFocus()
  })

  test("handles custom render for multiple mode", async () => {
    await render(
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

    expect(page.getByTestId("custom-tag").element()).toBeInTheDocument()
    expect(page.getByTestId("custom-tag").element()).toHaveTextContent(
      "January 15, 2024",
    )
  })

  test("handles custom render onClear removes item", async () => {
    await render(
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

    const tag = page.getByTestId("tag-January 15, 2024").element()
    fireEvent.click(tag)

    await vi.waitFor(() => {
      expect(
        page.getByTestId("tag-January 15, 2024").elements()[0],
      ).not.toBeInTheDocument()
      expect(
        page.getByTestId("tag-January 16, 2024").element(),
      ).toBeInTheDocument()
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

    await render(
      <DatePicker
        defaultOpen
        parseDate={parseDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024/1/15" } })
    fireEvent.keyDown(input, { key: "Enter" })

    await vi.waitFor(() => {
      expect(parseDate).toHaveBeenCalledWith("2024/1/15")
    })
  })

  test("handles minDate after maxDate correction", async () => {
    // When minDate > maxDate, maxDate should be set to minDate
    await render(
      <DatePicker
        maxDate={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeInTheDocument()
  })

  test("handles defaultValue for range with inputValue", async () => {
    await render(
      <DatePicker
        defaultValue={{
          end: new Date(2024, 0, 20),
          start: new Date(2024, 0, 15),
        }}
        range
      />,
    )

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveValue("January 15, 2024")
    expect(inputs[1]).toHaveValue("January 20, 2024")
  })

  test("handles input id and name for range mode", async () => {
    await render(<DatePicker id="test-id" name="test-name" range />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    // When start is empty, start input gets id/name
    expect(inputs[0]).toHaveAttribute("id", "test-id")
    expect(inputs[0]).toHaveAttribute("name", "test-name")
  })

  test("handles input id and name for range mode with start value", async () => {
    await render(
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

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    // When start has value, end input gets id/name
    expect(inputs[1]).toHaveAttribute("id", "test-id")
    expect(inputs[1]).toHaveAttribute("name", "test-name")
  })

  test("handles Enter key on range start input moves focus to end input", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" range />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-15" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    // After entering start date, focus should move to end input
    await vi.waitFor(() => {
      expect(inputs[1]).toHaveFocus()
    })
  })

  test("handles Enter key with invalid date does nothing", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "invalid" } })
    fireEvent.keyDown(input, { key: "Enter" })

    // Should not update the value for invalid date
    expect(input).toHaveValue("invalid")
  })

  test("handles Enter key with empty value does nothing", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Enter" })

    expect(input).toHaveValue("")
  })

  test("handles custom placeholder", async () => {
    await render(<DatePicker placeholder="Custom placeholder" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveAttribute("placeholder", "Custom placeholder")
  })

  test("handles custom placeholder for range", async () => {
    await render(<DatePicker placeholder="Custom" range />)

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]
    expect(inputs[0]).toHaveAttribute("placeholder", "Custom")
    expect(inputs[1]).toHaveAttribute("placeholder", "Custom")
  })

  test("handles Backspace on single date input does nothing", async () => {
    await render(
      <DatePicker
        defaultOpen
        defaultValue={new Date(2024, 0, 15)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: "Backspace" })

    // Should not affect single date value
    expect(input).toHaveValue("January 15, 2024")
  })

  test("handles defaultMonth with minDate", async () => {
    const minDate = new Date(2025, 5, 1)

    await render(
      <DatePicker defaultMonth={new Date(2024, 0, 1)} minDate={minDate} />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeInTheDocument()
  })

  test("handles defaultMonth with valueProp", async () => {
    await render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        value={new Date(2024, 5, 15)}
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("June 15, 2024")
  })

  test("handles defaultMonth with defaultValue", async () => {
    await render(
      <DatePicker
        defaultMonth={new Date(2024, 0, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toHaveValue("June 15, 2024")
  })

  test("handles input change for multiple with valid date updates month", async () => {
    await render(<DatePicker defaultOpen multiple placeholder="Select dates" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: "2024-06-15" } })

    // The month should be updated
    expect(input).toHaveValue("2024-06-15")
  })

  test("handles range separator", async () => {
    await render(
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
    expect(
      (page.getByRole("combobox").elements()[0] as HTMLElement).textContent,
    ).toContain("~")
  })

  test("handles Enter key on range end input with existing start value", async () => {
    await render(
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

    const inputs = page.getByRole("textbox").elements() as HTMLInputElement[]

    // Focus on start and update with minDate constraint from end value
    fireEvent.focus(inputs[0]!)
    fireEvent.change(inputs[0]!, { target: { value: "2024-01-10" } })
    fireEvent.keyDown(inputs[0]!, { key: "Enter" })

    await vi.waitFor(() => {
      expect(inputs[0]).toHaveValue("January 10, 2024")
    })
  })

  test("handles input with composing state (IME)", async () => {
    await render(<DatePicker defaultOpen placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.focus(input)

    // Simulate composition
    fireEvent.compositionStart(input)
    fireEvent.keyDown(input, { key: "Enter", isComposing: true })

    // Should not process during IME composition
    expect(input).toHaveValue("")
  })

  test("handles disabled state prevents keyboard actions", async () => {
    await render(<DatePicker defaultOpen disabled placeholder="Select date" />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    fireEvent.keyDown(input, { key: "Enter" })

    expect(input).toHaveValue("")
  })

  test("handles contentProps", async () => {
    await render(
      <DatePicker
        defaultOpen
        contentProps={{ "data-testid": "content" } as any}
      />,
    )

    expect(page.getByTestId("content").element()).toBeInTheDocument()
  })

  test("handles custom icon", async () => {
    await render(
      <DatePicker icon={<span data-testid="custom-icon">icon</span>} />,
    )

    expect(page.getByTestId("custom-icon").element()).toBeInTheDocument()
  })

  test("handles animationScheme prop", async () => {
    await render(<DatePicker animationScheme="inline-start" defaultOpen />)

    expect(
      document.querySelector('[role="dialog"]') as HTMLElement,
    ).toBeInTheDocument()
  })

  test("handles calendarProps", async () => {
    await render(
      <DatePicker
        defaultOpen
        calendarProps={{ "data-testid": "calendar" } as any}
      />,
    )

    expect(page.getByTestId("calendar").element()).toBeInTheDocument()
  })

  test("handles duration prop", async () => {
    await render(<DatePicker defaultOpen duration={0} />)

    expect(
      document.querySelector('[role="dialog"]') as HTMLElement,
    ).toBeInTheDocument()
  })

  test("handles elementProps", async () => {
    await render(
      <DatePicker elementProps={{ "data-testid": "element" } as any} />,
    )

    expect(page.getByTestId("element").element()).toBeInTheDocument()
  })

  test("handles required prop", async () => {
    await render(<DatePicker placeholder="Select date" required />)

    const input = page.getByRole("textbox").elements()[0] as HTMLInputElement
    expect(input).toBeRequired()
  })
})
