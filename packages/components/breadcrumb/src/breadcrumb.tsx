import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import type { ReactElement, ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { useValue } from "@yamada-ui/use-value"
import {
  createContext,
  cx,
  getValidChildren,
  isNumber,
  runIfFunc,
} from "@yamada-ui/utils"
import { cloneElement, Fragment, useCallback, useMemo } from "react"

const [BreadcrumbProvider, useBreadcrumb] = createContext<{
  [key: string]: CSSUIObject | undefined
}>({
  name: "BreadcrumbContext",
  errorMessage: `useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})

export interface BreadcrumbGenerateItem extends BreadcrumbLinkProps {
  name?: ReactNode
  isEllipsisPage?: boolean
  containerProps?: Omit<BreadcrumbItemProps, "isLastChild">
}

interface BreadcrumbOptions {
  /**
   * The icon to be used in the ellipsis.
   */
  ellipsis?:
    | ((props: { items: BreadcrumbGenerateItem[] }) => ReactNode)
    | ReactNode
  /**
   * Number of elements visible on the end(right) edges.
   */
  endBoundaries?: Token<number>
  /**
   * The left and right margin applied to the separator.
   *
   * @default '2'
   */
  gap?: CSSUIProps["mx"]
  /**
   * If provided, generate breadcrumb items based on items.
   */
  items?: BreadcrumbGenerateItem[]
  /**
   * The visual separator between each breadcrumb item.
   *
   * @default '/'
   */
  separator?: ReactElement | string
  /**
   * Number of elements visible on the start(left) edges.
   */
  startBoundaries?: Token<number>
  /**
   * Props for ol element.
   */
  listProps?: HTMLUIProps<"ol">
}

export interface BreadcrumbProps
  extends Omit<HTMLUIProps<"nav">, "gap">,
    ThemeProps<"Breadcrumb">,
    BreadcrumbOptions {}

/**
 * `Breadcrumb` is a component that helps users understand the hierarchy of a website.
 *
 * @see Docs https://yamada-ui.com/components/navigation/breadcrumb
 */
export const Breadcrumb = forwardRef<BreadcrumbProps, "nav">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Breadcrumb", props)

  const {
    className,
    children,
    ellipsis,
    endBoundaries: _endBoundaries,
    gap = "fallback(2, 0.5rem)",
    items = [],
    separator = "/",
    startBoundaries: _startBoundaries,
    listProps,
    ...rest
  } = omitThemeProps(mergedProps)
  let startBoundaries = useValue(_startBoundaries)
  let endBoundaries = useValue(_endBoundaries)

  if (startBoundaries === 0) startBoundaries = 1
  if (endBoundaries === 0) endBoundaries = 1

  if (startBoundaries) endBoundaries ??= 1
  if (endBoundaries) startBoundaries ??= 1

  const hasBoundaries = isNumber(startBoundaries) && isNumber(endBoundaries)
  const isExceed =
    hasBoundaries && startBoundaries! + endBoundaries! < items.length

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    ...styles.container,
  }

  const validChildren = getValidChildren(children)
  const hasChildren = validChildren.length

  const customEllipsis = useCallback(
    (providedItems?: BreadcrumbGenerateItem[]) => {
      if (!ellipsis) return null

      const resolvedItems =
        providedItems ??
        items.slice(startBoundaries!, items.length - endBoundaries!)

      return runIfFunc(ellipsis, { items: resolvedItems })
    },
    [ellipsis, endBoundaries, items, startBoundaries],
  )

  const cloneChildren = useMemo(() => {
    if (hasChildren) {
      return validChildren.map((child, index) =>
        cloneElement(child, {
          gap,
          isLastChild: validChildren.length === index + 1,
          separator,
        }),
      )
    } else {
      let hiddenEllipsis: BreadcrumbGenerateItem[] = []

      return items.map((item, index) => {
        const { name, isCurrentPage, isEllipsisPage, containerProps, ...rest } =
          item
        const isLastChild = items.length === index + 1
        const props: BreadcrumbItemProps = {
          gap,
          isCurrentPage,
          separator,
          ...containerProps,
        }

        if (!hasBoundaries && isEllipsisPage) {
          hiddenEllipsis.push(item)

          return isLastChild ? (
            <BreadcrumbItem key={index} {...props} isLastChild>
              {customEllipsis([item]) ?? <BreadcrumbEllipsis />}
            </BreadcrumbItem>
          ) : null
        }

        if (hasBoundaries && isExceed) {
          const lastIndex = items.length - index - 1

          if (startBoundaries! <= index && endBoundaries! <= lastIndex) {
            if (startBoundaries === index) {
              return (
                <BreadcrumbItem key={index} {...props}>
                  {customEllipsis() ?? <BreadcrumbEllipsis />}
                </BreadcrumbItem>
              )
            } else {
              return null
            }
          }
        }

        if (hiddenEllipsis.length) {
          const resolvedEllipsis = customEllipsis(hiddenEllipsis) ?? (
            <BreadcrumbEllipsis />
          )

          hiddenEllipsis = []

          return (
            <Fragment key={index}>
              <BreadcrumbItem {...props}>{resolvedEllipsis}</BreadcrumbItem>

              <BreadcrumbItem {...props} isLastChild={isLastChild}>
                <BreadcrumbLink {...rest}>{name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          )
        } else {
          return (
            <BreadcrumbItem key={index} {...props} isLastChild={isLastChild}>
              <BreadcrumbLink {...rest}>{name}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        }
      })
    }
  }, [
    hasChildren,
    validChildren,
    separator,
    gap,
    items,
    hasBoundaries,
    isExceed,
    startBoundaries,
    endBoundaries,
    customEllipsis,
  ])

  return (
    <BreadcrumbProvider value={styles}>
      <ui.nav
        ref={ref}
        className={cx("ui-breadcrumb", className)}
        aria-label="Breadcrumb"
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

Breadcrumb.displayName = "Breadcrumb"
Breadcrumb.__ui__ = "Breadcrumb"

interface BreadcrumbItemOptions
  extends Pick<BreadcrumbProps, "gap" | "separator"> {
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

export interface BreadcrumbItemProps
  extends Omit<HTMLUIProps<"li">, "gap">,
    BreadcrumbItemOptions {}

export const BreadcrumbItem = forwardRef<BreadcrumbItemProps, "li">(
  (
    {
      className,
      children,
      gap,
      isCurrentPage,
      isLastChild,
      separator,
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
          children: child.props.children || separator,
          gap,
        })
      }

      return child
    })

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
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

BreadcrumbItem.displayName = "BreadcrumbItem"
BreadcrumbItem.__ui__ = "BreadcrumbItem"

interface BreadcrumbLinkOptions {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  isCurrentPage?: boolean
}

export interface BreadcrumbLinkProps
  extends HTMLUIProps<"a">,
    BreadcrumbLinkOptions {}

export const BreadcrumbLink = forwardRef<BreadcrumbLinkProps, "a">(
  ({ href, className, children, isCurrentPage, ...rest }, ref) => {
    const styles = useBreadcrumb()

    return (
      <ui.a
        ref={ref}
        as={!isCurrentPage ? "a" : "span"}
        href={!isCurrentPage ? href : undefined}
        className={cx("ui-breadcrumb__link", className)}
        aria-current={isCurrentPage ? "page" : undefined}
        __css={styles.link}
        {...rest}
      >
        {children}
      </ui.a>
    )
  },
)
BreadcrumbLink.displayName = "BreadcrumbLink"
BreadcrumbLink.__ui__ = "BreadcrumbLink"

interface BreadcrumbSeparatorOptions {
  /**
   * The CSS `margin-inline-start`, and `margin-inline-end` property.
   */
  gap?: CSSUIObject["mx"]
}

export interface BreadcrumbSeparatorProps
  extends Omit<HTMLUIProps<"span">, "gap">,
    BreadcrumbSeparatorOptions {}

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

BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
BreadcrumbSeparator.__ui__ = "BreadcrumbSeparator"

interface BreadcrumbEllipsisOptions {}

export interface BreadcrumbEllipsisProps
  extends IconProps,
    BreadcrumbEllipsisOptions {}

export const BreadcrumbEllipsis = forwardRef<BreadcrumbEllipsisProps, "span">(
  ({ className, children, ...rest }, ref) => {
    const styles = useBreadcrumb()

    const css: CSSUIObject = {
      ...styles.ellipsis,
    }

    return (
      children ?? (
        <Icon
          ref={ref}
          className={cx("ui-breadcrumb__item__ellipsis", className)}
          aria-label="ellipsis"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 36 24"
          xmlns="http://www.w3.org/2000/svg"
          __css={css}
          {...rest}
        >
          <circle cx="10" cy="12" fill="currentColor" r="2" />
          <circle cx="20" cy="12" fill="currentColor" r="2" />
          <circle cx="30" cy="12" fill="currentColor" r="2" />
        </Icon>
      )
    )
  },
)

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"
BreadcrumbEllipsis.__ui__ = "BreadcrumbEllipsis"
