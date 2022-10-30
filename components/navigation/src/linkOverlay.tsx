import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/system'
import { Link } from './link'

type LinkOverlayOption = {
  isExternal?: boolean
  href?: string
}

export type LinkOverlayProps = HTMLUIProps<'a'> & ThemeProps<'Link'> & LinkOverlayOption

export const LinkOverlay = forwardRef<LinkOverlayProps, 'a'>((props, ref) => {
  const css = useComponentStyle('LinkOverlay', props)
  const { className, isExternal, href, children, ...rest } = omitThemeProps(props)

  return (
    <Link
      isExternal={isExternal}
      href={href}
      position={'static'}
      __css={css}
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
    </Link>
  )
})
