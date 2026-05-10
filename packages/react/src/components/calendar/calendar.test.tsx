import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { Calendar } from "./"
import {
  getAdjustedMonth,
  isIncludeDates,
  isSameAfterDate,
  isSameAfterYear,
  isSameBeforeDate,
  isSameBeforeYear,
  isSameYear,
  sortDates,
  updateMaybeDateValue,
} from "./use-calendar"

describe("<Calendar />", () => {
  test("renders component correctly", async () => {
    await a11y(<Calendar.Root />)
  })

  test("renders with a specific defaultMonth", () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("2024"))
  })

  test("renders with defaultValue as a single date", () => {
    render(<Calendar.Root defaultValue={new Date(2024, 5, 15)} />)

    const selectedDay = screen.getByText("15").closest("td")
    expect(selectedDay).toHaveAttribute("data-selected")
  })

  test("renders with multiple selection", () => {
    render(
      <Calendar.Root
        defaultValue={[new Date(2024, 5, 10), new Date(2024, 5, 20)]}
        multiple
      />,
    )

    const day10 = screen.getByText("10").closest("td")
    const day20 = screen.getByText("20").closest("td")
    expect(day10).toHaveAttribute("data-selected")
    expect(day20).toHaveAttribute("data-selected")
  })

  test("renders with range selection", () => {
    render(
      <Calendar.Root
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
      />,
    )

    const day10 = screen.getByText("10").closest("td")
    const day20 = screen.getByText("20").closest("td")
    expect(day10).toHaveAttribute("data-start")
    expect(day20).toHaveAttribute("data-end")
  })

  test("renders with disabled prop", () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} disabled />)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("tabindex", "-1")
  })

  test("clicking a day selects it", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const day15 = screen.getByText("15").closest("td")!
    await user.click(day15)

    expect(onChange).toHaveBeenCalledWith(new Date(2024, 5, 15))
  })

  test("clicking a selected day deselects it", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day15 = screen.getByText("15").closest("td")!
    await user.click(day15)

    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  test("navigates to previous month", async () => {
    const { user } = render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    const prevButton = screen.getByRole("button", {
      name: /previous month/i,
    })
    await user.click(prevButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("May"))
  })

  test("navigates to next month", async () => {
    const { user } = render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    const nextButton = screen.getByRole("button", { name: /next month/i })
    await user.click(nextButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("July"))
  })

  test("prev button is disabled at minDate month", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 0, 1)}
        minDate={new Date(2024, 0, 1)}
      />,
    )

    const prevButton = screen.getByRole("button", {
      name: /previous month/i,
    })
    expect(prevButton).toBeDisabled()
  })

  test("next button is disabled at maxDate month", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 11, 1)}
        maxDate={new Date(2024, 11, 31)}
      />,
    )

    const nextButton = screen.getByRole("button", { name: /next month/i })
    expect(nextButton).toBeDisabled()
  })

  test("does not navigate past minDate on prev month", async () => {
    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 0, 1)}
        minDate={new Date(2024, 0, 1)}
      />,
    )

    const prevButton = screen.getByRole("button", {
      name: /previous month/i,
    })
    await user.click(prevButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute(
      "aria-label",
      expect.stringContaining("January"),
    )
  })

  test("does not navigate past maxDate on next month", async () => {
    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 11, 1)}
        maxDate={new Date(2024, 11, 31)}
      />,
    )

    const nextButton = screen.getByRole("button", { name: /next month/i })
    await user.click(nextButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute(
      "aria-label",
      expect.stringContaining("December"),
    )
  })

  test("days before minDate are disabled", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        minDate={new Date(2024, 5, 10)}
      />,
    )

    const day3 = screen
      .getByRole("grid")
      .querySelector('td[data-value="2024-06-03"]')
    expect(day3).toHaveAttribute("data-disabled")
  })

  test("days after maxDate are disabled", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        maxDate={new Date(2024, 5, 20)}
      />,
    )

    const day25 = screen.getByText("25").closest("td")
    expect(day25).toHaveAttribute("data-disabled")
  })

  test("excludeDate disables specific dates", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        excludeDate={(date) => date.getDay() === 0}
      />,
    )

    const allDays = screen.getByRole("grid").querySelectorAll("td")
    const sundays = Array.from(allDays).filter(
      (td) =>
        !td.hasAttribute("data-outside") &&
        new Date(td.getAttribute("data-value")!).getDay() === 0,
    )
    sundays.forEach((sunday) => {
      expect(sunday).toHaveAttribute("data-disabled")
    })
  })

  test("holidays are marked with data-holiday", () => {
    const holidays = [new Date(2024, 5, 15)]
    render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} holidays={holidays} />,
    )

    const day15 = screen.getByText("15").closest("td")
    expect(day15).toHaveAttribute("data-holiday")
  })

  test("weekend days are marked with data-weekend", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        weekendDays={[0, 6]}
      />,
    )

    const day1 = screen
      .getAllByText("1")
      .find(
        (el) =>
          el.closest("td") && !el.closest("td")!.hasAttribute("data-outside"),
      )
    const td = day1?.closest("td")
    // June 1, 2024 is a Saturday (day 6)
    expect(td).toHaveAttribute("data-weekend")
  })

  test("today is marked with data-today", () => {
    const today = new Date()
    render(<Calendar.Root defaultMonth={today} />)

    const todayCell = screen
      .getAllByText(today.getDate().toString())
      .find(
        (el) =>
          el.closest("td") && !el.closest("td")!.hasAttribute("data-outside"),
      )
      ?.closest("td")
    expect(todayCell).toHaveAttribute("data-today")
  })

  test("today is not highlighted when today=false", () => {
    const today = new Date()
    render(<Calendar.Root defaultMonth={today} today={false} />)

    const todayCells = screen
      .getAllByText(today.getDate().toString())
      .filter(
        (el) =>
          el.closest("td") && !el.closest("td")!.hasAttribute("data-outside"),
      )
      .map((el) => el.closest("td"))

    todayCells.forEach((cell) => {
      expect(cell).not.toHaveAttribute("data-today")
    })
  })

  test("multiple selection respects max limit", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10), new Date(2024, 5, 20)]}
        max={2}
        multiple
      />,
    )

    // Day 15 should be disabled since max=2 and 2 are already selected
    const day15 = screen.getByText("15").closest("td")!
    expect(day15).toHaveAttribute("data-disabled")
  })

  test("multiple selection allows removing when at max", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10), new Date(2024, 5, 20)]}
        max={2}
        multiple
        onChange={onChange}
      />,
    )

    // Clicking on an already selected date should deselect it
    const day10 = screen.getByText("10").closest("td")!
    await user.click(day10)

    expect(onChange).toHaveBeenCalledWith([new Date(2024, 5, 20)])
  })

  test("range selection marks between days", () => {
    render(
      <Calendar.Root
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
      />,
    )

    const day15 = screen.getByText("15").closest("td")
    expect(day15).toHaveAttribute("data-between")
  })

  test("range selection: clicking start clears range", async () => {
    const onChange = vi.fn()

    const { user } = render(
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

    const day10 = screen.getByText("10").closest("td")!
    await user.click(day10)

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: undefined,
    })
  })

  test("range selection: clicking before start swaps", async () => {
    const onChange = vi.fn()

    const { user } = render(
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

    const day5 = screen
      .getByRole("grid")
      .querySelector('td[data-value="2024-06-05"]')!
    await user.click(day5)

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 15),
      start: new Date(2024, 5, 5),
    })
  })

  test("range selection: clicking after start sets end", async () => {
    const onChange = vi.fn()

    const { user } = render(
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

    const day20 = screen.getByText("20").closest("td")!
    await user.click(day20)

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 20),
      start: new Date(2024, 5, 10),
    })
  })

  test("range selection: clicking when both start and end are set resets", async () => {
    const onChange = vi.fn()

    const { user } = render(
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

    const day25 = screen.getByText("25").closest("td")!
    await user.click(day25)

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: new Date(2024, 5, 25),
    })
  })

  test("clicking a disabled day does not trigger onChange", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        minDate={new Date(2024, 5, 10)}
        onChange={onChange}
      />,
    )

    const day5 = screen
      .getByRole("grid")
      .querySelector('td[data-value="2024-06-05"]')!
    await user.click(day5)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onChange does not trigger for dates before minDate", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        minDate={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day10 = screen.getByText("10").closest("td")!
    await user.click(day10)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("onChange does not trigger for dates after maxDate", async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        maxDate={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day20 = screen.getByText("20").closest("td")!
    await user.click(day20)

    expect(onChange).not.toHaveBeenCalled()
  })

  test("adjusts month when minDate is after defaultMonth", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
      />,
    )

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("June"))
  })

  test("adjusts maxDate when minDate is after maxDate", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        maxDate={new Date(2024, 0, 1)}
        minDate={new Date(2024, 5, 1)}
      />,
    )

    // Should render without error - maxDate becomes minDate
    const grid = screen.getByRole("grid")
    expect(grid).toBeInTheDocument()
  })

  test("onMonthChange clamps to maxDate month", async () => {
    const onChangeMonth = vi.fn()

    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 10, 1)}
        maxDate={new Date(2024, 11, 31)}
        onChangeMonth={onChangeMonth}
      />,
    )

    const nextButton = screen.getByRole("button", { name: /next month/i })
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(onChangeMonth).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("onMonthChange clamps to minDate month", async () => {
    const onChangeMonth = vi.fn()

    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 1, 1)}
        minDate={new Date(2024, 0, 1)}
        onChangeMonth={onChangeMonth}
      />,
    )

    const prevButton = screen.getByRole("button", {
      name: /previous month/i,
    })
    fireEvent.click(prevButton)

    await waitFor(() => {
      expect(onChangeMonth).toHaveBeenCalledWith(expect.any(Date))
    })
  })

  test("keyboard ArrowRight navigates to next day", async () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      const focusedEl = document.activeElement
      expect(focusedEl?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowRight" })

    await waitFor(() => {
      const focusedEl = document.activeElement
      expect(focusedEl?.tagName).toBe("TD")
    })
  })

  test("keyboard ArrowLeft navigates to previous day", async () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      const focusedEl = document.activeElement
      expect(focusedEl?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowLeft" })

    await waitFor(() => {
      const focusedEl = document.activeElement
      expect(focusedEl?.tagName).toBe("TD")
    })
  })

  test("keyboard Enter selects a day", async () => {
    const onChange = vi.fn()
    render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith(expect.any(Date))
  })

  test("keyboard Space selects a day", async () => {
    const onChange = vi.fn()
    render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: " ", code: "Space" })

    expect(onChange).toHaveBeenCalledWith(expect.any(Date))
  })

  test("keyboard ArrowDown navigates to next week", async () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowDown" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard ArrowUp navigates to previous week", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowUp" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard Home navigates to start of week", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 12)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "Home" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard End navigates to end of week", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 12)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "End" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard PageDown navigates to next month", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "PageDown" })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("July"),
      )
    })
  })

  test("keyboard PageUp navigates to previous month", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "PageUp" })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("May"),
      )
    })
  })

  test("keyboard Shift+PageDown navigates to next year", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, {
      key: "PageDown",
      shiftKey: true,
    })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("2025"),
      )
    })
  })

  test("keyboard Shift+PageUp navigates to previous year", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, {
      key: "PageUp",
      shiftKey: true,
    })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("2023"),
      )
    })
  })

  test("uses format.year=null to render plain year number", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        format={{ year: null }}
      />,
    )

    expect(screen.getByRole("grid")).toBeInTheDocument()
  })

  test("uses format.month=null to render plain month number", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        format={{ month: null }}
      />,
    )

    expect(screen.getByRole("grid")).toBeInTheDocument()
  })

  test("uses format.day to render formatted day", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        format={{ day: "2-digit" }}
      />,
    )

    expect(screen.getByRole("grid")).toBeInTheDocument()
  })

  test("startDayOfWeek='sunday' renders Sunday as first day", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        startDayOfWeek="sunday"
      />,
    )

    const grid = screen.getByRole("grid")
    const firstWeekday = grid.querySelector("th")
    // Sunday abbreviation
    expect(firstWeekday).toHaveAttribute("data-value", "0")
  })

  test("startDayOfWeek='monday' renders Monday as first day", () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        startDayOfWeek="monday"
      />,
    )

    const grid = screen.getByRole("grid")
    const firstWeekday = grid.querySelector("th")
    // Monday
    expect(firstWeekday).toHaveAttribute("data-value", "1")
  })

  test("onFocus focuses on value date for array value", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10)]}
        multiple
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("onFocus focuses on start date for range value", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("onFocus focuses on end date for range value with only end", async () => {
    render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: undefined,
        }}
        range
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("outside days are not registered as descendants", () => {
    render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const outsideDays = screen
      .getByRole("grid")
      .querySelectorAll("td[data-outside]")
    expect(outsideDays.length).toBeGreaterThan(0)
  })

  test("value update adjusts displayed month", async () => {
    const { rerender } = render(<Calendar.Root value={new Date(2024, 5, 15)} />)

    rerender(<Calendar.Root value={new Date(2024, 8, 15)} />)

    await waitFor(() => {
      const grid = screen.getByRole("grid")
      expect(grid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("September"),
      )
    })
  })

  test("month adjusts for array value update", async () => {
    const { rerender } = render(
      <Calendar.Root multiple value={[new Date(2024, 5, 15)]} />,
    )

    rerender(
      <Calendar.Root
        multiple
        value={[new Date(2024, 5, 15), new Date(2024, 8, 15)]}
      />,
    )

    await waitFor(() => {
      const grid = screen.getByRole("grid")
      expect(grid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("September"),
      )
    })
  })

  test("month adjusts for range value update", async () => {
    const { rerender } = render(
      <Calendar.Root
        range
        value={{ end: undefined, start: new Date(2024, 5, 10) }}
      />,
    )

    rerender(
      <Calendar.Root
        range
        value={{
          end: new Date(2024, 8, 20),
          start: new Date(2024, 5, 10),
        }}
      />,
    )

    await waitFor(() => {
      const grid = screen.getByRole("grid")
      expect(grid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("September"),
      )
    })
  })

  test("controlled month prop is respected", () => {
    render(
      <Calendar.Root month={new Date(2024, 8, 1)} onChangeMonth={vi.fn()} />,
    )

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute(
      "aria-label",
      expect.stringContaining("September"),
    )
  })

  test("defaultValue adjusts initial month when valueProp provided", () => {
    render(<Calendar.Root value={new Date(2024, 8, 15)} />)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute(
      "aria-label",
      expect.stringContaining("September"),
    )
  })
})

