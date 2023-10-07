import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  CSSUIObject,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'

type LinkOverlayOptions = {
  /**
   * If `true`, the link will open in new tab.
   *
   * @default false
   */
  isExternal?: boolean
}

export type LinkOverlayProps = HTMLUIProps<'a'> & LinkOverlayOptions

export const LinkOverlay = forwardRef<LinkOverlayProps, 'a'>(
  ({ className, isExternal, target, rel, href, children, ...rest }, ref) => {
    const css: CSSUIObject = {
      position: 'static',
      _before: {
        content: '""',
        cursor: 'inherit',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      },
    }
    return (
      <ui.a
        ref={ref}
        target={isExternal ? '_blank' : target}
        rel={isExternal ? 'noopener' : rel}
        className={cx('ui-link-overlay', className)}
        isExternal={isExternal}
        href={href}
        __css={css}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)

export type LinkBoxProps = HTMLUIProps<'div'> & ThemeProps<'LinkBox'>

export const LinkBox = forwardRef<LinkBoxProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useComponentStyle('LinkBox', props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    'a[href]:not(.ui-link-overlay), abbr[title]': {
      position: 'relative',
      zIndex: 'yamcha',
    },
    ...styles,
  }

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
