import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx, getValidChildren } from '@yamada-ui/utils'
import { cloneElement } from 'react'

type BreadcrumbOptions = {
  separator?: string
}

export type BreadcrumbProps = HTMLUIProps<'nav'> & ThemeProps<'Breadcrumb'> & BreadcrumbOptions

export const Breadcrumb = forwardRef<BreadcrumbProps, 'nav'>((props, ref) => {
  const styles = useComponentStyle('Breadcrumb', props)
  const { className, children, separator, ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    '.ui-breadcrumb-ol': {
      display: 'flex',
    },
    ...styles,
  }

  const validChildren = getValidChildren(children)
  const count = validChildren.length

  const clones = validChildren.map((child, index) =>
    cloneElement(child, {
      separator,
      // spacing,
      isLastChild: count === index + 1,
    }),
  )
  return (
    <ui.nav className={cx('ui-breadcrumb', className)} __css={css} {...rest} ref={ref}>
      <ui.ol className='ui-breadcrumb-ol'>{clones}</ui.ol>
    </ui.nav>
  )
})

type BreadcrumbItemOptions = {
  isCurrentPage?: boolean
  separator?: string
}

export type BreadcrumbItemProps = HTMLUIProps<'li'> & BreadcrumbItemOptions

export const BreadcrumbItem = forwardRef<BreadcrumbItemOptions, 'li'>(
  ({ className, children, separator, isCurrentPage, ...rest }, ref) => {
    // ここのisCurrentPageを子コンポーネントに渡したい
    const validChildren = getValidChildren(children)

    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return cloneElement(child, {
          isCurrentPage,
          separator,
        })
      }

      // if (child.type === BreadcrumbSeparator) {
      //   return cloneElement(child, {
      //     spacing,
      //     children: child.props.children || separator,
      //   })
      // }

      return child
    })
    return (
      <ui.li ref={ref} className={cx('ui-breadcrumb-li', className)} {...rest}>
        {clones}
      </ui.li>
    )
  },
)

type BreadcrumbLinkOptions = {
  isCurrentPage?: boolean
  separator?: string
}

export type BreadcrumbLinkProps = HTMLUIProps<'a'> & BreadcrumbLinkOptions

export const BreadcrumbLink = forwardRef<BreadcrumbLinkProps, 'a'>(
  ({ className, children, isCurrentPage, separator, ...rest }, ref) => {
    const css: CSSUIObject = {
      '.ui-breadcrumb-link-separator': {
        marginInline: '0.5rem',
      },
    }
    return (
      <ui.a
        ref={ref}
        __css={css}
        as={!isCurrentPage ? 'a' : 'span'}
        className={cx('ui-breadcrumb-link', className)}
        {...rest}
      >
        {children}
        {isCurrentPage ? (
          ''
        ) : (
          <ui.span className='ui-breadcrumb-link-separator'>{separator || '/'}</ui.span>
        )}
      </ui.a>
    )
  },
)
