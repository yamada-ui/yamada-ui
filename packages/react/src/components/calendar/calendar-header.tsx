import type { ReactElement } from "react"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import type { ButtonProps, IconButtonProps } from "../button"
import type { IconProps } from "../icon"
import type { UseCalendarHeaderProps } from "./use-calendar-header"
import { ui } from "../../core"
import { cx, isValidElement } from "../../utils"
import { Button, IconButton } from "../button"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "../icon"
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

  const { icon: iconOrProps, ...computedLabelProps } = labelProps ?? {}

  return withHeader ? (
    <ui.div
      className={cx("ui-calendar__header", className)}
      __css={styles.header}
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
            isValidElement(iconOrProps) ? (
              iconOrProps
            ) : (
              <CalendarLabelIcon {...iconOrProps} />
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

  return (
    <Button
      className={cx("ui-calendar__header__label", className)}
      variant="ghost"
      __css={styles.label}
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
    <ChevronDownIcon
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
      icon={<ChevronLeftIcon />}
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
      icon={<ChevronRightIcon />}
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

  return (
    <IconButton
      className={cx("ui-calendar__header__control", className)}
      variant="ghost"
      __css={{
        ...styles.control,
        ...styles[operation],
      }}
      {...rest}
    />
  )
}

CalendarControl.displayName = "CalendarControl"
CalendarControl.__ui__ = "CalendarControl"
