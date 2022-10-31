import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

type LinkOverlayOption = {
  isExternal?: boolean
  href?: string
}

export type LinkOverlayProps = HTMLUIProps<'a'> & ThemeProps<'Link'> & LinkOverlayOption

export const LinkOverlay = forwardRef<LinkOverlayProps, 'a'>((props, ref) => {
  const { className, isExternal, href, children, ...rest } = omitThemeProps(props)

  return (
    <ui.a
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className={cx('ui-link', className)}
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
      {...rest}
    >
      {children}
    </ui.a>
  )
})

export type LinkBoxProps = HTMLUIProps<'div'> & ThemeProps<'div'> //& LinkBoxOption

export const LinkBox = forwardRef<LinkBoxProps, 'div'>((props, ref) => {
  const css = useComponentStyle('LinkBox', props)
  const { className, children, ...rest } = omitThemeProps(props)

  return (
    <ui.div className={cx('ui-link-box', className)} __css={css} position={'relative'} {...rest}>
      {children}
    </ui.div>
  )
})
