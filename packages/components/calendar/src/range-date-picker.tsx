import type { CSSUIObject, HTMLUIProps, ThemeProps, FC } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
  layoutStyleProperties,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import {
  cx,
  dataAttr,
  mergeRefs,
  runIfFunc,
  splitObject,
} from "@yamada-ui/utils"
import type { ReactNode, RefAttributes } from "react"
import { Calendar } from "./calendar"
import type { DatePickerIconProps } from "./date-picker"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker"
import { DatePickerProvider, useDatePickerContext } from "./use-date-picker"
import type { UseRangeDatePickerProps } from "./use-range-date-picker"
import { useRangeDatePicker } from "./use-range-date-picker"

interface RangeDatePickerOptions {
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
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for date picker container element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for date picker field element.
   */
  fieldProps?: Omit<HTMLUIProps, "children">
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
  children?: ReactNode | FC<{ value: [Date?, Date?]; onClose: () => void }>
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
    let {
      className,
      children,
      isClearable = true,
      separator,
      color,
      h,
      height,
      minH,
      minHeight,
      containerProps,
      contentProps,
      fieldProps,
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
      onClose,
      value,
      id,
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
                {...getFieldProps({ h, minH, ...fieldProps })}
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
                as="div"
                id={id}
                role="dialog"
                aria-modal="true"
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
      "separator" | "startInputProps" | "endInputProps"
    >,
    RangeDatePickerFieldOptions {}

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

AutosizingInput.displayName = "AutosizingInput"
AutosizingInput.__ui__ = "AutosizingInput"
