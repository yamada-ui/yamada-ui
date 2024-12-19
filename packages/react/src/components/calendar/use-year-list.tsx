import type { KeyboardEvent, MouseEvent } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import { createRef, useCallback, useRef } from "react"
import {
  ariaAttr,
  dataAttr,
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
  onShouldFocus,
} from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

export const useYearList = () => {
  const {
    internalYear,
    locale,
    maxYear,
    minYear,
    month,
    rangeYears,
    setInternalYear,
    setMonth,
    setType,
    setYear,
    value: selectedValue,
    year,
    yearFormat,
    yearRefs,
    __selectType,
  } = useCalendarContext()

  const multi = isArray(selectedValue)
  const containerRef = useRef<HTMLDivElement>(null)
  const beforeInternalYear = useRef<null | number>(null)
  const minRangeYear = rangeYears[0] ?? minYear
  const maxRangeYear = rangeYears[rangeYears.length - 1] ?? maxYear
  const minYearLabel = getFormattedLabel(minRangeYear, locale, yearFormat)
  const maxYearLabel = getFormattedLabel(maxRangeYear, locale, yearFormat)

  const label = `${minYearLabel} - ${maxYearLabel}`
  const ariaLabel = `From ${minYearLabel} to ${maxYearLabel}`

  const onFocusPrev = useCallback(
    (targetIndex: number) => {
      if (targetIndex < 0) {
        if (minRangeYear <= minYear) return

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
    [minYear, minRangeYear, setInternalYear, yearRefs],
  )

  const onFocusNext = useCallback(
    (targetIndex: number) => {
      if (11 < targetIndex) {
        if (maxYear <= maxRangeYear) return

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
    [maxYear, maxRangeYear, setInternalYear, yearRefs],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      const focusedIndex = getFocused(yearRefs) ?? 0

      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: () =>
          focusedIndex + 4 <= 11 ? onFocusNext(focusedIndex + 4) : {},
        ArrowLeft: () => onFocusPrev(focusedIndex - 1),
        ArrowRight: () => onFocusNext(focusedIndex + 1),
        ArrowUp: () =>
          focusedIndex - 4 >= 0 ? onFocusPrev(focusedIndex - 4) : {},
        End: () => onFocusNext(11),
        Home: () => onFocusPrev(0),
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
    (ev: MouseEvent, year: number) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (isDisabled(ev.target as HTMLElement)) return

      setYear(year)
      setMonth((prev) => new Date(prev.setFullYear(year)))
      setType("month", year, month.getMonth())
    },
    [month, setMonth, setType, setYear],
  )

  const getIsSelected = useCallback(
    (value: number) => {
      if (__selectType === "date" || __selectType === "month") {
        return year === value
      } else {
        const year = !multi
          ? selectedValue?.getFullYear()
          : selectedValue[0]?.getFullYear()

        return year === value
      }
    },
    [__selectType, multi, selectedValue, year],
  )

  useUpdateEffect(() => {
    if (!isNumber(beforeInternalYear.current)) return

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

  const getGridProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(ref, containerRef),
      "aria-label": ariaLabel,
      role: "grid",
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [ariaLabel, onKeyDown],
  )

  const getButtonProps: RequiredPropGetter<
    { index: number; value: number } & Omit<HTMLProps<"button">, "value">,
    HTMLProps<"button">
  > = useCallback(
    ({ index, value, ...props }, ref = null) => {
      const controlled = isNumber(beforeInternalYear.current)
      const selected = getIsSelected(value)
      const disabled = value < minYear || value > maxYear

      yearRefs.current.set(index, createRef<HTMLButtonElement>())

      let tabIndex = -1

      if (controlled) {
        tabIndex = -1
      } else if (!rangeYears.includes(year) && rangeYears[0] === value) {
        tabIndex = 0
      } else if (selected) {
        tabIndex = 0
      }

      return {
        ref: mergeRefs(ref, yearRefs.current.get(index)),
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
    [getIsSelected, minYear, maxYear, yearRefs, rangeYears, year, onClick],
  )

  return { label, rangeYears, getButtonProps, getGridProps }
}

export type UseYearListReturn = ReturnType<typeof useYearList>
