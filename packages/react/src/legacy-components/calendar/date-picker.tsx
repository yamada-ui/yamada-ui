import type { ReactNode, RefAttributes } from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { UseDatePickerProps } from "./use-date-picker"
import { cloneElement, useRef } from "react"
import { CalendarIcon, XIcon } from "../../components/icon"
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
import { useClickable } from "../../hooks/use-clickable"
import {
  cx,
  getValidChildren,
  isValidElement,
  mergeRefs,
  runIfFunc,
} from "../../utils"
import { Calendar } from "./calendar"
import {
  DatePickerProvider,
  useDatePicker,
  useDatePickerContext,
} from "./use-date-picker"

interface DatePickerOptions {
  children?: FC<{ value: Date | undefined; onClose: () => void }> | ReactNode
  /**
   * If `true`, display the date picker clear icon.
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
   * Props for date picker clear icon element.
   */
  clearIconProps?: DatePickerIconProps
  /**
   * Props for date picker container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for month picker container element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for date picker field element.
   */
  fieldProps?: Omit<DatePickerFieldProps, "children" | "inputProps">
  /**
   * Props for date picker icon element.
   */
  iconProps?: DatePickerIconProps
  /**
   * Props for date picker input element.
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

export interface DatePickerProps
  extends ThemeProps<"DatePicker">,
    DatePickerOptions,
    UseDatePickerProps {}

/**
 * `DatePicker` is a component used for users to select a date.
 *
 * @see Docs https://yamada-ui.com/components/forms/date-picker
 */
export const DatePicker = forwardRef<DatePickerProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("DatePicker", props)
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
  } = useDatePicker(computedProps)
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
          className={cx("ui-date-picker", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <ui.div
            className="ui-date-picker__inner"
            __css={{ position: "relative", ...styles.inner }}
          >
            <DatePickerField
              {...getFieldProps({ height, minHeight, ...fieldProps }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {clearable && value ? (
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
              className="ui-date-picker__content"
              __css={{ ...styles.content }}
              {...contentProps}
            >
              <Calendar
                className="ui-date-picker__calendar"
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

DatePicker.displayName = "DatePicker"
DatePicker.__ui__ = "DatePicker"

interface DatePickerFieldOptions {
  inputProps?: HTMLUIProps<"input"> & RefAttributes<HTMLInputElement>
}

export interface DatePickerFieldProps
  extends HTMLUIProps,
    DatePickerFieldOptions {}

export const DatePickerField = forwardRef<DatePickerFieldProps, "input">(
  ({ className, inputProps, ...rest }, ref) => {
    const styles = useDatePickerContext()
    const { ref: inputRef, ...computedInputProps } = inputProps ?? {}

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      pe: "2rem",
      ...styles.field,
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-date-picker__field", className)}
          __css={css}
          {...rest}
        >
          <ui.input
            ref={mergeRefs(ref, inputRef)}
            className="ui-date-picker__field__input"
            aria-label="Input date value"
            display="inline-block"
            w="100%"
            {...computedInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

DatePickerField.displayName = "DatePickerField"
DatePickerField.__ui__ = "DatePickerField"

export interface DatePickerIconProps extends Omit<HTMLUIProps, "clear"> {}

export const DatePickerIcon = forwardRef<DatePickerIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const styles = useDatePickerContext()

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      pointerEvents: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-date-picker__icon", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <CalendarIcon />}
      </ui.div>
    )
  },
)

DatePickerIcon.displayName = "DatePickerIcon"
DatePickerIcon.__ui__ = "DatePickerIcon"

export interface DatePickerClearIconProps extends DatePickerIconProps {
  disabled?: boolean
}

export const DatePickerClearIcon: FC<DatePickerClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const styles = useDatePickerContext()

  const disabled = props.disabled

  const rest = useClickable({
    ref,
    disabled,
    ...props,
  })

  return (
    <DatePickerIcon
      className={cx("ui-date-picker__icon--clear", className)}
      aria-label="Clear value"
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <XIcon boxSize="4.5" />}
    </DatePickerIcon>
  )
}

DatePickerClearIcon.displayName = "DatePickerClearIcon"
DatePickerClearIcon.__ui__ = "DatePickerClearIcon"
