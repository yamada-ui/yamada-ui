import { useMemo } from 'react'
import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwardRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

type DividerOptions = {
  orientation?: 'horizontal' | 'vertical'
}

export type DividerProps = HTMLUIProps<'hr'> & ThemeProps<'Divider'> & DividerOptions

export const Divider = forwardRef<DividerProps, 'hr'>((props, ref) => {
  const {
    borderRightWidth,
    borderLeftWidth,
    borderTopWidth,
    borderBottomWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...css
  } = useComponentStyle('Divider', props)
  const { className, orientation = 'horizontal', __css, ...rest } = omitThemeProps(props)

  const customStyles = useMemo(
    () => ({
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
    }),
    [
      borderBottomWidth,
      borderColor,
      borderLeftWidth,
      borderRightWidth,
      borderStyle,
      borderTopWidth,
      borderWidth,
    ],
  )

  const dividerCSS = useMemo(() => customStyles[orientation], [customStyles, orientation])

  return (
    // @ts-ignore
    <ui.hr
      ref={ref}
      className={cx('ui-divider', className)}
      // @ts-ignore
      __css={{
        ...css,
        ...dividerCSS,
        ...__css,
      }}
      {...rest}
    />
  )
})
