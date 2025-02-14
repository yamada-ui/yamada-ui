import type { Dayjs } from "dayjs"
import type { Dispatch, ForwardedRef, RefObject, SetStateAction } from "react"
import type { CSSUIObject, PropGetter } from "../../core"
import dayjs from "dayjs"
import { useCallback, useRef, useState } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import { useTheme } from "../../providers/theme-provider"
import {
  createContext,
  isArray,
  useCallbackRef,
  useUpdateEffect,
} from "../../utils"
import { getRangeYears, isSameDate, onShouldFocus } from "./calendar-utils"

export type MaybeValue = [Date?, Date?] | Date | Date[] | undefined

export type MaybeDate = Date | Dayjs

export interface CalendarContext
  extends Pick<
      Required<UseCalendarProps>,
      | "__selectType"
      | "amountOfMonths"
      | "dateFormat"
      | "disableOutsideDays"
      | "enableRange"
      | "firstDayOfWeek"
      | "hiddenOutsideDays"
      | "holidays"
      | "locale"
      | "month"
      | "monthFormat"
      | "paginateBy"
      | "today"
      | "type"
      | "weekdayFormat"
      | "weekendDays"
      | "withControls"
      | "withHeader"
      | "withLabel"
      | "withWeekdays"
      | "yearFormat"
    >,
    Pick<
      UseCalendarProps,
      | "excludeDate"
      | "maxDate"
      | "maxSelectValues"
      | "minDate"
      | "minSelectValues"
      | "nextRef"
      | "prevRef"
      | "typeRef"
    > {
  dayRefs: RefObject<Map<string, RefObject<HTMLButtonElement | null>>>
  hoveredValue: Date
  internalYear: number
  maxYear: number
  minYear: number
  monthRefs: RefObject<Map<number, RefObject<HTMLButtonElement | null>>>
  nextMonth: Date
  prevMonth: Date
  rangeYears: number[]
  setHoveredValue: Dispatch<SetStateAction<Date | undefined>>
  setInternalYear: Dispatch<SetStateAction<number>>
  setMonth: Dispatch<SetStateAction<Date>>
  setType: (
    type: "date" | "month" | "year",
    year?: number,
    month?: number,
  ) => void
  setValue: Dispatch<SetStateAction<MaybeValue>>
  setYear: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: MaybeValue
  year: number
  yearRefs: RefObject<Map<number, RefObject<HTMLButtonElement | null>>>
}

export const [CalendarProvider, useCalendarContext] =
  createContext<CalendarContext>({
    name: "CalendarContext",
    errorMessage: `useCalendarContext returned is 'undefined'. Seems you forgot to wrap the components in "<Calendar />"`,
  })

export interface UseCalendarProps<Y extends MaybeValue = Date> {
  /**
   * The type of the calendar.
   */
  type?: "date" | "month" | "year"
  /**
   * The number of months to display.
   *
   * @default 1
   */
  amountOfMonths?: number
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'MMMM YYYY'
   */
  dateFormat?: string
  /**
   * The initial month of the calendar.
   *
   * @default 'new Date()'
   */
  defaultMonth?: Date
  /**
   * The initial type of the calendar.
   */
  defaultType?: "date" | "month" | "year"
  /**
   * The initial value of the calendar.
   */
  defaultValue?: Y
  /**
   * If `true`, outside days will be disabled.
   *
   * @default false
   */
  disableOutsideDays?: boolean
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
   * Callback function to determine whether the day should be disabled.
   */
  excludeDate?: (date: Date) => boolean
  /**
   * Define the first day of the week.
   *
   * @default 'monday'
   */
  firstDayOfWeek?: "monday" | "sunday"
  /**
   * If `true`, outside days will be hidden.
   */
  hiddenOutsideDays?: boolean
  /**
   * Define holidays.
   */
  holidays?: Date[]
  /**
   * The locale of the calendar.
   * Check the docs to see the locale of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/i18n/instance-locale
   * @default 'en-US'
   */
  locale?: string
  /**
   * The maximum possible date.
   */
  maxDate?: Date
  /**
   * The maximum selectable value.
   */
  maxSelectValues?: number
  /**
   * The minimum possible date.
   */
  minDate?: Date
  /**
   * The minimum selectable value.
   */
  minSelectValues?: number
  /**
   * The month of the calendar.
   */
  month?: Date
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'MM'
   */
  monthFormat?: string
  /**
   * Ref to a next function.
   */
  nextRef?: ForwardedRef<() => undefined | void>
  /**
   * The number of months to paginate.
   *
   * @default 1
   */
  paginateBy?: number
  /**
   * Ref to a previous function.
   */
  prevRef?: ForwardedRef<() => undefined | void>
  /**
   * If `true`, highlight today.
   *
   * @default false
   */
  today?: boolean
  /**
   * Ref to a type function.
   */
  typeRef?: ForwardedRef<() => undefined | void>
  /**
   * The value of the calendar.
   */
  value?: Y
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'dd'
   */
  weekdayFormat?: string
  /**
   * Define weekend days.
   *
   * @default '[0, 6]'
   */
  weekendDays?: number[]
  /**
   * If `true`, display the calendar control buttons.
   *
   * @default true
   */
  withControls?: boolean
  /**
   * If `true`, display the calendar header.
   *
   * @default true
   */
  withHeader?: boolean
  /**
   * If `true`, display the calendar label button.
   *
   * @default true
   */
  withLabel?: boolean
  /**
   * If `true`, display the calendar weekdays.
   *
   * @default true
   */
  withWeekdays?: boolean
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY'
   */
  yearFormat?: string
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: Y) => void
  /**
   * The callback invoked when month state changes.
   */
  onChangeMonth?: (value: Date) => void
  /**
   * The callback invoked when type state changes.
   */
  onChangeType?: (
    type: "date" | "month" | "year",
    year?: number,
    month?: number,
  ) => void
  /**
   * Changes the judgment of the currently selected year and month.
   * This is an internal utility primarily used by `MonthPicker` and `YearPicker`.
   *
   * @private
   */
  __selectType?: "date" | "month" | "year"
}

