import {
  ui,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ComponentArgs,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { forwardRef, ForwardedRef, Ref } from 'react'
import { CalenderHeaderProps } from './calender-header'
import { Month, MonthProps } from './month'
import { MonthList, MonthListProps } from './month-list'
import {
  CalendarProvider,
  useCalendar,
  UseCalendarProps,
  CalendarContext,
  MaybeValue,
} from './use-calendar'
import { YearList, YearListProps } from './year-list'

type CalendarOptions = {
  headerProps?: HTMLUIProps<'div'>
}

export type CalendarBaseProps = Omit<HTMLUIProps<'div'>, 'value' | 'defaultValue' | 'onChange'> &
  ThemeProps<'Calendar'> &
  CalendarOptions &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  Pick<YearListProps, 'yearProps'> &
  Pick<MonthListProps, 'monthProps'> &
  Pick<MonthProps, 'tableProps' | 'weekdayProps' | 'dayProps'>

export type CalendarProps<Y extends MaybeValue = Date> = CalendarBaseProps & UseCalendarProps<Y>

export const Calendar = forwardRef(
  <T extends MaybeValue = Date>(props: CalendarProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
    const [styles, mergedProps] = useMultiComponentStyle('Calendar', props)
    const {
      className,
      value,
      defaultValue,
      onChange,
      headerProps,
      tableProps,
      labelProps,
      controlProps,
      prevProps,
      nextProps,
      yearProps,
      monthProps,
      weekdayProps,
      dayProps,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const { type, getContainerProps, ...rest } = useCalendar<T>({
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

    const w = computedProps.w ?? computedProps.width
    const minW = computedProps.minW ?? computedProps.minWidth
    const maxW = computedProps.maxW ?? computedProps.maxWidth
    const h = computedProps.h ?? computedProps.height
    const minH = computedProps.minH ?? computedProps.minHeight
    const maxH = computedProps.maxH ?? computedProps.maxHeight

    return (
      <CalendarProvider value={{ type, styles, ...rest } as unknown as CalendarContext}>
        <ui.div
          className={cx('ui-calendar', className)}
          __css={css}
          {...getContainerProps({}, ref)}
        >
          {type === 'year' ? (
            <YearList
              {...{
                headerProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                yearProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
          {type === 'month' ? (
            <MonthList
              {...{
                headerProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                monthProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
          {type === 'date' ? (
            <Month
              {...{
                headerProps,
                tableProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                weekdayProps,
                dayProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
        </ui.div>
      </CalendarProvider>
    )
  },
) as {
  <Y extends MaybeValue = Date>(
    props: CalendarProps<Y> & { ref?: Ref<HTMLDivElement> },
  ): JSX.Element
} & ComponentArgs

Calendar.displayName = 'Calendar'
