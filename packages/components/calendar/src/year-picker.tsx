import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Popover, PopoverContent } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { cx, runIfFunc } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import { Calendar } from "./calendar"
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import {
  DatePickerField,
  DatePickerClearIcon,
  DatePickerIcon,
} from "./date-picker"
import { DatePickerProvider } from "./use-date-picker"
import type { UseYearPickerProps } from "./use-year-picker"
import { useYearPicker } from "./use-year-picker"

interface YearPickerOptions {
  /**
   * If `true`, display the year picker clear icon.
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
  fieldProps?: Omit<DatePickerFieldProps, "inputProps" | "children">
  /**
   * Props for year picker input element.
   */
  inputProps?: DatePickerFieldProps["inputProps"]
  /**
   * Props for year picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for year picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
  children?: ReactNode | FC<{ value: Date | undefined; onClose: () => void }>
}

export interface YearPickerProps
  extends ThemeProps<"DatePicker">,
    YearPickerOptions,
    UseYearPickerProps {}

/**
 * `YearPicker` is a component used for users to select a year.
 *
 * @see Docs https://yamada-ui.com/components/forms/year-picker
 */
export const YearPicker = forwardRef<YearPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("YearPicker", props)
  let {
    className,
    children,
    isClearable = true,
    color,
    h,
    height,
    minH,
    minHeight,
    containerProps,
    contentProps,
    fieldProps,
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
    onClose,
    value,
    id,
  } = useYearPicker(computedProps)

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
          className={cx("ui-year-picker", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <ui.div
            className="ui-year-picker__inner"
            __css={{ position: "relative", ...styles.inner }}
          >
            <DatePickerField
              className="ui-year-picker__field"
              {...getFieldProps({ h, minH, ...fieldProps }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {isClearable && value ? (
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
              id={id}
              role="dialog"
              aria-modal="true"
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