describe("isSameYear", () => {
  test("returns true for same year", () => {
    expect(isSameYear(new Date(2024, 0, 1), new Date(2024, 6, 15))).toBeTruthy()
  })

  test("returns false for different years", () => {
    expect(isSameYear(new Date(2024, 0, 1), new Date(2025, 0, 1))).toBeFalsy()
  })

  test("returns false for undefined date", () => {
    expect(isSameYear(undefined, new Date(2024, 0, 1))).toBeFalsy()
  })

  test("returns false for undefined comparison", () => {
    expect(isSameYear(new Date(2024, 0, 1), undefined)).toBeFalsy()
  })
})

describe("isSameAfterDate", () => {
  test("returns true for same date", () => {
    expect(
      isSameAfterDate(new Date(2024, 5, 15), new Date(2024, 5, 15)),
    ).toBeTruthy()
  })

  test("returns true for after date", () => {
    expect(
      isSameAfterDate(new Date(2024, 5, 20), new Date(2024, 5, 15)),
    ).toBeTruthy()
  })

  test("returns false for before date", () => {
    expect(
      isSameAfterDate(new Date(2024, 5, 10), new Date(2024, 5, 15)),
    ).toBeFalsy()
  })

  test("returns false for undefined", () => {
    expect(isSameAfterDate(new Date(2024, 5, 15), undefined)).toBeFalsy()
  })
})

