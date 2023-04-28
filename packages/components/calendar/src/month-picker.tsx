import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, HTMLUIProps } from '@yamada-ui/core'
import { cx, filterUndefined } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useMonthPicker } from './use-calendar'

type MonthPickerOptions = {
  headerProps?: HTMLUIProps<'div'>
  monthProps?: ButtonProps & { component?: FC<{ month: string; year: number; index: number }> }
}

export type MonthPickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  MonthPickerOptions

export const MonthPicker: FC<MonthPickerProps> = ({
  className,
  headerProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  monthProps,
  ...rest
}) => {
  const { year, locale, yearFormat, styles } = useCalendarContext()
  const { rangeMonths, getContainerProps, getButtonProps } = useMonthPicker()

  const { component: customMonth, ...computedMonthProps } = monthProps ?? {}

  const w = rest.w ?? rest.width
  const minW = rest.minW ?? rest.minWidth
  const maxW = rest.maxW ?? rest.maxWidth
  const h = rest.h ?? rest.height
  const minH = rest.minH ?? rest.minHeight
  const maxH = rest.maxH ?? rest.maxHeight

  return (
    <ui.div __css={{ ...styles.picker }} {...filterUndefined(rest)}>
      <CalenderHeader
        {...{
          ...headerProps,
          label: getFormattedLabel(year, locale, yearFormat),
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
      />

      <ui.div
        className={cx('ui-calendar-month-picker', className)}
        __css={{
          w: styles.picker?.w ?? styles.picker?.width,
          minW: styles.picker?.minW ?? styles.picker?.minWidth,
          maxW: styles.picker?.maxW ?? styles.picker?.maxWidth,
          h: styles.picker?.h ?? styles.picker?.height,
          minH: styles.picker?.minH ?? styles.picker?.minHeight,
          maxH: styles.picker?.maxH ?? styles.picker?.maxHeight,
          display: 'grid',
          ...styles.month,
        }}
        {...getContainerProps(filterUndefined({ w, minW, maxW, h, minH, maxH }))}
      >
        {rangeMonths.map((month, index) => (
          <Button
            key={index}
            className='ui-calender-month-picker-button'
            variant='ghost'
            __css={{
              minW: 'auto',
              h: 'auto',
              p: 0,
              fontSize: undefined,
              fontWeight: 'normal',
              ...styles.button,
            }}
            {...getButtonProps({ ...computedMonthProps, value: index })}
          >
            {customMonth ? customMonth({ month, year, index }) : month}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
