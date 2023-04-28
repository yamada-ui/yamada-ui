import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, HTMLUIProps } from '@yamada-ui/core'
import { cx, filterUndefined } from '@yamada-ui/utils'
import dayjs from 'dayjs'
import { FC, useMemo } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import {
  getFormattedLabel,
  getMonthDays,
  getWeekdays,
  useCalendarContext,
  useDatePicker,
} from './use-calendar'

type DatePickerOptions = {
  headerProps?: HTMLUIProps<'div'>
  tableProps?: HTMLUIProps<'table'> & {
    thead?: HTMLUIProps<'thead'>
    tbody?: HTMLUIProps<'tbody'>
    tr?: HTMLUIProps<'tr'>
    th?: HTMLUIProps<'th'>
    td?: HTMLUIProps<'td'>
  }
  weekdayProps?: HTMLUIProps<'div'> & { component?: FC<WeekdayProps> }
  dayProps?: ButtonProps & { component?: FC<DayProps> }
}

export type DatePickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  DatePickerOptions

export const DatePicker: FC<DatePickerProps> = ({
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
  const { getContainerProps, getButtonProps } = useDatePicker()

  const { component: customWeekday = Weekday, ...computedWeekdayProps } = weekdayProps ?? {}
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
          const month = dayjs(selectedMonth).add(index, 'months').toDate()
          const days = getMonthDays(month, firstDayOfWeek)

          return (
            <ui.div key={index} __css={{ ...styles.picker }} {...filterUndefined(rest)}>
              <CalenderHeader
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
                className={cx('ui-calendar-date-picker', className)}
                __css={{
                  w: styles.picker?.w ?? styles.picker?.width,
                  minW: styles.picker?.minW ?? styles.picker?.minWidth,
                  maxW: styles.picker?.maxW ?? styles.picker?.maxWidth,
                  h: styles.picker?.h ?? styles.picker?.height,
                  minH: styles.picker?.minH ?? styles.picker?.minHeight,
                  maxH: styles.picker?.maxH ?? styles.picker?.maxHeight,
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
                    <ui.tr {...trProps}>
                      {weekdays.map((weekday, index) => (
                        <ui.th
                          key={index}
                          __css={{
                            fontWeight: 'normal',
                          }}
                          {...thProps}
                        >
                          <ui.div
                            className='ui-calendar-date-picker-weekday'
                            __css={{ w: 'full', display: 'flex', ...styles.weekday }}
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
                      <ui.tr key={row} {...trProps}>
                        {cells.map((date, col) => {
                          const { isSelected, isWeekend, isOutside, ...props } = getButtonProps({
                            ...computedDayProps,
                            month,
                            value: date,
                            index,
                          })

                          return (
                            <ui.td key={col} {...tdProps}>
                              <Button
                                className='ui-calendar-date-picker-day'
                                variant='ghost'
                                __css={{
                                  minW: 'auto',
                                  h: 'auto',
                                  p: 0,
                                  fontSize: undefined,
                                  fontWeight: 'normal',
                                  ...styles.day,
                                }}
                                {...props}
                              >
                                {customDay({
                                  date,
                                  row,
                                  col,
                                  weekday: weekdays[col],
                                  isSelected,
                                  isWeekend,
                                  isOutside,
                                })}
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
  return <ui.span className='ui-calendar-date-picker-weekday-label'>{weekday}</ui.span>
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
  return <ui.span className='ui-calendar-date-picker-day-label'>{date.getDate()}</ui.span>
}
