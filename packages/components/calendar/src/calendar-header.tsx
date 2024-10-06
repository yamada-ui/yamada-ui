import type { ButtonProps, IconButtonProps } from "@yamada-ui/button"
import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { ReactElement } from "react"
import type { UseCalendarHeaderProps } from "./use-calendar-header"
import { Button, IconButton } from "@yamada-ui/button"
import { ui } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx, isValidElement } from "@yamada-ui/utils"
import { useCalendarContext } from "./use-calendar"
import { useCalendarHeader } from "./use-calendar-header"

interface CalendarHeaderOptions {
  /**
   * The label of the current calendar type.
   */
  label: string
  /**
   * Props for calendar control button element.
   */
  controlProps?: Omit<CalendarControlProps, "operation">
  /**
   * Props for calendar label button element.
   */
  labelProps?: { icon?: IconProps | ReactElement } & CalendarLabelProps
  /**
   * Props for calendar next control button element.
   */
  nextProps?: Omit<CalendarControlProps, "operation">
  /**
   * Props for calendar previous control button element.
   */
  prevProps?: Omit<CalendarControlProps, "operation">
}

export interface CalendarHeaderProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange" | "value">,
    CalendarHeaderOptions,
    UseCalendarHeaderProps {}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  className,
  index,
  label,
  controlProps,
  labelProps,
  nextProps,
  prevProps,
  ...rest
}) => {
  const { type, styles, withControls, withHeader, withLabel } =
    useCalendarContext()
  const { getContainerProps, getControlProps, getLabelProps } =
    useCalendarHeader({ index })

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    w: "100%",
    ...styles.header,
  }
  const { icon: iconElOrProps, ...computedLabelProps } = labelProps ?? {}

  return withHeader ? (
    <ui.div
      className={cx("ui-calendar__header", className)}
      __css={css}
      {...getContainerProps(rest)}
    >
      {withControls ? (
        <CalendarControlPrev
          {...getControlProps({
            operation: "prev",
            ...controlProps,
            ...prevProps,
          })}
        />
      ) : null}

      {withLabel ? (
        <CalendarLabel {...getLabelProps({ ...computedLabelProps })}>
          {label}
          {type !== "year" ? (
            isValidElement(iconElOrProps) ? (
              iconElOrProps
            ) : (
              <CalendarLabelIcon {...iconElOrProps} />
            )
          ) : null}
        </CalendarLabel>
      ) : null}

      {withControls ? (
        <CalendarControlNext
          {...getControlProps({
            operation: "next",
            ...controlProps,
            ...nextProps,
          })}
        />
      ) : null}
    </ui.div>
  ) : null
}

CalendarHeader.displayName = "CalendarHeader"
CalendarHeader.__ui__ = "CalendarHeader"

export interface CalendarLabelProps extends ButtonProps {}

const CalendarLabel: FC<CalendarLabelProps> = ({ className, ...rest }) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    flex: 1,
    fontSize: undefined,
    fontWeight: "normal",
    gap: 1,
    h: "auto",
    ...styles.label,
  }

  return (
    <Button
      className={cx("ui-calendar__header__label", className)}
      variant="ghost"
      __css={css}
      {...rest}
    />
  )
}

CalendarLabel.displayName = "CalendarLabel"
CalendarLabel.__ui__ = "CalendarLabel"

export interface CalendarLabelIconProps extends IconProps {}

const CalendarLabelIcon: FC<CalendarLabelIconProps> = ({
  className,
  ...rest
}) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    ...styles.labelIcon,
  }

  return (
    <ChevronIcon
      className={cx("ui-calendar__header__label__icon", className)}
      __css={css}
      {...rest}
    />
  )
}

CalendarLabelIcon.displayName = "CalendarLabelIcon"
CalendarLabelIcon.__ui__ = "CalendarLabelIcon"

export interface CalendarControlSharedProps
  extends Omit<CalendarControlProps, "operation"> {}

const CalendarControlPrev: FC<CalendarControlSharedProps> = ({
  className,
  ...rest
}) => {
  return (
    <CalendarControl
      className={cx("ui-calendar__header__control--prev", className)}
      icon={<ChevronIcon __css={{ transform: "rotate(90deg)" }} />}
      operation="prev"
      {...rest}
    />
  )
}

CalendarControlPrev.displayName = "CalendarControlPrev"
CalendarControlPrev.__ui__ = "CalendarControlPrev"

const CalendarControlNext: FC<CalendarControlSharedProps> = ({
  className,
  ...rest
}) => {
  return (
    <CalendarControl
      className={cx("ui-calendar__header__control--next", className)}
      icon={<ChevronIcon __css={{ transform: "rotate(-90deg)" }} />}
      operation="next"
      {...rest}
    />
  )
}

CalendarControlNext.displayName = "CalendarControlNext"
CalendarControlNext.__ui__ = "CalendarControlNext"

export interface CalendarControlProps extends IconButtonProps {
  operation: "next" | "prev"
}

const CalendarControl: FC<CalendarControlProps> = ({
  className,
  operation,
  ...rest
}) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    h: "auto",
    minW: "auto",
    ...styles.control,
    ...styles[operation],
  }

  return (
    <IconButton
      className={cx("ui-calendar__header__control", className)}
      variant="ghost"
      __css={css}
      {...rest}
    />
  )
}

CalendarControl.displayName = "CalendarControl"
CalendarControl.__ui__ = "CalendarControl"