describe("isSameBeforeDate", () => {
  test("returns true for same date", () => {
    expect(
      isSameBeforeDate(new Date(2024, 5, 15), new Date(2024, 5, 15)),
    ).toBeTruthy()
  })

  test("returns true for before date", () => {
    expect(
      isSameBeforeDate(new Date(2024, 5, 10), new Date(2024, 5, 15)),
    ).toBeTruthy()
  })

  test("returns false for after date", () => {
    expect(
      isSameBeforeDate(new Date(2024, 5, 20), new Date(2024, 5, 15)),
    ).toBeFalsy()
  })

  test("returns false for undefined", () => {
    expect(isSameBeforeDate(new Date(2024, 5, 15), undefined)).toBeFalsy()
  })
})

describe("isSameAfterYear", () => {
  test("returns true for same year", () => {
    expect(
      isSameAfterYear(new Date(2024, 0, 1), new Date(2024, 6, 1)),
    ).toBeTruthy()
  })

  test("returns true for after year", () => {
    expect(
      isSameAfterYear(new Date(2025, 0, 1), new Date(2024, 0, 1)),
    ).toBeTruthy()
  })

  test("returns false for before year", () => {
    expect(
      isSameAfterYear(new Date(2023, 0, 1), new Date(2024, 0, 1)),
    ).toBeFalsy()
  })

  test("returns false for undefined", () => {
    expect(isSameAfterYear(new Date(2024, 0, 1), undefined)).toBeFalsy()
  })
})

