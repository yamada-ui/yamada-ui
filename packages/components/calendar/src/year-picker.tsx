import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useYearPicker } from './use-calendar'

type YearPickerOptions = {
  year?: ButtonProps & { component?: FC<{ year: number; index: number }> }
}

export type YearPickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'title' | 'index'> &
  YearPickerOptions

export const YearPicker: FC<YearPickerProps> = ({
  className,
  label,
  prev,
  next,
  year,
  ...rest
}) => {
  const { locale, yearFormat, styles } = useCalendarContext()
  const { rangeYears, getContainerProps, getButtonProps } = useYearPicker()

  const { component: customYear, ...buttonProps } = year ?? {}

  const css: CSSUIObject = { display: 'grid', ...styles.picker, ...styles.year }

  const minYearLabel = getFormattedLabel(rangeYears[0], locale, yearFormat)
  const maxYearLabel = getFormattedLabel(rangeYears[rangeYears.length - 1], locale, yearFormat)

  return (
    <ui.div {...rest}>
      <CalenderHeader {...{ title: `${minYearLabel} - ${maxYearLabel}`, label, prev, next }} />

      <ui.div
        className={cx('ui-calendar-year-picker', className)}
        __css={css}
        {...getContainerProps()}
      >
        {rangeYears.map((year, index) => (
          <Button
            key={index}
            className='ui-calender-year-picker-button'
            variant='ghost'
            __css={{
              minW: 'auto',
              h: 'auto',
              p: 0,
              fontSize: undefined,
              fontWeight: 'normal',
              ...styles.button,
            }}
            {...getButtonProps({ ...buttonProps, value: year, index })}
          >
            {customYear ? customYear({ year, index }) : getFormattedLabel(year, locale, yearFormat)}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
