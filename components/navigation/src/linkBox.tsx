import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type LinkBoxProps = HTMLUIProps<'div'> & ThemeProps<'div'>

export const LinkBox = forwardRef<LinkBoxProps, 'div'>((props, ref) => {
  const css = useComponentStyle('LinkBox', props)
  const { className, children, ...rest } = omitThemeProps(props)

  return (
    <ui.div
      ref={ref}
      className={cx('ui-link-box', className)}
      __css={css}
      position='relative'
      {...rest}
    >
      {children}
    </ui.div>
  )
})

type LinkOverlayOptions = {
  isExternal?: boolean
}

export type LinkOverlayProps = HTMLUIProps<'a'> & LinkOverlayOptions

export const LinkOverlay = forwardRef<LinkOverlayProps, 'a'>((props, ref) => {
  const { className, isExternal, href, children, ...rest } = props

  return (
    <ui.a
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className={cx('ui-link-overlay', className)}
      isExternal={isExternal}
      href={href}
      position='static'
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
