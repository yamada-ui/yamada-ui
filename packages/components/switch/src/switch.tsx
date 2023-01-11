import { useCheckbox, UseCheckboxProps } from '@yamada-ui/checkbox'
import {
  ui,
  forwardRef,
  omitThemeProps,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
} from '@yamada-ui/core'
import { motion, MotionTransition } from '@yamada-ui/motion'
import { cx, dataAttr, omitObject } from '@yamada-ui/utils'
import { cloneElement, InputHTMLAttributes, ReactElement } from 'react'

export type SwitchIconProps = {
  isChecked?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isActive?: boolean
}

type SwitchOptions = {
  icon?: ReactElement<SwitchIconProps>
  input?: InputHTMLAttributes<HTMLInputElement>
  label?: HTMLUIProps<'span'>
  reverse?: boolean
  transition?: MotionTransition
}

export type SwitchProps = Omit<UseCheckboxProps, 'isIndeterminate'> &
  Omit<HTMLUIProps<'label'>, keyof UseCheckboxProps> &
  ThemeProps<'Switch'> &
  SwitchOptions

export const Switch = forwardRef<SwitchProps, 'input'>((props, ref) => {
  const styles = useMultiComponentStyle('Switch', props)
  const {
    className,
    gap = '0.5rem',
    children,
    icon,
    input,
    label,
    reverse,
    flexDirection,
    transition = {
      type: 'spring',
      stiffness: 700,
      damping: 40,
    },
    ...rest
  } = omitThemeProps(props)

  const {
    isChecked,
    isFocused,
    isHovered,
    isActive,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  } = useCheckbox(rest)

  const cloneIcon = icon
    ? cloneElement(icon, {
        isChecked,
        isFocused,
        isHovered,
        isActive,
      })
    : null

  return (
    <ui.label
      ref={ref}
      className={cx('ui-switch', className)}
      __css={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        flexDirection: flexDirection ?? (reverse ? 'row-reverse' : 'row'),
        alignItems: 'center',
        verticalAlign: 'top',
        gap,
        ...styles.container,
      }}
      {...getContainerProps()}
      {...omitObject(rest, [
        'id',
        'name',
        'value',
        'defaultValue',
        'checked',
        'defaultChecked',
        'isChecked',
        'onChange',
        'onBlur',
        'onFocus',
      ])}
    >
      <ui.input className='ui-switch-input' {...getInputProps(input, ref)} />

      {cloneIcon ?? (
        <ui.span
          className='ui-switch-track'
          __css={{
            boxSizing: 'content-box',
            display: 'inline-flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexShrink: 0,
            ...styles.track,
          }}
          {...getIconProps()}
        >
          <ui.span
            as={motion.span}
            className='ui-switch-thumb'
            data-checked={dataAttr(isChecked)}
            layout
            transition={transition}
            __css={{ ...styles.thumb }}
          />
        </ui.span>
      )}

      {children ? (
        <ui.span className='ui-switch-label' __css={{ ...styles.label }} {...getLabelProps(label)}>
          {children}
        </ui.span>
      ) : null}
    </ui.label>
  )
})
