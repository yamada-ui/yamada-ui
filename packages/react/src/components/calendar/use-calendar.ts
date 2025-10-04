"use client"

import type { FocusEvent, KeyboardEvent } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import type { Descendant } from "../../hooks/use-descendants"
import type { Dict } from "../../utils"
import dayjs from "dayjs"
import { useCallback, useMemo, useRef } from "react"
import { useSplitProps } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendants } from "../../hooks/use-descendants"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  contains,
  createContext,
  dataAttr,
  handlerAll,
  isArray,
  isDate,
  isNumber,
  isObject,
  mergeRefs,
  runKeyAction,
  useUpdateEffect,
  visuallyHiddenAttributes,
} from "../../utils"
import "dayjs/locale/ja"

export const DEFAULT_HOLIDAYS: Date[] = []
export const DEFAULT_WEEKEND_DAYS: number[] = [0, 6]
export const DEFAULT_FIRST_DAY_OF_WEEK: StartDayOfWeek = "sunday"
export const DEFAULT_MAX_DATE: Date = new Date("2099-12-31")
export const DEFAULT_MIN_DATE: Date = new Date("1900-01-01")

export type MaybeDate = Date | Date[] | undefined | { end?: Date; start?: Date }
export type MaybeDateValue<
  Multiple extends boolean = false,
  Range extends boolean = false,
> = Range extends true
  ? { end?: Date; start?: Date }
  : Multiple extends true
    ? Date[]
    : Date | undefined
export type StartDayOfWeek = "monday" | "sunday"
export interface CalendarFormat {
  month?: string
  weekday?: string
  year?: string
}

export const getStartOfWeek = (
  date: Date,
  startDayOfWeek: StartDayOfWeek,
): Date =>
  dayjs(date)
    .subtract(startDayOfWeek === "monday" ? 1 : 0, "day")
    .startOf("week")
    .add(startDayOfWeek === "monday" ? 1 : 0, "day")
    .toDate()

export const getEndOfWeek = (
  date: Date,
  startDayOfWeek: StartDayOfWeek,
): Date =>
  dayjs(date)
    .subtract(startDayOfWeek === "monday" ? 1 : 0, "day")
    .endOf("week")
    .add(startDayOfWeek === "monday" ? 1 : 0, "day")
    .toDate()

export const getWeekdays = (
  locale: string,
  startDayOfWeek: StartDayOfWeek,
  format = "dd",
): { label: string; value: number }[] => {
  let weekdays: { label: string; value: number }[] = []

  const date = getStartOfWeek(new Date(), startDayOfWeek)

  for (let i = 0; i < 7; i += 1) {
    const label = dayjs(date).locale(locale).format(format)
    const value = date.getDay()

    weekdays = [...weekdays, { label, value }]

    date.setDate(date.getDate() + 1)
  }

  return weekdays
}

export const getMonthDays = (
  date: Date,
  startDayOfWeek: StartDayOfWeek,
): Date[][] => {
  const currentMonth = date.getMonth()
  const startOfMonth = new Date(date.getFullYear(), currentMonth, 1)
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const startDate = getStartOfWeek(startOfMonth, startDayOfWeek)
  const endDate = getEndOfWeek(endOfMonth, startDayOfWeek)

  const weeks: Date[][] = []

  while (startDate <= endDate) {
    const days: Date[] = []

    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(startDate))

      startDate.setDate(startDate.getDate() + 1)
    }

    weeks.push(days)
  }

  return weeks
}

export const isSameYear = (
  date: Date | undefined,
  comparison: Date | undefined,
): boolean =>
  date instanceof Date &&
  comparison instanceof Date &&
  dayjs(date).isSame(comparison, "year")

export const isSameMonth = (
  date: Date | undefined,
  comparison: Date | undefined,
): boolean =>
  date instanceof Date &&
  comparison instanceof Date &&
  dayjs(date).isSame(comparison, "month")

export const isSameDate = (
  date: Date | undefined,
  comparison: Date | undefined,
) =>
  date instanceof Date &&
  comparison instanceof Date &&
  dayjs(date).isSame(comparison, "date")

export const isAfterDate = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isAfter(date, "date")

export const isBeforeDate = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isBefore(date, "date")

export const isSameAfterDate = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "date") || dayjs(value).isAfter(date, "date"))

export const isSameBeforeDate = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "date") || dayjs(value).isBefore(date, "date"))

