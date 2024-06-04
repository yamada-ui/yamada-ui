import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon, CloseIcon } from "@yamada-ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { useClickable } from "@yamada-ui/use-clickable"
import {
  cx,
  getValidChildren,
  isValidElement,
  mergeRefs,
} from "@yamada-ui/utils"
import type { FC, HTMLAttributes, RefAttributes } from "react"
import { cloneElement, useRef } from "react"
import { Calendar } from "./calendar"
import type { UseDatePickerProps } from "./use-date-picker"
import {
  DatePickerProvider,
  useDatePicker,
  useDatePickerContext,
} from "./use-date-picker"

type DatePickerOptions = {
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
   * Props for date picker input element.
   */
  inputProps?: DatePickerFieldProps["inputProps"]
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

export type DatePickerProps = ThemeProps<"DatePicker"> &
  DatePickerOptions &
  UseDatePickerProps

/**
 * `DatePicker` is a component used for users to select a date.
 *
 * @see Docs https://yamada-ui.com/components/forms/date-picker
 */
export const DatePicker = forwardRef<DatePickerProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DatePicker", props)
  let {
    className,
    isClearable = true,
    color,
    h,
    height,
    minH,
    minHeight,
    containerProps,
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
    value,
  } = useDatePicker(computedProps)

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
          className={cx("ui-date-picker", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <ui.div
            className="ui-date-picker__inner"
            __css={{ position: "relative", ...styles.inner }}
          >
            <DatePickerField
              {...getFieldProps({ h, minH }, ref)}
              inputProps={getInputProps(inputProps)}
            />

            {isClearable && value ? (
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
              className="ui-date-picker__popover"
              __css={{ ...styles.list }}
            >
              <Calendar
                className="ui-date-picker__calendar"
                {...getCalendarProps()}
              />
            </PopoverContent>
          </Portal>
        </ui.div>
      </Popover>
    </DatePickerProvider>
  )
})

type DatePickerFieldOptions = {
  inputProps?: HTMLUIProps<"input">
}

export type DatePickerFieldProps = HTMLUIProps<"div"> & DatePickerFieldOptions

export const DatePickerField = forwardRef<DatePickerFieldProps, "input">(
  ({ className, h, minH, inputProps, ...rest }, ref) => {
    const styles = useDatePickerContext()
    const { ref: inputRef, ...computedInputProps } =
      inputProps as RefAttributes<HTMLInputElement> & HTMLUIProps<"input">

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
          className={cx("ui-date-picker__field", className)}
          __css={css}
          {...rest}
        >
          <ui.input
            aria-label="Input date value"
            ref={mergeRefs(ref, inputRef)}
            className="ui-date-picker__field-input"
            display="inline-block"
            w="100%"
            {...computedInputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

export type DatePickerIconProps = Omit<HTMLUIProps<"div">, "clear">

export const DatePickerIcon = forwardRef<DatePickerIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const styles = useDatePickerContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      cursor: "pointer",
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        "aria-hidden": true,
        style: {
          maxWidth: "1em",
          maxHeight: "1em",
          color: "currentColor",
        },
      }),
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-date-picker__icon", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <DatePickerCalendarIcon />}
      </ui.div>
    )
  },
)

export type DatePickerCalendarIconProps = IconProps

export const DatePickerCalendarIcon: FC<DatePickerCalendarIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Icon
      className={cx("ui-date-picker__icon-calendar", className)}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
      />
    </Icon>
  )
}

export type DatePickerClearIconProps = DatePickerIconProps & {
  disabled?: boolean
}

export const DatePickerClearIcon: FC<DatePickerClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const styles = useDatePickerContext()

  const isDisabled = props.disabled

  const rest = useClickable({
    ref,
    isDisabled,
    ...(props as HTMLAttributes<HTMLElement>),
  })

  return (
    <DatePickerIcon
      aria-label="Clear value"
      className={cx("ui-date-picker__icon--clear", className)}
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <CloseIcon w="0.5em" h="0.5em" />}
    </DatePickerIcon>
  )
}
