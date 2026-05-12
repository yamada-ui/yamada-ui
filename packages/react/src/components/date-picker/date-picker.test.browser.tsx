import { useState } from "react"
import { vi } from "vitest"
import { page, render } from "#test/browser"
import { DatePicker } from "."

describe("<DatePicker />", () => {
  test("clears value when clear icon is clicked", async () => {
    const { user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("January 15, 2024")

    const icon = page.getByTestId("icon")
    await user.click(icon)

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("clears range value when clear icon is clicked", async () => {
    const { user } = await render(
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
    await user.click(icon)

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("")
      await expect.element(inputs.nth(1)).toHaveValue("")
    })
  })

  test("opens on click", async () => {
    const { user } = await render(<DatePicker placeholder="Select date" />)

    const field = page.getByRole("combobox").first()
    await user.click(field)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("opens on input focus when openOnFocus is true", async () => {
    const { user } = await render(<DatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").first()
    await user.click(input)

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

  test("opens on start input click in range mode", async () => {
    const { user } = await render(
      <DatePicker placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await user.click(inputs.first())

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
    await expect.element(inputs.first()).toHaveFocus()
  })

  test("opens on end input click in range mode", async () => {
    const { user } = await render(
      <DatePicker placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await user.click(inputs.nth(1))

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
    await expect.element(inputs.nth(1)).toHaveFocus()
  })

  test("handles input change for single date", async () => {
    const { user } = await render(<DatePicker placeholder="Select date" />)

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")

    await expect.element(input).toHaveValue("2024-01-15")
  })

  test("handles input change for range date", async () => {
    const { user } = await render(
      <DatePicker placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await user.click(inputs.first())
    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-15")

    await expect.element(inputs.first()).toHaveValue("2024-01-15")
  })

  test("handles Enter key on single date input", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")
    await expect.element(input).toHaveValue("2024-01-15")
    await expect.element(input).toHaveFocus()
    await user.keyboard("{Enter}")

    await expect.element(input).toHaveValue("January 15, 2024")
  })

  test("handles Enter key on range date start input", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await user.click(inputs.first())
    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-15")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 15, 2024")
    })
  })

  test("handles Enter key on range date end input", async () => {
    const { user } = await render(
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
    await user.click(inputs.nth(1))
    await user.clear(inputs.nth(1))
    await user.type(inputs.nth(1), "2024-01-20")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.nth(1)).toHaveValue("January 20, 2024")
    })
  })

  test("handles Backspace key on multiple date input", async () => {
    const { user } = await render(
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
    await user.keyboard("{Backspace}")

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
    const { user } = await render(
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
    await user.click(inputs.nth(1))

    await user.clear(inputs.nth(1))
    await user.click(inputs.nth(1))
    await user.keyboard("{Backspace}")

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("")
      await expect.element(inputs.nth(1)).toHaveValue("")
    })
  })

  test("handles blur on single date", async () => {
    const { user } = await render(
      <DatePicker
        openOnChange={false}
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "invalid")
    await user.tab()

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles blur on range date resets input value", async () => {
    const { user } = await render(
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
    await user.click(inputs.first())

    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-18")

    await user.tab()
    await user.tab()

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 18, 2024")
    })
  })

  test("handles blur on multiple date input", async () => {
    const { user } = await render(
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
    await user.type(input, "something")
    await user.tab()

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles input with pattern", async () => {
    const { user } = await render(
      <DatePicker pattern={/[^0-9-]/g} placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "abc2024-01-15xyz")

    await expect.element(input).toHaveValue("2024-01-15")
  })

  test("does not allow input when allowInput is false", async () => {
    const { user } = await render(
      <DatePicker allowInput={false} placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.clear(input)
    await user.type(input, "2024-01-15")

    await expect.element(input).toHaveValue("")
  })

  test("handles onChange callback", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select" onChange={onChange} />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")
    await user.keyboard("{Enter}")

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("handles onInputChange callback", async () => {
    const onInputChange = vi.fn()

    const { user } = await render(
      <DatePicker placeholder="Select" onInputChange={onInputChange} />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")

    await vi.waitFor(() => {
      expect(onInputChange).toHaveBeenCalledWith("2024-01-15")
    })
  })

  test("handles closeOnChange", async () => {
    const { user } = await render(
      <DatePicker closeOnChange defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles closeOnChange as function", async () => {
    const { user } = await render(
      <DatePicker
        closeOnChange={(ev) => ev.target.value.length > 5}
        defaultOpen
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-15")

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles openOnChange as function", async () => {
    const { user } = await render(
      <DatePicker
        openOnChange={(ev) => ev.target.value.length > 1}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.clear(input)
    await user.type(input, "20")

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles max for multiple mode", async () => {
    const { user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15), new Date(2024, 0, 16)]}
        max={2}
        multiple
        placeholder="Select dates"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.clear(input)
    await user.type(input, "2024-01-17")

    await expect.element(input).toHaveValue("")
  })

  test("handles excludeDate", async () => {
    const { user } = await render(
      <DatePicker
        defaultOpen
        excludeDate={(date) => date.getDay() === 0}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)

    await user.clear(input)
    await user.type(input, "2024-01-07")
    await user.click(input)
    await user.keyboard("{Enter}")

    await expect.element(input).toHaveValue("2024-01-07")
  })

  test("handles allowInputBeyond=false with minDate", async () => {
    const minDate = new Date(2024, 0, 10)

    const { user } = await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        minDate={minDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-05")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 10, 2024")
    })
  })

  test("handles allowInputBeyond=false with maxDate", async () => {
    const maxDate = new Date(2024, 0, 20)

    const { user } = await render(
      <DatePicker
        allowInputBeyond={false}
        defaultOpen
        maxDate={maxDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-25")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 20, 2024")
    })
  })

  test("handles allowInputBeyond=true", async () => {
    const { user } = await render(
      <DatePicker
        allowInputBeyond
        defaultOpen
        maxDate={new Date(2024, 0, 20)}
        minDate={new Date(2024, 0, 10)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-01-05")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 5, 2024")
    })
  })

  test("handles Enter key on multiple date input", async () => {
    const { user } = await render(
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
    await user.type(input, "2024-01-16")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles Enter key on multiple date input keeps already-selected date", async () => {
    const onChange = vi.fn()
    const { user } = await render(
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
    await user.type(input, "2024-01-15")
    await user.keyboard("{Enter}")

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
    const { user } = await render(
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
    await user.type(input, "2024-01-17")
    await user.keyboard("{Enter}")

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
    const { user } = await render(
      <DatePicker
        defaultValue={[new Date(2024, 0, 15)]}
        multiple
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await user.click(icon)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByText(/January 15, 2024/).query())
        .not.toBeInTheDocument()
    })
  })

  test("handles focusOnClear=false", async () => {
    const { user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear={false}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await user.click(icon)

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles focusOnClear with allowInput=false", async () => {
    const { user } = await render(
      <DatePicker
        allowInput={false}
        defaultValue={new Date(2024, 0, 15)}
        focusOnClear
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await user.click(icon)

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles closeOnSelect for single date via calendar click", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const validDay = page.getByRole("gridcell").first()

    await user.click(validDay)

    await vi.waitFor(async () => {
      await expect
        .element(page.getByRole("dialog").query())
        .not.toBeInTheDocument()
    })
  })

  test("handles closeOnSelect=false keeps dialog open after calendar click", async () => {
    const { user } = await render(
      <DatePicker
        closeOnSelect={false}
        defaultOpen
        placeholder="Select date"
      />,
    )

    const validDay = page.getByRole("gridcell").first()

    await user.click(validDay)

    await expect.element(page.getByRole("dialog")).toBeInTheDocument()
  })

  test("handles openOnClick=false", async () => {
    const { user } = await render(
      <DatePicker
        openOnClick={false}
        openOnFocus={false}
        placeholder="Select date"
      />,
    )

    const field = page.getByRole("combobox").first()
    await user.click(field)

    await expect
      .element(page.getByRole("dialog").query())
      .not.toBeInTheDocument()
  })

  test("handles onFieldFocus when allowInput is false and openOnFocus is true", async () => {
    const { user } = await render(
      <DatePicker allowInput={false} openOnFocus placeholder="Select date" />,
    )

    const field = page.getByRole("combobox").first()
    await user.click(field)

    await vi.waitFor(async () => {
      await expect.element(page.getByRole("dialog")).toBeInTheDocument()
    })
  })

  test("handles onMouseDown when openOnFocus is true", async () => {
    const onMouseDown = vi.fn()

    document.addEventListener("mousedown", onMouseDown)

    try {
      await render(<DatePicker placeholder="Select date" />)

      const field = page.getByRole("combobox").first()
      const fieldEl = await field.findElement()
      expect(
        fieldEl.dispatchEvent(
          new MouseEvent("mousedown", { bubbles: true, cancelable: true }),
        ),
      ).toBeFalsy()

      expect(onMouseDown).not.toHaveBeenCalled()
    } finally {
      document.removeEventListener("mousedown", onMouseDown)
    }
  })

  test("handles clear icon keyboard events", async () => {
    const { user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
      />,
    )

    const icon = page.getByTestId("icon")
    await user.click(icon)
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      const input = page.getByRole("textbox").first()
      await expect.element(input).toHaveValue("")
    })
  })

  test("handles clear icon Space key", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <DatePicker
        defaultValue={new Date(2024, 0, 15)}
        iconProps={{ "data-testid": "icon" }}
        onChange={onChange}
      />,
    )

    const icon = page.getByTestId("icon")
    await user.click(icon)
    await user.keyboard(" ")

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(undefined)
    })
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

    const { user } = await render(<RangeControlled />)

    const inputs = page.getByRole("textbox")
    await expect.element(inputs.first()).toHaveValue("")

    await user.click(page.getByTestId("set-value"))

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

    const { user } = await render(<SingleControlled />)

    const input = page.getByRole("textbox").first()
    await expect.element(input).toHaveValue("")

    await user.click(page.getByTestId("set-value"))

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 15, 2024")
    })
  })

  test("handles input change for range with existing start value", async () => {
    const { user } = await render(
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
    await user.click(inputs.nth(1))
    await user.clear(inputs.nth(1))
    await user.type(inputs.nth(1), "2024-01-20")

    await expect.element(inputs.nth(1)).toHaveValue("2024-01-20")
  })

  test("handles input change for range with existing end value", async () => {
    const { user } = await render(
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
    await user.click(inputs.first())
    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-15")

    await expect.element(inputs.first()).toHaveValue("2024-01-15")
  })

  test("handles click on range field focuses start input when both empty", async () => {
    await render(<DatePicker placeholder="Select date" range />)

    const field = page.getByRole("combobox").first()
    const fieldEl = await field.findElement()
    if (fieldEl instanceof HTMLElement) fieldEl.click()

    const inputs = page.getByRole("textbox")
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveFocus()
    })
  })

  test("handles click on range field focuses start input when only start is set", async () => {
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

    const field = page.getByRole("combobox").first()
    const fieldEl = await field.findElement()
    if (fieldEl instanceof HTMLElement) fieldEl.click()

    const inputs = page.getByRole("textbox")
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveFocus()
    })
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

    const field = page.getByRole("combobox").first()
    const fieldEl = await field.findElement()
    if (fieldEl instanceof HTMLElement) fieldEl.click()

    const inputs = page.getByRole("textbox")
    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveFocus()
    })
  })

  test("handles custom render onClear removes item", async () => {
    const { user } = await render(
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
    await user.click(tag)

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

    const { user } = await render(
      <DatePicker
        defaultOpen
        parseDate={parseDate}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024/1/15")
    await user.click(input)
    await user.keyboard("{Enter}")

    await vi.waitFor(() => {
      expect(parseDate).toHaveBeenCalledWith("2024/1/15")
    })
  })

  test("handles Enter key on range start input moves focus to end input", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" range />,
    )

    const inputs = page.getByRole("textbox")
    await user.click(inputs.first())
    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-15")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.nth(1)).toHaveFocus()
    })
  })

  test("handles Enter key with invalid date does nothing", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "invalid")
    await user.click(input)
    await user.keyboard("{Enter}")

    await expect.element(input).toHaveValue("invalid")
  })

  test("handles Enter key with empty value does nothing", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.click(input)
    await user.keyboard("{Enter}")

    await expect.element(input).toHaveValue("")
  })

  test("handles Backspace on single date input edits text normally", async () => {
    const { user } = await render(
      <DatePicker
        defaultOpen
        defaultValue={new Date(2024, 0, 15)}
        placeholder="Select date"
      />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.keyboard("{Backspace}")

    await vi.waitFor(async () => {
      await expect.element(input).toHaveValue("January 15, 202")
    })
  })

  test("handles input change for multiple with valid date updates month", async () => {
    const { user } = await render(
      <DatePicker defaultOpen multiple placeholder="Select dates" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)
    await user.clear(input)
    await user.type(input, "2024-06-15")

    await expect.element(input).toHaveValue("2024-06-15")
  })

  test("handles Enter key on range end input with existing start value", async () => {
    const { user } = await render(
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

    await user.click(inputs.first())
    await user.clear(inputs.first())
    await user.type(inputs.first(), "2024-01-10")
    await user.keyboard("{Enter}")

    await vi.waitFor(async () => {
      await expect.element(inputs.first()).toHaveValue("January 10, 2024")
    })
  })

  test("handles input with composing state (IME)", async () => {
    const { user } = await render(
      <DatePicker defaultOpen placeholder="Select date" />,
    )

    const input = page.getByRole("textbox").first()
    await user.click(input)

    const inputEl = await input.findElement()
    inputEl.dispatchEvent(new Event("compositionstart", { bubbles: true }))
    await user.click(input)
    await user.keyboard("{Enter}")

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
})
