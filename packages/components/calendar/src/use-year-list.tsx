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
} from "@yamada-ui/utils"
import type { KeyboardEvent, MouseEvent } from "react"
import { createRef, useCallback, useRef } from "react"
import { disableAllTabIndex, getFocused, onShouldFocus } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

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
    __selectType,
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

  const getIsSelected = useCallback(
    (value: number) => {
      if (__selectType === "date" || __selectType === "year") {
        return year === value
      } else {
        const year = !isMulti
          ? selectedValue?.getFullYear()
          : selectedValue[0]?.getFullYear()

        return year === value
      }
    },
    [__selectType, isMulti, selectedValue, year],
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

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(ref, containerRef),
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getButtonProps: RequiredUIPropGetter<
    "button",
    { value: number; index: number }
  > = useCallback(
    ({ value, index, ...props }, ref = null) => {
      const isControlled = typeof beforeInternalYear.current === "number"
      const isSelected = getIsSelected(value)
      const isDisabled = value < minYear || value > maxYear

      yearRefs.current.set(index, createRef<HTMLButtonElement>())

      let tabIndex = -1

      if (isControlled) {
        tabIndex = -1
      } else if (!rangeYears.includes(year) && rangeYears[0] === value) {
        tabIndex = 0
      } else if (isSelected) {
        tabIndex = 0
      }

      return {
        isDisabled,
        ref: mergeRefs(ref, yearRefs.current.get(index)),
        ...props,
        tabIndex,
        "aria-selected": ariaAttr(isSelected),
        "data-selected": dataAttr(isSelected),
        "data-value": value ?? "",
        "data-disabled": dataAttr(isDisabled),
        "aria-disabled": ariaAttr(isDisabled),
        onClick: handlerAll(props.onClick, (ev) => onClick(ev, value)),
      }
    },
    [getIsSelected, minYear, maxYear, yearRefs, rangeYears, year, onClick],
  )

  return { rangeYears, getContainerProps, getButtonProps }
}

export type UseYearListReturn = ReturnType<typeof useYearList>