export const isAfterMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isAfter(date, "month")

export const isBeforeMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isBefore(date, "month")

export const isSameAfterMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "month") || dayjs(value).isAfter(date, "month"))

export const isSameBeforeMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "month") || dayjs(value).isBefore(date, "month"))

export const isAfterYear = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isAfter(date, "year")

export const isBeforeYear = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).isBefore(date, "year")

export const isSameAfterYear = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "year") || dayjs(value).isAfter(date, "year"))

export const isSameBeforeYear = (value: Date, date: Date | undefined) =>
  date instanceof Date &&
  (dayjs(date).isSame(value, "year") || dayjs(value).isBefore(date, "year"))

export const isIncludeDates = (comparison: Date, dates: Date[]) =>
  dates.some((date) => dayjs(date).isSame(comparison, "date"))

export const isInRange = (date: Date, minDate?: Date, maxDate?: Date) => {
  const hasMinDate = minDate instanceof Date
  const hasMaxDate = maxDate instanceof Date

  if (!hasMaxDate && !hasMinDate) return false

  const minInRange = hasMinDate ? isAfterDate(date, minDate) : false
  const maxInRange = hasMaxDate ? isBeforeDate(date, maxDate) : false

  return maxInRange && minInRange
}

export const sortDates = (dates: Date[], type: "asc" | "desc" = "asc") => {
  if (type === "asc") {
    return dates.sort((a, b) => (dayjs(a).isAfter(b, "date") ? 1 : -1))
  } else {
    return dates.sort((a, b) => (dayjs(a).isBefore(b, "date") ? 1 : -1))
  }
}

export const updateMaybeDateValue =
  (value: Date, max?: number) =>
  (prev: MaybeDate): MaybeDate => {
    if (isArray(prev)) {
      if (isIncludeDates(value, prev)) {
        return prev.filter((prevValue) => !isSameDate(prevValue, value))
      } else if (!isNumber(max) || prev.length < max) {
        return [...prev, value]
      } else {
        return prev
      }
    } else if (isObject(prev) && !isDate(prev)) {
      const { end, start } = prev

      if ((start && end) || !start) {
        return { end: undefined, start: value }
      } else {
        if (isSameDate(start, value)) {
          return { end: undefined, start: undefined }
        } else if (isBeforeDate(value, start)) {
          return { end: start, start: value }
        } else {
          return { end: value, start }
        }
      }
    } else {
      if (isSameDate(prev, value)) {
        return undefined
      } else {
        return value
      }
    }
  }

export const getAdjustedMonth = (value: MaybeDate, month: Date) => {
  if (isDate(value)) {
    if (!isSameMonth(value, month)) month = dayjs(value).set("date", 1).toDate()
  } else if (isArray(value)) {
    const lastValue = value.at(-1)

    if (lastValue && !isSameMonth(lastValue, month))
      month = dayjs(lastValue).set("date", 1).toDate()
  } else if (isObject(value)) {
    if (value.end) {
      month = dayjs(value.end).set("date", 1).toDate()
    } else if (value.start) {
      month = dayjs(value.start).set("date", 1).toDate()
    }
  }

  return month
}

const {
  DescendantsContext: CalendarDescendantsContext,
  useDescendant: useCalendarDescendant,
  useDescendants: useCalendarDescendants,
} = createDescendants<HTMLTableCellElement>()

export {
  CalendarDescendantsContext,
  useCalendarDescendant,
  useCalendarDescendants,
}

interface CalendarContext
  extends Omit<
    UseCalendarReturn,
    | "descendants"
    | "getMonthProps"
    | "getMonthSelectProps"
    | "getNavigationProps"
    | "getNextButtonProps"
    | "getPrevButtonProps"
    | "getRootProps"
    | "getStatusProps"
    | "getWeekdayProps"
    | "getYearSelectProps"
    | "monthDays"
    | "monthItems"
    | "weekdays"
    | "yearItems"
  > {}

const [CalendarContext, useCalendarContext] = createContext<CalendarContext>({
  name: "CalendarContext",
})

export { CalendarContext, useCalendarContext }

export interface UseCalendarProps<
  Multiple extends boolean = false,
  Range extends boolean = false,
