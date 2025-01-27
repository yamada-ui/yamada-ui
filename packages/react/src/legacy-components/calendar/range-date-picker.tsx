import type { ReactNode, RefAttributes } from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { DatePickerIconProps } from "./date-picker"
import type { UseRangeDatePickerProps } from "./use-range-date-picker"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/popover"
import { Portal } from "../../components/portal"
import {
  forwardRef,
  layoutStyleProperties,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, dataAttr, mergeRefs, runIfFunc, splitObject } from "../../utils"
import { Calendar } from "./calendar"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker"
import { DatePickerProvider, useDatePickerContext } from "./use-date-picker"
import { useRangeDatePicker } from "./use-range-date-picker"

interface RangeDatePickerOptions {
  children?: FC<{ value: [Date?, Date?]; onClose: () => void }> | ReactNode
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
   * The visual separator between each value.
   *
   * @default '-'
   */
  separator?: string
  /**
   * Props for date picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props for date picker container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for date picker container element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for date picker end input element.
   */
  endInputProps?: HTMLUIProps<"input">
  /**
   * Props for date picker field element.
   */
  fieldProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for date picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ disabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Props for date picker start input element.
   */
  startInputProps?: HTMLUIProps<"input">
}

export interface RangeDatePickerProps
  extends ThemeProps<"DatePicker">,
    RangeDatePickerOptions,
    UseRangeDatePickerProps {}

/**
 * `RangeDatePicker` is a component used for users to select a range of dates.
 *
 * @see Docs https://yamada-ui.com/components/forms/range-date-picker
 */
export const RangeDatePicker = forwardRef<RangeDatePickerProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
      "RangeDatePicker",
      props,
    )
    const {
      className,
      children,
      clearable = true,
      color,
      h,
      height = h,
      minH,
      minHeight = minH,
      separator,
      clearIconProps,
      containerProps,
      contentProps,
      endInputProps,
      fieldProps,
      iconProps,
      portalProps = { disabled: true },
      startInputProps,
      ...computedProps
    } = omitThemeProps(mergedProps)
    const {
      value,
      getCalendarProps,
      getContainerProps,
      getEndInputProps,
      getFieldProps,
      getIconProps,
      getPopoverProps,
      getStartInputProps,
      onClose,
    } = useRangeDatePicker(computedProps)
    const [startValue, endValue] = value
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
            className={cx("ui-range-date-picker", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-range-date-picker__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <RangeDatePickerField
                separator={separator}
                value={value}
                {...getFieldProps({ height, minHeight, ...fieldProps })}
                endInputProps={getEndInputProps(endInputProps)}
                startInputProps={getStartInputProps(startInputProps, ref)}
              />

              {clearable && (!!startValue || !!endValue) ? (
                <DatePickerClearIcon
                  {...getIconProps({ clear: true, ...clearIconProps })}
                />
              ) : (
                <DatePickerIcon
                  {...getIconProps({ clear: false, ...iconProps })}
                />
              )}
            </ui.div>

            <Portal {...portalProps}>
              <PopoverContent
                as="div"
                className="ui-range-date-picker__content"
                __css={{ ...styles.content }}
                {...contentProps}
              >
                <Calendar
                  className="ui-range-date-picker__calendar"
                  {...getCalendarProps()}
                />

                {runIfFunc(children, { value, onClose })}
              </PopoverContent>
            </Portal>
          </ui.div>
        </Popover>
      </DatePickerProvider>
    )
  },
)

RangeDatePicker.displayName = "RangeDatePicker"
RangeDatePicker.__ui__ = "RangeDatePicker"

interface RangeDatePickerFieldOptions {
  value: [Date?, Date?] | undefined
}

export interface RangeDatePickerFieldProps
  extends HTMLUIProps,
    Pick<
      RangeDatePickerProps,
      "endInputProps" | "separator" | "startInputProps"
    >,
    RangeDatePickerFieldOptions {}

export const RangeDatePickerField = forwardRef<
  RangeDatePickerFieldProps,
  "input"
>(
  (
    {
      className,
      separator = "-",
      value = [],
      endInputProps,
      startInputProps,
      ...rest
    },
    ref,
  ) => {
    const styles = useDatePickerContext()

    const [startValue, endValue] = value
    const {
      ref: startInputRef,
      placeholder: startPlaceholder,
      ...computedStartInputProps
    } = (startInputProps ?? {}) as HTMLUIProps<"input"> &
      RefAttributes<HTMLInputElement>
    const { placeholder: endPlaceholder, ...computedEndInputProps } =
      endInputProps ?? {}
    const hasPlaceholder = !!startPlaceholder || !!endPlaceholder
    const hasValue = !!startValue || !!endValue
    const hasSeparator = hasPlaceholder || hasValue

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      pe: "2rem",
      ...styles.field,
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-range-date-picker__field", className)}
          __css={css}
          {...rest}
        >
          <AutosizingInput
            ref={mergeRefs(ref, startInputRef)}
            className="ui-range-date-picker__field__start-input"
            aria-label="Start date"
            placeholder={startPlaceholder}
            {...computedStartInputProps}
          />

          {hasSeparator && !!separator ? (
            <ui.span
              data-placeholder={dataAttr(!startValue)}
              marginInline="0.25rem"
            >
              {separator}
            </ui.span>
          ) : null}

          <AutosizingInput
            className="ui-range-date-picker__field__end-input"
            aria-label="End date"
            placeholder={endPlaceholder}
            {...computedEndInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

RangeDatePickerField.displayName = "RangeDatePickerField"
RangeDatePickerField.__ui__ = "RangeDatePickerField"

interface AutosizingInputProps extends HTMLUIProps<"input"> {}

const AutosizingInput = forwardRef<AutosizingInputProps, "input">(
  ({ className, placeholder, value, ...rest }, ref) => {
    const [containerProps, inputProps] = splitObject(
      rest,
      layoutStyleProperties,
    )

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      position: "relative",
    }

    return (
      <ui.div className={className} __css={css} {...containerProps}>
        <ui.span data-placeholder={dataAttr(!value)} opacity={value ? 0 : 1}>
          {value || placeholder}
        </ui.span>

        <ui.input
          ref={ref}
          left="0"
          position="absolute"
          value={value}
          w="100%"
          {...inputProps}
        />
      </ui.div>
    )
  },
)

AutosizingInput.displayName = "AutosizingInput"
AutosizingInput.__ui__ = "AutosizingInput"