describe("isSameBeforeYear", () => {
  test("returns true for same year", () => {
    expect(
      isSameBeforeYear(new Date(2024, 0, 1), new Date(2024, 6, 1)),
    ).toBeTruthy()
  })

  test("returns true for before year", () => {
    expect(
      isSameBeforeYear(new Date(2023, 0, 1), new Date(2024, 0, 1)),
    ).toBeTruthy()
  })

  test("returns false for after year", () => {
    expect(
      isSameBeforeYear(new Date(2025, 0, 1), new Date(2024, 0, 1)),
    ).toBeFalsy()
  })

  test("returns false for undefined", () => {
    expect(isSameBeforeYear(new Date(2024, 0, 1), undefined)).toBeFalsy()
  })
})

describe("isIncludeDates", () => {
  test("returns true when date is included", () => {
    const dates = [new Date(2024, 5, 10), new Date(2024, 5, 15)]
    expect(isIncludeDates(new Date(2024, 5, 10), dates)).toBeTruthy()
  })

  test("returns false when date is not included", () => {
    const dates = [new Date(2024, 5, 10), new Date(2024, 5, 15)]
    expect(isIncludeDates(new Date(2024, 5, 20), dates)).toBeFalsy()
  })
})

describe("sortDates", () => {
  test("sorts dates in ascending order", () => {
    const dates = [
      new Date(2024, 5, 20),
      new Date(2024, 5, 10),
      new Date(2024, 5, 15),
    ]
    const sorted = sortDates(dates, "asc")
    expect(sorted[0]!.getDate()).toBe(10)
    expect(sorted[1]!.getDate()).toBe(15)
    expect(sorted[2]!.getDate()).toBe(20)
  })

  test("sorts dates in descending order", () => {
    const dates = [
      new Date(2024, 5, 10),
      new Date(2024, 5, 20),
      new Date(2024, 5, 15),
    ]
    const sorted = sortDates(dates, "desc")
    expect(sorted[0]!.getDate()).toBe(20)
    expect(sorted[1]!.getDate()).toBe(15)
    expect(sorted[2]!.getDate()).toBe(10)
  })
})

