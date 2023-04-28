import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
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
  weekdayProps?: HTMLUIProps<'div'> & { component?: FC<WeekdayProps> }
  dayProps?: ButtonProps & { component?: FC<DayProps> }
}

export type DatePickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  DatePickerOptions

export const DatePicker: FC<DatePickerProps> = ({
  className,
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

  const weekdays = useMemo(
    () => getWeekdays(locale, firstDayOfWeek, weekdayFormat),
    [firstDayOfWeek, locale, weekdayFormat],
  )

  const css: CSSUIObject = { ...styles.picker, ...styles.date }

  return (
    <>
      {Array(amountOfMonths)
        .fill(0)
        .map((_, index) => {
          const month = dayjs(selectedMonth).add(index, 'months').toDate()
          const days = getMonthDays(month, firstDayOfWeek)

          return (
            <ui.div key={index} {...rest}>
              <CalenderHeader
                {...{
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
                __css={css}
                {...getContainerProps()}
              >
                {withWeekdays ? (
                  <ui.thead>
                    <ui.tr>
                      {weekdays.map((weekday, index) => (
                        <ui.th key={index} __css={{ fontWeight: 'normal' }}>
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

                <ui.tbody>
                  {days.map((cells, row) => {
                    return (
                      <ui.tr key={row}>
                        {cells.map((date, col) => {
                          const { isSelected, isWeekend, isOutside, ...props } = getButtonProps({
                            ...computedDayProps,
                            month,
                            value: date,
                            index,
                          })

                          return (
                            <ui.td key={col}>
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
