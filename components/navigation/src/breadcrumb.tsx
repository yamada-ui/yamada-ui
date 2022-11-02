import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

type BreadcrumbOptions = {
  separator?: string
}

export type BreadcrumbProps = HTMLUIProps<'nav'> & ThemeProps<'Breadcrumb'> & BreadcrumbOptions

export const Breadcrumb = forwardRef<BreadcrumbProps, 'nav'>((props, ref) => {
  const css = useComponentStyle('Breadcrumb', props)
  const { className, children, ...rest } = omitThemeProps(props)
  return (
    <ui.nav className={className} __css={css} {...rest}>
      {children}
    </ui.nav>
  )
})
