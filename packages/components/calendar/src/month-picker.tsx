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
import { Calendar } from './calendar'
import { DatePickerField, DatePickerFieldProps } from './date-picker-field'
import {
  DatePickerClearIcon,
  DatePickerIcon,
  DatePickerIconProps,
} from './date-picker-icon'
import { DatePickerProvider } from './use-date-picker'
import { useMonthPicker, UseMonthPickerProps } from './use-month-picker'

type MonthPickerOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for month picker container element.
   */
  containerProps?: Omit<HTMLUIProps<'div'>, 'children'>
  /**
   * Props for month picker input element.
   */
  inputProps?: DatePickerFieldProps['inputProps']
  /**
   * Props for month picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for month picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
}

export type MonthPickerProps = Omit<
  HTMLUIProps<'input'>,
  keyof UseMonthPickerProps
> &
  ThemeProps<'DatePicker'> &
  MonthPickerOptions &
  UseMonthPickerProps

export const MonthPicker = forwardRef<MonthPickerProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('MonthPicker', props)
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
  } = omitThemeProps(mergedProps)

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

          <PopoverContent
            className='ui-month-picker-popover'
            __css={{ ...styles.popover }}
          >
            <Calendar
              className='ui-month-picker-calender'
              {...getCalendarProps()}
            />
          </PopoverContent>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})
