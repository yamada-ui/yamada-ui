"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  Direction,
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { UseInputBorderProps } from "../input"
import type { PopupAnimationProps } from "../popover"
import type { DatePickerStyle } from "./date-picker.style"
import type { UseDatePickerProps, UseDatePickerReturn } from "./use-date-picker"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useFieldSizing } from "../../hooks/use-field-sizing"
import { cast, isArray, isDate, isObject, mergeRefs } from "../../utils"
import { Calendar } from "../calendar"
import { useGroupItemProps } from "../group"
import { CalendarIcon, XIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { Popover } from "../popover"
import { datePickerStyle } from "./date-picker.style"
import { useDatePicker } from "./use-date-picker"

interface ComponentContext
  extends Pick<UseDatePickerReturn, "getInputProps" | "range" | "separator">,
    Pick<DatePickerProps, "inputProps"> {}

export interface DatePickerProps<
  Multiple extends boolean = false,
  Range extends boolean = false,
> extends Omit<
      HTMLStyledProps,
      "defaultValue" | "offset" | "onChange" | "ref" | "value"
    >,
    UseDatePickerProps<Multiple, Range>,
    PopupAnimationProps,
    ThemeProps<DatePickerStyle>,
    UseInputBorderProps {
  /**
   * If `true`, display the clear icon.
   *
   * @default true
   */
  clearable?: boolean
  /**
   * The icon to be used in the clear button.
   */
  clearIcon?: ReactNode
  /**
   * The icon to be used in the date picker.
   */
  icon?: ReactNode
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end-start'
   */
  placement?: Direction
  /**
   * The size of the calendar component.
   */
  calendarProps?: Calendar.RootProps<Multiple, Range>
  /**
   * Props for content element.
   */
  contentProps?: DatePickerContentProps
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * Props for icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * The props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for root element.
   */
  rootProps?: InputGroup.RootProps
}

const {
  ComponentContext,
  PropsContext: DatePickerPropsContext,
  useComponentContext,
  usePropsContext: useDatePickerPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DatePickerProps, DatePickerStyle, ComponentContext>(
  "date-picker",
  datePickerStyle,
)

export { DatePickerPropsContext, useDatePickerPropsContext }

/**
 * `DatePicker` is a component used for users to select a date.
 *
 * @see https://yamada-ui.com/docs/components/date-picker
 */
export const DatePicker = withProvider(
  <Multiple extends boolean = false, Range extends boolean = false>(
    props: DatePickerProps<Multiple, Range>,
  ) => {
    const [
      groupItemProps,
      {
        className,
        css,
        colorScheme,
        size,
        animationScheme = "block-start",
        children,
        clearable = true,
        clearIcon = <XIcon />,
        duration,
        errorBorderColor,
        focusBorderColor,
        icon,
        calendarProps,
        contentProps,
        elementProps,
        iconProps,
        inputProps,
        rootProps,
        ...rest
      },
    ] = useGroupItemProps(props)
    const {
      children: fieldChildren,
      range,
      separator,
      value,
      getCalendarProps,
      getClearIconProps,
      getContentProps,
      getFieldProps,
      getIconProps,
      getInputProps,
      getRootProps,
      popoverProps,
    } = useDatePicker(rest)
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme,
        duration,
        ...popoverProps,
      }),
      [animationScheme, duration, popoverProps],
    )
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const selectProps = useMemo<Calendar.RootProps["selectProps"]>(
      () => ({ contentProps: { portalProps: { disabled: true } } }),
      [],
    )
    const componentContext = useMemo(
      () => ({ range, separator, getInputProps, inputProps }),
      [getInputProps, inputProps, range, separator],
    )
    const hasValue = isArray(value)
      ? !!value.length
      : isObject(value) && !isDate(value)
        ? !!value.end || !!value.start
        : !!value

    return (
      <ComponentContext value={componentContext}>
        <Popover.Root {...mergedPopoverProps}>
          <InputGroup.Root
            className={className}
            css={css}
            colorScheme={colorScheme}
            {...getRootProps({ ...groupItemProps, ...rootProps })}
          >
            <Popover.Trigger>
              <DatePickerField {...getFieldProps(varProps)}>
                {fieldChildren}
              </DatePickerField>
            </Popover.Trigger>

            <InputGroup.Element
              {...{ clickable: clearable && hasValue, ...elementProps }}
            >
              {clearable && hasValue ? (
                <DatePickerIcon
                  icon={clearIcon}
                  {...getClearIconProps(iconProps)}
                />
              ) : (
                <DatePickerIcon icon={icon} {...getIconProps(iconProps)} />
              )}
            </InputGroup.Element>
          </InputGroup.Root>

          <DatePickerContent
            {...cast<DatePickerContentProps>(
              getContentProps(cast<HTMLProps>(contentProps)),
            )}
          >
            <Calendar.Root
              colorScheme={colorScheme}
              size={size}
              fixed={false}
              selectProps={selectProps}
              {...getCalendarProps(calendarProps)}
            >
              {children}
            </Calendar.Root>
          </DatePickerContent>
        </Popover.Root>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["size"] },
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
}) as GenericsComponent<{
  <Multiple extends boolean = false, Range extends boolean = false>(
    props: DatePickerProps<Multiple, Range>,
  ): ReactElement
}>

interface DatePickerFieldProps extends HTMLStyledProps {}

const DatePickerField = withContext<"div", DatePickerFieldProps>(
  "div",
  "field",
)({ "data-group-propagate": "" }, ({ children, ...rest }) => {
  const { range, separator, getInputProps, inputProps } = useComponentContext()
  const computedChildren = useMemo(() => {
    if (range) {
      return (
        <>
          <DatePickerAdjustInput
            {...getInputProps({ align: "start", ...inputProps })}
          />
          <DatePickerSeparator>{separator}</DatePickerSeparator>
          <DatePickerAdjustInput
            {...getInputProps({ align: "end", ...inputProps })}
          />
        </>
      )
    } else {
      return (
        <>
          {children}
          <DatePickerInput {...getInputProps(inputProps)} />
        </>
      )
    }
  }, [children, getInputProps, inputProps, range, separator])

  return {
    ...rest,
    children: computedChildren,
  }
})

interface DatePickerInputProps extends HTMLStyledProps<"input"> {}

const DatePickerInput = withContext<"input", DatePickerInputProps>(
  "input",
  "input",
)()

interface DatePickerAdjustInputProps extends HTMLStyledProps<"input"> {}

const DatePickerAdjustInput = withContext<"input", DatePickerAdjustInputProps>(
  ({ ref, placeholder, value, ...rest }) => {
    const { ref: inputRef, text } = useFieldSizing({
      value: value?.toString() || placeholder,
    })

    return (
      <>
        {text}

        <styled.input
          ref={mergeRefs(ref, inputRef)}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </>
    )
  },
  ["input", "adjust"],
)()

interface DatePickerSeparatorProps extends HTMLStyledProps<"span"> {}

const DatePickerSeparator = withContext<"span", DatePickerSeparatorProps>(
  "span",
  "separator",
)()

interface DatePickerIconProps extends HTMLStyledProps {
  icon?: ReactNode
}

const DatePickerIcon = withContext<"div", DatePickerIconProps>("div", "icon")(
  undefined,
  ({ children, icon, ...rest }) => ({
    children: icon || children || <CalendarIcon />,
    ...rest,
  }),
)

interface DatePickerContentProps extends Popover.ContentProps {}

const DatePickerContent = withContext<"div", DatePickerContentProps>(
  Popover.Content,
  "content",
)()
