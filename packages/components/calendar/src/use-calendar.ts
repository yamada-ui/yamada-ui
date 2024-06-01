import type { CSSUIObject, UIPropGetter } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import {
  createContext,
  isArray,
  useUpdateEffect,
  useCallbackRef,
} from "@yamada-ui/utils"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import type {
  Dispatch,
  ForwardedRef,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react"
import { useCallback, useRef, useState } from "react"
import { getRangeYears, isSameDate, onShouldFocus } from "./calendar-utils"

export type MaybeValue = Date | Date[] | [Date?, Date?] | undefined

export type MaybeDate = Date | Dayjs

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
  | "hiddenOutsideDays"
  | "locale"
  | "weekdayFormat"
  | "yearFormat"
  | "monthFormat"
  | "dateFormat"
  | "weekendDays"
  | "holidays"
  | "today"
  | "__selectType"
  | "enableRange"
> &
  Pick<
    UseCalendarProps,
    | "minDate"
    | "maxDate"
    | "excludeDate"
    | "typeRef"
    | "prevRef"
    | "nextRef"
    | "maxSelectValues"
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
    hoveredValue: Date
    setHoveredValue: Dispatch<SetStateAction<Date | undefined>>
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
   *
   * @default false
   */
  disableOutsideDays?: boolean
  /**
   * If `true`, outside days will be hidden.
   */
  hiddenOutsideDays?: boolean
  /**
   * The locale of the calendar.
   * Check the docs to see the locale of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/i18n/instance-locale
   * @default 'en'
   */
  locale?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'dd'
   */
  weekdayFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY'
   */
  yearFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'MM'
   */
  monthFormat?: string
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
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
  maxSelectValues?: number
  /**
   * If `true`, enables date multiple selection.
   *
   * @default false
   */
  enableMultiple?: boolean
  /**
   * If `true`, enables date range selection.
   *
   * @default false
   */
  enableRange?: boolean
  /**
   * Changes the judgment of the currently selected year and month.
   * This is an internal utility primarily used by `MonthPicker` and `YearPicker`.
   *
   * @private
   */
  __selectType?: "year" | "month" | "date"
}

export const useCalendar = <Y extends MaybeValue = Date>({
  type: typeProp,
  defaultType,
  onChangeType: onChangeTypeProp,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  month: monthProp,
  defaultMonth,
  onChangeMonth: onChangeMonthProp,
  firstDayOfWeek = "monday",
  amountOfMonths = 1,
  paginateBy = amountOfMonths,
  withWeekdays = true,
  disableOutsideDays = false,
  hiddenOutsideDays = false,
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
  maxSelectValues,
  enableMultiple = false,
  enableRange = false,
  __selectType = "date",
  ...rest
}: UseCalendarProps<Y>) => {
  const { theme } = useTheme()

  locale ??= theme.__config?.date?.locale ?? "en"

  const [type, onChangeType] = useControllableState({
    value: typeProp,
    defaultValue: defaultType ?? "date",
  })

  const setType = useCallbackRef(
    (type: "year" | "month" | "date", year?: number, month?: number) => {
      onChangeType(type)
      onChangeTypeProp?.(type, year, month)
    },
    [],
  )

  const prevValueRef = useRef<Y | undefined>(undefined)
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue:
      defaultValue ??
      (enableMultiple || enableRange ? ([] as Date[] as Y) : undefined),
    onChange: onChangeProp,
  })

  const [hoveredValue, setHoveredValue] = useState<Date | undefined>(undefined)

  const isMulti = isArray(value)
  const isRange = enableRange && isMulti
  const resolvedValue =
    isMulti || isRange ? (value.filter(Boolean) as Date[]) : []

  if (isRange) disableOutsideDays = false

  const [month, setMonth] = useControllableState({
    value: monthProp,
    defaultValue: () => {
      if (!isMulti && value) {
        defaultMonth ??= new Date(new Date(value).setDate(1))
      } else if ((isMulti || isRange) && resolvedValue.length) {
        defaultMonth ??= new Date(new Date(resolvedValue.at(-1)!).setDate(1))
      } else {
        defaultMonth ??= new Date(new Date().setDate(1))
      }

      return defaultMonth
    },
    onChange: onChangeMonthProp,
    onUpdate: (prev, next) => !isSameDate(prev, next),
  })

  const defaultYear = month.getFullYear()
  const [year, setYear] = useState<number>(defaultYear)
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

    if (isRange && isArray(prevValueRef.current) && isArray(valueProp)) {
      const prevValue = prevValueRef.current.filter(Boolean)
      const nextValue = valueProp.filter(Boolean)

      if (prevValue.length === 1) {
        const isReverse = !isSameDate(prevValue[0], nextValue[0])

        if (!isReverse) {
          if (nextValue[1])
            defaultMonth = new Date(new Date(nextValue[1]).setDate(1))
        } else {
          if (nextValue[0])
            defaultMonth = new Date(new Date(nextValue[0]).setDate(1))
        }
      }
    }

    setMonth(defaultMonth)
    setYear(defaultMonth.getFullYear())
    setInternalYear(defaultMonth.getFullYear())

    prevValueRef.current = valueProp
  }, [valueProp])

  useUpdateEffect(() => {
    if (!value || amountOfMonths > 1) return

    if (isMulti || isRange) return

    if (!value) return

    const year = value.getFullYear()

    if (type === "year") {
      setYear(year)
      setInternalYear((prev) => {
        const isContain = rangeYears.includes(year)

        if (isContain) {
          return prev
        } else {
          return year
        }
      })
    } else {
      setMonth(value)
    }
  }, [value, amountOfMonths])

  useUpdateEffect(() => {
    if (!isRange) return

    if (value.length !== 1) setHoveredValue(undefined)
  }, [isRange, value])

  useUpdateEffect(() => {
    if (__selectType === "year") return

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

          if (!isMulti) {
            return value?.getMonth() === month && value?.getDate() === date
          } else {
            return value?.some(
              (value) =>
                value?.getMonth() === month && value.getDate() === date,
            )
          }
        })

        break
    }
  }, [type])

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
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
    hoveredValue,
    setHoveredValue,
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
    hiddenOutsideDays,
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
    maxSelectValues,
    __selectType,
    enableRange,
  }
}

export type UseCalendarReturn = ReturnType<typeof useCalendar>
