import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx, filterUndefined } from '@yamada-ui/utils'

type TextOptions = {
  align?: CSSUIProps['textAlign']
  decoration?: CSSUIProps['textDecoration']
  casing?: CSSUIProps['textTransform']
}

export type TextProps = HTMLUIProps<'p'> & ThemeProps<'Text'> & TextOptions

export const Text = forwardRef<TextProps, 'p'>((props, ref) => {
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

  return (
    <ui.p ref={ref} className={cx('ui-text', className)} __css={css} {...textProps} {...rest} />
  )
})
