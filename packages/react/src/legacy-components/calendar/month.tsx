import type { ButtonProps } from "../../components/button"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import type { CalendarHeaderProps } from "./calendar-header"
import dayjs from "dayjs"
import { useMemo } from "react"
import { Button } from "../../components/button"
import { ui } from "../../core"
import {
  cx,
  dataAttr,
  filterUndefined,
  isBoolean,
  isNull,
  isUndefined,
} from "../../utils"
import { CalendarHeader } from "./calendar-header"
import { getFormattedLabel, getMonthDays, getWeekdays } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"
import { useMonth } from "./use-month"

interface MonthTableProps extends HTMLUIProps<"table"> {
  tbody?: HTMLUIProps<"tbody">
  td?: HTMLUIProps<"td">
  th?: HTMLUIProps<"th">
  thead?: HTMLUIProps<"thead">
  tr?: HTMLUIProps<"tr">
}

interface MonthOptions {
  /**
   * Props for calendar day button element.
   */
  dayProps?: { component?: FC<DayProps> } & ButtonProps
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps
  /**
   * Props for calendar month table element.
   */
  tableProps?: MonthTableProps
  /**
   * Props for calendar weekday element.
   */
  weekdayProps?: { component?: FC<WeekdayProps> } & HTMLUIProps
}

export interface MonthProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "index" | "label">,
    MonthOptions {}

export const Month: FC<MonthProps> = ({
  className,
  controlProps,
  dayProps,
  headerProps,
  labelProps,
  nextProps,
  prevProps,
  tableProps,
  weekdayProps,
  ...rest
}) => {
  const {
    amountOfMonths,
    dateFormat,
    firstDayOfWeek,
    locale,
    month: selectedMonth,
    styles,
    weekdayFormat,
    withWeekdays,
  } = useCalendarContext()
  const { getButtonProps, getGridProps } = useMonth()

  const { component: customWeekday = Weekday, ...computedWeekdayProps } =
    weekdayProps ?? {}
  const { component: customDay = Day, ...computedDayProps } = dayProps ?? {}
  const {
    tbody: tbodyProps,
    td: tdProps,
    th: thProps,
    thead: theadProps,
    tr: trProps,
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

          const formattedLabel = getFormattedLabel(month, locale, dateFormat)

          return (
            <ui.div
              key={index}
              __css={{ ...styles.content }}
              {...filterUndefined(rest)}
            >
              <CalendarHeader
                {...{
                  ...headerProps,
                  index,
                  label: formattedLabel,
                  controlProps,
                  labelProps,
                  nextProps,
                  prevProps,
                }}
              />

              <ui.table
                className={cx("ui-calendar__month", className)}
                __css={{
                  h: styles.content?.h ?? styles.content?.height,
                  maxH: styles.content?.maxH ?? styles.content?.maxHeight,
                  maxW: styles.content?.maxW ?? styles.content?.maxWidth,
                  minH: styles.content?.minH ?? styles.content?.minHeight,
                  minW: styles.content?.minW ?? styles.content?.minWidth,
                  w: styles.content?.w ?? styles.content?.width,
                  ...styles.date,
                }}
                {...getGridProps({
                  month,
                  ...filterUndefined({
                    h,
                    maxH,
                    maxW,
                    minH,
                    minW,
                    w,
                    ...computedTableProps,
                  }),
                })}
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
                            className="ui-calendar__month__weekday"
                            __css={{
                              display: "flex",
                              w: "100%",
                              ...styles.weekday,
                            }}
                            {...computedWeekdayProps}
                          >
                            {customWeekday({ index, weekday })}
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
                            between,
                            end,
                            hidden,
                            outside,
                            selected,
                            start,
                            weekend,
                            ...props
                          } = getButtonProps({
                            ...computedDayProps,
                            index,
                            month,
                            value: date,
                          })

                          const day = customDay({
                            col,
                            date,
                            outside,
                            row,
                            selected,
                            weekday: weekdays[col]!,
                            weekend,
                          })

                          const displayed =
                            !isNull(day) && !isUndefined(day) && !isBoolean(day)

                          const css: CSSUIObject = {
                            display:
                              hidden || !displayed ? "none" : "inline-flex",
                            fontSize: undefined,
                            fontWeight: "normal",
                            h: "auto",
                            minW: "auto",
                            p: 0,
                            _ripple: {
                              display: "block",
                            },
                            ...styles.day,
                          }

                          return (
                            <ui.td
                              key={col}
                              data-between={dataAttr(between)}
                              data-end={dataAttr(end)}
                              data-start={dataAttr(start)}
                              __css={{ ...styles.cell }}
                              {...tdProps}
                            >
                              <Button
                                className="ui-calendar__month__day"
                                variant="unstyled"
                                __css={css}
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

Month.displayName = "Month"
Month.__ui__ = "Month"

export interface WeekdayProps {
  index: number
  weekday: string
}

export const Weekday: FC<WeekdayProps> = ({ weekday }) => {
  return (
    <ui.span className="ui-calendar__month__weekday__label">{weekday}</ui.span>
  )
}

Weekday.displayName = "Weekday"
Weekday.__ui__ = "Weekday"

export interface DayProps {
  col: number
  date: Date
  outside: boolean
  row: number
  selected: boolean
  weekday: string
  weekend: boolean
}

export const Day: FC<DayProps> = ({ date }) => {
  return (
    <ui.span className="ui-calendar__month__day__label">
      {date.getDate()}
    </ui.span>
  )
}

Day.displayName = "Day"
Day.__ui__ = "Day"
