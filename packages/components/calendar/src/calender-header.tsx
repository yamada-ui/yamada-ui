import { IconButton, Button, IconButtonProps, ButtonProps } from '@yamada-ui/button'
import { ui, CSSUIObject, HTMLUIProps } from '@yamada-ui/core'
import { ChevronIcon, IconProps } from '@yamada-ui/icon'
import { cx, isValidElement } from '@yamada-ui/utils'
import { FC, ReactElement } from 'react'
import { UseCalenderHeaderProps, useCalendarContext, useCalenderHeader } from './use-calendar'

type CalenderHeaderOptions = {
  /**
   * Props for calendar control button element.
   */
  controlProps?: CalenderControlProps
  /**
   * Props for calendar previous control button element.
   */
  prevProps?: CalenderControlProps
  /**
   * Props for calendar next control button element.
   */
  nextProps?: CalenderControlProps
  /**
   * Props for calendar label button element.
   */
  labelProps?: CalenderLabelProps & { icon?: IconProps | ReactElement }
  /**
   * The label of the current calendar type.
   */
  label: string
}

export type CalenderHeaderProps = Omit<HTMLUIProps<'div'>, 'value' | 'defaultValue' | 'onChange'> &
  CalenderHeaderOptions &
  UseCalenderHeaderProps

export const CalenderHeader: FC<CalenderHeaderProps> = ({
  className,
  index,
  label,
  controlProps,
  prevProps,
  nextProps,
  labelProps,
  ...rest
}) => {
  const { type, withHeader, withControls, withLabel, styles } = useCalendarContext()
  const { getContainerProps, getControlProps, getLabelProps } = useCalenderHeader({ index })

  const css: CSSUIObject = { display: 'flex', alignItems: 'center', w: 'full', ...styles.header }
  const { icon: iconElOrProps, ...computedLabelProps } = labelProps ?? {}

  return withHeader ? (
    <ui.div
      className={cx('ui-calendar-header', className)}
      __css={css}
      {...getContainerProps(rest)}
    >
      {withControls ? (
        <CalenderControlPrev
          {...getControlProps({ operation: 'prev', ...controlProps, ...prevProps })}
        />
      ) : null}

      {withLabel ? (
        <CalenderLabel {...getLabelProps({ ...computedLabelProps })}>
          {label}
          {type !== 'year' ? (
            isValidElement(iconElOrProps) ? (
              iconElOrProps
            ) : (
              <CalenderLabelIcon {...iconElOrProps} />
            )
          ) : null}
        </CalenderLabel>
      ) : null}

      {withControls ? (
        <CalenderControlNext
          {...getControlProps({ operation: 'next', ...controlProps, ...nextProps })}
        />
      ) : null}
    </ui.div>
  ) : null
}

export type CalenderLabelProps = ButtonProps

const CalenderLabel: FC<CalenderLabelProps> = ({ className, ...rest }) => {
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
      className={cx('ui-calender-header-label', className)}
      variant='ghost'
      __css={css}
      {...rest}
    />
  )
}

export type CalenderLabelIconProps = IconProps

const CalenderLabelIcon: FC<CalenderLabelIconProps> = ({ className, ...rest }) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = {
    ...styles.labelIcon,
  }

  return <ChevronIcon __css={css} {...rest} />
}

export type CalenderControlProps = IconButtonProps

const CalenderControlPrev: FC<CalenderControlProps> = ({ className, ...rest }) => {
  return (
    <CalenderControl
      operation='prev'
      className={cx('ui-calender-header-control-prev', className)}
      icon={<ChevronIcon __css={{ transform: 'rotate(90deg)' }} />}
      {...rest}
    />
  )
}

const CalenderControlNext: FC<CalenderControlProps> = ({ className, ...rest }) => {
  return (
    <CalenderControl
      operation='next'
      className={cx('ui-calender-header-control-next', className)}
      icon={<ChevronIcon __css={{ transform: 'rotate(-90deg)' }} />}
      {...rest}
    />
  )
}

const CalenderControl: FC<CalenderControlProps & { operation: 'prev' | 'next' }> = ({
  className,
  operation,
  ...rest
}) => {
  const { styles } = useCalendarContext()

  const css: CSSUIObject = { minW: 'auto', h: 'auto', ...styles.control, ...styles[operation] }

  return (
    <IconButton
      className={cx('ui-calendar-header-control', className)}
      variant='ghost'
      __css={css}
      {...rest}
    />
  )
}