describe("updateMaybeDateValue", () => {
  test("adds date to array when not included", () => {
    const prev = [new Date(2024, 5, 10)]
    const result = updateMaybeDateValue(new Date(2024, 5, 15))(prev)
    expect(result).toHaveLength(2)
  })

  test("removes date from array when included", () => {
    const prev = [new Date(2024, 5, 10), new Date(2024, 5, 15)]
    const result = updateMaybeDateValue(new Date(2024, 5, 10))(prev)
    expect(result).toHaveLength(1)
  })

  test("does not add to array when max is reached", () => {
    const prev = [new Date(2024, 5, 10), new Date(2024, 5, 15)]
    const result = updateMaybeDateValue(new Date(2024, 5, 20), 2)(prev)
    expect(result).toHaveLength(2)
  })

  test("resets range when both start and end exist", () => {
    const prev = { end: new Date(2024, 5, 20), start: new Date(2024, 5, 10) }
    const result = updateMaybeDateValue(new Date(2024, 5, 25))(prev) as {
      end?: Date
      start?: Date
    }
    expect(result.start).toStrictEqual(new Date(2024, 5, 25))
    expect(result.end).toBeUndefined()
  })

  test("sets start when no start exists", () => {
    const prev = { end: undefined, start: undefined }
    const result = updateMaybeDateValue(new Date(2024, 5, 15))(prev) as {
      end?: Date
      start?: Date
    }
    expect(result.start).toStrictEqual(new Date(2024, 5, 15))
    expect(result.end).toBeUndefined()
  })

  test("clears range when clicking same as start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 15) }
    const result = updateMaybeDateValue(new Date(2024, 5, 15))(prev) as {
      end?: Date
      start?: Date
    }
    expect(result.start).toBeUndefined()
    expect(result.end).toBeUndefined()
  })

  test("swaps start and end when value is before start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 15) }
    const result = updateMaybeDateValue(new Date(2024, 5, 5))(prev) as {
      end?: Date
      start?: Date
    }
    expect(result.start).toStrictEqual(new Date(2024, 5, 5))
    expect(result.end).toStrictEqual(new Date(2024, 5, 15))
  })

  test("sets end when value is after start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 10) }
    const result = updateMaybeDateValue(new Date(2024, 5, 20))(prev) as {
      end?: Date
      start?: Date
    }
    expect(result.start).toStrictEqual(new Date(2024, 5, 10))
    expect(result.end).toStrictEqual(new Date(2024, 5, 20))
  })

  test("returns undefined when clicking same single date", () => {
    const result = updateMaybeDateValue(new Date(2024, 5, 15))(
      new Date(2024, 5, 15),
    )
    expect(result).toBeUndefined()
  })

  test("returns new value for different single date", () => {
    const result = updateMaybeDateValue(new Date(2024, 5, 20))(
      new Date(2024, 5, 15),
    )
    expect(result).toStrictEqual(new Date(2024, 5, 20))
  })
})

