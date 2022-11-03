import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  CSSUIObject,
  useMultiComponentStyle,
  CSSUIProps,
} from '@yamada-ui/system'
import { cx, createContext, getValidChildren } from '@yamada-ui/utils'
import { cloneElement } from 'react'

const [BreadcrumbProvider, useBreadcrumb] = createContext<Record<string, CSSUIObject>>({
  name: `BreadcrumbContext`,
  errorMessage: `useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})

type BreadcrumbOptions = {
  separator?: string | JSX.Element
  gap?: CSSUIProps['mx']
}

export type BreadcrumbProps = HTMLUIProps<'nav'> & ThemeProps<'Breadcrumb'> & BreadcrumbOptions

export const Breadcrumb = forwardRef<BreadcrumbProps, 'nav'>((props, ref) => {
  const styles = useMultiComponentStyle('Breadcrumb', props)

  const { className, children, separator = '/', gap = 'sm', ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    ...styles.list,
  }

  const validChildren = getValidChildren(children)
  const count = validChildren.length

  const clones = validChildren.map((child, index) =>
    cloneElement(child, {
      separator,
      gap,
      isLastChild: count === index + 1,
    }),
  )

  return (
    <BreadcrumbProvider value={styles}>
      <ui.nav
        ref={ref}
        className={cx('ui-breadcrumb', className)}
        __css={styles.container}
        {...rest}
      >
        <ui.ol className='ui-breadcrumb-list' __css={css}>
          {clones}
        </ui.ol>
      </ui.nav>
    </BreadcrumbProvider>
  )
})

type BreadcrumbItemOptions = {
  isCurrentPage?: boolean
  isLastChild?: boolean
  separator?: string | JSX.Element
  gap?: CSSUIProps['mx']
}

export type BreadcrumbItemProps = HTMLUIProps<'li'> & BreadcrumbItemOptions

export const BreadcrumbItem = forwardRef<BreadcrumbItemOptions, 'li'>(
  ({ className, children, separator, isCurrentPage, isLastChild, gap, ...rest }, ref) => {
    const styles = useBreadcrumb()

    const validChildren = getValidChildren(children)

    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return cloneElement(child, {
          isCurrentPage,
        })
      }

      if (child.type === BreadcrumbSeparator) {
        return cloneElement(child, {
          gap,
          children: child.props.children || separator,
        })
      }

      return child
    })

    const css: CSSUIObject = {
      display: 'inline-flex',
      alignItems: 'center',
      ...styles.item,
    }

    return (
      <ui.li ref={ref} className={cx('ui-breadcrumb-item', className)} __css={css} {...rest}>
        {clones}
        {!isLastChild ? <BreadcrumbSeparator gap={gap}>{separator}</BreadcrumbSeparator> : null}
      </ui.li>
    )
  },
)

type BreadcrumbLinkOptions = {
  isCurrentPage?: boolean
  separator?: string | JSX.Element
}

export type BreadcrumbLinkProps = HTMLUIProps<'a'> & BreadcrumbLinkOptions

export const BreadcrumbLink = forwardRef<BreadcrumbLinkProps, 'a'>(
  ({ className, children, isCurrentPage, separator, ...rest }, ref) => {
    const styles = useBreadcrumb()

    return (
      <ui.a
        ref={ref}
        as={!isCurrentPage ? 'a' : 'span'}
        className={cx('ui-breadcrumb-link', className)}
        __css={styles.link}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)

type BreadcrumbSeparatorOptions = {
  gap?: CSSUIProps['mx']
}

export type BreadcrumbSeparatorProps = HTMLUIProps<'span'> & BreadcrumbSeparatorOptions

export const BreadcrumbSeparator = forwardRef<BreadcrumbSeparatorProps, 'span'>(
  ({ children, gap: mx, ...rest }, ref) => {
    const styles = useBreadcrumb()
    const css: CSSUIObject = {
      mx,
      ...styles.separator,
    }

    return (
      <ui.span ref={ref} className='ui-breadcrumb-link-separator' __css={css} {...rest}>
        {children}
      </ui.span>
    )
  },
)
