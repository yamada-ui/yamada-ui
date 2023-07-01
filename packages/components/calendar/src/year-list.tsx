import { Button, ButtonProps } from '@yamada-ui/button'
import { ui, HTMLUIProps } from '@yamada-ui/core'
import { cx, filterUndefined } from '@yamada-ui/utils'
import { FC } from 'react'
import { CalenderHeader, CalenderHeaderProps } from './calender-header'
import { getFormattedLabel, useCalendarContext, useYearList } from './use-calendar'

type YearListOptions = {
  /**
   * Props for the calendar header element.
   */
  headerProps?: HTMLUIProps<'div'>
  /**
   * Props for the calendar year button element.
   */
  yearProps?: ButtonProps & { component?: FC<{ year: number; index: number }> }
}

export type YearListProps = HTMLUIProps<'div'> &
  Omit<CalenderHeaderProps, 'label' | 'index'> &
  YearListOptions

export const YearList: FC<YearListProps> = ({
  className,
  headerProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  yearProps,
  ...rest
}) => {
  const { locale, yearFormat, styles } = useCalendarContext()
  const { rangeYears, getContainerProps, getButtonProps } = useYearList()

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
    <ui.div __css={{ ...styles.content }} {...filterUndefined(rest)}>
      <CalenderHeader
        {...{
          ...headerProps,
          label: `${minYearLabel} - ${maxYearLabel}`,
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
      />

      <ui.div
        className={cx('ui-calendar-year-list', className)}
        __css={{
          w: styles.content?.w ?? styles.content?.width,
          minW: styles.content?.minW ?? styles.content?.minWidth,
          maxW: styles.content?.maxW ?? styles.content?.maxWidth,
          h: styles.content?.h ?? styles.content?.height,
          minH: styles.content?.minH ?? styles.content?.minHeight,
          maxH: styles.content?.maxH ?? styles.content?.maxHeight,
          display: 'grid',
          ...styles.year,
        }}
        {...getContainerProps(filterUndefined({ w, minW, maxW, h, minH, maxH }))}
      >
        {rangeYears.map((year, index) => (
          <Button
            key={index}
            className='ui-calender-year-list-button'
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
