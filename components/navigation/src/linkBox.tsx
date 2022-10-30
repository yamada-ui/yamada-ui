import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type LinkBoxProps = HTMLUIProps<'div'> & ThemeProps<'div'> //& LinkBoxOption

export const LinkBox = forwardRef<LinkBoxProps, 'article'>((props, ref) => {
  const css = useComponentStyle('LinkBox', props)
  const { className, ...rest } = omitThemeProps(props)
  const { children } = props

  return (
    <ui.article className={cx('ui-article', className)} __css={css} position={'relative'} {...rest}>
      {children}
    </ui.article>
  )
})
