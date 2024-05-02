import type {
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  CSSUIProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import type { IconProps } from "@yamada-ui/icon"
import { cx, createContext, getValidChildren } from "@yamada-ui/utils"
import { cloneElement } from "react"

const [BreadcrumbProvider, useBreadcrumb] = createContext<
  Record<string, CSSUIObject>
>({
  name: "BreadcrumbContext",
  errorMessage: `useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})

type BreadcrumbOptions = {
  /**
   * The visual separator between each breadcrumb item.
   *
   * @default '/'
   */
  separator?: string | JSX.Element
  /**
   * The left and right margin applied to the separator.
   *
   * @default '2'
   */
  gap?: CSSUIProps["mx"]
  /**
   * Props for ol element.
   */
  listProps?: HTMLUIProps<"ol">
}

export type BreadcrumbProps = Omit<HTMLUIProps<"nav">, "gap"> &
  ThemeProps<"Breadcrumb"> &
  BreadcrumbOptions

/**
 * `Breadcrumb` is a component that helps users understand the hierarchy of a website.
 *
 * @see Docs https://yamada-ui.com/components/navigation/breadcrumb
 */
export const Breadcrumb = forwardRef<BreadcrumbProps, "nav">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Breadcrumb", props)

  const {
    className,
    children,
    separator = "/",
    gap = "fallback(2, 0.5rem)",
    listProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: "flex",
    alignItems: "center",
    ...styles.list,
  }

  const validChildren = getValidChildren(children)
  const count = validChildren.length

  const cloneChildren = validChildren.map((child, index) =>
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
        className={cx("ui-breadcrumb", className)}
        __css={styles.container}
        {...rest}
      >
        <ui.ol className="ui-breadcrumb__list" {...listProps} __css={css}>
          {cloneChildren}
        </ui.ol>
      </ui.nav>
    </BreadcrumbProvider>
  )
})

type BreadcrumbItemOptions = Pick<BreadcrumbProps, "separator" | "gap"> & {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  isCurrentPage?: boolean
  /**
   * If `true`, not show separator.
   *
   * @default false
   */
  isLastChild?: boolean
}

export type BreadcrumbItemProps = HTMLUIProps<"li"> & BreadcrumbItemOptions

export const BreadcrumbItem = forwardRef<BreadcrumbItemOptions, "li">(
  (
    {
      className,
      children,
      separator,
      isCurrentPage,
      isLastChild,
      gap,
      ...rest
    },
    ref,
  ) => {
    const styles = useBreadcrumb()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) => {
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
      display: "inline-flex",
      alignItems: "center",
      ...styles.item,
    }

    return (
      <ui.li
        ref={ref}
        className={cx("ui-breadcrumb__item", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}

        {!isLastChild ? (
          <BreadcrumbSeparator gap={gap}>{separator}</BreadcrumbSeparator>
        ) : null}
      </ui.li>
    )
  },
)

type BreadcrumbLinkOptions = {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  isCurrentPage?: boolean
}

export type BreadcrumbLinkProps = HTMLUIProps<"a"> & BreadcrumbLinkOptions

export const BreadcrumbLink = forwardRef<BreadcrumbLinkProps, "a">(
  ({ className, children, isCurrentPage, href, ...rest }, ref) => {
    const styles = useBreadcrumb()

    return (
      <ui.a
        ref={ref}
        as={!isCurrentPage ? "a" : "span"}
        href={!isCurrentPage ? href : undefined}
        aria-current={isCurrentPage ? "page" : undefined}
        className={cx("ui-breadcrumb__link", className)}
        __css={styles.link}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)

type BreadcrumbSeparatorOptions = {
  /**
   * The CSS `margin-inline-start`, and `margin-inline-end` property.
   */
  gap?: CSSUIObject["mx"]
}

export type BreadcrumbSeparatorProps = HTMLUIProps<"span"> &
  BreadcrumbSeparatorOptions

export const BreadcrumbSeparator = forwardRef<BreadcrumbSeparatorProps, "span">(
  ({ children, gap: mx, ...rest }, ref) => {
    const styles = useBreadcrumb()
    const css: CSSUIObject = {
      mx,
      ...styles.separator,
    }

    return (
      <ui.span
        ref={ref}
        className="ui-breadcrumb__item__separator"
        __css={css}
        {...rest}
      >
        {children}
      </ui.span>
    )
  },
)

type BreadcrumbEllipsisOptions = {}

export type BreadcrumbEllipsisProps = IconProps & BreadcrumbEllipsisOptions

export const BreadcrumbEllipsis = forwardRef<BreadcrumbEllipsisProps, "span">(
  ({ className, ...rest }, ref) => {
    const styles = useBreadcrumb()

    const css: CSSUIObject = {
      ...styles.ellipsis,
    }

    return (
      <Icon
        ref={ref}
        title="ellipsis"
        className={cx("ui-breadcrumb__item__ellipsis", className)}
        __css={css}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <circle cx="10" cy="12" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
        <circle cx="30" cy="12" r="2" fill="currentColor" />
      </Icon>
    )
  },
)
