import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { ReactNode } from "react"
import type { DatePickerFieldProps, DatePickerIconProps } from "./date-picker"
import type { UseYearPickerProps } from "./use-year-picker"
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
import { useYearPicker } from "./use-year-picker"

interface YearPickerOptions {
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
   * If `true`, display the year picker clear icon.
   *
   * @default true
   */
  isClearable?: boolean
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
   * @default '{ isDisabled: true }'
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
 * @see Docs https://yamada-ui.com/components/forms/year-picker
 */
export const YearPicker = forwardRef<YearPickerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("YearPicker", props)
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
  } = useYearPicker(computedProps)

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
              id={id}
              as="div"
              className="ui-year-picker__content"
              aria-modal="true"
              role="dialog"
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
