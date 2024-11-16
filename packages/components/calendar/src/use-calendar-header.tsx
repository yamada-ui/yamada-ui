import type { HTMLProps, PropGetter, RequiredPropGetter } from "@yamada-ui/core"
import type { KeyboardEvent } from "react"
import { ariaAttr, assignRef, dataAttr, handlerAll } from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useCallback } from "react"
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
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return minRangeYear <= minYear

              case "month":
                return year <= minYear

              default:
                return !isMonthInRange({ date: prevMonth, maxDate, minDate })
            }
          })()

          if (!isDisabled) onPrev()
        },
        ArrowRight: () => {
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return maxYear <= maxRangeYear

              case "month":
                return maxYear <= year

              default:
                return !isMonthInRange({ date: nextMonth, maxDate, minDate })
            }
          })()

          if (!isDisabled) onNext()
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
      const isPrev = operation === "prev"

      const ariaLabel = `Go to ${isPrev ? "previous" : "next"} ${
        type === "date" ? "month" : "year"
      }`

      const isHidden = (() => {
        switch (type) {
          case "year":
            if (isPrev) {
              return minRangeYear <= minYear
            } else {
              return maxYear <= maxRangeYear
            }

          case "month":
            if (isPrev) {
              return year <= minYear
            } else {
              return maxYear <= year
            }

          default:
            if (typeof index !== "number") return

            if (isPrev) {
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
        "aria-disabled": ariaAttr(isHidden),
        "data-disabled": dataAttr(isHidden),
        "data-hidden": dataAttr(isHidden),
        tabIndex: -1,
        onClick: handlerAll(isPrev ? onPrev : onNext, props.onClick),
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
