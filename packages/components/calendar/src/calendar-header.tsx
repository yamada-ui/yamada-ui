import {
  IconButton,
  Button,
  IconButtonProps,
  ButtonProps,
} from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { ChevronIcon, IconProps } from '@yamada-ui/icon'
import { cx, isValidElement } from '@yamada-ui/utils'
import { FC, ReactElement } from 'react'
import {
  UseCalendarHeaderProps,
  useCalendarContext,
  useCalendarHeader,
} from './use-calendar'

type CalendarHeaderOptions = {
  /**
   * Props for calendar control button element.
   */
  controlProps?: CalendarControlProps
  /**
   * Props for calendar previous control button element.
   */
  prevProps?: CalendarControlProps
  /**
   * Props for calendar next control button element.
   */
  nextProps?: CalendarControlProps
  /**
   * Props for calendar label button element.
   */
  labelProps?: CalendarLabelProps & { icon?: IconProps | ReactElement }
  /**
   * The label of the current calendar type.
   */
  label: string
}

export type CalendarHeaderProps = Omit<
  HTMLUIProps<'div'>,
  'value' | 'defaultValue' | 'onChange'
> &
  CalendarHeaderOptions &
  UseCalendarHeaderProps

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
    display: 'flex',
    alignItems: 'center',
    w: 'full',
    ...styles.header,
  }
  const { icon: iconElOrProps, ...computedLabelProps } = labelProps ?? {}

  return withHeader ? (
    <ui.div
      className={cx('ui-calendar__header', className)}
      __css={css}
      {...getContainerProps(rest)}
    >
      {withControls ? (
        <CalendarControlPrev
          {...getControlProps({
            operation: 'prev',
            ...controlProps,
            ...prevProps,
          })}
        />
      ) : null}

      {withLabel ? (
        <CalendarLabel {...getLabelProps({ ...computedLabelProps })}>
          {label}
          {type !== 'year' ? (
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
            operation: 'next',
            ...controlProps,
            ...nextProps,
          })}
        />
      ) : null}
    </ui.div>
  ) : null
}

export type CalendarLabelProps = ButtonProps

const CalendarLabel: FC<CalendarLabelProps> = ({ className, ...rest }) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    flex: 1,
    h: 'auto',
    fontSize: undefined,
    fontWeight: 'normal',
    gap: 1,
    ...styles.label,
  }

  return (
    <Button
      className={cx('ui-calendar__header__label', className)}
      variant='ghost'
      __css={css}
      {...rest}
    />
  )
}

export type CalendarLabelIconProps = IconProps

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
      className={cx('ui-calendar__header__label__icon', className)}
      __css={css}
      {...rest}
    />
  )
}

export type CalendarControlProps = IconButtonProps

const CalendarControlPrev: FC<CalendarControlProps> = ({
  className,
  ...rest
}) => {
  return (
    <CalendarControl
      operation='prev'
      className={cx('ui-calendar__header__control--prev', className)}
      icon={<ChevronIcon __css={{ transform: 'rotate(90deg)' }} />}
      {...rest}
    />
  )
}

const CalendarControlNext: FC<CalendarControlProps> = ({
  className,
  ...rest
}) => {
  return (
    <CalendarControl
      operation='next'
      className={cx('ui-calendar__header__control--next', className)}
      icon={<ChevronIcon __css={{ transform: 'rotate(-90deg)' }} />}
      {...rest}
    />
  )
}

const CalendarControl: FC<
  CalendarControlProps & { operation: 'prev' | 'next' }
> = ({ className, operation, ...rest }) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    minW: 'auto',
    h: 'auto',
    ...styles.control,
    ...styles[operation],
  }

  return (
    <IconButton
      className={cx('ui-calendar__header__control', className)}
      variant='ghost'
      __css={css}
      {...rest}
    />
  )
}
