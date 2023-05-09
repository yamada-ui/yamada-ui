import { Calendar } from '@yamada-ui/calendar'
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { Popover, PopoverContent } from '@yamada-ui/popover'
import { cx } from '@yamada-ui/utils'
import { DatePickerField, DatePickerFieldProps } from './date-picker-field'
import { DatePickerClearIcon, DatePickerIcon, DatePickerIconProps } from './date-picker-icon'
import { DatePickerProvider } from './use-date-picker'
import { useMonthPicker, UseMonthPickerProps } from './use-month-picker'

type MonthPickerOptions = {
  focusBorderColor?: string
  errorBorderColor?: string
  containerProps?: Omit<HTMLUIProps<'div'>, 'children'>
  inputProps?: DatePickerFieldProps['inputProps']
  iconProps?: DatePickerIconProps
  clearIconProps?: DatePickerIconProps
}

export type MonthPickerProps = Omit<HTMLUIProps<'input'>, keyof UseMonthPickerProps> &
  ThemeProps<'DatePicker'> &
  MonthPickerOptions &
  UseMonthPickerProps

export const MonthPicker = forwardRef<MonthPickerProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('DatePicker', props)
  let {
    className,
    isClearable = true,
    color,
    h,
    height,
    minH,
    minHeight,
    containerProps,
    inputProps,
    iconProps,
    clearIconProps,
    ...computedProps
  } = omitThemeProps(props)

  const {
    getPopoverProps,
    getContainerProps,
    getCalendarProps,
    getFieldProps,
    getInputProps,
    getIconProps,
    value,
  } = useMonthPicker(computedProps)

  h = h ?? height
  minH = minH ?? minHeight

  const css: CSSUIObject = {
    position: 'relative',
    w: '100%',
    h: 'fit-content',
    color,
    ...styles.container,
  }

  return (
    <DatePickerProvider value={styles}>
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx('ui-month-picker', className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <DatePickerField
            className='ui-month-picker-field'
            {...getFieldProps({ h, minH }, ref)}
            inputProps={getInputProps(inputProps)}
          />

          {isClearable && value ? (
            <DatePickerClearIcon
              className='ui-month-picker-clear-icon'
              {...getIconProps({ clear: true, ...clearIconProps })}
            />
          ) : (
            <DatePickerIcon
              className='ui-month-picker-icon'
              {...getIconProps({ clear: false, ...iconProps })}
            />
          )}

          <PopoverContent className='ui-month-picker-popover' __css={{ ...styles.popover }}>
            <Calendar className='ui-month-picker-calender' {...getCalendarProps()} />
          </PopoverContent>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})
