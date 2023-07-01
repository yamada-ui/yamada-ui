import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'

type LinkOptions = {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  isExternal?: boolean
}

export type LinkProps = HTMLUIProps<'a'> & ThemeProps<'Link'> & LinkOptions

export const Link = forwardRef<LinkProps, 'a'>((props, ref) => {
  const [css, mergedProps] = useComponentStyle('Link', props)
  const { className, isExternal, ...rest } = omitThemeProps(mergedProps)

  return (
    <ui.a
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className={cx('ui-link', className)}
      __css={css}
      {...rest}
    />
  )
})
