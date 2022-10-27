import {
    ui,
    forwardRef,
    HTMLUIProps,
    omitThemeProps,
    ThemeProps,
    useComponentStyle,
  } from '@yamada-ui/system'
  import { cx } from '@yamada-ui/utils'

  type LinkOptions<T extends string, K extends boolean | number> = {
    [key in T]-?: K
  }
  
  export type LinkProps = HTMLUIProps<'a'> & ThemeProps<'Link'> & LinkOptions<"isExternal", boolean>
  
  export const Link = forwardRef<LinkProps, 'a'>((props, ref) => {
    const css = useComponentStyle('Link', props)
    const { className, ...rest } = omitThemeProps(props)
  
    return <ui.a ref={ref} target='_blank' className={cx('ui-Link', className)} __css={css} {...rest} />
    
  })