> extends Omit<HTMLProps, "defaultValue" | "onChange"> {
  /**
   * The initial month of the calendar.
   *
   * @default new Date()
   */
  defaultMonth?: Date
  /**
   * The initial value of the calendar.
   */
  defaultValue?: MaybeDateValue<Multiple, Range>
  /**
   * If `true`, disables the calendar.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Callback function to determine whether the day should be disabled.
   */
  excludeDate?: (date: Date) => boolean
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see https://day.js.org/docs/en/display/format#list-of-localized-formats
   */
  format?: CalendarFormat
  /**
   * Define holidays.
   */
  holidays?: Date[]
  /**
   * The locale of the calendar.
   * Check the docs to see the locale of possible modifiers you can pass.
   *
   * @see https://day.js.org/docs/en/i18n/instance-locale
   * @default 'en-US'
   */
  locale?: string
  /**
   * The maximum selectable value.
   */
  max?: number
  /**
   * The maximum possible date.
   *
   * @default new Date(2099, 11, 31)
   */
  maxDate?: Date
  /**
   * The minimum possible date.
   *
   * @default new Date(1900, 0, 1)
   */
  minDate?: Date
  /**
   * The month of the calendar.
   */
  month?: Date
  /**
   * If `true`, the calendar will be multiple.
   *
   * @default false
   */
  multiple?: Multiple
  /**
   * If `true`, enables date range selection.
   *
   * @default false
   */
  range?: Range
  /**
   * Define the start day of the week.
   *
   * @default 'monday'
   */
  startDayOfWeek?: StartDayOfWeek
  /**
   * If `true`, highlight today.
   *
   * @default true
   */
  today?: boolean
  /**
   * The value of the calendar.
   */
  value?: MaybeDateValue<Multiple, Range>
  /**
   * Define weekend days.
   *
   * @default [0, 6]
   */
  weekendDays?: number[]
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: MaybeDateValue<Multiple, Range>) => void
  /**
   * The callback invoked when month state changes.
   */
  onChangeMonth?: (value: Date) => void
}

export const useCalendar = <
  Multiple extends boolean = false,
  Range extends boolean = false,
