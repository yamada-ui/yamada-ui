import type { HTMLProps, PropGetter, RequiredPropGetter } from "@yamada-ui/core"
import {
  isArray,
  handlerAll,
  dataAttr,
  ariaAttr,
  mergeRefs,
  useUpdateEffect,
  useUnmountEffect,
  isDisabled,
} from "@yamada-ui/utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { createRef, useCallback, useRef } from "react"
import {
  disableAllTabIndex,
  getFocused,
  getFormattedLabel,
  getRangeMonths,
  isMonthInRange,
  onShouldFocus,
} from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

export const useMonthList = () => {
  const {
    year,
    setYear,
    value: selectedValue,
    month,
    setMonth,
    setType,
    locale,
    yearFormat,
    monthFormat,
    minDate,
    maxDate,
    monthRefs,
    minYear,
    maxYear,
    __selectType,
  } = useCalendarContext()

  const isMulti = isArray(selectedValue)
  const beforeYear = useRef<number | null>(null)
  const rangeMonths = getRangeMonths(locale, monthFormat)
  const label = getFormattedLabel(year, locale, yearFormat)

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

      const actions: { [key: string]: Function | undefined } = {
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
    (ev: MouseEvent, month: number) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (isDisabled(ev.target as HTMLElement)) return

      setMonth(new Date(year, month, 1))
      setType("date", year, month)
    },
    [year, setMonth, setType],
  )

  const getIsSelectedYear = useCallback(() => {
    if (__selectType === "date") {
      return month.getFullYear() === year
    } else {
      const selectedYear = !isMulti
        ? selectedValue?.getFullYear()
        : selectedValue[0]?.getFullYear()

      return selectedYear === year
    }
  }, [__selectType, isMulti, month, selectedValue, year])

  const getIsSelected = useCallback(
    (value: number) => {
      if (__selectType === "date") {
        return month.getMonth() === value
      } else {
        const month = !isMulti
          ? selectedValue?.getMonth()
          : selectedValue[0]?.getMonth()

        return month === value
      }
    },
    [__selectType, isMulti, month, selectedValue],
  )

  useUpdateEffect(() => {
    if (typeof beforeYear.current !== "number") return

    onShouldFocus(monthRefs, () => false, beforeYear.current < year)

    beforeYear.current = null
  }, [year])

  useUnmountEffect(() => {
    monthRefs.current.clear()
  })

  const getGridProps: PropGetter = useCallback(
    (props = {}) => ({
      role: "grid",
      "aria-label": label,
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [label, onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<
    HTMLProps<"button"> & { value: number },
    HTMLProps<"button">
  > = useCallback(
    ({ value, ...props }, ref = null) => {
      const isControlled = typeof beforeYear.current === "number"
      const isSelectedYear = getIsSelectedYear()
      const isSelected = isSelectedYear && getIsSelected(value)
      const isDisabled = !isMonthInRange({
        date: new Date(year, value),
        minDate,
        maxDate,
      })

      monthRefs.current.set(value, createRef<HTMLButtonElement>())

      let tabIndex = -1

      if (isControlled) {
        tabIndex = -1
      } else if (!isSelectedYear && value === 0) {
        tabIndex = 0
      } else if (isSelected) {
        tabIndex = 0
      }

      return {
        disabled: isDisabled,
        ref: mergeRefs(ref, monthRefs.current.get(value)),
        ...props,
        tabIndex,
        "aria-selected": ariaAttr(isSelected),
        "data-selected": dataAttr(isSelected),
        "data-disabled": dataAttr(isDisabled),
        "data-value": value ?? "",
        "aria-disabled": ariaAttr(isDisabled),
        onClick: handlerAll(props.onClick, (ev) => onClick(ev, value)),
      }
    },
    [
      getIsSelectedYear,
      getIsSelected,
      year,
      minDate,
      maxDate,
      monthRefs,
      onClick,
    ],
  )

  return { label, rangeMonths, getGridProps, getButtonProps }
}

export type UseMonthListReturn = ReturnType<typeof useMonthList>
