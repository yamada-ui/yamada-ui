import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { CalenderHeaderProps } from './calender-header'
import { DatePicker, DatePickerProps } from './date-picker'
import { MonthPicker, MonthPickerProps } from './month-picker'
import { CalendarProvider, useCalendar, UseCalendarProps } from './use-calendar'
import { YearPicker, YearPickerProps } from './year-picker'

type CalendarOptions = {}

export type CalendarProps = Omit<HTMLUIProps<'div'>, 'value' | 'defaultValue' | 'onChange'> &
  ThemeProps<'Calendar'> &
  UseCalendarProps &
  CalendarOptions &
  Omit<CalenderHeaderProps, 'title' | 'index'> &
  Pick<YearPickerProps, 'year'> &
  Pick<MonthPickerProps, 'month'> &
  Pick<DatePickerProps, 'weekday' | 'day'>

export const Calendar = forwardRef<CalendarProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Calendar', props)
  const {
    className,
    value,
    defaultValue,
    onChange,
    label,
    prev,
    next,
    year,
    month,
    weekday,
    day,
    ...computedProps
  } = omitThemeProps(props)

  const { type, getContainerProps, ...rest } = useCalendar({
    value,
    defaultValue,
    onChange,
    ...computedProps,
  })

  const css: CSSUIObject = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    ...styles.container,
  }

  return (
    <CalendarProvider value={{ type, styles, ...rest }}>
      <ui.div
        className={cx('ui-calendar', className)}
        __css={css}
        {...getContainerProps(computedProps, ref)}
      >
        {type === 'year' ? <YearPicker {...{ label, prev, next, year }} /> : null}
        {type === 'month' ? <MonthPicker {...{ label, prev, next, month }} /> : null}
        {type === 'date' ? <DatePicker {...{ label, prev, next, weekday, day }} /> : null}
      </ui.div>
    </CalendarProvider>
  )
})
