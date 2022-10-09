import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwordRef } from '../../system'
import { CSSUIProps, HTMLUIProps, ThemeProps } from '../../types'
import { cx, filterUndefined } from '../../utils'

type TextOptions = {
  align?: CSSUIProps['textAlign']
  decoration?: CSSUIProps['textDecoration']
  casing?: CSSUIProps['textTransform']
}

export type TextProps = HTMLUIProps<'p'> & ThemeProps<'Text'> & TextOptions

export const Text = forwordRef<TextProps, 'p'>((props, ref) => {
  const css = useComponentStyle('Text', props)
  const {
    className,
    align: textAlign,
    decoration: textDecoration,
    casing: textTransform,
    ...rest
  } = omitThemeProps(props)

  const textProps = filterUndefined({
    textAlign,
    textDecoration,
    textTransform,
  })

  // @ts-ignore
  return (
    <ui.p ref={ref} className={cx('ui-text', className)} __css={css} {...textProps} {...rest} />
  )
})
