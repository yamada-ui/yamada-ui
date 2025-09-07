"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  Direction,
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { UseInputBorderProps } from "../input"
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
import { Popover, usePopoverProps } from "../popover"
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
      "defaultValue" | "filter" | "offset" | "onChange" | "ref" | "value"
    >,
    UseDatePickerProps<Multiple, Range>,
    Omit<
      WithoutThemeProps<Popover.RootProps, DatePickerStyle>,
      | "autoFocus"
      | "children"
      | "initialFocusRef"
      | "modal"
      | "transform"
      | "updateRef"
      | "withCloseButton"
    >,
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
    const [groupItemProps, mergedProps] = useGroupItemProps(props)
    const [
      popoverProps,
      {
        className,
        css,
        colorScheme,
        size,
        children,
        clearable = true,
        clearIcon = <XIcon />,
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
    ] = usePopoverProps(mergedProps, [
      "disabled",
      "open",
      "defaultOpen",
      "onOpen",
      "onClose",
      "openOnClick",
    ])
    const {
      children: fieldChildren,
      interactive,
      open,
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
      onClose,
      onOpen,
    } = useDatePicker(rest)
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme: "block-start",
        autoFocus: false,
        placement: "end-start",
        ...popoverProps,
        disabled: !interactive,
        open,
        onClose,
        onOpen,
      }),
      [interactive, onClose, onOpen, open, popoverProps],
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
