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
  
    return <ui.a ref={ref} rel='nofollow' target={isExternal ? '_blank' : '_parent'} className={cx('ui-link', className)} __css={css} {...rest} />
    
  })