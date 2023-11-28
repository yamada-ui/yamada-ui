import type { CSSUIObject } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { PropGetter, RequiredPropGetter } from "@yamada-ui/utils"
import {
  createContext,
  isArray,
  handlerAll,
  dataAttr,
  ariaAttr,
  assignRef,
  mergeRefs,
  useUpdateEffect,
  isActiveElement,
  useUnmountEffect,
  isDisabled,
  getEventRelatedTarget,
  useCallbackRef,
  omitObject,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import type {
  CSSProperties,
  Dispatch,
  ForwardedRef,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react"
import { createRef, useCallback, useRef, useState } from "react"

export type MaybeValue = Date | Date[] | undefined

export type CalendarContext = Pick<
  Required<UseCalendarProps>,
  | "type"
  | "month"
  | "firstDayOfWeek"
  | "amountOfMonths"
  | "paginateBy"
  | "withWeekdays"
  | "withHeader"
  | "withControls"
  | "withLabel"
  | "disableOutsideDays"
  | "locale"
  | "weekdayFormat"
  | "yearFormat"
  | "monthFormat"
  | "dateFormat"
  | "weekendDays"
  | "holidays"
  | "today"
  | "selectMonthWith"
> &
  Pick<
    UseCalendarProps,
    | "minDate"
    | "maxDate"
    | "excludeDate"
    | "typeRef"
    | "prevRef"
    | "nextRef"
    | "maxSelectedValues"
  > & {
    value: MaybeValue
    setType: (
      type: "year" | "month" | "date",
      year?: number,
      month?: number,
    ) => void
    setValue: Dispatch<SetStateAction<MaybeValue>>
    setMonth: Dispatch<SetStateAction<Date>>
    setYear: Dispatch<SetStateAction<number>>
    setInternalYear: Dispatch<SetStateAction<number>>
    year: number
    internalYear: number
    minYear: number
    maxYear: number
    rangeYears: number[]
    prevMonth: Date
    nextMonth: Date
    styles: Record<string, CSSUIObject>
    yearRefs: MutableRefObject<Map<number, RefObject<HTMLButtonElement>>>
    monthRefs: MutableRefObject<Map<number, RefObject<HTMLButtonElement>>>
    dayRefs: MutableRefObject<Map<string, RefObject<HTMLButtonElement>>>
  }

export const [CalendarProvider, useCalendarContext] =
  createContext<CalendarContext>({
    strict: false,
    name: "CalendarContext",
  })

export const getFirstOfWeek = (
  date: Date,
  firstDayOfWeek: "sunday" | "monday",
): Date => {
  const value = new Date(date)
  const day = value.getDay() || 7
  const isSunday = firstDayOfWeek === "sunday"

  const clampToFirstDay = isSunday ? day : day - 1

  if ((isSunday && day !== 0) || day !== 1)
    value.setHours(-24 * clampToFirstDay)

  return value
}

export const getLastOfWeek = (
  date: Date,
  firstDayOfWeek: "sunday" | "monday",
): Date => {
  const value = new Date(date)
  const day = value.getDay()
  const isSunday = firstDayOfWeek === "sunday"

  const clampToLastDay = 7 - (isSunday ? day + 1 : day)

  if ((isSunday && day !== 6) || day !== 0)
    value.setDate(value.getDate() + clampToLastDay)

  return value
}

export const getWeekdays = (
  locale: string,
  firstDayOfWeek: "sunday" | "monday",
  format: string = "dd",
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
  firstDayOfWeek: "sunday" | "monday",
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
  dateOrYear: Date | number,
  locale: string,
  format: string,
): string => {
  if (dateOrYear instanceof Date) {
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

const onShouldFocus = <T = any>(
  refs: MutableRefObject<Map<T, RefObject<HTMLButtonElement>>>,
  validateFunc: (value: T) => boolean,
  isFirst: boolean = true,
): void => {
  let targetValue: T | undefined
  let targetEl: HTMLButtonElement | null | undefined

  for (const value of refs.current.keys()) {
    const isSelected = validateFunc(value)

    if (isSelected) targetValue = value
  }

  if (typeof targetValue === "number") {
    const ref = refs.current.get(targetValue)

    targetEl = ref?.current
  } else {
    const values = [...refs.current.values()]
    const firstRef = values[0]
    const lastRef = values[values.length - 1]

    targetEl = isFirst ? firstRef.current : lastRef.current
  }

  if (targetEl) {
    targetEl.focus()
    targetEl.tabIndex = 0
  }
}

const getFocused = <T = any>(
  refs: MutableRefObject<Map<T, RefObject<HTMLButtonElement>>>,
): T | undefined => {
  for (const [value, ref] of refs.current.entries()) {
    const isFocused = ref.current ? isActiveElement(ref.current) : false

    if (isFocused) return value
  }
}

const getRangeFirstDay = (
  refs: MutableRefObject<Map<string, RefObject<HTMLButtonElement>>>,
) => {
  const days = [...refs.current.keys()]

  return days[0]
}

const getRangeLastDay = (
  refs: MutableRefObject<Map<string, RefObject<HTMLButtonElement>>>,
) => {
  const days = [...refs.current.keys()]

  return days[days.length - 1]
}

const disableAllTabIndex = <T = any>(
  refs: MutableRefObject<Map<T, RefObject<HTMLButtonElement>>>,
): void => {
  for (const ref of refs.current.values()) {
    if (ref.current) ref.current.tabIndex = -1
  }
}

export const isAfterMaxMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).startOf("month").isAfter(date)

export const isBeforeMinMonth = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(value).startOf("month").isBefore(date)

export const isMonthInRange = ({
  date,
  minDate,
  maxDate,
}: {
  date: Date
  minDate?: Date
  maxDate?: Date
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

export const isAfterMaxDate = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(date).isBefore(value, "day")

export const isBeforeMinDate = (value: Date, date: Date | undefined) =>
  date instanceof Date && dayjs(date).isAfter(value, "day")

export const isDisabledDate = ({
  minDate,
  maxDate,
  excludeDate,
  disableOutsideDays,
  value,
  isOutside,
}: {
  minDate?: Date
  maxDate?: Date
  excludeDate?: (date: Date) => boolean
  disableOutsideDays: boolean
  value: Date
  isOutside: boolean
}) =>
  isAfterMaxDate(value, maxDate) ||
  isBeforeMinDate(value, minDate) ||
  !!excludeDate?.(value) ||
  (!!disableOutsideDays && !!isOutside)

export type UseCalendarProps<Y extends MaybeValue = Date> = {
  /**
   * The type of the calendar.
   */
  type?: "year" | "month" | "date"
  /**
   * The initial type of the calendar.
   */
  defaultType?: "year" | "month" | "date"
  /**
   * The callback invoked when type state changes.
   */
  onChangeType?: (
    type: "year" | "month" | "date",
    year?: number,
    month?: number,
  ) => void
  /**
   * The value of the calendar.
   */
  value?: Y
  /**
   * The initial value of the calendar.
   */
  defaultValue?: Y
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: Y) => void
  /**
   * The month of the calendar.
   */
  month?: Date
  /**
   * The initial month of the calendar.
   *
   * @default 'new Date()'
   */
  defaultMonth?: Date
  /**
   * The callback invoked when month state changes.
   */
  onChangeMonth?: (value: Date) => void
  /**
   * Define the first day of the week.
   *
   * @default 'monday'
   */
  firstDayOfWeek?: "sunday" | "monday"
  /**
   * The number of months to display.
   *
   * @default 1
   */
  amountOfMonths?: number
  /**
   * The number of months to paginate.
   *
   * @default 1
   */
  paginateBy?: number
  /**
   * If `true`, outside days will be disabled.
   */
  disableOutsideDays?: boolean
  /**
   * The locale of the calendar.
   * Check the docs to see the locale of possible modifiers you can pass.
   *
   * @see Doc https://day.js.org/docs/en/i18n/instance-locale
   * @default 'en'
   */
  locale?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Doc https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'dd'
   */
  weekdayFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Doc https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY'
   */
  yearFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Doc https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'MM'
   */
  monthFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Doc https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'MMMM YYYY'
   */
  dateFormat?: string
  /**
   * Define weekend days.
   *
   * @default '[0, 6]'
   */
  weekendDays?: number[]
  /**
   * If `true`, highlight today.
   *
   * @default false
   */
  today?: boolean
  /**
   * The minimum possible date.
   */
  minDate?: Date
  /**
   * The maximum possible date.
   */
  maxDate?: Date
  /**
   * Callback function to determine whether the day should be disabled.
   */
  excludeDate?: (date: Date) => boolean
  /**
   * Define holidays.
   */
  holidays?: Date[]
  /**
   * Ref to a type function.
   */
  typeRef?: ForwardedRef<() => void | undefined>
  /**
   * Ref to a previous function.
   */
  prevRef?: ForwardedRef<() => void | undefined>
  /**
   * Ref to a next function.
   */
  nextRef?: ForwardedRef<() => void | undefined>
  /**
   * If `true`, display the calendar weekdays.
   *
   * @default true
   */
  withWeekdays?: boolean
  /**
   * If `true`, display the calendar header.
   *
   * @default true
   */
  withHeader?: boolean
  /**
   * If `true`, display the calendar control buttons.
   *
   * @default true
   */
  withControls?: boolean
  /**
   * If `true`, display the calendar label button.
   *
   * @default true
   */
  withLabel?: boolean
  /**
   * The maximum selectable value.
   */
  maxSelectedValues?: number
  selectMonthWith?: "month" | "value"
}

export const useCalendar = <Y extends MaybeValue = Date>({
  defaultType,
  defaultValue,
  defaultMonth,
  firstDayOfWeek = "monday",
  amountOfMonths = 1,
  paginateBy = amountOfMonths,
  withWeekdays = true,
  disableOutsideDays = false,
  minDate,
  maxDate,
  locale,
  yearFormat = "YYYY",
  monthFormat = "MMM",
  weekdayFormat = "dd",
  dateFormat = "MMMM YYYY",
  weekendDays = [0, 6],
  today = false,
  excludeDate,
  holidays = [],
  typeRef,
  prevRef,
  nextRef,
  withHeader = true,
  withControls = true,
  withLabel = true,
  maxSelectedValues,
  selectMonthWith = "month",
  ...rest
}: UseCalendarProps<Y>) => {
  const { theme } = useTheme()

  locale ??= theme.__config.date?.locale ?? "en"

  const [type, onChangeType] = useControllableState({
    value: rest.type,
    defaultValue: defaultType ?? "date",
  })

  const setType = useCallbackRef(
    (type: "year" | "month" | "date", year?: number, month?: number) => {
      onChangeType(type)
      rest.onChangeType?.(type, year, month)
    },
    [],
  )

  const [value, setValue] = useControllableState({
    value: rest.value,
    defaultValue,
    onChange: rest.onChange,
  })

  const isMulti = isArray(value)

  if (!isMulti && value) {
    defaultMonth ??= new Date(new Date(value).setDate(1))
  } else if (isMulti && value.length) {
    defaultMonth ??= new Date(new Date(value[0]).setDate(1))
  } else {
    defaultMonth ??= new Date()
  }

  const [month, setMonth] = useControllableState({
    value: rest.month,
    defaultValue: defaultMonth,
    onChange: rest.onChangeMonth,
    onUpdate: (prev, next) => !isSameDate(prev, next),
  })

  const [year, setYear] = useState<number>(month.getFullYear())
  const [internalYear, setInternalYear] = useState<number>(year)
  const minYear = minDate instanceof Date ? minDate.getFullYear() : 1
  const maxYear = maxDate instanceof Date ? maxDate.getFullYear() : 10000
  const rangeYears = getRangeYears(internalYear)
  const nextMonth = dayjs(month).add(amountOfMonths, "months").toDate()
  const prevMonth = dayjs(month).subtract(1, "months").toDate()

  const yearRefs = useRef(new Map<number, RefObject<HTMLButtonElement>>())
  const monthRefs = useRef(new Map<number, RefObject<HTMLButtonElement>>())
  const dayRefs = useRef(new Map<string, RefObject<HTMLButtonElement>>())

  useUpdateEffect(() => {
    if (!defaultMonth) return

    setMonth(defaultMonth)
    setYear(defaultMonth.getFullYear())
    setInternalYear(defaultMonth.getFullYear())
  }, [value])

  useUpdateEffect(() => {
    setYear(month.getFullYear())
    setInternalYear(month.getFullYear())
  }, [month.getFullYear()])

  useUpdateEffect(() => {
    switch (type) {
      case "year":
        onShouldFocus(yearRefs, (i) => year === rangeYears[i])

        break

      case "month":
        onShouldFocus(
          monthRefs,
          (value) => month.getFullYear() === year && month.getMonth() === value,
        )

        break

      default:
        onShouldFocus(dayRefs, (key) => {
          const [, month, date] = key.split("-").map(Number)

          return !isMulti
            ? value?.getMonth() === month && value?.getDate() === date
            : value?.some(
                (value) =>
                  value.getMonth() === month && value.getDate() === date,
              )
        })

        break
    }
  }, [type])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...omitObject(rest, [
        "value",
        "onChange",
        "month",
        "onChangeMonth",
        "type",
        "onChangeType",
      ]),
      ...props,
      ref,
    }),
    [rest],
  )

  return {
    type,
    setType,
    value,
    setValue,
    year,
    setYear,
    internalYear,
    setInternalYear,
    minYear,
    maxYear,
    rangeYears,
    prevMonth,
    nextMonth,
    minDate,
    maxDate,
    month,
    setMonth,
    firstDayOfWeek,
    amountOfMonths,
    paginateBy,
    withWeekdays,
    withHeader,
    withControls,
    withLabel,
    disableOutsideDays,
    locale,
    weekdayFormat,
    yearFormat,
    monthFormat,
    dateFormat,
    weekendDays,
    holidays,
    today,
    excludeDate,
    getContainerProps,
    typeRef,
    prevRef,
    nextRef,
    yearRefs,
    monthRefs,
    dayRefs,
    maxSelectedValues,
    selectMonthWith,
  }
}

export type UseCalendarReturn = ReturnType<typeof useCalendar>

export type UseCalendarHeaderProps = {
  index?: number
}

export const useCalendarHeader = ({ index }: UseCalendarHeaderProps) => {
  const {
    prevMonth,
    nextMonth,
    setMonth,
    setYear,
    setInternalYear,
    type,
    setType,
    paginateBy,
    minDate,
    maxDate,
    year,
    month,
    minYear,
    maxYear,
    rangeYears,
    amountOfMonths,
    typeRef,
    prevRef,
    nextRef,
    dayRefs,
  } = useCalendarContext()

  const onChangeType = useCallback(() => {
    switch (type) {
      case "month":
        setType("year", year, month.getMonth())

        break

      case "date":
        setType("month", year, month.getMonth())

        break

      default:
        break
    }
  }, [month, setType, type, year])

  const onPrev = useCallback(() => {
    switch (type) {
      case "year":
        setInternalYear((prev) => prev - 12)

        break

      case "month":
        setYear((prev) => prev - 1)

        break

      default:
        dayRefs.current.clear()
        setMonth((prev) => dayjs(prev).subtract(paginateBy, "months").toDate())

        break
    }
  }, [dayRefs, paginateBy, setInternalYear, setMonth, setYear, type])

  const onNext = useCallback(() => {
    switch (type) {
      case "year":
        setInternalYear((prev) => prev + 12)

        break

      case "month":
        setYear((prev) => prev + 1)

        break

      default:
        dayRefs.current.clear()
        setMonth((prev) => dayjs(prev).add(paginateBy, "months").toDate())

        break
    }
  }, [dayRefs, paginateBy, setInternalYear, setMonth, setYear, type])

  assignRef(typeRef, onChangeType)
  assignRef(prevRef, onPrev)
  assignRef(nextRef, onNext)

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const actions: Record<string, Function | undefined> = {
        ArrowDown: onChangeType,
        ArrowLeft: () => {
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return rangeYears[0] <= minYear

              case "month":
                return year <= minYear

              default:
                return !isMonthInRange({ date: prevMonth, minDate, maxDate })
            }
          })()

          if (!isDisabled) onPrev()
        },
        ArrowRight: () => {
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return maxYear <= rangeYears[rangeYears.length - 1]

              case "month":
                return maxYear <= year

              default:
                return !isMonthInRange({ date: nextMonth, minDate, maxDate })
            }
          })()

          if (!isDisabled) onNext()
        },
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [
      maxDate,
      maxYear,
      minDate,
      minYear,
      nextMonth,
      onNext,
      onPrev,
      onChangeType,
      prevMonth,
      rangeYears,
      type,
      year,
    ],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getControlProps: RequiredPropGetter<{ operation: "prev" | "next" }> =
    useCallback(
      ({ operation, ...props } = {}) => {
        const isPrev = operation === "prev"

        const isHidden = (() => {
          switch (type) {
            case "year":
              if (isPrev) {
                return rangeYears[0] <= minYear
              } else {
                return maxYear <= rangeYears[rangeYears.length - 1]
              }

            case "month":
              if (isPrev) {
                return year <= minYear
              } else {
                return maxYear <= year
              }

            default:
              if (typeof index !== "number") return

              if (isPrev) {
                return (
                  index !== 0 ||
                  !isMonthInRange({ date: prevMonth, minDate, maxDate })
                )
              } else {
                return (
                  index + 1 !== amountOfMonths ||
                  !isMonthInRange({ date: nextMonth, minDate, maxDate })
                )
              }
          }
        })()

        return {
          ...props,
          onClick: handlerAll(isPrev ? onPrev : onNext, props.onClick),
          tabIndex: -1,
          "data-hidden": dataAttr(isHidden),
          "data-disabled": dataAttr(isHidden),
          "aria-disabled": ariaAttr(isHidden),
        }
      },
      [
        amountOfMonths,
        index,
        maxDate,
        maxYear,
        minDate,
        minYear,
        nextMonth,
        onNext,
        onPrev,
        prevMonth,
        rangeYears,
        type,
        year,
      ],
    )

  const getLabelProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        pointerEvents: type !== "year" ? "auto" : "none",
        ...props,
        onClick: handlerAll(props.onClick, onChangeType),
        tabIndex: !!index ? -1 : 0,
      }
    },
    [index, onChangeType, type],
  )

  return { getContainerProps, getControlProps, getLabelProps }
}

