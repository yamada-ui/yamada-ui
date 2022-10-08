import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwordRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

export type TextProps = HTMLUIProps<'h1'> & ThemeProps<'Text'>

export const Text = forwordRef<TextProps, 'h1'>((props, ref) => {
  const css = useComponentStyle('Text', props)
  const { className, ...rest } = omitThemeProps(props)

  return <ui.h1 ref={ref} className={cx('ui-text', className)} __css={css} {...rest} />
})
