import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

type LinkOptions = {
  isExternal?: boolean
}

export type LinkProps = HTMLUIProps<'a'> & ThemeProps<'Link'> & LinkOptions

export const Link = forwardRef<LinkProps, 'a'>((props, ref) => {
  const css = useComponentStyle('Link', props)
  const { className, isExternal, ...rest } = omitThemeProps(props)

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

type LinkBoxOption = {
  isExternal?: boolean
  href?: string
}

export type LinkBoxProps = HTMLUIProps<'article'> & ThemeProps<'article'> & LinkBoxOption

export const LinkBox = forwardRef<LinkBoxProps, 'article'>((props, ref) => {
  const css = useComponentStyle('article', props)
  const { className, isExternal, ...rest } = omitThemeProps(props)
  const { children, href } = props

  return (
    <ui.article className={cx('ui-article', className)} __css={css} position={'relative'} {...rest}>
      <Link
        isExternal={isExternal}
        href={href}
        position={'static'}
        _before={{
          content: '""',
          cursor: 'inherit',
          display: 'block',
          position: 'absolute',
          top: '0px',
          left: '0px',
          zIndex: '0',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Link>
    </ui.article>
  )
})
