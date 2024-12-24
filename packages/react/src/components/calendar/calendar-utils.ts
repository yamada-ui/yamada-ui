import type { Dayjs } from "dayjs"
import type { RefObject } from "react"
import dayjs from "dayjs"
import { isActiveElement } from "../../utils"

export type MaybeDate = Date | Dayjs

export const getFirstOfWeek = (
  date: Date,
  firstDayOfWeek: "monday" | "sunday",
): Date => {
  const value = new Date(date)
  const day = value.getDay() || 7
  const sunday = firstDayOfWeek === "sunday"

  const clampToFirstDay = sunday ? day : day - 1

  if ((sunday && day !== 0) || day !== 1) value.setHours(-24 * clampToFirstDay)

  return value
}

export const getLastOfWeek = (
  date: Date,
  firstDayOfWeek: "monday" | "sunday",
): Date => {
  const value = new Date(date)
  const day = value.getDay()
  const sunday = firstDayOfWeek === "sunday"

  const clampToLastDay = 7 - (sunday ? day + 1 : day)

  if ((sunday && day !== 6) || day !== 0)
    value.setDate(value.getDate() + clampToLastDay)

  return value
}

export const getWeekdays = (
  locale: string,
  firstDayOfWeek: "monday" | "sunday",
  format = "dd",
): string[] => {
  let weekdays: string[] = []

  const date = getFirstOfWeek(new Date(), firstDayOfWeek)

  for (let i = 0; i < 7; i += 1) {
    const weekday = dayjs(date).locale(locale).format(format)

    weekdays = [...weekdays, weekday]

    date.setDate(date.getDate() + 1)
  }

  return weekdays
}

export const getMonthDays = (
  date: Date,
  firstDayOfWeek: "monday" | "sunday",
): Date[][] => {
  const currentMonth = date.getMonth()
  const firstOfMonth = new Date(date.getFullYear(), currentMonth, 1)
  const lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const endDate = getLastOfWeek(lastOfMonth, firstDayOfWeek)
  const firstDate = getFirstOfWeek(firstOfMonth, firstDayOfWeek)

  const weeks: Date[][] = []

  while (firstDate <= endDate) {
    const days: Date[] = []

    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(firstDate))

      firstDate.setDate(firstDate.getDate() + 1)
    }

    weeks.push(days)
  }

  return weeks
}

export const getRangeYears = (year: number): number[] => {
  const rounded = year - 6

  let rangeYears: number[] = []

  for (let i = 0; i < 12; i += 1) {
    const rangeYear = rounded + i

    rangeYears = [...rangeYears, rangeYear]
  }

  return rangeYears
}

export const getRangeMonths = (locale: string, format: string): string[] => {
  const rounded = new Date(1993, 0, 1)

  let rangeMonths: string[] = []

  for (let i = 0; i < 12; i += 1) {
    const rangeMonth = dayjs(rounded).locale(locale).format(format)

    rangeMonths = [...rangeMonths, rangeMonth]

    rounded.setMonth(rounded.getMonth() + 1)
  }

  return rangeMonths
}

export const getFormattedLabel = (
  dateOrYear: Date | number | undefined,
  locale: string,
  format: string,
): string => {
  if (dateOrYear == null || dateOrYear === -1) {
    return ""
  } else if (dateOrYear instanceof Date) {
    return dayjs(dateOrYear).locale(locale).format(format)
  } else {
    return dayjs(new Date(dateOrYear, 1, 1))
      .locale(locale)
      .format(format)
  }
}

export const isSameMonth = (
  date: Date | undefined,
  comparison: Date | undefined,
): boolean =>
  date?.getFullYear() === comparison?.getFullYear() &&
  date?.getMonth() === comparison?.getMonth()

export const isSameDate = (
  date: Date | undefined,
  comparison: Date | undefined,
) => isSameMonth(date, comparison) && date?.getDate() === comparison?.getDate()

export const getRangeDates = (
  startDate: Date | undefined,
  endDate: Date | undefined,
) => {
  const dates: Date[] = []

  if (!startDate || !endDate) {
    if (startDate) dates.push(startDate)
    if (endDate) dates.push(endDate)
  } else {
    const resolvedStartDate = dayjs(startDate).startOf("day")
    const resolvedEndDate = dayjs(endDate).startOf("day")

    const n = Math.abs(resolvedStartDate.diff(resolvedEndDate, "day"))

    let date = resolvedStartDate

    for (let i = 0; i <= n; i++) {
      dates.push(date.add(i, "day").toDate())
    }
  }

  return dates
}

export const isAfterMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).startOf("month").isAfter(date)

export const isBeforeMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).startOf("month").isBefore(date)

export const isInRange = (date: Date, minDate?: Date, maxDate?: Date) => {
  const hasMinDate = minDate instanceof Date
  const hasMaxDate = maxDate instanceof Date

  if (!hasMaxDate && !hasMinDate) return true

  const minInRange = hasMinDate ? isSomeAfterDate(date, minDate) : true
  const maxInRange = hasMaxDate ? isSomeBeforeDate(date, maxDate) : true

  return maxInRange && minInRange
}

