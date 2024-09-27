import type { ButtonProps, IconButtonProps } from "@yamada-ui/button"
import { IconButton, Button } from "@yamada-ui/button"
import type { FC, CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx, isValidElement } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import { useCalendarContext } from "./use-calendar"
import type { UseCalendarHeaderProps } from "./use-calendar-header"
import { useCalendarHeader } from "./use-calendar-header"

interface CalendarHeaderOptions {
  /**
   * Props for calendar control button element.
   */
  controlProps?: Omit<Partial<CalendarControlProps>, "operation">
  /**
   * Props for calendar previous control button element.
   */
  prevProps?: Omit<Partial<CalendarControlProps>, "operation">
  /**
   * Props for calendar next control button element.
   */
  nextProps?: Omit<Partial<CalendarControlProps>, "operation">
  /**
   * Props for calendar label button element.
   */
  labelProps?: CalendarLabelProps & { icon?: IconProps | ReactElement }
  /**
   * The label of the current calendar type.
   */
  label: string
}

export interface CalendarHeaderProps
  extends Omit<HTMLUIProps, "value" | "defaultValue" | "onChange">,
    CalendarHeaderOptions,
    UseCalendarHeaderProps {}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  className,
  index,
  label,
  controlProps,
  prevProps,
  nextProps,
  labelProps,
  ...rest
}) => {
  const { type, withHeader, withControls, withLabel, styles } =
    useCalendarContext()
  const { getContainerProps, getControlProps, getLabelProps } =
    useCalendarHeader({ index })

  const css: CSSUIObject = {
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
    ...styles.label,
  }

  return (
    <Button
      className={cx("ui-calendar__header-label", className)}
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
      className={cx("ui-calendar__header-label-icon", className)}
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
      operation="prev"
      className={cx("ui-calendar__header-control--prev", className)}
      icon={<ChevronIcon __css={{ transform: "rotate(90deg)" }} />}
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
      operation="next"
      className={cx("ui-calendar__header-control--next", className)}
      icon={<ChevronIcon __css={{ transform: "rotate(-90deg)" }} />}
      {...rest}
    />
  )
}

CalendarControlNext.displayName = "CalendarControlNext"
CalendarControlNext.__ui__ = "CalendarControlNext"

export interface CalendarControlProps extends IconButtonProps {
  operation: "prev" | "next"
}

const CalendarControl: FC<CalendarControlProps> = ({
  className,
  operation,
  ...rest
}) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    ...styles.control,
    ...styles[operation],
  }

  return (
    <IconButton
      className={cx("ui-calendar__header-control", className)}
      variant="ghost"
      __css={css}
      {...rest}
    />
  )
}

CalendarControl.displayName = "CalendarControl"
CalendarControl.__ui__ = "CalendarControl"
