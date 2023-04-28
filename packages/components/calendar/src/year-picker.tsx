import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, HTMLUIProps } from '@yamada-ui/core'
import { cx, filterUndefined } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useYearPicker } from './use-calendar'

type YearPickerOptions = {
  yearProps?: ButtonProps & { component?: FC<{ year: number; index: number }> }
}

export type YearPickerProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  YearPickerOptions

export const YearPicker: FC<YearPickerProps> = ({
  className,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  yearProps,
  ...rest
}) => {
  const { locale, yearFormat, styles } = useCalendarContext()
  const { rangeYears, getContainerProps, getButtonProps } = useYearPicker()

  const { component: customYear, ...computedYearProps } = yearProps ?? {}

  const w = rest.w ?? rest.width
  const minW = rest.minW ?? rest.minWidth
  const maxW = rest.maxW ?? rest.maxWidth
  const h = rest.h ?? rest.height
  const minH = rest.minH ?? rest.minHeight
  const maxH = rest.maxH ?? rest.maxHeight

  const minYearLabel = getFormattedLabel(rangeYears[0], locale, yearFormat)
  const maxYearLabel = getFormattedLabel(rangeYears[rangeYears.length - 1], locale, yearFormat)

  return (
    <ui.div __css={{ ...styles.picker }} {...filterUndefined(rest)}>
      <CalenderHeader
        {...{
          label: `${minYearLabel} - ${maxYearLabel}`,
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
      />

      <ui.div
        className={cx('ui-calendar-year-picker', className)}
        __css={{
          w: styles.picker?.w ?? styles.picker?.width,
          minW: styles.picker?.minW ?? styles.picker?.minWidth,
          maxW: styles.picker?.maxW ?? styles.picker?.maxWidth,
          h: styles.picker?.h ?? styles.picker?.height,
          minH: styles.picker?.minH ?? styles.picker?.minHeight,
          maxH: styles.picker?.maxH ?? styles.picker?.maxHeight,
          display: 'grid',
          ...styles.year,
        }}
        {...getContainerProps(filterUndefined({ w, minW, maxW, h, minH, maxH }))}
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
            {...getButtonProps({ ...computedYearProps, value: year, index })}
          >
            {customYear ? customYear({ year, index }) : getFormattedLabel(year, locale, yearFormat)}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
