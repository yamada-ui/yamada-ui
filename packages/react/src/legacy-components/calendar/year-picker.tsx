import type { ReactNode } from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import type { UseYearPickerProps } from "./use-year-picker"
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
import { useYearPicker } from "./use-year-picker"

interface YearPickerOptions {
  children?: FC<{ value: Date | undefined; onClose: () => void }> | ReactNode
  /**
   * If `true`, display the year picker clear icon.
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
   * Props for year picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props for year picker container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for year picker container element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for year picker field element.
   */
  fieldProps?: Omit<DatePickerFieldProps, "children" | "inputProps">
  /**
   * Props for year picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for year picker input element.
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

export interface YearPickerProps
  extends ThemeProps<"DatePicker">,
    YearPickerOptions,
    UseYearPickerProps {}

/**
 * `YearPicker` is a component used for users to select a year.
 *
 * @see https://yamada-ui.com/components/forms/year-picker
 */
export const YearPicker = forwardRef<YearPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("YearPicker", props)
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
  } = useYearPicker(computedProps)

  return (
    <DatePickerProvider value={styles}>
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx("ui-year-picker", className)}
          __css={{
            color,
            ...styles.container,
          }}
          {...getContainerProps(containerProps)}
        >
          <ui.div className="ui-year-picker__inner" __css={styles.inner}>
            <DatePickerField
              className="ui-year-picker__field"
              {...getFieldProps({ height, minHeight, ...fieldProps }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {clearable && value ? (
              <DatePickerClearIcon
                className="ui-year-picker__icon--clear"
                {...getIconProps({ clear: true, ...clearIconProps })}
              />
            ) : (
              <DatePickerIcon
                className="ui-year-picker__icon"
                {...getIconProps({ clear: false, ...iconProps })}
              />
            )}
          </ui.div>

          <Portal {...portalProps}>
            <PopoverContent
              as="div"
              className="ui-year-picker__content"
              __css={{ ...styles.content }}
              {...contentProps}
            >
              <Calendar
                className="ui-year-picker__calendar"
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

YearPicker.displayName = "YearPicker"
YearPicker.__ui__ = "YearPicker"
