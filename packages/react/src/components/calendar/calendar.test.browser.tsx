import { page, render, waitFor } from "#test/browser"
import { Calendar } from "./"

describe("<Calendar />", () => {
  test("clicking a day selects it", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^15$/ }))

    expect(onChange).toHaveBeenCalledWith(new Date(2024, 5, 15))
  })

  test("clicking a selected day deselects it", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^15$/ }))

    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  test("navigates to previous month", async () => {
    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    await user.click(page.getByRole("button", { name: /previous month/i }))

    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("May"))
  })

  test("navigates to next month", async () => {
    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    await user.click(page.getByRole("button", { name: /next month/i }))

    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("July"))
  })

  test("does not navigate past minDate on prev month", async () => {
    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 0, 1)}
        minDate={new Date(2024, 0, 1)}
      />,
    )

    await expect(
      user.click(page.getByRole("button", { name: /previous month/i }), {
        timeout: 200,
      }),
    ).rejects.toThrow(/Timeout/)

    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("January"))
  })

  test("does not navigate past maxDate on next month", async () => {
    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 11, 1)}
        maxDate={new Date(2024, 11, 31)}
      />,
    )

    await expect(
      user.click(page.getByRole("button", { name: /next month/i }), {
        timeout: 200,
      }),
    ).rejects.toThrow(/Timeout/)

    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("December"))
  })

  test("clicking a disabled day does not trigger onChange", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        minDate={new Date(2024, 5, 10)}
        onChange={onChange}
      />,
    )

    const day5 = page.getByRole("gridcell").filter({ hasText: /^5$/ }).first()
    await expect.element(day5).toHaveAttribute("data-disabled")
    await expect(user.click(day5, { timeout: 200 })).rejects.toThrow(/Timeout/)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onChange does not trigger for dates before minDate", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        minDate={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day10 = page.getByRole("gridcell").filter({ hasText: /^10$/ })
    await expect.element(day10).toHaveAttribute("data-disabled")
    await expect(user.click(day10, { timeout: 200 })).rejects.toThrow(/Timeout/)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onChange does not trigger for dates after maxDate", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        maxDate={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day20 = page.getByRole("gridcell").filter({ hasText: /^20$/ })
    await expect.element(day20).toHaveAttribute("data-disabled")
    await expect(user.click(day20, { timeout: 200 })).rejects.toThrow(/Timeout/)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onMonthChange clamps to maxDate month", async () => {
    const onChangeMonth = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 10, 1)}
        maxDate={new Date(2024, 11, 31)}
        onChangeMonth={onChangeMonth}
      />,
    )

    await user.click(page.getByRole("button", { name: /next month/i }))

    await waitFor(() => {
      expect(onChangeMonth).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("onMonthChange clamps to minDate month", async () => {
    const onChangeMonth = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 1, 1)}
        minDate={new Date(2024, 0, 1)}
        onChangeMonth={onChangeMonth}
      />,
    )

    await user.click(page.getByRole("button", { name: /previous month/i }))

    await waitFor(() => {
      expect(onChangeMonth).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("multiple selection allows removing when at max", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10), new Date(2024, 5, 20)]}
        max={2}
        multiple
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^10$/ }))

    expect(onChange).toHaveBeenCalledWith([new Date(2024, 5, 20)])
  })

  test("range selection: clicking start clears range", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^10$/ }))

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: undefined,
    })
  })

  test("range selection: clicking before start swaps", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 15),
        }}
        range
        onChange={onChange}
      />,
    )

    await user.click(
      page.getByRole("gridcell").filter({ hasText: /^5$/ }).first(),
    )

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 15),
      start: new Date(2024, 5, 5),
    })
  })

  test("range selection: clicking after start sets end", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^20$/ }))

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 20),
      start: new Date(2024, 5, 10),
    })
  })

  test("range selection: clicking when both start and end are set resets", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("gridcell").filter({ hasText: /^25$/ }))

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: new Date(2024, 5, 25),
    })
  })

  test("navigates with arrow keys on keyboard", async () => {
    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{ArrowRight}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^2$/ }).first())
      .toHaveFocus()

    await user.keyboard("{ArrowLeft}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{ArrowDown}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^8$/ }))
      .toHaveFocus()

    await user.keyboard("{ArrowUp}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{Home}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^26$/ }).first())
      .toHaveFocus()

    await user.keyboard("{End}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()
  })

  test("selects a day with keyboard", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{Enter}")
    expect(onChange).toHaveBeenCalledWith(expect.any(Date))

    await user.keyboard("{ArrowRight}")
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^2$/ }).first())
      .toHaveFocus()

    onChange.mockClear()
    await user.keyboard(" ")
    expect(onChange).toHaveBeenCalledWith(expect.any(Date))
  })

  test("navigates months with keyboard", async () => {
    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{PageDown}")
    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("July"))

    await user.keyboard("{PageUp}")
    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("June"))
  })

  test("navigates years with keyboard", async () => {
    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^1$/ }).first())
      .toHaveFocus()

    await user.keyboard("{Shift>}{PageDown}{/Shift}")
    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("2025"))

    await user.keyboard("{Shift>}{PageUp}{/Shift}")
    await expect
      .element(page.getByRole("grid"))
      .toHaveAttribute("aria-label", expect.stringContaining("2024"))
  })

  test("onFocus focuses on value date for array value", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10)]}
        multiple
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^10$/ }))
      .toHaveFocus()
  })

  test("onFocus focuses on start date for range value", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^10$/ }))
      .toHaveFocus()
  })

  test("onFocus focuses on end date for range value with only end", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: undefined,
        }}
        range
      />,
    )

    page.getByRole("grid").element().focus()
    await expect
      .element(page.getByRole("gridcell").filter({ hasText: /^20$/ }))
      .toHaveFocus()
  })
})
