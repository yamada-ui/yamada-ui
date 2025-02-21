import type { KeyboardEvent, MouseEvent } from "react"
import type { HTMLProps, RequiredPropGetter } from "../../core"
import type { Merge } from "../../utils"
import dayjs from "dayjs"
import { createRef, useCallback, useRef } from "react"
import {
  ariaAttr,
  dataAttr,
  getEventRelatedTarget,
  handlerAll,
  isArray,
  isDisabled,
  isNumber,
  mergeRefs,
  useUnmountEffect,
  useUpdateEffect,
} from "../../utils"
import {
  disableAllTabIndex,
  getFocused,
  getFormattedLabel,
  getRangeFirstDay,
  getRangeLastDay,
  isAfterDate,
  isDisabledDate,
  isInRange,
  isMonthInRange,
  isSameDate,
  isSameMonth,
  onShouldFocus,
  sortDates,
} from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

export const useMonth = () => {
  const {
    amountOfMonths,
    dateFormat,
    dayRefs,
    disableOutsideDays,
    enableRange,
    excludeDate,
    hiddenOutsideDays,
    holidays,
    hoveredValue,
    locale,
    maxDate,
    maxSelectValues,
    minDate,
    minSelectValues,
    month,
    nextMonth,
    paginateBy,
    prevMonth,
    setHoveredValue,
    setMonth,
    setValue,
    today,
    value: selectedValue,
    weekendDays,
  } = useCalendarContext()

  const beforeMonth = useRef<Date | null>(null)

  const year = month.getFullYear()
  const multi = isArray(selectedValue)
  const range = enableRange && multi
  const rangeSelectedValue = range
    ? sortDates(selectedValue.filter(Boolean) as Date[])
    : []
  const max = multi && maxSelectValues === selectedValue.length
  const reversed =
    !!rangeSelectedValue[0] && isAfterDate(rangeSelectedValue[0], hoveredValue)
  const startDate = range ? rangeSelectedValue[!reversed ? 0 : 1] : undefined
  const endDate = range ? rangeSelectedValue[!reversed ? 1 : 0] : undefined
  const maybeStartDate = startDate ?? hoveredValue
  const maybeEndDate = endDate ?? hoveredValue
  const shouldBetween = rangeSelectedValue.length >= 1 && !!maybeEndDate
  const shouldHovered = rangeSelectedValue.length === 1
  const hasAmountOfMonths = amountOfMonths >= 2
  const minSelectEndDate = isNumber(maxSelectValues)
    ? dayjs(!reversed ? maybeStartDate : maybeEndDate)
        .subtract(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const maxSelectEndDate = isNumber(maxSelectValues)
    ? dayjs(!reversed ? maybeStartDate : maybeEndDate)
        .add(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const minSelectStartDate = isNumber(minSelectValues)
    ? dayjs(!reversed ? maybeStartDate : maybeEndDate)
        .subtract(minSelectValues - 1, "day")
        .toDate()
    : undefined
  const maxSelectStartDate = isNumber(minSelectValues)
    ? dayjs(!reversed ? maybeStartDate : maybeEndDate)
        .add(minSelectValues - 1, "day")
        .toDate()
    : undefined
  const invalidRangeDates =
    isNumber(maxSelectValues) &&
    Math.abs(dayjs(startDate).diff(endDate, "day")) >= maxSelectValues
  const minTrulySelectEndDate =
    shouldHovered || invalidRangeDates ? minSelectEndDate : undefined
  const maxTrulySelectEndDate =
    shouldHovered || invalidRangeDates ? maxSelectEndDate : undefined
  const minTrulySelectStartDate =
    shouldHovered || invalidRangeDates ? minSelectStartDate : undefined
  const maxTrulySelectStartDate =
    shouldHovered || invalidRangeDates ? maxSelectStartDate : undefined

  const onFocusPrev = useCallback(
    (targetIndex: number, targetMonth: number, targetDay: number) => {
      const [firstIndex, , firstDay] =
        getRangeFirstDay(dayRefs)?.split("-").map(Number) ?? []

      if (firstIndex === targetDay && firstDay && targetDay < firstDay) {
        if (!isMonthInRange({ date: prevMonth, maxDate, minDate })) return
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
          if (shouldHovered)
            setHoveredValue(dayjs(ref.current.dataset.value).toDate())

          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [
      shouldHovered,
      dayRefs,
      maxDate,
      minDate,
      paginateBy,
      prevMonth,
      setMonth,
      setHoveredValue,
    ],
  )

  const onFocusNext = useCallback(
    (targetIndex: number, targetMonth: number, targetDay: number) => {
      const [lastIndex, , lastDay] =
        getRangeLastDay(dayRefs)?.split("-").map(Number) ?? []

      if (lastIndex === targetIndex && lastDay && lastDay < targetDay) {
        if (!isMonthInRange({ date: nextMonth, maxDate, minDate })) return
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
          if (shouldHovered)
            setHoveredValue(dayjs(ref.current.dataset.value).toDate())

          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [
      shouldHovered,
      dayRefs,
      maxDate,
      minDate,
      nextMonth,
      paginateBy,
      setMonth,
      setHoveredValue,
    ],
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

      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: () => {
          if (!isNumber(focusedMonth)) return

          const lastOfMonthDay = dayjs(new Date(year, focusedMonth))
            .endOf("month")
            .date()

          if (focusedDay && focusedDay + 7 <= lastOfMonthDay)
            onFocusNext(focusedIndex ?? -1, focusedMonth, focusedDay + 7)
        },
        ArrowLeft: () => {
          if (focusedIndex !== firstIndex) {
            if (!isNumber(focusedMonth)) return

            const firstOfMonthDay = dayjs(new Date(year, focusedMonth))
              .startOf("month")
              .date()

            if (focusedDay && firstOfMonthDay < focusedDay) {
              onFocusNext(focusedIndex ?? -1, focusedMonth, focusedDay - 1)
            } else {
              const prevLastOfMonthDay = dayjs(new Date(year, focusedMonth))
                .subtract(1, "month")
                .endOf("month")
                .date()

              onFocusNext(
                focusedIndex ? focusedIndex - 1 : -1,
                focusedMonth - 1,
                prevLastOfMonthDay,
              )
            }
          } else if (isNumber(focusedMonth) && isNumber(focusedDay)) {
            onFocusPrev(focusedIndex ?? -1, focusedMonth, focusedDay - 1)
          }
        },
        ArrowRight: () => {
          if (focusedIndex !== lastIndex) {
            if (!isNumber(focusedMonth)) return

            const lastOfMonthDay = dayjs(new Date(year, focusedMonth))
              .endOf("month")
              .date()

            if (focusedDay && focusedDay < lastOfMonthDay) {
              onFocusNext(focusedIndex ?? -1, focusedMonth, focusedDay + 1)
            } else {
              const nextFirstOfMonthDay = dayjs(new Date(year, focusedMonth))
                .add(1, "month")
                .startOf("month")
                .date()

              onFocusNext(
                focusedIndex ? focusedIndex + 1 : -1,
                focusedMonth + 1,
                nextFirstOfMonthDay,
              )
            }
          } else if (isNumber(focusedMonth) && isNumber(focusedDay)) {
            onFocusNext(focusedIndex ?? -1, focusedMonth, focusedDay + 1)
          }
        },
        ArrowUp: () => {
          if (!isNumber(focusedMonth)) return

          const firstOfMonthDay = dayjs(new Date(year, focusedMonth))
            .startOf("month")
            .date()

          if (focusedDay && focusedDay - 7 >= firstOfMonthDay)
            onFocusNext(focusedIndex ?? -1, focusedMonth, focusedDay - 7)
        },
        End: () =>
          isNumber(lastMonth) && isNumber(lastDay)
            ? onFocusNext(lastIndex ?? -1, lastMonth, lastDay)
            : undefined,
        Home: () =>
          isNumber(firstMonth) && isNumber(firstDay)
            ? onFocusPrev(firstIndex ?? -1, firstMonth, firstDay)
            : undefined,
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
    (ev: MouseEvent, newValue: Date) => {
      ev.preventDefault()
      ev.stopPropagation()

      const el = getEventRelatedTarget(ev)

      if (!el || isDisabled(el)) return

      setValue((prev) => {
        if (!isArray(prev)) {
          return newValue
        } else if (range) {
          prev = prev.filter(Boolean) as Date[]

          const exceeded = prev.length >= 2

          if (!exceeded) {
            const selected = prev.some((value) => isSameDate(value, newValue))

            return selected ? [] : sortDates([...(prev as Date[]), newValue])
          } else {
            return [newValue]
          }
        } else {
          const selected = prev.some((value) => isSameDate(value, newValue))

          if (!selected) {
            return [...prev, newValue] as Date[]
          } else {
            return prev.filter(
              (value) => !isSameDate(value, newValue),
            ) as Date[]
          }
        }
      })
    },
    [setValue, range],
  )

  const onPointerEnter = useCallback(
    (value: Date) => {
      if (shouldHovered) setHoveredValue(value)
    },
    [shouldHovered, setHoveredValue],
  )

  useUpdateEffect(() => {
    if (!(beforeMonth.current instanceof Date)) return

    onShouldFocus(dayRefs, () => false, beforeMonth.current < month)

    beforeMonth.current = null
  }, [month.getMonth()])

  useUnmountEffect(() => {
    dayRefs.current.clear()
  })

  const getGridProps: RequiredPropGetter<
    Merge<HTMLProps, { month: Date }>,
    HTMLProps
  > = useCallback(
    ({ month, ...props }) => {
      const label = getFormattedLabel(month, locale, dateFormat)

      return {
        "aria-label": label,
        "aria-multiselectable": ariaAttr(multi),
        role: "grid",
        ...props,
        onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
      }
    },
    [onKeyDown, multi, locale, dateFormat],
  )

  const getButtonProps: RequiredPropGetter<
    Merge<HTMLProps<"button">, { index: number; month: Date; value: Date }>,
    Merge<
      HTMLProps<"button">,
      {
        between: boolean
        end: boolean
        hidden: boolean
        outside: boolean
        selected: boolean
        start: boolean
        weekend: boolean
      }
    >
  > = useCallback(
    ({ index, month, value, ...props }, ref = null) => {
      const controlled = beforeMonth.current instanceof Date
      const holiday = holidays.some((holiday) => isSameDate(holiday, value))
      const outside = !isSameMonth(month, value)
      const weekend = weekendDays.includes(value.getDay())
      const hidden = hiddenOutsideDays && outside
      const selected = !multi
        ? isSameDate(selectedValue, value)
        : selectedValue.some((selectedValue) =>
            isSameDate(selectedValue, value),
          )
      const trulySelected = selected && (!hasAmountOfMonths || !outside)
      const selectedMonth = !multi
        ? isSameMonth(month, selectedValue)
        : selectedValue.some((selectedValue) =>
            isSameMonth(month, selectedValue),
          )
      const _today = today && isSameDate(new Date(), value)
      const disabled = isDisabledDate({
        disableOutsideDays,
        endDate,
        excludeDate,
        maxDate: maxTrulySelectEndDate ?? maxDate,
        maxTrulySelectStartDate,
        maybeEndDate,
        maybeStartDate,
        minDate: minTrulySelectEndDate ?? minDate,
        minTrulySelectStartDate,
        outside,
        startDate,
        value,
      })
      const trulyDisabled = disabled || (!selected && max)
      const firstDate = value.getDate() === 1
      const shouldFocus = (!selectedMonth && !outside && firstDate) || selected
      const start =
        range &&
        isSameDate(maybeStartDate, value) &&
        !isSameDate(maybeEndDate, value)
      const end =
        range &&
        isSameDate(maybeEndDate, value) &&
        !isSameDate(maybeStartDate, value)
      const trulyStart = start && (!hasAmountOfMonths || !outside)
      const trulyEnd = end && (!hasAmountOfMonths || !outside)
      const between =
        shouldBetween &&
        !isSameDate(maybeStartDate, maybeEndDate) &&
        !hidden &&
        isInRange(value, maybeStartDate, maybeEndDate)

      const key = `${index}-${value.getMonth()}-${value.getDate()}`

      if (!outside) dayRefs.current.set(key, createRef<HTMLButtonElement>())

      return {
        ref: mergeRefs(ref, !outside ? dayRefs.current.get(key) : undefined),
        between,
        end,
        hidden,
        outside,
        selected,
        start,
        weekend,
        ...props,
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-selected": ariaAttr(trulySelected),
        "data-between": dataAttr(between),
        "data-disabled": dataAttr(trulyDisabled),
        "data-end": dataAttr(trulyEnd),
        "data-holiday": dataAttr(holiday),
        "data-outside": dataAttr(outside),
        "data-selected": dataAttr(trulySelected),
        "data-start": dataAttr(trulyStart),
        "data-today": dataAttr(_today),
        "data-value": value.getDate(),
        "data-weekend": dataAttr(weekend),
        tabIndex: !!index || controlled ? -1 : shouldFocus ? 0 : -1,
        onClick: handlerAll((ev) => onClick(ev, value), props.onClick),
        onPointerEnter: handlerAll(
          () => onPointerEnter(value),
          props.onPointerEnter,
        ),
      }
    },
    [
      holidays,
      weekendDays,
      hiddenOutsideDays,
      multi,
      selectedValue,
      hasAmountOfMonths,
      today,
      minDate,
      maxDate,
      minTrulySelectEndDate,
      maxTrulySelectEndDate,
      minTrulySelectStartDate,
      maxTrulySelectStartDate,
      startDate,
      endDate,
      excludeDate,
      disableOutsideDays,
      max,
      range,
      maybeStartDate,
      maybeEndDate,
      shouldBetween,
      dayRefs,
      onClick,
      onPointerEnter,
    ],
  )

  return { getButtonProps, getGridProps }
}

export type UseMonthReturn = ReturnType<typeof useMonth>