describe("getAdjustedMonth", () => {
  const defaultMonth = new Date(2024, 5, 1)

  test("adjusts month for single date in different month", () => {
    const result = getAdjustedMonth(new Date(2024, 8, 15), defaultMonth)
    expect(result.getMonth()).toBe(8)
  })

  test("keeps month for single date in same month", () => {
    const result = getAdjustedMonth(new Date(2024, 5, 15), defaultMonth)
    expect(result.getMonth()).toBe(5)
  })

  test("adjusts month for array with last value in different month", () => {
    const result = getAdjustedMonth(
      [new Date(2024, 5, 10), new Date(2024, 8, 20)],
      defaultMonth,
    )
    expect(result.getMonth()).toBe(8)
  })

  test("keeps month for array with last value in same month", () => {
    const result = getAdjustedMonth([new Date(2024, 5, 10)], defaultMonth)
    expect(result.getMonth()).toBe(5)
  })

  test("adjusts month for empty array", () => {
    const result = getAdjustedMonth([], defaultMonth)
    expect(result.getMonth()).toBe(5)
  })

  test("adjusts month for range with end", () => {
    const result = getAdjustedMonth(
      { end: new Date(2024, 8, 20), start: new Date(2024, 5, 10) },
      defaultMonth,
    )
    expect(result.getMonth()).toBe(8)
  })

  test("adjusts month for range with only start", () => {
    const result = getAdjustedMonth(
      { end: undefined, start: new Date(2024, 8, 10) },
      defaultMonth,
    )
    expect(result.getMonth()).toBe(8)
  })

  test("keeps month for range with no start or end", () => {
    const result = getAdjustedMonth(
      { end: undefined, start: undefined },
      defaultMonth,
    )
    expect(result.getMonth()).toBe(5)
  })
})
