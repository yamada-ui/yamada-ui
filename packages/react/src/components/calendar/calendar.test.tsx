import type { FC, PropsWithChildren } from "react"
import { a11y, render, renderHook, screen, waitFor } from "#test"
import { Calendar } from "./"
import {
  CalendarContext,
  CalendarDescendantsContext,
  getAdjustedMonth,
  isIncludeDates,
  isSameAfterDate,
  isSameAfterYear,
  isSameBeforeDate,
  isSameBeforeYear,
  isSameYear,
  sortDates,
  updateMaybeDateValue,
  useCalendar,
  useCalendarDay,
} from "./use-calendar"

const createCalendarDayHookWrapper = (
  onChange?: (value: Date | undefined) => void,
): FC<PropsWithChildren> => {
  const CalendarDayHookWrapper: FC<PropsWithChildren> = ({ children }) => {
    const {
      descendants,
      monthDays: _monthDays,
      monthItems: _monthItems,
      weekdays: _weekdays,
      yearItems: _yearItems,
      getMonthProps: _getMonthProps,
      getMonthSelectProps: _getMonthSelectProps,
      getNavigationProps: _getNavigationProps,
      getNextButtonProps: _getNextButtonProps,
      getPrevButtonProps: _getPrevButtonProps,
      getRootProps: _getRootProps,
      getStatusProps: _getStatusProps,
      getWeekdayProps: _getWeekdayProps,
      getYearSelectProps: _getYearSelectProps,
      ...context
    } = useCalendar<false, false>({
      defaultMonth: new Date(2024, 5, 1),
      onChange,
    })

    return (
      <CalendarContext value={context}>
        <CalendarDescendantsContext value={descendants}>
          {children}
        </CalendarDescendantsContext>
      </CalendarContext>
    )
  }

  return CalendarDayHookWrapper
}

const assertRangeResult = (
  result: Date | Date[] | undefined | { end?: Date; start?: Date },
) => {
  if (result instanceof Date || Array.isArray(result) || result === undefined)
    throw new Error("Expected range result")

  return result
}