export const useCalendar = <Y extends MaybeValue = Date>({
  type: typeProp,
  amountOfMonths = 1,
  dateFormat = "MMMM YYYY",
  defaultMonth,
  defaultType,
  defaultValue,
  disableOutsideDays = false,
  enableMultiple = false,
  enableRange = false,
  excludeDate,
  firstDayOfWeek = "monday",
  hiddenOutsideDays = false,
  holidays = [],
  locale,
  maxDate,
  maxSelectValues,
  minDate,
  minSelectValues,
  month: monthProp,
  monthFormat = "MMM",
  nextRef,
  paginateBy = amountOfMonths,
  prevRef,
  today = false,
  typeRef,
  value: valueProp,
  weekdayFormat = "dd",
  weekendDays = [0, 6],
  withControls = true,
  withHeader = true,
  withLabel = true,
  withWeekdays = true,
  yearFormat = "YYYY",
  onChange: onChangeProp,
  onChangeMonth: onChangeMonthProp,
  onChangeType: onChangeTypeProp,
  __selectType = "date",
  ...rest
}: UseCalendarProps<Y>) => {
  const { locale: defaultLocale } = useI18n()
  const { theme } = useTheme()

  locale ??= theme.__config?.date?.locale ?? defaultLocale

  const [type, onChangeType] = useControllableState({
    defaultValue: defaultType ?? "date",
    value: typeProp,
  })

  const setType = useCallbackRef(
    (type: "date" | "month" | "year", year?: number, month?: number) => {
      onChangeType(type)
      onChangeTypeProp?.(type, year, month)
    },
    [],
  )

  const prevValueRef = useRef<undefined | Y>(undefined)
  const [value, setValue] = useControllableState({
    defaultValue:
      defaultValue ??
      (enableMultiple || enableRange ? ([] as Date[] as Y) : undefined),
    value: valueProp,
    onChange: onChangeProp,
  })

  const [hoveredValue, setHoveredValue] = useState<Date | undefined>(undefined)

  const multi = isArray(value)
  const range = enableRange && multi
  const resolvedValue = multi || range ? (value.filter(Boolean) as Date[]) : []

  if (range) disableOutsideDays = false

  const [month, setMonth] = useControllableState({
    defaultValue: () => {
      if (!multi && value) {
        defaultMonth ??= new Date(new Date(value).setDate(1))
      } else if ((multi || range) && resolvedValue.length) {
        defaultMonth ??= new Date(new Date(resolvedValue.at(-1)!).setDate(1))
      } else {
        defaultMonth ??= new Date(new Date().setDate(1))
      }

      return defaultMonth
    },
    value: monthProp,
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

    if (range && isArray(prevValueRef.current) && isArray(valueProp)) {
      const prevValue = prevValueRef.current.filter(Boolean)
      const nextValue = valueProp.filter(Boolean)

      if (prevValue.length === 1) {
        const reverse = !isSameDate(prevValue[0], nextValue[0])

        if (!reverse) {
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

    if (multi || range) return

    const year = value.getFullYear()

    if (type === "year") {
      setYear(year)
      setInternalYear((prev) => {
        const contain = rangeYears.includes(year)

        if (contain) {
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
    if (!range) return

    if (value.length !== 1) setHoveredValue(undefined)
  }, [range, value])

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

          if (!multi) {
            return value?.getMonth() === month && value?.getDate() === date
          } else {
            return value.some(
              (value) =>
                value?.getMonth() === month && value?.getDate() === date,
            )
          }
        })

        break
    }
  }, [type])

  useUpdateEffect(() => {
    setValue(valueProp as Y)
  }, [valueProp])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...rest,
      ...props,
      ref,
    }),
    [rest],
  )

  return {
    type,
    amountOfMonths,
    dateFormat,
    dayRefs,
    disableOutsideDays,
    enableRange,
    excludeDate,
    firstDayOfWeek,
    hiddenOutsideDays,
    holidays,
    hoveredValue,
    internalYear,
    locale,
    maxDate,
    maxSelectValues,
    maxYear,
    minDate,
    minSelectValues,
    minYear,
    month,
    monthFormat,
    monthRefs,
    nextMonth,
    nextRef,
    paginateBy,
    prevMonth,
    prevRef,
    rangeYears,
    setHoveredValue,
    setInternalYear,
    setMonth,
    setType,
    setValue,
    setYear,
    today,
    typeRef,
    value,
    weekdayFormat,
    weekendDays,
    withControls,
    withHeader,
    withLabel,
    withWeekdays,
    year,
    yearFormat,
    yearRefs,
    getContainerProps,
    __selectType,
  }
}

export type UseCalendarReturn = ReturnType<typeof useCalendar>
