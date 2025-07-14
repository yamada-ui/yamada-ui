import type { RefObject } from "react"
import { createRef } from "react"
import { render } from "#test"
import {
  disableAllTabIndex,
  getFocused,
  getRangeDates,
  getRangeFirstDay,
  getRangeLastDay,
  isAfterMonth,
  isBeforeMonth,
  isIncludeDates,
  isInRange,
  isMonthInRange,
  isSomeAfterDate,
  isSomeBeforeDate,
  onShouldFocus,
  sortDates,
} from "./calendar-utils"

describe("calendar-utils", () => {
  describe("getRangeDates", () => {
    test("returns an array of dates between startDate and endDate", () => {
      const dates = [
        new Date(2024, 1, 1),
        new Date(2024, 1, 2),
        new Date(2024, 1, 3),
      ]

      const result = getRangeDates(dates[0], dates[2])
      expect(result).toStrictEqual(dates)
    })

    test("returns an array with only the startDate when endDate is undefined", () => {
      const startDate = new Date(2024, 1, 1)
      const result = getRangeDates(startDate, undefined)
      expect(result).toStrictEqual([startDate])
    })

    test("returns an array with only the endDate when startDate is undefined", () => {
      const endDate = new Date(2024, 1, 1)
      const result = getRangeDates(undefined, endDate)
      expect(result).toStrictEqual([endDate])
    })
  })

  describe("isAfterMonth", () => {
    test("returns false when the first date is before the second date by month", () => {
      const beforeMonth = new Date(2024, 1, 1)
      const afterMonth = new Date(2024, 2, 1)
      expect(isAfterMonth(beforeMonth, afterMonth)).toBeFalsy()
    })

    test("returns true when the first date is after the second date by month", () => {
      const beforeMonth = new Date(2024, 2, 1)
      const afterMonth = new Date(2024, 1, 1)
      expect(isAfterMonth(beforeMonth, afterMonth)).toBeTruthy()
    })
  })

  describe("isBeforeMonth", () => {
    test("returns true when the first date is before the second date by month", () => {
      const beforeMonth = new Date(2024, 1, 1)
      const afterMonth = new Date(2024, 2, 1)
      expect(isBeforeMonth(beforeMonth, afterMonth)).toBeTruthy()
    })

    test("returns false when the first date is after the second date by month", () => {
      const beforeMonth = new Date(2024, 2, 1)
      const afterMonth = new Date(2024, 1, 1)
      expect(isBeforeMonth(beforeMonth, afterMonth)).toBeFalsy()
    })
  })

  describe("isInRange", () => {
    test("returns true when the date is within the range of minDate and maxDate", () => {
      const date = new Date(2024, 1, 2)
      const minDate = new Date(2024, 1, 1)
      const maxDate = new Date(2024, 1, 3)
      expect(isInRange(date, minDate, undefined)).toBeTruthy()
      expect(isInRange(date, undefined, maxDate)).toBeTruthy()
      expect(isInRange(date, undefined, undefined)).toBeTruthy()
      expect(isInRange(date, minDate, maxDate)).toBeTruthy()
    })
  })

  describe("isMonthInRange", () => {
    test("returns true when the date is within the range of minDate and maxDate", () => {
      const date = new Date(2024, 1, 1)
      const minDate = new Date(2024, 0, 1)
      const maxDate = new Date(2024, 2, 1)

      expect(isMonthInRange({ date, maxDate, minDate })).toBeTruthy()
      expect(isMonthInRange({ date, maxDate, minDate: undefined })).toBeTruthy()
      expect(isMonthInRange({ date, maxDate: undefined, minDate })).toBeTruthy()
    })
  })

  describe("isIncludeDates", () => {
    test("returns true if target date is included in the list of dates", () => {
      const target = new Date(2024, 1, 1)
      const dates = [
        new Date(2024, 1, 1),
        new Date(2024, 1, 2),
        new Date(2024, 1, 3),
      ]

      expect(isIncludeDates(target, dates)).toBeTruthy()
    })

    test("returns false if target date is not included in the list of dates", () => {
      const target = new Date(2024, 1, 5)
      const dates = [
        new Date(2024, 1, 1),
        new Date(2024, 1, 2),
        new Date(2024, 1, 3),
      ]

      expect(isIncludeDates(target, dates)).toBeFalsy()
    })
  })

  describe("sortDates", () => {
    test("sorts dates in ascending order", () => {
      const dates = [
        new Date(2024, 1, 1),
        new Date(2024, 1, 2),
        new Date(2024, 1, 3),
      ]

      const result = sortDates([dates[2]!, dates[0]!, dates[1]!], "asc")
      expect(result).toStrictEqual(dates)
    })

    test("sorts dates in descending order", () => {
      const dates = [
        new Date(2024, 1, 3),
        new Date(2024, 1, 2),
        new Date(2024, 1, 1),
      ]

      const result = sortDates([dates[2]!, dates[0]!, dates[1]!], "desc")
      expect(result).toStrictEqual(dates)
    })
  })

  describe("isSomeAfterDate", () => {
    test("returns true if the first date is after the second date", () => {
      const date = new Date(2024, 1, 1)
      const value = new Date(2024, 1, 2)
      expect(isSomeAfterDate(value, date)).toBeTruthy()
      expect(isSomeAfterDate(value, undefined)).toBeFalsy()
    })
  })

  describe("isSomeBeforeDate", () => {
    test("returns true if the first date is before the second date", () => {
      const date = new Date(2024, 1, 2)
      const value = new Date(2024, 1, 1)
      expect(isSomeBeforeDate(value, date)).toBeTruthy()
      expect(isSomeBeforeDate(value, undefined)).toBeFalsy()
    })
  })

  describe("onShouldFocus", () => {
    test("focuses the validated element", () => {
      const refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>> =
        {
          current: new Map([
            ["Day 1", createRef<HTMLButtonElement>()],
            ["Day 2", createRef<HTMLButtonElement>()],
            ["Day 3", createRef<HTMLButtonElement>()],
          ]),
        }

      const validateFunc = (value: string) => value === "Day 3"

      render(
        <div>
          <button ref={refs.current.get("Day 1")} tabIndex={-1}>
            Day 1
          </button>
          <button ref={refs.current.get("Day 2")} tabIndex={-1}>
            Day 2
          </button>
          <button ref={refs.current.get("Day 3")} tabIndex={-1}>
            Day 3
          </button>
        </div>,
      )

      onShouldFocus(refs, validateFunc, false)

      expect(refs.current.get("Day 3")?.current).toHaveFocus()
    })
  })

  describe("getFocused", () => {
    test("returns the key of the currently focused element", () => {
      const refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>> =
        {
          current: new Map([
            ["Day 1", createRef<HTMLButtonElement>()],
            ["Day 2", createRef<HTMLButtonElement>()],
            ["Day 3", createRef<HTMLButtonElement>()],
          ]),
        }

      render(
        <div>
          <button ref={refs.current.get("Day 1")}>Day 1</button>
          <button ref={refs.current.get("Day 2")}>Day 2</button>
          <button ref={refs.current.get("Day 3")}>Day 3</button>
        </div>,
      )

      expect(getFocused(refs)).toBeUndefined()

      refs.current.get("Day 2")?.current?.focus()

      expect(getFocused(refs)).toBe("Day 2")
    })
  })

  describe("getRangeFirstDay", () => {
    test("returns the key of the first element in the range", () => {
      const refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>> =
        {
          current: new Map([
            ["Day 1", createRef<HTMLButtonElement>()],
            ["Day 2", createRef<HTMLButtonElement>()],
            ["Day 3", createRef<HTMLButtonElement>()],
          ]),
        }

      expect(getRangeFirstDay(refs)).toBe("Day 1")
    })
  })

  describe("getRangeLastDay", () => {
    test("returns the key of the last element in the range", () => {
      const refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>> =
        {
          current: new Map([
            ["Day 1", createRef<HTMLButtonElement>()],
            ["Day 2", createRef<HTMLButtonElement>()],
            ["Day 3", createRef<HTMLButtonElement>()],
          ]),
        }

      expect(getRangeLastDay(refs)).toBe("Day 3")
    })
  })

  describe("disableAllTabIndex", () => {
    test("disables tab index for all elements in the range", () => {
      const refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>> =
        {
          current: new Map([
            ["Day 1", createRef<HTMLButtonElement>()],
            ["Day 2", createRef<HTMLButtonElement>()],
            ["Day 3", createRef<HTMLButtonElement>()],
          ]),
        }

      render(
        <div>
          <button ref={refs.current.get("Day 1")}>Day 1</button>
          <button ref={refs.current.get("Day 2")}>Day 2</button>
          <button ref={refs.current.get("Day 3")}>Day 3</button>
        </div>,
      )

      for (const ref of refs.current.values()) {
        ref.current?.setAttribute("tabIndex", "0")
      }

      disableAllTabIndex(refs)

      for (const ref of refs.current.values()) {
        expect(ref.current).toHaveAttribute("tabIndex", "-1")
      }
    })
  })
})
