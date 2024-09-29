import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { CSSUIObject, HTMLUIProps, FC } from "@yamada-ui/core"
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
import { useMemo } from "react"
import type { CalendarHeaderProps } from "./calendar-header"
import { CalendarHeader } from "./calendar-header"
import { getFormattedLabel, getMonthDays, getWeekdays } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"
import { useMonth } from "./use-month"

interface MonthTableProps extends HTMLUIProps<"table"> {
  thead?: HTMLUIProps<"thead">
  tbody?: HTMLUIProps<"tbody">
  tr?: HTMLUIProps<"tr">
  th?: HTMLUIProps<"th">
  td?: HTMLUIProps<"td">
}

interface MonthOptions {
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
  weekdayProps?: HTMLUIProps & { component?: FC<WeekdayProps> }
  /**
   * Props for calendar day button element.
   */
  dayProps?: ButtonProps & { component?: FC<DayProps> }
}

export interface MonthProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "label" | "index">,
    MonthOptions {}

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
  const { getGridProps, getButtonProps } = useMonth()

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
                  label: formattedLabel,
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
                {...getGridProps({
                  month,
                  ...filterUndefined({
                    w,
                    minW,
                    maxW,
                    h,
                    minH,
                    maxH,
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

                          const css: CSSUIObject = {
                            display:
                              isHidden || !isDisplayed ? "none" : "inline-flex",
                            minW: "auto",
                            h: "auto",
                            p: 0,
                            fontSize: undefined,
                            fontWeight: "normal",
                            _ripple: {
                              display: "block",
                            },
                            ...styles.day,
                          }

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
  weekday: string
  index: number
}

export const Weekday: FC<WeekdayProps> = ({ weekday }) => {
  return (
    <ui.span className="ui-calendar__month__weekday__label">{weekday}</ui.span>
  )
}

Weekday.displayName = "Weekday"
Weekday.__ui__ = "Weekday"

export interface DayProps {
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
    <ui.span className="ui-calendar__month__day__label">
      {date.getDate()}
    </ui.span>
  )
}

Day.displayName = "Day"
Day.__ui__ = "Day"