>({
  defaultMonth = new Date(),
  multiple = false as Multiple,
  range = false as Range,
  defaultValue = (range
    ? { end: undefined, start: undefined }
    : multiple
      ? []
      : undefined) as MaybeDateValue<Multiple, Range>,
  disabled = false,
  excludeDate,
  format: formatProp,
  holidays = DEFAULT_HOLIDAYS,
  locale: localeProp,
  max,
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  month: monthProp,
  startDayOfWeek = DEFAULT_FIRST_DAY_OF_WEEK,
  today = true,
  value: valueProp,
  weekendDays = DEFAULT_WEEKEND_DAYS,
  onChange: onChangeProp,
  onChangeMonth: onChangeMonthProp,
  ...rest
}: UseCalendarProps<Multiple, Range> = {}) => {
  if (dayjs(minDate).isAfter(dayjs(maxDate))) maxDate = minDate

  const { locale: defaultLocale, t } = useI18n("calendar")
  const format = useMemo(
    () => ({
      month: t("MMM"),
      weekday: t("dd"),
      year: t("YYYY"),
      ...formatProp,
    }),
    [formatProp, t],
  )
  const locale = localeProp ?? defaultLocale
  const descendants = useCalendarDescendants()
  const monthRef = useRef<HTMLTableElement>(null)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [month, setMonth] = useControllableState({
    defaultValue: () => {
      if (dayjs(minDate).isAfter(dayjs(defaultMonth)))
        defaultMonth = dayjs(minDate).set("date", 1).toDate()

      if (valueProp) {
        defaultMonth = getAdjustedMonth(valueProp, defaultMonth)
      } else if (defaultValue) {
        defaultMonth = getAdjustedMonth(defaultValue, defaultMonth)
      }

      return defaultMonth
    },
    value: monthProp,
    onChange: onChangeMonthProp,
  })
  const { endOfMonth, startOfMonth } = useMemo(() => {
    const startOfMonth = dayjs(month).startOf("month").toDate()
    const endOfMonth = dayjs(month).endOf("month").toDate()

    return { endOfMonth, startOfMonth }
  }, [month])
  const weekdays = useMemo(
    () => getWeekdays(locale, startDayOfWeek, format.weekday),
    [startDayOfWeek, locale, format],
  )
  const monthDays = useMemo(
    () => getMonthDays(month, startDayOfWeek),
    [startDayOfWeek, month],
  )
  const yearItems = useMemo(() => {
    const minYear = dayjs(minDate).year()
    const maxYear = dayjs(maxDate).year()
    const yearItems: { label: string; value: string }[] = []

    for (let year = minYear; year <= maxYear; year++) {
      const label = dayjs().locale(locale).set("year", year).format(format.year)
      const value = year.toString()

      yearItems.push({ label, value })
    }

    return yearItems
  }, [format, locale, maxDate, minDate])
  const monthItems = useMemo(() => {
    const monthItems: { label: string; value: string }[] = []
    const date = dayjs(month).toDate()

    for (let month = 0; month < 12; month++) {
      date.setMonth(month)

      if (isAfterMonth(date, maxDate)) continue
      if (isBeforeMonth(date, minDate)) continue

      const label = dayjs()
        .locale(locale)
        .set("month", month)
        .format(format.month)
      const value = month.toString()

      monthItems.push({ label, value })
    }

    return monthItems
  }, [month, maxDate, minDate, locale, format])

  const onChange = useCallback(
    (value: Date) => {
      if (isBeforeDate(value, minDate)) return
      if (isAfterDate(value, maxDate)) return

      setValue(
        (prev) =>
          updateMaybeDateValue(value, max)(prev) as MaybeDateValue<
            Multiple,
            Range
          >,
      )
    },
    [max, maxDate, minDate, setValue],
  )

  const onMonthChange = useCallback(
    (month: Date) => {
      if (isAfterMonth(month, maxDate)) {
        setMonth(dayjs(maxDate).set("date", 1).toDate())
      } else if (isBeforeMonth(month, minDate)) {
        setMonth(dayjs(minDate).set("date", 1).toDate())
      } else {
        setMonth((prev) => {
          if (isSameMonth(prev, month)) return prev

          return month
        })
      }
    },
    [maxDate, minDate, setMonth],
  )

  const onPrevMonth = useCallback(() => {
    setMonth((prev) => {
      if (isSameMonth(prev, minDate)) return prev

      return dayjs(prev).subtract(1, "month").toDate()
    })
  }, [minDate, setMonth])

  const onNextMonth = useCallback(() => {
    setMonth((prev) => {
      if (isSameMonth(prev, maxDate)) return prev

      return dayjs(prev).add(1, "month").toDate()
    })
  }, [maxDate, setMonth])

  const onFocus = useCallback(() => {
    let index: null | number = null
    let descendant: Descendant<HTMLTableCellElement> | undefined

    if (value) {
      if (isDate(value)) {
        if (isSameMonth(month, new Date())) index = new Date().getDate() - 1
      } else if (isArray(value)) {
        const firstValue = value[0]

        if (firstValue && isSameMonth(month, firstValue))
          index = firstValue.getDate() - 1
      } else if (isObject(value)) {
        if (value.start && isSameMonth(month, value.start)) {
          index = value.start.getDate() - 1
        } else if (value.end && isSameMonth(month, value.end)) {
          index = value.end.getDate() - 1
        }
      }
    } else if (isSameMonth(month, new Date())) {
      index = new Date().getDate() - 1
    }

    descendant = descendants.value(index)

    if (!descendant) descendant = descendants.enabledFirstValue()

    if (!descendant) return

    descendant.node.focus()
    descendant.node.tabIndex = 0

    if (monthRef.current) monthRef.current.tabIndex = -1
  }, [descendants, month, value])

  const onBlur = useCallback((ev: FocusEvent<HTMLTableElement>) => {
    if (contains(monthRef.current, ev.relatedTarget)) return

    if (monthRef.current) monthRef.current.tabIndex = 0
  }, [])

  useUpdateEffect(() => {
    setMonth((prev) => getAdjustedMonth(value, prev))
  }, [value])

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-disabled": dataAttr(disabled),
      ...rest,
      ...props,
    }),
    [disabled, rest],
  )

  const getNavigationProps: PropGetter<"nav"> = useCallback(
    (props = {}) => ({ "data-disabled": dataAttr(disabled), ...props }),
    [disabled],
  )

  const getYearSelectProps: PropGetter<
    "div",
    { value?: string; onChange?: (value: string) => void },
    { value?: string; onChange?: (value: string) => void }
  > = useCallback(
    (props = {}) => ({
      "aria-label": t("Choose the year"),
      disabled,
      value: dayjs(month).get("year").toString(),
      ...props,
      onChange: handlerAll(props.onChange, (value) =>
        onMonthChange(dayjs(month).set("year", parseInt(value)).toDate()),
      ),
    }),
    [disabled, month, onMonthChange, t],
  )

  const getMonthSelectProps: PropGetter<
    "div",
    { value?: string; onChange?: (value: string) => void },
    { value?: string; onChange?: (value: string) => void }
  > = useCallback(
    (props = {}) => ({
      "aria-label": t("Choose the month"),
      disabled,
      value: dayjs(month).get("month").toString(),
      ...props,
      onChange: handlerAll(props.onChange, (value) =>
        onMonthChange(dayjs(month).set("month", parseInt(value)).toDate()),
      ),
    }),
    [disabled, month, onMonthChange, t],
  )

  const getStatusProps: PropGetter = useCallback(
    (props = {}) => ({
      style: visuallyHiddenAttributes.style,
      "aria-live": "polite",
      children: dayjs(month).locale(locale).format(t("MMMM YYYY")),
      role: "status",
      ...props,
    }),
    [locale, month, t],
  )

  const getMonthProps: PropGetter<"table"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, monthRef),
      "aria-label": dayjs(month).locale(locale).format(t("MMMM YYYY")),
      "aria-multiselectable": ariaAttr(multiple || range),
      "data-disabled": dataAttr(disabled),
      role: "grid",
      tabIndex: disabled ? -1 : 0,
      ...props,
      onBlur: handlerAll(props.onBlur, onBlur),
      onFocus: handlerAll(props.onFocus, onFocus),
    }),
    [disabled, locale, month, multiple, onBlur, onFocus, range, t],
  )

  const getWeekdayProps: RequiredPropGetter<"th", { value: number }> =
    useCallback(
      ({ value, ...props }) => ({
        "data-disabled": dataAttr(disabled),
        "data-value": value.toString(),
        abbr: dayjs().locale(locale).set("day", value).format("dddd"),
        ...props,
      }),
      [disabled, locale],
    )

  const getButtonProps: PropGetter<"button"> = useCallback(
    (props) => ({
      type: "button",
      "data-disabled": dataAttr(disabled),
      ...props,
    }),
    [disabled],
  )

  const getPrevButtonProps: PropGetter<"button"> = useCallback(
    (props = {}) =>
      getButtonProps({
        "aria-label": t("Go to the previous month"),
        disabled: isSameBeforeMonth(month, minDate),
        ...props,
        onClick: handlerAll(props.onClick, onPrevMonth),
      }),
    [getButtonProps, minDate, month, onPrevMonth, t],
  )

  const getNextButtonProps: PropGetter<"button"> = useCallback(
    (props = {}) =>
      getButtonProps({
        "aria-label": t("Go to the next month"),
        disabled: isSameAfterMonth(month, maxDate),
        ...props,
        onClick: handlerAll(props.onClick, onNextMonth),
      }),
    [getButtonProps, maxDate, month, onNextMonth, t],
  )

  return {
    descendants,
    disabled,
    endOfMonth,
    excludeDate,
    holidays,
    locale,
    max,
    maxDate,
    minDate,
    month,
    monthDays,
    monthItems,
    multiple,
    range,
    startDayOfWeek,
    startOfMonth,
    today,
    value,
    weekdays,
    weekendDays,
    yearItems,
    getMonthProps,
    getMonthSelectProps,
    getNavigationProps,
    getNextButtonProps,
    getPrevButtonProps,
    getRootProps,
    getStatusProps,
    getWeekdayProps,
    getYearSelectProps,
    onChange,
    onMonthChange,
    onNextMonth,
    onPrevMonth,
  }
}

