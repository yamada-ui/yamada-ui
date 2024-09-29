import type { CSSUIObject, HTMLUIProps, ThemeProps, FC } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { cx, mergeRefs, runIfFunc } from "@yamada-ui/utils"
import { cloneElement, useMemo, useRef } from "react"
import type {
  CSSProperties,
  ReactElement,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
  RefAttributes,
  ReactNode,
} from "react"
import { Calendar } from "./calendar"
import { isSameDate } from "./calendar-utils"
import type { DatePickerIconProps } from "./date-picker"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker"
import { DatePickerProvider, useDatePickerContext } from "./use-date-picker"
import type { UseMultiDatePickerProps } from "./use-multi-date-picker"
import { useMultiDatePicker } from "./use-multi-date-picker"

interface MultiDatePickerOptions {
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * The custom display value to use.
   */
  component?: FC<{
    value: Date
    label: string
    index: number
    onRemove: MouseEventHandler<HTMLElement>
  }>
  /**
   * If `true`, keep the placeholder.
   *
   * @default false
   */
  keepPlaceholder?: boolean
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
   * Props for date picker input element.
   */
  inputProps?: HTMLUIProps<"input">
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
  children?: ReactNode | FC<{ value: Date[]; onClose: () => void }>
}

export interface MultiDatePickerProps
  extends ThemeProps<"DatePicker">,
    MultiDatePickerOptions,
    UseMultiDatePickerProps {}

/**
 * `MultiDatePicker` is a component used for users to select multiple dates.
 *
 * @see Docs https://yamada-ui.com/components/forms/multi-date-picker
 */
export const MultiDatePicker = forwardRef<MultiDatePickerProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
      "MultiDatePicker",
      props,
    )
    let {
      className,
      children,
      component,
      separator,
      isClearable = true,
      keepPlaceholder = false,
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
      isOpen,
      value,
      setValue,
      dateToString,
      id,
    } = useMultiDatePicker(computedProps)

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
            className={cx("ui-multi-date-picker", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-multi-date-picker__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <MultiDatePickerField
                component={component}
                separator={separator}
                isOpen={isOpen}
                keepPlaceholder={keepPlaceholder}
                value={value}
                setValue={setValue}
                dateToString={dateToString}
                {...getFieldProps({ h, minH, ...fieldProps }, ref)}
                inputProps={getInputProps(inputProps)}
              />

              {isClearable && !!value?.length ? (
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
                className="ui-multi-date-picker__content"
                __css={{ ...styles.content }}
                {...contentProps}
              >
                <Calendar
                  className="ui-multi-date-picker__calendar"
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

MultiDatePicker.displayName = "MultiDatePicker"
MultiDatePicker.__ui__ = "MultiDatePicker"

interface MultiDatePickerFieldOptions {
  isOpen: boolean
  value: Date[]
  setValue: Dispatch<SetStateAction<Date[]>>
  dateToString: (value: Date | undefined) => string | undefined
}

export interface MultiDatePickerFieldProps
  extends HTMLUIProps,
    MultiDatePickerFieldOptions,
    Pick<
      MultiDatePickerProps,
      "component" | "separator" | "keepPlaceholder" | "inputProps"
    > {}

export const MultiDatePickerField = forwardRef<
  MultiDatePickerFieldProps,
  "input"
>(
  (
    {
      className,
      h,
      minH,
      inputProps,
      isOpen,
      value = [],
      setValue,
      dateToString,
      component,
      separator = ",",
      keepPlaceholder,
      ...rest
    },
    ref,
  ) => {
    const styles = useDatePickerContext()
    const inputRef = useRef<HTMLInputElement>(null)
    const {
      ref: inputPropRef,
      placeholder,
      ...computedInputProps
    } = (inputProps ?? {}) as RefAttributes<HTMLInputElement> &
      HTMLUIProps<"input">

    const cloneChildren = useMemo(() => {
      if (component) {
        return value.map((date, index) => {
          const onRemove: MouseEventHandler<HTMLElement> = (ev) => {
            ev.stopPropagation()

            setValue((prev) =>
              prev?.filter((value) => !isSameDate(value, date)),
            )

            inputRef.current?.focus()
          }

          const el = component({
            value: date,
            label: dateToString(date)!,
            index,
            onRemove,
          })

          const style: CSSProperties = {
            marginBlockStart: "0.125rem",
            marginBlockEnd: "0.125rem",
            marginInlineEnd: "0.25rem",
          }

          return el
            ? cloneElement(el as ReactElement, { key: index, style })
            : null
        })
      } else {
        return value.map((date, index) => {
          const isLast = value.length === index + 1

          return (
            <ui.span key={index} display="inline-block" me="0.25rem">
              {dateToString(date)}
              {!isLast || isOpen ? separator : null}
            </ui.span>
          )
        })
      }
    }, [component, setValue, dateToString, isOpen, separator, value])

    const css: CSSUIObject = {
      pe: "2rem",
      h,
      minH,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      ...styles.field,
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-multi-date-picker__field", className)}
          __css={css}
          {...rest}
        >
          {cloneChildren}

          <ui.input
            aria-label="Input date value"
            ref={mergeRefs(ref, inputPropRef, inputRef)}
            className="ui-multi-date-picker__field__input"
            display="inline-block"
            flex="1"
            overflow="hidden"
            marginBlockStart="0.125rem"
            marginBlockEnd="0.125rem"
            placeholder={
              !value.length || (keepPlaceholder && isOpen)
                ? placeholder
                : undefined
            }
            {...computedInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

MultiDatePickerField.displayName = "MultiDatePickerField"
MultiDatePickerField.__ui__ = "MultiDatePickerField"
