import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import {
  cx,
  dataAttr,
  filterUndefined,
  isBoolean,
  isNull,
  isUndefined,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import type { FC } from "react"
import { useMemo } from "react"
import type { CalendarHeaderProps } from "./calendar-header"
import { CalendarHeader } from "./calendar-header"
import { getFormattedLabel, getMonthDays, getWeekdays } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"
import { useMonth } from "./use-month"

type MonthOptions = {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps<"div">
  /**
   * Props for calendar month table element.
   */
  tableProps?: HTMLUIProps<"table"> & {
    thead?: HTMLUIProps<"thead">
    tbody?: HTMLUIProps<"tbody">
    tr?: HTMLUIProps<"tr">
    th?: HTMLUIProps<"th">
    td?: HTMLUIProps<"td">
  }
  /**
   * Props for calendar weekday element.
   */
  weekdayProps?: HTMLUIProps<"div"> & { component?: FC<WeekdayProps> }
  /**
   * Props for calendar day button element.
   */
  dayProps?: ButtonProps & { component?: FC<DayProps> }
}

export type MonthProps = HTMLUIProps<"div"> &
  Omit<CalendarHeaderProps, "label" | "index"> &
  MonthOptions

export const Month: FC<MonthProps> = ({
  className,
  headerProps,
  tableProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  weekdayProps,
  dayProps,
  ...rest
}) => {
  const {
    month: selectedMonth,
    amountOfMonths,
    withWeekdays,
    firstDayOfWeek,
    locale,
    weekdayFormat,
    dateFormat,
    styles,
  } = useCalendarContext()
  const { getContainerProps, getButtonProps } = useMonth()

  const { component: customWeekday = Weekday, ...computedWeekdayProps } =
    weekdayProps ?? {}
  const { component: customDay = Day, ...computedDayProps } = dayProps ?? {}
  const {
    thead: theadProps,
    tbody: tbodyProps,
    tr: trProps,
    th: thProps,
    td: tdProps,
    ...computedTableProps
  } = tableProps ?? {}

  const weekdays = useMemo(
    () => getWeekdays(locale, firstDayOfWeek, weekdayFormat),
    [firstDayOfWeek, locale, weekdayFormat],
  )

  const w = rest.w ?? rest.width
  const minW = rest.minW ?? rest.minWidth
  const maxW = rest.maxW ?? rest.maxWidth
  const h = rest.h ?? rest.height
  const minH = rest.minH ?? rest.minHeight
  const maxH = rest.maxH ?? rest.maxHeight

  return (
    <>
      {Array(amountOfMonths)
        .fill(0)
        .map((_, index) => {
          const month = dayjs(selectedMonth).add(index, "months").toDate()
          const days = getMonthDays(month, firstDayOfWeek)

          return (
            <ui.div
              key={index}
              __css={{ ...styles.content }}
              {...filterUndefined(rest)}
            >
              <CalendarHeader
                {...{
                  ...headerProps,
                  label: getFormattedLabel(month, locale, dateFormat),
                  index,
                  labelProps,
                  controlProps,
                  prevProps,
                  nextProps,
                }}
              />

              <ui.table
                className={cx("ui-calendar__month", className)}
                __css={{
                  w: styles.content?.w ?? styles.content?.width,
                  minW: styles.content?.minW ?? styles.content?.minWidth,
                  maxW: styles.content?.maxW ?? styles.content?.maxWidth,
                  h: styles.content?.h ?? styles.content?.height,
                  minH: styles.content?.minH ?? styles.content?.minHeight,
                  maxH: styles.content?.maxH ?? styles.content?.maxHeight,
                  ...styles.date,
                }}
                {...getContainerProps(
                  filterUndefined({
                    w,
                    minW,
                    maxW,
                    h,
                    minH,
                    maxH,
                    ...computedTableProps,
                  }),
                )}
              >
                {withWeekdays ? (
                  <ui.thead {...theadProps}>
                    <ui.tr __css={{ ...styles.row }} {...trProps}>
                      {weekdays.map((weekday, index) => (
                        <ui.th
                          key={index}
                          __css={{
                            fontWeight: "normal",
                            ...styles.cell,
                          }}
                          {...thProps}
                        >
                          <ui.div
                            className="ui-calendar__month-weekday"
                            __css={{
                              w: "100%",
                              display: "flex",
                              ...styles.weekday,
                            }}
                            {...computedWeekdayProps}
                          >
                            {customWeekday({ weekday, index })}
                          </ui.div>
                        </ui.th>
                      ))}
                    </ui.tr>
                  </ui.thead>
                ) : null}

                <ui.tbody {...tbodyProps}>
                  {days.map((cells, row) => {
                    return (
                      <ui.tr key={row} __css={{ ...styles.row }} {...trProps}>
                        {cells.map((date, col) => {
                          const {
                            isSelected,
                            isWeekend,
                            isOutside,
                            isStart,
                            isEnd,
                            isBetween,
                            isHidden,
                            ...props
                          } = getButtonProps({
                            ...computedDayProps,
                            month,
                            value: date,
                            index,
                          })

                          const day = customDay({
                            date,
                            row,
                            col,
                            weekday: weekdays[col],
                            isSelected,
                            isWeekend,
                            isOutside,
                          })

                          const isDisplayed =
                            !isNull(day) && !isUndefined(day) && !isBoolean(day)

                          return (
                            <ui.td
                              key={col}
                              __css={{ ...styles.cell }}
                              data-start={dataAttr(isStart)}
                              data-end={dataAttr(isEnd)}
                              data-between={dataAttr(isBetween)}
                              {...tdProps}
                            >
                              <Button
                                className="ui-calendar__month-day"
                                variant="ghost"
                                __css={{
                                  minW: "auto",
                                  h: "auto",
                                  p: 0,
                                  fontSize: undefined,
                                  fontWeight: "normal",
                                  ...(isHidden || !isDisplayed
                                    ? { display: "none" }
                                    : {}),
                                  ...styles.day,
                                }}
                                {...props}
                              >
                                {day}
                              </Button>
                            </ui.td>
                          )
                        })}
                      </ui.tr>
                    )
                  })}
                </ui.tbody>
              </ui.table>
            </ui.div>
          )
        })}
    </>
  )
}

export type WeekdayProps = { weekday: string; index: number }

export const Weekday: FC<WeekdayProps> = ({ weekday }) => {
  return (
    <ui.span className="ui-calendar__month-weekday-label">{weekday}</ui.span>
  )
}

export type DayProps = {
  date: Date
  weekday: string
  isSelected: boolean
  isWeekend: boolean
  isOutside: boolean
  row: number
  col: number
}

export const Day: FC<DayProps> = ({ date }) => {
  return (
    <ui.span className="ui-calendar__month-day-label">{date.getDate()}</ui.span>
  )
}
