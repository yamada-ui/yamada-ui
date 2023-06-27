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
import { DatePickerClearIcon, DatePickerIcon, DatePickerIconProps } from './date-picker-icon'
import { DatePickerProvider, useDatePicker, UseDatePickerProps } from './use-date-picker'

type DatePickerOptions = {
  focusBorderColor?: string
  errorBorderColor?: string
  containerProps?: Omit<HTMLUIProps<'div'>, 'children'>
  inputProps?: DatePickerFieldProps['inputProps']
  iconProps?: DatePickerIconProps
  clearIconProps?: DatePickerIconProps
}

export type DatePickerProps = Omit<HTMLUIProps<'input'>, keyof UseDatePickerProps> &
  ThemeProps<'DatePicker'> &
  DatePickerOptions &
  UseDatePickerProps

export const DatePicker = forwardRef<DatePickerProps, 'input'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('DatePicker', props)
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
  } = useDatePicker(computedProps)

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
          className={cx('ui-date-picker', className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <DatePickerField
            {...getFieldProps({ h, minH }, ref)}
            inputProps={getInputProps(inputProps)}
          />

          {isClearable && value ? (
            <DatePickerClearIcon {...getIconProps({ clear: true, ...clearIconProps })} />
          ) : (
            <DatePickerIcon {...getIconProps({ clear: false, ...iconProps })} />
          )}

          <PopoverContent className='ui-date-picker-popover' __css={{ ...styles.popover }}>
            <Calendar className='ui-date-picker-calender' {...getCalendarProps()} />
          </PopoverContent>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})