export const isMonthInRange = ({
  date,
  maxDate,
  minDate,
}: {
  date: Date
  maxDate?: Date
  minDate?: Date
}) => {
  const hasMinDate = minDate instanceof Date
  const hasMaxDate = maxDate instanceof Date

  if (!hasMaxDate && !hasMinDate) return true

  const firstOfMonth = dayjs(date).startOf("month")
  const lastOfMonth = dayjs(date).endOf("month")

  const minInRange = hasMinDate ? lastOfMonth.isAfter(minDate) : true
  const maxInRange = hasMaxDate ? firstOfMonth.isBefore(maxDate) : true

  return maxInRange && minInRange
}

export const isIncludeDates = (date: Date, dates: Date[]) =>
  dates.some((d) => dayjs(d).isSame(date, "day"))

export const sortDates = (dates: Date[], type: "asc" | "desc" = "asc") => {
  if (type === "asc") {
    return dates.sort((a, b) => (dayjs(a).isAfter(b, "day") ? 1 : -1))
  } else {
    return dates.sort((a, b) => (dayjs(a).isBefore(b, "day") ? 1 : -1))
  }
}

export const isSomeAfterDate = (
  value: MaybeDate,
  date: MaybeDate | undefined,
) =>
  (date instanceof Date || date instanceof dayjs) &&
  (dayjs(value).isSame(date) || isAfterDate(value, date))

export const isSomeBeforeDate = (
  value: MaybeDate,
  date: MaybeDate | undefined,
) =>
  (date instanceof Date || date instanceof dayjs) &&
  (dayjs(value).isSame(date) || isBeforeDate(value, date))

export const isAfterDate = (value: MaybeDate, date: MaybeDate | undefined) =>
  (date instanceof Date || date instanceof dayjs) &&
  dayjs(date).isBefore(value, "day")

export const isBeforeDate = (value: MaybeDate, date: MaybeDate | undefined) =>
  (date instanceof Date || date instanceof dayjs) &&
  dayjs(date).isAfter(value, "day")

export const onShouldFocus = <T = any>(
  refs: RefObject<Map<T, RefObject<HTMLButtonElement | null>>>,
  validateFunc: (value: T) => boolean,
  first = true,
): void => {
  let targetValue: T | undefined
  let targetEl: HTMLButtonElement | null | undefined

  for (const value of refs.current.keys()) {
    const selected = validateFunc(value)

    if (selected) targetValue = value
  }

  if (typeof targetValue === "number") {
    const ref = refs.current.get(targetValue)

    targetEl = ref?.current
  } else {
    const values = [...refs.current.values()]
    const firstRef = values[0]
    const lastRef = values[values.length - 1]

    targetEl = first ? firstRef?.current : lastRef?.current
  }

  if (targetEl) {
    targetEl.focus()
    targetEl.tabIndex = 0
  }
}

export const getFocused = <T = any>(
  refs: RefObject<Map<T, RefObject<HTMLButtonElement | null>>>,
): T | undefined => {
  for (const [value, ref] of refs.current.entries()) {
    const focused = ref.current ? isActiveElement(ref.current) : false

    if (focused) return value
  }
}

export const getRangeFirstDay = (
  refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>>,
) => {
  const days = [...refs.current.keys()]

  return days[0]
}

export const getRangeLastDay = (
  refs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>>,
) => {
  const days = [...refs.current.keys()]

  return days[days.length - 1]
}

export const disableAllTabIndex = <T = any>(
  refs: RefObject<Map<T, RefObject<HTMLButtonElement | null>>>,
): void => {
  for (const ref of refs.current.values()) {
    if (ref.current) ref.current.tabIndex = -1
  }
}

export const isDisabledDate = ({
  disableOutsideDays,
  endDate,
  excludeDate,
  maxDate,
  maxTrulySelectStartDate,
  maybeEndDate,
  maybeStartDate,
  minDate,
  minTrulySelectStartDate,
  outside,
  startDate,
  value,
}: {
  disableOutsideDays: boolean
  outside: boolean
  value: Date
  endDate?: Date
  excludeDate?: (date: Date) => boolean
  maxDate?: Date
  maxTrulySelectStartDate?: Date
  maybeEndDate?: Date
  maybeStartDate?: Date
  minDate?: Date
  minTrulySelectStartDate?: Date
  startDate?: Date
}) =>
  isAfterDate(value, maxDate) ||
  isBeforeDate(value, minDate) ||
  (isAfterDate(value, maybeStartDate) &&
    isBeforeDate(value, maxTrulySelectStartDate) &&
    !endDate) ||
  (isBeforeDate(value, maybeEndDate) &&
    isAfterDate(value, minTrulySelectStartDate) &&
    !startDate) ||
  !!excludeDate?.(value) ||
  (!!disableOutsideDays && !!outside)
