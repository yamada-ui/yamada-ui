import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useMonthPicker } from './use-calendar'

type MonthPickerOptions = {
  monthProps?: ButtonProps & { component: FC<{ month: string; year: number; index: number }> }
}

export type MonthPickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  MonthPickerOptions

export const MonthPicker: FC<MonthPickerProps> = ({
  className,
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

  const css: CSSUIObject = { display: 'grid', ...styles.picker, ...styles.month }

  return (
    <ui.div {...rest}>
      <CalenderHeader
        {...{
          label: getFormattedLabel(year, locale, yearFormat),
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
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
            {...getButtonProps({ ...computedMonthProps, value: index })}
          >
            {customMonth ? customMonth({ month, year, index }) : month}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
