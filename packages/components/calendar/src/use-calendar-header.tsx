import type { UIPropGetter, RequiredUIPropGetter } from "@yamada-ui/core"
import { handlerAll, dataAttr, ariaAttr, assignRef } from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { KeyboardEvent } from "react"
import { useCallback } from "react"
import { isMonthInRange } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"

export type UseCalendarHeaderProps = {
  index?: number
}

export const useCalendarHeader = ({ index }: UseCalendarHeaderProps) => {
  const {
    prevMonth,
    nextMonth,
    setMonth,
    setYear,
    setInternalYear,
    type,
    setType,
    paginateBy,
    minDate,
    maxDate,
    year,
    month,
    minYear,
    maxYear,
    rangeYears,
    amountOfMonths,
    typeRef,
    prevRef,
    nextRef,
    dayRefs,
  } = useCalendarContext()

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
      const actions: Record<string, Function | undefined> = {
        ArrowDown: onChangeType,
        ArrowLeft: () => {
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return rangeYears[0] <= minYear

              case "month":
                return year <= minYear

              default:
                return !isMonthInRange({ date: prevMonth, minDate, maxDate })
            }
          })()

          if (!isDisabled) onPrev()
        },
        ArrowRight: () => {
          const isDisabled = (() => {
            switch (type) {
              case "year":
                return maxYear <= rangeYears[rangeYears.length - 1]

              case "month":
                return maxYear <= year

              default:
                return !isMonthInRange({ date: nextMonth, minDate, maxDate })
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
      maxDate,
      maxYear,
      minDate,
      minYear,
      nextMonth,
      onNext,
      onPrev,
      onChangeType,
      prevMonth,
      rangeYears,
      type,
      year,
    ],
  )

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}) => ({
      ...props,
      onKeyDown: handlerAll(onKeyDown, props.onKeyDown),
    }),
    [onKeyDown],
  )

  const getControlProps: RequiredUIPropGetter<
    "button",
    { operation: "prev" | "next" },
    { "aria-label": string }
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
              return rangeYears[0] <= minYear
            } else {
              return maxYear <= rangeYears[rangeYears.length - 1]
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
                !isMonthInRange({ date: prevMonth, minDate, maxDate })
              )
            } else {
              return (
                index + 1 !== amountOfMonths ||
                !isMonthInRange({ date: nextMonth, minDate, maxDate })
              )
            }
        }
      })()

      return {
        "aria-label": ariaLabel,
        ...props,
        onClick: handlerAll(isPrev ? onPrev : onNext, props.onClick),
        tabIndex: -1,
        "data-hidden": dataAttr(isHidden),
        "data-disabled": dataAttr(isHidden),
        "aria-disabled": ariaAttr(isHidden),
      }
    },
    [
      amountOfMonths,
      index,
      maxDate,
      maxYear,
      minDate,
      minYear,
      nextMonth,
      onNext,
      onPrev,
      prevMonth,
      rangeYears,
      type,
      year,
    ],
  )

  const getLabelProps: UIPropGetter<"button"> = useCallback(
    (props = {}) => {
      return {
        pointerEvents: type !== "year" ? "auto" : "none",
        ...props,
        onClick: handlerAll(props.onClick, onChangeType),
        tabIndex: !!index ? -1 : 0,
        "aria-live": "polite",
      }
    },
    [index, onChangeType, type],
  )

  return { getContainerProps, getControlProps, getLabelProps }
}

export type UseCalendarHeaderReturn = ReturnType<typeof useCalendarHeader>
