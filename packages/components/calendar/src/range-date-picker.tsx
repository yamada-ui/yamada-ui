import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  layoutStyleProperties,
} from "@yamada-ui/core"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { cx, dataAttr, mergeRefs, splitObject } from "@yamada-ui/utils"
import type { RefAttributes } from "react"
import { Calendar } from "./calendar"
import type { DatePickerIconProps } from "./date-picker"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker"
import { DatePickerProvider, useDatePickerContext } from "./use-date-picker"
import type { UseRangeDatePickerProps } from "./use-range-date-picker"
import { useRangeDatePicker } from "./use-range-date-picker"

type RangeDatePickerOptions = {
  /**
   * The visual separator between each value.
   *
   * @default '-'
   */
  separator?: string
  /**
   * If `true`, display the date picker clear icon.
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
   * Props for date picker container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for date picker start input element.
   */
  startInputProps?: HTMLUIProps<"input">
  /**
   * Props for date picker end input element.
   */
  endInputProps?: HTMLUIProps<"input">
  /**
   * Props for date picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for date picker clear icon element.
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

export type RangeDatePickerProps = ThemeProps<"DatePicker"> &
  RangeDatePickerOptions &
  UseRangeDatePickerProps

/**
 * `RangeDatePicker` is a component used for users to select a range of dates.
 *
 * @see Docs https://yamada-ui.com/components/forms/range-date-picker
 */
export const RangeDatePicker = forwardRef<RangeDatePickerProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle(
      "RangeDatePicker",
      props,
    )
    let {
      className,
      isClearable = true,
      separator,
      color,
      h,
      height,
      minH,
      minHeight,
      containerProps,
      startInputProps,
      endInputProps,
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
      getStartInputProps,
      getEndInputProps,
      getIconProps,
      value,
    } = useRangeDatePicker(computedProps)

    const [startValue, endValue] = value ?? []

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
                {...getFieldProps({ h, minH })}
                startInputProps={getStartInputProps(startInputProps, ref)}
                endInputProps={getEndInputProps(endInputProps)}
              />

              {isClearable && (!!startValue || !!endValue) ? (
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
                className="ui-range-date-picker__popover"
                __css={{ ...styles.list }}
              >
                <Calendar
                  className="ui-range-date-picker__calendar"
                  {...getCalendarProps()}
                />
              </PopoverContent>
            </Portal>
          </ui.div>
        </Popover>
      </DatePickerProvider>
    )
  },
)

type RangeDatePickerFieldOptions = {
  value: [Date?, Date?] | undefined
}

export type RangeDatePickerFieldProps = HTMLUIProps<"div"> &
  Pick<
    RangeDatePickerProps,
    "separator" | "startInputProps" | "endInputProps"
  > &
  RangeDatePickerFieldOptions

export const RangeDatePickerField = forwardRef<
  RangeDatePickerFieldProps,
  "input"
>(
  (
    {
      className,
      value = [],
      h,
      minH,
      startInputProps,
      endInputProps,
      separator = "-",
      ...rest
    },
    ref,
  ) => {
    const styles = useDatePickerContext()

    const [startValue, endValue] = value
    const {
      placeholder: startPlaceholder,
      ref: startInputRef,
      ...computedStartInputProps
    } = (startInputProps ?? {}) as RefAttributes<HTMLInputElement> &
      HTMLUIProps<"input">
    const { placeholder: endPlaceholder, ...computedEndInputProps } =
      endInputProps ?? {}
    const hasPlaceholder = !!startPlaceholder || !!endPlaceholder
    const hasValue = !!startValue || !!endValue
    const hasSeparator = hasPlaceholder || hasValue

    const css: CSSUIObject = {
      pe: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
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
            className="ui-range-date-picker__field-input ui-range-date-picker__field-input--start"
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
            className="ui-range-date-picker__field-input ui-range-date-picker__field-input--end"
            aria-label="End date"
            placeholder={endPlaceholder}
            {...computedEndInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

type AutosizingInputProps = HTMLUIProps<"input">

const AutosizingInput = forwardRef<AutosizingInputProps, "input">(
  ({ className, value, placeholder, ...rest }, ref) => {
    const [containerProps, inputProps] = splitObject(
      rest,
      layoutStyleProperties,
    )

    const css: CSSUIObject = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
    }

    return (
      <ui.div className={className} __css={css} {...containerProps}>
        <ui.span data-placeholder={dataAttr(!value)} opacity={value ? 0 : 1}>
          {value || placeholder}
        </ui.span>

        <ui.input
          ref={ref}
          value={value}
          position="absolute"
          left="0"
          {...inputProps}
        />
      </ui.div>
    )
  },
)