export type UseCalendarHeaderReturn = ReturnType<typeof useCalendarHeader>

export const useYearList = () => {
  const {
    internalYear,
    setYear,
    setInternalYear,
    month,
    setMonth,
    setType,
    year,
    rangeYears,
    minYear,
    maxYear,
    yearRefs,
    value: selectedValue,
    selectMonthWith,
  } = useCalendarContext()

  const isMulti = isArray(selectedValue)
  const containerRef = useRef<HTMLDivElement>(null)
  const beforeInternalYear = useRef<number | null>(null)

  const onFocusPrev = useCallback(
    (targetIndex: number) => {
      if (targetIndex < 0) {
        if (rangeYears[0] <= minYear) return

        setInternalYear((prev) => {
          beforeInternalYear.current = prev

          return prev - 12
        })
      } else {
        const ref = yearRefs.current.get(targetIndex)

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [minYear, rangeYears, setInternalYear, yearRefs],
  )

  const onFocusNext = useCallback(
    (targetIndex: number) => {
      if (11 < targetIndex) {
        if (maxYear <= rangeYears[rangeYears.length - 1]) return

        setInternalYear((prev) => {
          beforeInternalYear.current = prev

          return prev + 12
        })
      } else {
        const ref = yearRefs.current.get(targetIndex)

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [maxYear, rangeYears, setInternalYear, yearRefs],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const focusedIndex = getFocused(yearRefs) ?? 0

      const actions: Record<string, Function | undefined> = {
        ArrowDown: () =>
          focusedIndex + 4 <= 11 ? onFocusNext(focusedIndex + 4) : {},
        ArrowUp: () =>
          focusedIndex - 4 >= 0 ? onFocusPrev(focusedIndex - 4) : {},
        ArrowLeft: () => onFocusPrev(focusedIndex - 1),
        ArrowRight: () => onFocusNext(focusedIndex + 1),
        Home: () => onFocusPrev(0),
        End: () => onFocusNext(11),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      disableAllTabIndex(yearRefs)
      action(ev)
    },
    [onFocusNext, onFocusPrev, yearRefs],
  )

  const onClick = useCallback(
    (ev: MouseEvent<Element>, year: number) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (isDisabled(ev.target as HTMLElement)) return

      setYear(year)
      setMonth((prev) => new Date(prev.setFullYear(year)))
      setType("month", year, month.getMonth())
    },
    [month, setMonth, setType, setYear],
  )

  useUpdateEffect(() => {
    if (typeof beforeInternalYear.current !== "number") return

    onShouldFocus(
      yearRefs,
      () => false,
      beforeInternalYear.current < internalYear,
    )

    beforeInternalYear.current = null
  }, [internalYear])

  useUnmountEffect(() => {
    yearRefs.current.clear()
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(ref, containerRef),
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<{ value: number; index: number }> =
    useCallback(
      ({ value, index, ...props } = {}, ref = null) => {
        const isControlled = typeof beforeInternalYear.current === "number"
        const isSelected =
          (selectMonthWith === "month"
            ? year
            : !isMulti
            ? selectedValue?.getFullYear()
            : selectedValue[0]?.getFullYear()) === value
        const isDisabled = value < minYear || value > maxYear

        yearRefs.current.set(index, createRef<HTMLButtonElement>())

        return {
          ref: mergeRefs(ref, yearRefs.current.get(index)),
          ...props,
          tabIndex: isControlled
            ? -1
            : !rangeYears.includes(year) && rangeYears[0] === value
            ? 0
            : isSelected
            ? 0
            : -1,
          "data-selected": dataAttr(isSelected),
          "data-value": value ?? "",
          "data-disabled": dataAttr(isDisabled),
          "aria-disabled": ariaAttr(isDisabled),
          onClick: handlerAll(props.onClick, (ev) => onClick(ev, value)),
        }
      },
      [
        isMulti,
        maxYear,
        minYear,
        onClick,
        rangeYears,
        selectMonthWith,
        selectedValue,
        year,
        yearRefs,
      ],
    )

  return { rangeYears, getContainerProps, getButtonProps }
}

export type UseYearListReturn = ReturnType<typeof useYearList>

export const useMonthList = () => {
  const {
    year,
    setYear,
    value: selectedValue,
    month,
    setMonth,
    setType,
    locale,
    monthFormat,
    minDate,
    maxDate,
    monthRefs,
    minYear,
    maxYear,
    selectMonthWith,
  } = useCalendarContext()

  const isMulti = isArray(selectedValue)
  const beforeYear = useRef<number | null>(null)
  const rangeMonths = getRangeMonths(locale, monthFormat)

  const onFocusPrev = useCallback(
    (targetMonth: number) => {
      if (targetMonth < 0) {
        if (year <= minYear) return

        setYear((prev) => {
          beforeYear.current = prev

          return prev - 1
        })
      } else {
        const ref = monthRefs.current.get(targetMonth)

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [minYear, monthRefs, setYear, year],
  )

  const onFocusNext = useCallback(
    (targetMonth: number) => {
      if (11 < targetMonth) {
        if (maxYear <= year) return

        setYear((prev) => {
          beforeYear.current = prev

          return prev + 1
        })
      } else {
        const ref = monthRefs.current.get(targetMonth)

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [maxYear, monthRefs, setYear, year],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const focusedMonth = getFocused(monthRefs) ?? 0

      const actions: Record<string, Function | undefined> = {
        ArrowDown: () =>
          focusedMonth + 3 <= 11 ? onFocusNext(focusedMonth + 3) : {},
        ArrowUp: () =>
          focusedMonth - 3 >= 0 ? onFocusPrev(focusedMonth - 3) : {},
        ArrowLeft: () => onFocusPrev(focusedMonth - 1),
        ArrowRight: () => onFocusNext(focusedMonth + 1),
        Home: () => onFocusPrev(0),
        End: () => onFocusNext(11),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      disableAllTabIndex(monthRefs)
      action(ev)
    },
    [monthRefs, onFocusNext, onFocusPrev],
  )

  const onClick = useCallback(
    (ev: MouseEvent<Element>, month: number) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (isDisabled(ev.target as HTMLElement)) return

      setMonth(new Date(year, month, 1))
      setType("date", year, month)
    },
    [year, setMonth, setType],
  )

  useUpdateEffect(() => {
    if (typeof beforeYear.current !== "number") return

    onShouldFocus(monthRefs, () => false, beforeYear.current < year)

    beforeYear.current = null
  }, [year])

  useUnmountEffect(() => {
    monthRefs.current.clear()
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<{ value: number }> = useCallback(
    ({ value, ...props } = {}, ref = null) => {
      const isControlled = typeof beforeYear.current === "number"
      const isSelectedYear =
        (selectMonthWith === "month"
          ? month.getFullYear()
          : !isMulti
          ? selectedValue?.getFullYear()
          : selectedValue[0]?.getFullYear()) === year
      const isSelected =
        isSelectedYear &&
        (selectMonthWith === "month"
          ? month.getMonth()
          : !isMulti
          ? selectedValue?.getMonth()
          : selectedValue[0]?.getMonth()) === value
      const isDisabled = !isMonthInRange({
        date: new Date(year, value),
        minDate,
        maxDate,
      })

      monthRefs.current.set(value, createRef<HTMLButtonElement>())

      return {
        ref: mergeRefs(ref, monthRefs.current.get(value)),
        ...props,
        tabIndex: isControlled
          ? -1
          : !isSelectedYear && value === 0
          ? 0
          : isSelected
          ? 0
          : -1,
        "data-selected": dataAttr(isSelected),
        "data-disabled": dataAttr(isDisabled),
        "data-value": value ?? "",
        "aria-disabled": ariaAttr(isDisabled),
        onClick: handlerAll(props.onClick, (ev) => onClick(ev, value)),
      }
    },
    [
      isMulti,
      maxDate,
      minDate,
      month,
      monthRefs,
      onClick,
      selectMonthWith,
      selectedValue,
      year,
    ],
  )

  return { rangeMonths, getContainerProps, getButtonProps }
}

export type UseMonthListReturn = ReturnType<typeof useMonthList>

export const useMonth = () => {
  const {
    value: selectedValue,
    setValue,
    month,
    setMonth,
    weekendDays,
    minDate,
    maxDate,
    disableOutsideDays,
    holidays,
    today,
    excludeDate,
    dayRefs,
    paginateBy,
    prevMonth,
    nextMonth,
    maxSelectedValues,
  } = useCalendarContext()

  const isMulti = isArray(selectedValue)

  const beforeMonth = useRef<Date | null>(null)

  const year = month.getFullYear()

  const onFocusPrev = useCallback(
    (targetIndex: number, targetMonth: number, targetDay: number) => {
      const [firstIndex, , firstDay] =
        getRangeFirstDay(dayRefs)?.split("-").map(Number) ?? []

      if (firstIndex === targetDay && targetDay < firstDay) {
        if (!isMonthInRange({ date: prevMonth, minDate, maxDate })) return
        dayRefs.current.clear()

        setMonth((prev) => {
          beforeMonth.current = prev

          return dayjs(prev).subtract(paginateBy, "months").toDate()
        })
      } else {
        const ref = dayRefs.current.get(
          `${targetIndex}-${targetMonth}-${targetDay}`,
        )

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [dayRefs, maxDate, minDate, paginateBy, prevMonth, setMonth],
  )

  const onFocusNext = useCallback(
    (targetIndex: number, targetMonth: number, targetDay: number) => {
      const [lastIndex, , lastDay] =
        getRangeLastDay(dayRefs)?.split("-").map(Number) ?? []

      if (lastIndex === targetIndex && lastDay < targetDay) {
        if (!isMonthInRange({ date: nextMonth, minDate, maxDate })) return
        dayRefs.current.clear()

        setMonth((prev) => {
          beforeMonth.current = prev

          return dayjs(prev).add(paginateBy, "months").toDate()
        })
      } else {
        const ref = dayRefs.current.get(
          `${targetIndex}-${targetMonth}-${targetDay}`,
        )

        if (ref?.current) {
          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [dayRefs, maxDate, minDate, nextMonth, paginateBy, setMonth],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const [focusedIndex, focusedMonth, focusedDay] = (
        getFocused(dayRefs) ?? ""
      )
        .split("-")
        .map(Number)
      const [firstIndex, firstMonth, firstDay] =
        getRangeFirstDay(dayRefs)?.split("-").map(Number) ?? []
      const [lastIndex, lastMonth, lastDay] =
        getRangeLastDay(dayRefs)?.split("-").map(Number) ?? []

      const actions: Record<string, Function | undefined> = {
        ArrowDown: () => {
          const lastOfMonthDay = dayjs(new Date(year, focusedMonth))
            .endOf("month")
            .date()

          if (focusedDay + 7 <= lastOfMonthDay)
            onFocusNext(focusedIndex, focusedMonth, focusedDay + 7)
        },
        ArrowUp: () => {
          const firstOfMonthDay = dayjs(new Date(year, focusedMonth))
            .startOf("month")
            .date()

          if (focusedDay - 7 >= firstOfMonthDay)
            onFocusNext(focusedIndex, focusedMonth, focusedDay - 7)
        },
        ArrowLeft: () => {
          if (focusedIndex !== firstIndex) {
            const firstOfMonthDay = dayjs(new Date(year, focusedMonth))
              .startOf("month")
              .date()

            if (firstOfMonthDay < focusedDay) {
              onFocusNext(focusedIndex, focusedMonth, focusedDay - 1)
            } else {
              const prevLastOfMonthDay = dayjs(new Date(year, focusedMonth))
                .subtract(1, "month")
                .endOf("month")
                .date()

              onFocusNext(
                focusedIndex - 1,
                focusedMonth - 1,
                prevLastOfMonthDay,
              )
            }
          } else {
            onFocusPrev(focusedIndex, focusedMonth, focusedDay - 1)
          }
        },
        ArrowRight: () => {
          if (focusedIndex !== lastIndex) {
            const lastOfMonthDay = dayjs(new Date(year, focusedMonth))
              .endOf("month")
              .date()

            if (focusedDay < lastOfMonthDay) {
              onFocusNext(focusedIndex, focusedMonth, focusedDay + 1)
            } else {
              const nextFirstOfMonthDay = dayjs(new Date(year, focusedMonth))
                .add(1, "month")
                .startOf("month")
                .date()

              onFocusNext(
                focusedIndex + 1,
                focusedMonth + 1,
                nextFirstOfMonthDay,
              )
            }
          } else {
            onFocusNext(focusedIndex, focusedMonth, focusedDay + 1)
          }
        },
        Home: () => onFocusPrev(firstIndex, firstMonth, firstDay),
        End: () => onFocusNext(lastIndex, lastMonth, lastDay),
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      disableAllTabIndex(dayRefs)
      action(ev)
    },
    [dayRefs, onFocusNext, onFocusPrev, year],
  )

  const onClick = useCallback(
    (ev: MouseEvent<Element>, newValue: Date) => {
      ev.preventDefault()
      ev.stopPropagation()

      const el = getEventRelatedTarget(ev)

      if (!el || isDisabled(el)) return

      setValue((prev) => {
        if (!isArray(prev)) {
          return newValue
        } else {
          const isSelected = prev.some((value) => isSameDate(value, newValue))

          if (!isSelected) {
            return [...prev, newValue]
          } else {
            return prev.filter((value) => !isSameDate(value, newValue))
          }
        }
      })
    },
    [setValue],
  )

  useUpdateEffect(() => {
    if (!(beforeMonth.current instanceof Date)) return

    onShouldFocus(
      dayRefs,
      () => false,
      beforeMonth.current.getMonth() < month.getMonth(),
    )

    beforeMonth.current = null
  }, [month.getMonth()])

  useUnmountEffect(() => {
    dayRefs.current.clear()
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<
    { value: Date; month: Date; index: number },
    { isSelected: boolean; isWeekend: boolean; isOutside: boolean }
  > = useCallback(
    ({ value, month, index, ...props } = {}, ref = null) => {
      const isControlled = beforeMonth.current instanceof Date
      const isHoliday = holidays.some((holiday) => isSameDate(holiday, value))
      const isOutside = !isSameMonth(month, value)
      const isWeekend = weekendDays.includes(value.getDay())
      const isSelected = !isMulti
        ? isSameDate(selectedValue, value)
        : selectedValue.some((selectedValue) =>
            isSameDate(selectedValue, value),
          )
      const isToday = today && isSameDate(new Date(), value)
      const isDisabled =
        isDisabledDate({
          value,
          minDate,
          maxDate,
          isOutside,
          excludeDate,
          disableOutsideDays,
        }) ||
        (!isSelected && isMulti && maxSelectedValues === selectedValue.length)

      const style: CSSProperties = {
        pointerEvents:
          isDisabled && isOutside && disableOutsideDays ? "none" : undefined,
        ...props.style,
      }

      const key = `${index}-${value.getMonth()}-${value.getDate()}`

      if (!isOutside) dayRefs.current.set(key, createRef<HTMLButtonElement>())

      return {
        isSelected,
        isWeekend,
        isOutside,
        style,
        ref: mergeRefs(ref, !isOutside ? dayRefs.current.get(key) : undefined),
        ...props,
        tabIndex:
          !!index || isControlled
            ? -1
            : (!(!isMulti
                ? isSameMonth(month, selectedValue)
                : selectedValue.some((selectedValue) =>
                    isSameMonth(month, selectedValue),
                  )) &&
                !isOutside &&
                value.getDate() === 1) ||
              isSelected
            ? 0
            : -1,
        "data-selected": dataAttr(isSelected),
        "data-outside": dataAttr(isOutside),
        "data-holiday": dataAttr(isHoliday),
        "data-weekend": dataAttr(isWeekend),
        "data-today": dataAttr(isToday),
        "data-value": value ?? "",
        "data-disabled": dataAttr(isDisabled),
        "aria-disabled": ariaAttr(isDisabled),
        onClick: handlerAll((ev) => onClick(ev, value), props.onClick),
      }
    },
    [
      dayRefs,
      disableOutsideDays,
      excludeDate,
      holidays,
      isMulti,
      maxDate,
      maxSelectedValues,
      minDate,
      onClick,
      selectedValue,
      today,
      weekendDays,
    ],
  )

  return { getContainerProps, getButtonProps }
}

export type UseMonthReturn = ReturnType<typeof useMonth>
