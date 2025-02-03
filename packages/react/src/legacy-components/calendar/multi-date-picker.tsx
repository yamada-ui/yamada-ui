import type {
  CSSProperties,
  Dispatch,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  RefAttributes,
  SetStateAction,
} from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { DatePickerIconProps } from "./date-picker"
import type { UseMultiDatePickerProps } from "./use-multi-date-picker"
import { cloneElement, useMemo, useRef } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/popover"
import { Portal } from "../../components/portal"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, mergeRefs, runIfFunc } from "../../utils"
import { Calendar } from "./calendar"
import { isSameDate } from "./calendar-utils"
import { DatePickerClearIcon, DatePickerIcon } from "./date-picker"
import { DatePickerProvider, useDatePickerContext } from "./use-date-picker"
import { useMultiDatePicker } from "./use-multi-date-picker"

interface MultiDatePickerOptions {
  children?: FC<{ value: Date[]; onClose: () => void }> | ReactNode
  /**
   * If `true`, display the date picker clear icon.
   *
   * @default true
   */
  clearable?: boolean
  /**
   * The custom display value to use.
   */
  component?: FC<{
    index: number
    label: string
    value: Date
    onRemove: MouseEventHandler<HTMLElement>
  }>
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * If `true`, keep the placeholder.
   *
   * @default false
   */
  keepPlaceholder?: boolean
  /**
   * The visual separator between each value.
   *
   * @default ','
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
   * Props for date picker field element.
   */
  fieldProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for date picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for date picker input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ disabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
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
    const {
      className,
      children,
      clearable = true,
      color,
      component,
      h,
      height = h,
      keepPlaceholder = false,
      minH,
      minHeight = minH,
      separator,
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
      dateToString,
      open,
      setValue,
      value,
      getCalendarProps,
      getContainerProps,
      getFieldProps,
      getIconProps,
      getInputProps,
      getPopoverProps,
      onClose,
    } = useMultiDatePicker(computedProps)

    return (
      <DatePickerProvider value={styles}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-multi-date-picker", className)}
            __css={{
              color,
              ...styles.container,
            }}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-multi-date-picker__inner"
              __css={styles.inner}
            >
              <MultiDatePickerField
                component={component}
                dateToString={dateToString}
                keepPlaceholder={keepPlaceholder}
                open={open}
                separator={separator}
                setValue={setValue}
                value={value}
                {...getFieldProps({ height, minHeight, ...fieldProps }, ref)}
                inputProps={getInputProps(inputProps)}
              />

              {clearable && !!value.length ? (
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
  dateToString: (value: Date | undefined) => string | undefined
  open: boolean
  setValue: Dispatch<SetStateAction<Date[]>>
  value: Date[]
}

export interface MultiDatePickerFieldProps
  extends HTMLUIProps,
    MultiDatePickerFieldOptions,
    Pick<
      MultiDatePickerProps,
      "component" | "inputProps" | "keepPlaceholder" | "separator"
    > {}

export const MultiDatePickerField = forwardRef<
  MultiDatePickerFieldProps,
  "input"
>(
  (
    {
      className,
      component,
      dateToString,
      keepPlaceholder,
      open,
      separator = ",",
      setValue,
      value = [],
      inputProps,
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
    } = (inputProps ?? {}) as HTMLUIProps<"input"> &
      RefAttributes<HTMLInputElement>

    const cloneChildren = useMemo(() => {
      if (component) {
        return value.map((date, index) => {
          const onRemove: MouseEventHandler<HTMLElement> = (ev) => {
            ev.stopPropagation()

            setValue((prev) => prev.filter((value) => !isSameDate(value, date)))

            inputRef.current?.focus()
          }

          const el = component({
            index,
            label: dateToString(date)!,
            value: date,
            onRemove,
          })

          const style: CSSProperties = {
            marginBlockEnd: "0.125rem",
            marginBlockStart: "0.125rem",
            marginInlineEnd: "0.25rem",
          }

          return el
            ? cloneElement<any>(el as ReactElement, { key: index, style })
            : null
        })
      } else {
        return value.map((date, index) => {
          const last = value.length === index + 1

          return (
            <ui.span key={index} display="inline-block" me="0.25rem">
              {dateToString(date)}
              {!last || open ? separator : null}
            </ui.span>
          )
        })
      }
    }, [component, setValue, dateToString, open, separator, value])

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-multi-date-picker__field", className)}
          __css={styles.field}
          {...rest}
        >
          {cloneChildren}

          <ui.input
            ref={mergeRefs(ref, inputPropRef, inputRef)}
            className="ui-multi-date-picker__field__input"
            aria-label="Input date value"
            display="inline-block"
            flex="1"
            marginBlockEnd="0.125rem"
            marginBlockStart="0.125rem"
            overflow="hidden"
            placeholder={
              !value.length || (keepPlaceholder && open)
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