export type UseCalendarReturn = ReturnType<typeof useCalendar>

export interface UseCalendarDayProps extends Omit<HTMLProps<"td">, "value"> {
  value: Date
}

export const useCalendarDay = ({ value, ...rest }: UseCalendarDayProps) => {
  const { t } = useI18n("calendar")
  const {
    disabled: rootDisabled,
    excludeDate,
    holidays,
    locale,
    max,
    maxDate,
    minDate,
    month,
    startDayOfWeek,
    today: highlightToday,
    value: selectedValue,
    weekendDays,
    onChange,
    onMonthChange,
    onNextMonth,
    onPrevMonth,
  } = useCalendarContext()
  const cellRef = useRef<HTMLTableCellElement>(null)
  const outside = useMemo(() => !isSameMonth(month, value), [month, value])
  const holiday = useMemo(
    () => holidays.some((holiday) => isSameDate(holiday, value)),
    [holidays, value],
  )
  const weekend = useMemo(
    () => weekendDays.includes(value.getDay()),
    [weekendDays, value],
  )
  const today = useMemo(
    () => highlightToday && isSameDate(value, new Date()),
    [highlightToday, value],
  )
  const selected = useMemo(() => {
    if (isDate(selectedValue)) {
      return isSameDate(selectedValue, value)
    } else if (isArray(selectedValue)) {
      return selectedValue.some((selectedValue) =>
        isSameDate(selectedValue, value),
      )
    } else if (isObject(selectedValue)) {
      return (
        isSameDate(selectedValue.start, value) ||
        isSameDate(selectedValue.end, value)
      )
    }
  }, [selectedValue, value])
  const disabled = useMemo(() => {
    if (rootDisabled) return true
    if (isAfterDate(value, maxDate)) return true
    if (isBeforeDate(value, minDate)) return true
    if (excludeDate?.(value)) return true
    if (
      isArray(selectedValue) &&
      isNumber(max) &&
      selectedValue.length >= max &&
      !isIncludeDates(value, selectedValue as Date[])
    )
      return true

    return false
  }, [excludeDate, max, maxDate, minDate, rootDisabled, selectedValue, value])
  const between = useMemo(() => {
    if (isDate(selectedValue) || isArray(selectedValue)) return false

    return isInRange(value, selectedValue?.start, selectedValue?.end)
  }, [selectedValue, value])
  const startValue = useMemo(() => {
    if (isDate(selectedValue) || isArray(selectedValue)) return false

    const { end, start } = selectedValue ?? {}

    return start && end && isSameDate(value, start)
  }, [selectedValue, value])
  const endValue = useMemo(() => {
    if (isDate(selectedValue) || isArray(selectedValue)) return false

    const { end, start } = selectedValue ?? {}

    return start && end && isSameDate(value, end)
  }, [selectedValue, value])
  const { descendants, register } = useCalendarDescendant({
    disabled: disabled,
  })

  const onFocusDescendant = useCallback(
    (descendant?: Descendant<HTMLTableCellElement>) => {
      if (!descendant) return

      descendant.node.focus()
      descendant.node.tabIndex = 0
    },
    [],
  )

  const onBlur = useCallback(() => {
    if (cellRef.current) cellRef.current.tabIndex = -1
  }, [])

  const onClick = useCallback(() => {
    if (disabled) return

    onChange(value)
  }, [disabled, onChange, value])

  const onPrevDate = useCallback(() => {
    const descendant = descendants.enabledPrevValue(cellRef.current, false)

    if (descendant) {
      onFocusDescendant(descendant)
    } else if (!isSameBeforeDate(value, minDate)) {
      onPrevMonth()

      setTimeout(() => onFocusDescendant(descendants.enabledLastValue()))
    }
  }, [descendants, minDate, onFocusDescendant, onPrevMonth, value])

  const onNextDate = useCallback(() => {
    const descendant = descendants.enabledNextValue(cellRef.current, false)

    if (descendant) {
      onFocusDescendant(descendant)
    } else if (!isSameAfterDate(value, maxDate)) {
      onNextMonth()

      setTimeout(() => onFocusDescendant(descendants.enabledFirstValue()))
    }
  }, [descendants, maxDate, onFocusDescendant, onNextMonth, value])

  const onPrevTraverseDate = useCallback(
    (date: Date) => {
      onMonthChange(dayjs(date).set("date", 1).toDate())

      setTimeout(() => {
        const descendant = isBeforeDate(date, minDate)
          ? descendants.enabledFirstValue()
          : descendants.value(date.getDate() - 1)

        if (!descendant) return

        if (descendant.disabled) {
          onFocusDescendant(descendants.enabledNextValue(descendant, false))
        } else {
          onFocusDescendant(descendant)
        }
      })
    },
    [descendants, minDate, onFocusDescendant, onMonthChange],
  )

  const onNextTraverseDate = useCallback(
    (date: Date) => {
      onMonthChange(dayjs(date).set("date", 1).toDate())

      setTimeout(() => {
        const descendant = isAfterDate(date, maxDate)
          ? descendants.enabledLastValue()
          : descendants.value(date.getDate() - 1)

        if (!descendant) return

        if (descendant.disabled) {
          onFocusDescendant(descendants.enabledPrevValue(descendant, false))
        } else {
          onFocusDescendant(descendant)
        }
      })
    },
    [descendants, maxDate, onFocusDescendant, onMonthChange],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLTableCellElement>) => {
      runKeyAction(ev, {
        ArrowDown: () =>
          onNextTraverseDate(dayjs(value).add(1, "week").toDate()),
        ArrowLeft: onPrevDate,
        ArrowRight: onNextDate,
        ArrowUp: () =>
          onPrevTraverseDate(dayjs(value).subtract(1, "week").toDate()),
        End: () => onNextTraverseDate(getEndOfWeek(value, startDayOfWeek)),
        Enter: onClick,
        Home: () => onPrevTraverseDate(getStartOfWeek(value, startDayOfWeek)),
        PageDown: (ev) => {
          if (ev.shiftKey) {
            onNextTraverseDate(dayjs(value).add(1, "year").toDate())
          } else {
            onNextTraverseDate(dayjs(value).add(1, "month").toDate())
          }
        },
        PageUp: (ev) => {
          if (ev.shiftKey) {
            onPrevTraverseDate(dayjs(value).subtract(1, "year").toDate())
          } else {
            onPrevTraverseDate(dayjs(value).subtract(1, "month").toDate())
          }
        },
        Space: onClick,
      })
    },
    [
      onClick,
      onNextDate,
      onNextTraverseDate,
      onPrevDate,
      onPrevTraverseDate,
      startDayOfWeek,
      value,
    ],
  )

  const getDayProps: PropGetter<"td"> = useCallback(
    ({ ref, "aria-label": ariaLabel, ...props } = {}) => {
      if (!ariaLabel) {
        ariaLabel = dayjs(value).locale(locale).format(t("dddd, MMMM DD, YYYY"))

        if (today) ariaLabel = `${t("Today")}, ${ariaLabel}`
      }

      return {
        "aria-disabled": ariaAttr(disabled),
        "aria-label": ariaLabel,
        "aria-selected": ariaAttr(selected),
        "data-between": dataAttr(between),
        "data-disabled": dataAttr(disabled),
        "data-end": dataAttr(endValue),
        "data-holiday": dataAttr(holiday),
        "data-outside": dataAttr(outside),
        "data-selected": dataAttr(selected),
        "data-start": dataAttr(startValue),
        "data-today": dataAttr(today),
        "data-value": dayjs(value).format("YYYY-MM-DD"),
        "data-weekend": dataAttr(weekend),
        tabIndex: -1,
        ...rest,
        ...props,
        ref: mergeRefs(ref, cellRef, outside ? null : register),
        onBlur: handlerAll(props.onBlur, onBlur),
        onClick: handlerAll(props.onClick, onClick),
        onFocus: handlerAll(props.onFocus, (ev) => ev.preventDefault()),
        onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      }
    },
    [
      between,
      disabled,
      endValue,
      holiday,
      locale,
      onBlur,
      onClick,
      onKeyDown,
      outside,
      register,
      rest,
      selected,
      startValue,
      t,
      today,
      value,
      weekend,
    ],
  )

  return { outside, getDayProps }
}

