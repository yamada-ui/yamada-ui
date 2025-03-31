import type { ReactNode } from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import type { UseMonthPickerProps } from "./use-month-picker"
import { Popover, PopoverContent } from "../../components/popover"
import { Portal } from "../../components/portal"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, runIfFunc } from "../../utils"
import { Calendar } from "./calendar"
import {
  DatePickerClearIcon,
  DatePickerField,
  DatePickerIcon,
} from "./date-picker"
import { DatePickerProvider } from "./use-date-picker"
import { useMonthPicker } from "./use-month-picker"

interface MonthPickerOptions {
  children?: FC<{ value: Date | undefined; onClose: () => void }> | ReactNode
  /**
   * If `true`, display the month picker clear icon.
   *
   * @default true
   */
  clearable?: boolean
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * Props for month picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props for month picker container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for month picker container element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for month picker field element.
   */
  fieldProps?: Omit<DatePickerFieldProps, "children" | "inputProps">
  /**
   * Props for month picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for month picker input element.
   */
  inputProps?: DatePickerFieldProps["inputProps"]
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ disabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
}

export interface MonthPickerProps
  extends ThemeProps<"DatePicker">,
    MonthPickerOptions,
    UseMonthPickerProps {}

/**
 * `MonthPicker` is a component used for users to select a month.
 *
 * @see https://yamada-ui.com/components/forms/month-picker
 */
export const MonthPicker = forwardRef<MonthPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("MonthPicker", props)
  const {
    className,
    children,
    clearable = true,
    color,
    h,
    height = h,
    minH,
    minHeight = minH,
    clearIconProps,
    containerProps,
    contentProps,
    fieldProps,
    iconProps,
    inputProps,
    portalProps = { disabled: true },
    ...computedProps
  } = omitThemeProps(mergedProps)
  const {
    value,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getPopoverProps,
    onClose,
  } = useMonthPicker(computedProps)
  const css: CSSUIObject = {
    color,
    h: "fit-content",
    w: "100%",
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
              {...getFieldProps({ height, minHeight, ...fieldProps }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {clearable && value ? (
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
              as="div"
              className="ui-month-picker__content"
              __css={{ ...styles.content }}
              {...contentProps}
            >
              <Calendar
                className="ui-month-picker__calendar"
                {...getCalendarProps()}
              />

              {runIfFunc(children, { value, onClose })}
            </PopoverContent>
          </Portal>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})

MonthPicker.displayName = "MonthPicker"
MonthPicker.__ui__ = "MOnthPicker"
