import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwordRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

type DividerOptions = {
  orientation?: 'horizontal' | 'vertical'
}

export type DividerProps = HTMLUIProps<'hr'> & ThemeProps<'Divider'> & DividerOptions

export const Divider = forwordRef<DividerProps, 'hr'>((props, ref) => {
  const {
    borderRightWidth,
    borderLeftWidth,
    borderTopWidth,
    borderBottomWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...styles
  } = useComponentStyle('Divider', props)
  const { className, orientation = 'horizontal', __css, ...rest } = omitThemeProps(props)

  const customStyles = {
    vertical: {
      border: '0',
      borderStyle,
      borderColor,
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || '1px',
      height: '100%',
    },
    horizontal: {
      border: '0',
      borderStyle,
      borderColor,
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || '1px',
      width: '100%',
    },
  }

  return (
    // @ts-ignore
    <ui.hr
      ref={ref}
      className={cx('ui-divider', className)}
      __css={{
        ...styles,
        ...customStyles[orientation],
        ...__css,
      }}
      {...rest}
    />
  )
})
