import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon, CloseIcon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import type { FC, HTMLAttributes } from "react"
import { cloneElement, useRef } from "react"
import { useDatePickerContext } from "./use-date-picker"

export type DatePickerIconProps = HTMLUIProps<"div">

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
      className={cx("ui-date-picker__icon__calendar", className)}
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
