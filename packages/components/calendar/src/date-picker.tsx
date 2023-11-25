import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { Calendar } from "./calendar"
import type { DatePickerFieldProps } from "./date-picker-field"
import { DatePickerField } from "./date-picker-field"
import type { DatePickerIconProps } from "./date-picker-icon"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker-icon"
import type { UseDatePickerProps } from "./use-date-picker"
import { DatePickerProvider, useDatePicker } from "./use-date-picker"

type DatePickerOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for date picker container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for date picker input element.
   */
  inputProps?: DatePickerFieldProps["inputProps"]
  /**
   * Props for date picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for date picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
}

export type DatePickerProps = Omit<
  HTMLUIProps<"input">,
  keyof UseDatePickerProps
> &
  ThemeProps<"DatePicker"> &
  DatePickerOptions &
  UseDatePickerProps

export const DatePicker = forwardRef<DatePickerProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DatePicker", props)
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

  h ??= height
  minH ??= minHeight

  const css: CSSUIObject = {
    position: "relative",
    w: "100%",
    h: "fit-content",
    color,
    ...styles.container,
  }

  return (
    <DatePickerProvider value={styles}>
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx("ui-date-picker", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <DatePickerField
            {...getFieldProps({ h, minH }, ref)}
            inputProps={getInputProps(inputProps)}
          />

          {isClearable && value ? (
            <DatePickerClearIcon
              {...getIconProps({ clear: true, ...clearIconProps })}
            />
          ) : (
            <DatePickerIcon {...getIconProps({ clear: false, ...iconProps })} />
          )}

          <PopoverContent
            className="ui-date-picker__popover"
            __css={{ ...styles.popover }}
          >
            <Calendar
              className="ui-date-picker__calendar"
              {...getCalendarProps()}
            />
          </PopoverContent>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})
