import type { UIPropGetter, RequiredUIPropGetter } from "@yamada-ui/core"
import {
  isArray,
  handlerAll,
  dataAttr,
  ariaAttr,
  mergeRefs,
  useUpdateEffect,
  useUnmountEffect,
  isDisabled,
  getEventRelatedTarget,
  isNumber,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { KeyboardEvent, MouseEvent } from "react"
import { createRef, useCallback, useRef } from "react"
import {
  disableAllTabIndex,
  getFocused,
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
    value: selectedValue,
    setValue,
    month,
    setMonth,
    weekendDays,
    minDate,
    maxDate,
    disableOutsideDays,
    hiddenOutsideDays,
    amountOfMonths,
    holidays,
    today,
    excludeDate,
    dayRefs,
    paginateBy,
    prevMonth,
    nextMonth,
    maxSelectValues,
    enableRange,
    hoveredValue,
    setHoveredValue,
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
  const minBetweenDate = isNumber(maxSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .subtract(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const maxBetweenDate = isNumber(maxSelectValues)
    ? dayjs(!isReversed ? maybeStartDate : maybeEndDate)
        .add(maxSelectValues - 1, "day")
        .toDate()
    : undefined
  const isInValidRangeDates =
    isNumber(maxSelectValues) &&
    Math.abs(dayjs(startDate).diff(endDate, "day")) >= maxSelectValues
  const minTrulyBetweenDate =
    isShouldHovered || isInValidRangeDates ? minBetweenDate : undefined
  const maxTrulyBetweenDate =
    isShouldHovered || isInValidRangeDates ? maxBetweenDate : undefined

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
          if (isShouldHovered)
            setHoveredValue(dayjs(ref.current.dataset["value"]).toDate())

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
          if (isShouldHovered)
            setHoveredValue(dayjs(ref.current.dataset["value"]).toDate())

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

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getButtonProps: RequiredUIPropGetter<
    "button",
    { value: Date; month: Date; index: number },
    {
      isSelected: boolean
      isWeekend: boolean
      isOutside: boolean
      isStart: boolean
      isEnd: boolean
      isBetween: boolean
      isHidden: boolean
    }
  > = useCallback(
    ({ value, month, index, ...props }, ref = null) => {
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
        value,
        minDate: minTrulyBetweenDate ?? minDate,
        maxDate: maxTrulyBetweenDate ?? maxDate,
        isOutside,
        excludeDate,
        disableOutsideDays,
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
        isSelected,
        isWeekend,
        isOutside,
        isStart,
        isEnd,
        isBetween,
        isHidden,
        ref: mergeRefs(ref, !isOutside ? dayRefs.current.get(key) : undefined),
        ...props,
        tabIndex: !!index || isControlled ? -1 : isShouldFocus ? 0 : -1,
        "data-selected": dataAttr(isTrulySelected),
        "data-outside": dataAttr(isOutside),
        "data-between": dataAttr(isBetween),
        "data-start": dataAttr(isTrulyStart),
        "data-end": dataAttr(isTrulyEnd),
        "data-holiday": dataAttr(isHoliday),
        "data-weekend": dataAttr(isWeekend),
        "data-today": dataAttr(isToday),
        "data-value": value ?? "",
        "data-disabled": dataAttr(isTrulyDisabled),
        "aria-selected": ariaAttr(isTrulySelected),
        "aria-disabled": ariaAttr(isTrulyDisabled),
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
      minTrulyBetweenDate,
      minDate,
      maxTrulyBetweenDate,
      maxDate,
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

  return { getContainerProps, getButtonProps }
}

export type UseMonthReturn = ReturnType<typeof useMonth>
