import type { KeyboardEvent } from "react"
import type { HTMLProps, PropGetter, RequiredPropGetter } from "../../core"
import dayjs from "dayjs"
import { useCallback } from "react"
import { ariaAttr, assignRef, dataAttr, handlerAll } from "../../utils"
import { isMonthInRange } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

export interface UseCalendarHeaderProps {
  index?: number
}

export const useCalendarHeader = ({ index }: UseCalendarHeaderProps) => {
  const {
    type,
    amountOfMonths,
    dayRefs,
    maxDate,
    maxYear,
    minDate,
    minYear,
    month,
    nextMonth,
    nextRef,
    paginateBy,
    prevMonth,
    prevRef,
    rangeYears,
    setInternalYear,
    setMonth,
    setType,
    setYear,
    typeRef,
    year,
  } = useCalendarContext()

  const minRangeYear = rangeYears[0] ?? minYear
  const maxRangeYear = rangeYears[rangeYears.length - 1] ?? maxYear

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
      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: onChangeType,
        ArrowLeft: () => {
          const disabled = (() => {
            switch (type) {
              case "year":
                return minRangeYear <= minYear

              case "month":
                return year <= minYear

              default:
                return !isMonthInRange({ date: prevMonth, maxDate, minDate })
            }
          })()

          if (!disabled) onPrev()
        },
        ArrowRight: () => {
          const disabled = (() => {
            switch (type) {
              case "year":
                return maxYear <= maxRangeYear

              case "month":
                return maxYear <= year

              default:
                return !isMonthInRange({ date: nextMonth, maxDate, minDate })
            }
          })()

          if (!disabled) onNext()
        },
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [
      onChangeType,
      onPrev,
      type,
      minRangeYear,
      minYear,
      year,
      prevMonth,
      maxDate,
      minDate,
      onNext,
      maxYear,
      maxRangeYear,
      nextMonth,
    ],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getControlProps: RequiredPropGetter<
    { operation: "next" | "prev" } & HTMLProps<"button">,
    HTMLProps<"button">
  > = useCallback(
    ({ operation, ...props }) => {
      const prev = operation === "prev"

      const ariaLabel = `Go to ${prev ? "previous" : "next"} ${
        type === "date" ? "month" : "year"
      }`

      const hidden = (() => {
        switch (type) {
          case "year":
            if (prev) {
              return minRangeYear <= minYear
            } else {
              return maxYear <= maxRangeYear
            }

          case "month":
            if (prev) {
              return year <= minYear
            } else {
              return maxYear <= year
            }

          default:
            if (typeof index !== "number") return

            if (prev) {
              return (
                index !== 0 ||
                !isMonthInRange({ date: prevMonth, maxDate, minDate })
              )
            } else {
              return (
                index + 1 !== amountOfMonths ||
                !isMonthInRange({ date: nextMonth, maxDate, minDate })
              )
            }
        }
      })()

      return {
        "aria-label": ariaLabel,
        ...props,
        "aria-disabled": ariaAttr(hidden),
        "data-disabled": dataAttr(hidden),
        "data-hidden": dataAttr(hidden),
        tabIndex: -1,
        onClick: handlerAll(prev ? onPrev : onNext, props.onClick),
      }
    },
    [
      amountOfMonths,
      index,
      maxDate,
      maxRangeYear,
      maxYear,
      minDate,
      minRangeYear,
      minYear,
      nextMonth,
      onNext,
      onPrev,
      prevMonth,
      type,
      year,
    ],
  )

  const getLabelProps: PropGetter<"button"> = useCallback(
    (props = {}) => {
      return {
        as: type !== "year" ? "button" : "span",
        pointerEvents: type !== "year" ? "auto" : "none",
        ...props,
        "aria-live": type !== "year" ? "polite" : undefined,
        tabIndex: !!index ? -1 : 0,
        onClick: handlerAll(props.onClick, onChangeType),
      }
    },
    [index, onChangeType, type],
  )

  return { getContainerProps, getControlProps, getLabelProps }
}

export type UseCalendarHeaderReturn = ReturnType<typeof useCalendarHeader>
