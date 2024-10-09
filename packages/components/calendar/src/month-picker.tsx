import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { ReactNode } from "react"
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import type { UseMonthPickerProps } from "./use-month-picker"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Popover, PopoverContent } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import { cx, runIfFunc } from "@yamada-ui/utils"
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
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * If `true`, display the month picker clear icon.
   *
   * @default true
   */
  isClearable?: boolean
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
   * @default '{ isDisabled: true }'
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
 * @see Docs https://yamada-ui.com/components/forms/month-picker
 */
export const MonthPicker = forwardRef<MonthPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("MonthPicker", props)
  let {
    className,
    children,
    color,
    h,
    height,
    isClearable = true,
    minH,
    minHeight,
    clearIconProps,
    containerProps,
    contentProps,
    fieldProps,
    iconProps,
    inputProps,
    portalProps = { isDisabled: true },
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {
    id,
    value,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getInputProps,
    getPopoverProps,
    onClose,
  } = useMonthPicker(computedProps)

  h ??= height
  minH ??= minHeight

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
              {...getFieldProps({ h, minH, ...fieldProps }, ref)}
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
              id={id}
              as="div"
              className="ui-month-picker__content"
              aria-modal="true"
              role="dialog"
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
