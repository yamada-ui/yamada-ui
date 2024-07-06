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
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import {
  DatePickerField,
  DatePickerClearIcon,
  DatePickerIcon,
} from "./date-picker"
import { DatePickerProvider } from "./use-date-picker"
import type { UseMonthPickerProps } from "./use-month-picker"
import { useMonthPicker } from "./use-month-picker"

type MonthPickerOptions = {
  /**
   * If `true`, display the month picker clear icon.
   *
   * @default true
   */
  isClearable?: boolean
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

export type MonthPickerProps = ThemeProps<"DatePicker"> &
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
    portalProps = { isDisabled: true },
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
    id,
  } = useMonthPicker(computedProps)

  h ??= height
  minH ??= minHeight

  const css: CSSUIObject = {
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
            __css={{ ...styles.inner }}
          >
            <DatePickerField
              className="ui-month-picker__field"
              {...getFieldProps({ h, minH }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {isClearable && value ? (
              <DatePickerClearIcon
                className={cx(
                  "ui-month-picker__icon",
                  "ui-month-picker__icon--clear",
                )}
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
              id={id}
              role="dialog"
              aria-modal="true"
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
