import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverContent } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { cx } from "@yamada-ui/utils"
import { Calendar } from "./calendar"
import type { DatePickerFieldProps } from "./date-picker-field"
import { DatePickerField } from "./date-picker-field"
import type { DatePickerIconProps } from "./date-picker-icon"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker-icon"
import { DatePickerProvider } from "./use-date-picker"
import type { UseMonthPickerProps } from "./use-month-picker"
import { useMonthPicker } from "./use-month-picker"

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
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for month picker input element.
   */
  inputProps?: DatePickerFieldProps["inputProps"]
  /**
   * Props for month picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for month picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
}

export type MonthPickerProps = Omit<
  HTMLUIProps<"input">,
  keyof UseMonthPickerProps
> &
  ThemeProps<"DatePicker"> &
  MonthPickerOptions &
  UseMonthPickerProps

/**
 * `MonthPicker` is a component used for users to select a month.
 *
 * @see Docs https://yamada-ui.com/components/forms/month-picker
 */
export const MonthPicker = forwardRef<MonthPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("MonthPicker", props)
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
    portalProps = { isDisabled: false },
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

  h ??= height
  minH ??= minHeight

  const css: CSSUIObject = {
    w: "100%",
    h: "fit-content",
    color,
    ...styles.container,
  }

  return (
    <DatePickerProvider value={styles}>
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx("ui-month-picker", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <ui.div
            className="ui-month-picker__inner"
            __css={{ position: "relative", ...styles.inner }}
          >
            <DatePickerField
              className="ui-month-picker__field"
              {...getFieldProps({ h, minH }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {isClearable && value ? (
              <DatePickerClearIcon
                className="ui-month-picker__icon--clear"
                {...getIconProps({ clear: true, ...clearIconProps })}
              />
            ) : (
              <DatePickerIcon
                className="ui-month-picker__icon"
                {...getIconProps({ clear: false, ...iconProps })}
              />
            )}
          </ui.div>

          <Portal {...portalProps}>
            <PopoverContent
              className="ui-month-picker__popover"
              __css={{ ...styles.list }}
            >
              <Calendar
                className="ui-month-picker__calendar"
                {...getCalendarProps()}
              />
            </PopoverContent>
          </Portal>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})
