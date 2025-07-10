import type { KeyboardEvent, MouseEvent } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import { createRef, useCallback, useRef } from "react"
import {
  ariaAttr,
  dataAttr,
  handlerAll,
  isArray,
  isDisabled,
  mergeRefs,
  useUnmountEffect,
  useUpdateEffect,
} from "../../utils"
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
    locale,
    maxDate,
    maxYear,
    minDate,
    minYear,
    month,
    monthFormat,
    monthRefs,
    setMonth,
    setType,
    setYear,
    value: selectedValue,
    year,
    yearFormat,
    __selectType,
  } = useCalendarContext()

  const multi = isArray(selectedValue)
  const beforeYear = useRef<null | number>(null)
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
        ArrowLeft: () => onFocusPrev(focusedMonth - 1),
        ArrowRight: () => onFocusNext(focusedMonth + 1),
        ArrowUp: () =>
          focusedMonth - 3 >= 0 ? onFocusPrev(focusedMonth - 3) : {},
        End: () => onFocusNext(11),
        Home: () => onFocusPrev(0),
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
      const selectedYear = !multi
        ? selectedValue?.getFullYear()
        : selectedValue[0]?.getFullYear()

      return selectedYear === year
    }
  }, [__selectType, multi, month, selectedValue, year])

  const getIsSelected = useCallback(
    (value: number) => {
      if (__selectType === "date") {
        return month.getMonth() === value
      } else {
        const month = !multi
          ? selectedValue?.getMonth()
          : selectedValue[0]?.getMonth()

        return month === value
      }
    },
    [__selectType, multi, month, selectedValue],
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
      "aria-label": label,
      role: "grid",
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [label, onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<
    { value: number } & HTMLProps<"button">,
    HTMLProps<"button">
  > = useCallback(
    ({ value, ...props }, ref = null) => {
      const controlled = typeof beforeYear.current === "number"
      const selectedYear = getIsSelectedYear()
      const selected = selectedYear && getIsSelected(value)
      const disabled = !isMonthInRange({
        date: new Date(year, value),
        maxDate,
        minDate,
      })

      monthRefs.current.set(value, createRef<HTMLButtonElement>())

      let tabIndex = -1

      if (controlled) {
        tabIndex = -1
      } else if (!selectedYear && value === 0) {
        tabIndex = 0
      } else if (selected) {
        tabIndex = 0
      }

      return {
        ref: mergeRefs(ref, monthRefs.current.get(value)),
        disabled,
        ...props,
        "aria-disabled": ariaAttr(disabled),
        "aria-selected": ariaAttr(selected),
        "data-disabled": dataAttr(disabled),
        "data-selected": dataAttr(selected),
        "data-value": value,
        tabIndex,
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

  return { label, rangeMonths, getButtonProps, getGridProps }
}

export type UseMonthListReturn = ReturnType<typeof useMonthList>