export type UseCalendarDayReturn = ReturnType<typeof useCalendarDay>

const calendarProps: (keyof UseCalendarProps)[] = [
  "defaultMonth",
  "defaultValue",
  "disabled",
  "excludeDate",
  "format",
  "holidays",
  "locale",
  "max",
  "maxDate",
  "minDate",
  "month",
  "range",
  "startDayOfWeek",
  "today",
  "value",
  "weekendDays",
  "onChange",
  "onChangeMonth",
]

export const useCalendarProps = <
  Y extends boolean = false,
  M extends boolean = false,
  D extends Dict = Dict,
  H extends keyof UseCalendarProps<Y, M> = keyof UseCalendarProps<Y, M>,
>(
  props: D,
  omitKeys?: H[],
) => {
  return useSplitProps(
    props,
    calendarProps.filter((key) => !omitKeys?.includes(key as H)),
  ) as unknown as [
    keyof UseCalendarProps<Y, M> extends H
      ? UseCalendarProps<Y, M>
      : Omit<UseCalendarProps<Y, M>, H>,
    Omit<
      M,
      keyof UseCalendarProps<Y, M> extends H
        ? keyof UseCalendarProps<Y, M>
        : Exclude<keyof UseCalendarProps<Y, M>, H>
    >,
  ]
}
