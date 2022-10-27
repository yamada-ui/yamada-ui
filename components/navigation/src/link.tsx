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
  
    if(isExternal) {
      return <ui.a ref={ref} target='_blank' className={cx('ui-Link', className)} __css={css} {...rest} />
    } else {
      return <ui.a ref={ref} className={cx('ui-Link', className)} __css={css} {...rest} />
    }
    
  })