describe("<Calendar />", () => {
  test("passes a11y checks", async () => {
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

  test("getRootProps merges caller props and composes refs/events", () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const rootElement = document.createElement("div")
    const { result } = renderHook(() =>
      useCalendar({
        ref: restRef,
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        defaultMonth: new Date(2024, 5, 1),
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      ref: callerRef,
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

    if (typeof rootProps.ref === "function") rootProps.ref(rootElement)
    rootProps.onClick?.({} as any)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(rootElement)
    expect(callerRef).toHaveBeenCalledWith(rootElement)
  })

  test("getDayProps merges caller props and composes refs/events once", () => {
    const onChange = vi.fn()
    const restOnBlur = vi.fn()
    const callerOnBlur = vi.fn()
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restOnFocus = vi.fn()
    const callerOnFocus = vi.fn()
    const restOnKeyDown = vi.fn()
    const callerOnKeyDown = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const dayElement = document.createElement("td")
    const wrapper = createCalendarDayHookWrapper(onChange)
    const { result } = renderHook(
      () =>
        useCalendarDay({
          ref: restRef,
          className: "from-rest",
          style: { backgroundColor: "red", paddingTop: "4px" },
          value: new Date(2024, 5, 15),
          onBlur: restOnBlur,
          onClick: restOnClick,
          onFocus: restOnFocus,
          onKeyDown: restOnKeyDown,
        }),
      { wrapper },
    )

    const dayProps = result.current.getDayProps({
      ref: callerRef,
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      onBlur: callerOnBlur,
      onClick: callerOnClick,
      onFocus: callerOnFocus,
      onKeyDown: callerOnKeyDown,
    })

    expect(dayProps.className).toContain("from-rest")
    expect(dayProps.className).toContain("from-caller")
    expect(dayProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })

    if (typeof dayProps.ref === "function") dayProps.ref(dayElement)
    dayProps.onClick?.({} as any)
    dayProps.onBlur?.({} as any)
    dayProps.onFocus?.({ preventDefault: vi.fn() } as any)
    dayProps.onKeyDown?.({ key: "A" } as any)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(dayElement)
    expect(callerRef).toHaveBeenCalledWith(dayElement)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(new Date(2024, 5, 15))
    expect(restOnBlur).toHaveBeenCalledTimes(1)
    expect(callerOnBlur).toHaveBeenCalledTimes(1)
    expect(restOnFocus).toHaveBeenCalledTimes(1)
    expect(callerOnFocus).toHaveBeenCalledTimes(1)
    expect(restOnKeyDown).toHaveBeenCalledTimes(1)
    expect(callerOnKeyDown).toHaveBeenCalledTimes(1)
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
    const sundays = Array.from(allDays).filter((td) => {
      if (td.hasAttribute("data-outside")) return false
      const value = td.getAttribute("data-value")
      return value !== null && new Date(value).getDay() === 0
    })
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

    const day1 = screen.getAllByText("1").find((el) => {
      const td = el.closest("td")
      return td !== null && !td.hasAttribute("data-outside")
    })
    const td = day1?.closest("td")
    expect(td).toHaveAttribute("data-weekend")
  })

  test("today is marked with data-today", () => {
    const today = new Date()
    render(<Calendar.Root defaultMonth={today} />)

    const todayCell = screen
      .getAllByText(today.getDate().toString())
      .find((el) => {
        const td = el.closest("td")
        return td !== null && !td.hasAttribute("data-outside")
      })
      ?.closest("td")
    expect(todayCell).toHaveAttribute("data-today")
  })

  test("today is not highlighted when today=false", () => {
    const today = new Date()
    render(<Calendar.Root defaultMonth={today} today={false} />)

    const todayCells = screen
      .getAllByText(today.getDate().toString())
      .filter((el) => {
        const td = el.closest("td")
        return td !== null && !td.hasAttribute("data-outside")
      })
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

    const day15 = screen.getByText("15").closest("td")
    expect(day15).toHaveAttribute("data-disabled")
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

    const grid = screen.getByRole("grid")
    expect(grid).toBeInTheDocument()
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
    expect(firstWeekday).toHaveAttribute("data-value", "1")
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
    expect(sorted[0]?.getDate()).toBe(10)
    expect(sorted[1]?.getDate()).toBe(15)
    expect(sorted[2]?.getDate()).toBe(20)
  })

  test("sorts dates in descending order", () => {
    const dates = [
      new Date(2024, 5, 10),
      new Date(2024, 5, 20),
      new Date(2024, 5, 15),
    ]
    const sorted = sortDates(dates, "desc")
    expect(sorted[0]?.getDate()).toBe(20)
    expect(sorted[1]?.getDate()).toBe(15)
    expect(sorted[2]?.getDate()).toBe(10)
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
    const result = assertRangeResult(
      updateMaybeDateValue(new Date(2024, 5, 25))(prev),
    )
    expect(result.start).toStrictEqual(new Date(2024, 5, 25))
    expect(result.end).toBeUndefined()
  })

  test("sets start when no start exists", () => {
    const prev = { end: undefined, start: undefined }
    const result = assertRangeResult(
      updateMaybeDateValue(new Date(2024, 5, 15))(prev),
    )
    expect(result.start).toStrictEqual(new Date(2024, 5, 15))
    expect(result.end).toBeUndefined()
  })

  test("clears range when clicking same as start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 15) }
    const result = assertRangeResult(
      updateMaybeDateValue(new Date(2024, 5, 15))(prev),
    )
    expect(result.start).toBeUndefined()
    expect(result.end).toBeUndefined()
  })

  test("swaps start and end when value is before start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 15) }
    const result = assertRangeResult(
      updateMaybeDateValue(new Date(2024, 5, 5))(prev),
    )
    expect(result.start).toStrictEqual(new Date(2024, 5, 5))
    expect(result.end).toStrictEqual(new Date(2024, 5, 15))
  })

  test("sets end when value is after start", () => {
    const prev = { end: undefined, start: new Date(2024, 5, 10) }
    const result = assertRangeResult(
      updateMaybeDateValue(new Date(2024, 5, 20))(prev),
    )
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
