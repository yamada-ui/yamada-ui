import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useMonthPicker } from './use-calendar'

type MonthPickerOptions = {
  month?: ButtonProps & { component: FC<{ month: string; year: number; index: number }> }
}

export type MonthPickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'title' | 'index'> &
  MonthPickerOptions

export const MonthPicker: FC<MonthPickerProps> = ({
  className,
  label,
  prev,
  next,
  month,
  ...rest
}) => {
  const { year, locale, yearFormat, styles } = useCalendarContext()
  const { rangeMonths, getContainerProps, getButtonProps } = useMonthPicker()

  const { component: customMonth, ...buttonProps } = month ?? {}

  const css: CSSUIObject = { display: 'grid', ...styles.picker, ...styles.month }

  return (
    <ui.div {...rest}>
      <CalenderHeader
        {...{ title: getFormattedLabel(year, locale, yearFormat), label, prev, next }}
      />

      <ui.div
        className={cx('ui-calendar-month-picker', className)}
        __css={css}
        {...getContainerProps()}
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
            {...getButtonProps({ ...buttonProps, value: index })}
          >
            {customMonth ? customMonth({ month, year, index }) : month}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
