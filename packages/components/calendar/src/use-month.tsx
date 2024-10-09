import type { HTMLProps, RequiredPropGetter } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type { KeyboardEvent, MouseEvent } from "react"
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
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import { createRef, useCallback, useRef } from "react"
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
  const isMulti = isArray(selectedValue)
  const isRange = enableRange && isMulti
  const rangeSelectedValue = isRange
    ? sortDates(selectedValue.filter(Boolean) as Date[])
    : []
  const isMax = isMulti && maxSelectValues === selectedValue.length
  const isReversed =
    !!rangeSelectedValue[0] && isAfterDate(rangeSelectedValue[0], hoveredValue)
  const startDate = isRange
    ? rangeSelectedValue[!isReversed ? 0 : 1]
    : undefined
  const endDate = isRange ? rangeSelectedValue[!isReversed ? 1 : 0] : undefined
  const maybeStartDate = startDate ?? hoveredValue
  const maybeEndDate = endDate ?? hoveredValue
  const isShouldBetween = rangeSelectedValue.length >= 1 && !!maybeEndDate
  const isShouldHovered = rangeSelectedValue.length === 1
  const hasAmountOfMonths = amountOfMonths >= 2
  const minSelectEndDate = isNumber(maxSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .subtract(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const maxSelectEndDate = isNumber(maxSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .add(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const minSelectStartDate = isNumber(minSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .subtract(minSelectValues - 1, "day")
        .toDate()
    : undefined
  const maxSelectStartDate = isNumber(minSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .add(minSelectValues - 1, "day")
        .toDate()
    : undefined
  const isInValidRangeDates =
    isNumber(maxSelectValues) &&
    Math.abs(dayjs(startDate).diff(endDate, "day")) >= maxSelectValues
  const minTrulySelectEndDate =
    isShouldHovered || isInValidRangeDates ? minSelectEndDate : undefined
  const maxTrulySelectEndDate =
    isShouldHovered || isInValidRangeDates ? maxSelectEndDate : undefined
  const minTrulySelectStartDate =
    isShouldHovered || isInValidRangeDates ? minSelectStartDate : undefined
  const maxTrulySelectStartDate =
    isShouldHovered || isInValidRangeDates ? maxSelectStartDate : undefined

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
          if (isShouldHovered)
            setHoveredValue(dayjs(ref.current.dataset.value).toDate())

          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [
      isShouldHovered,
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
          if (isShouldHovered)
            setHoveredValue(dayjs(ref.current.dataset.value).toDate())

          ref.current.focus()
          ref.current.tabIndex = 0
        }
      }
    },
    [
      isShouldHovered,
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
        } else if (isRange) {
          prev = prev.filter(Boolean) as Date[]

          const isExceeded = prev.length >= 2

          if (!isExceeded) {
            const isSelected = prev.some((value) => isSameDate(value, newValue))

            return isSelected ? [] : sortDates([...(prev as Date[]), newValue])
          } else {
            return [newValue]
          }
        } else {
          const isSelected = prev.some((value) => isSameDate(value, newValue))

          if (!isSelected) {
            return [...prev, newValue] as Date[]
          } else {
            return prev.filter(
              (value) => !isSameDate(value, newValue),
            ) as Date[]
          }
        }
      })
    },
    [setValue, isRange],
  )

  const onPointerEnter = useCallback(
    (value: Date) => {
      if (isShouldHovered) setHoveredValue(value)
    },
    [isShouldHovered, setHoveredValue],
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
        "aria-multiselectable": ariaAttr(isMulti),
        role: "grid",
        ...props,
        onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
      }
    },
    [onKeyDown, isMulti, locale, dateFormat],
  )

  const getButtonProps: RequiredPropGetter<
    Merge<HTMLProps<"button">, { index: number; month: Date; value: Date }>,
    Merge<
      HTMLProps<"button">,
      {
        isBetween: boolean
        isEnd: boolean
        isHidden: boolean
        isOutside: boolean
        isSelected: boolean
        isStart: boolean
        isWeekend: boolean
      }
    >
  > = useCallback(
    ({ index, month, value, ...props }, ref = null) => {
      const isControlled = beforeMonth.current instanceof Date
      const isHoliday = holidays.some((holiday) => isSameDate(holiday, value))
      const isOutside = !isSameMonth(month, value)
      const isWeekend = weekendDays.includes(value.getDay())
      const isHidden = hiddenOutsideDays && isOutside
      const isSelected = !isMulti
        ? isSameDate(selectedValue, value)
        : selectedValue.some((selectedValue) =>
            isSameDate(selectedValue, value),
          )
      const isTrulySelected = isSelected && (!hasAmountOfMonths || !isOutside)
      const isSelectedMonth = !isMulti
        ? isSameMonth(month, selectedValue)
        : selectedValue.some((selectedValue) =>
            isSameMonth(month, selectedValue),
          )
      const isToday = today && isSameDate(new Date(), value)
      const isDisabled = isDisabledDate({
        disableOutsideDays,
        endDate,
        excludeDate,
        isOutside,
        maxDate: maxTrulySelectEndDate ?? maxDate,
        maxTrulySelectStartDate,
        maybeEndDate,
        maybeStartDate,
        minDate: minTrulySelectEndDate ?? minDate,
        minTrulySelectStartDate,
        startDate,
        value,
      })
      const isTrulyDisabled = isDisabled || (!isSelected && isMax)
      const isFirstDate = value.getDate() === 1
      const isShouldFocus =
        (!isSelectedMonth && !isOutside && isFirstDate) || isSelected
      const isStart =
        isRange &&
        isSameDate(maybeStartDate, value) &&
        !isSameDate(maybeEndDate, value)
      const isEnd =
        isRange &&
        isSameDate(maybeEndDate, value) &&
        !isSameDate(maybeStartDate, value)
      const isTrulyStart = isStart && (!hasAmountOfMonths || !isOutside)
      const isTrulyEnd = isEnd && (!hasAmountOfMonths || !isOutside)
      const isBetween =
        isShouldBetween &&
        !isSameDate(maybeStartDate, maybeEndDate) &&
        !isHidden &&
        isInRange(value, maybeStartDate, maybeEndDate)

      const key = `${index}-${value.getMonth()}-${value.getDate()}`

      if (!isOutside) dayRefs.current.set(key, createRef<HTMLButtonElement>())

      return {
        ref: mergeRefs(ref, !isOutside ? dayRefs.current.get(key) : undefined),
        isBetween,
        isEnd,
        isHidden,
        isOutside,
        isSelected,
        isStart,
        isWeekend,
        ...props,
        "aria-disabled": ariaAttr(isTrulyDisabled),
        "aria-selected": ariaAttr(isTrulySelected),
        "data-between": dataAttr(isBetween),
        "data-disabled": dataAttr(isTrulyDisabled),
        "data-end": dataAttr(isTrulyEnd),
        "data-holiday": dataAttr(isHoliday),
        "data-outside": dataAttr(isOutside),
        "data-selected": dataAttr(isTrulySelected),
        "data-start": dataAttr(isTrulyStart),
        "data-today": dataAttr(isToday),
        "data-value": value.getDate(),
        "data-weekend": dataAttr(isWeekend),
        tabIndex: !!index || isControlled ? -1 : isShouldFocus ? 0 : -1,
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
      isMulti,
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
      isMax,
      isRange,
      maybeStartDate,
      maybeEndDate,
      isShouldBetween,
      dayRefs,
      onClick,
      onPointerEnter,
    ],
  )

  return { getButtonProps, getGridProps }
}

export type UseMonthReturn = ReturnType<typeof useMonth>
