import type {
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  CSSUIProps,
  Token,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import type { IconProps } from "@yamada-ui/icon"
import { useValue } from "@yamada-ui/use-value"
import {
  cx,
  createContext,
  getValidChildren,
  isNumber,
  runIfFunc,
} from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { Fragment, cloneElement, useCallback, useMemo } from "react"

const [BreadcrumbProvider, useBreadcrumb] = createContext<
  Record<string, CSSUIObject>
>({
  name: "BreadcrumbContext",
  errorMessage: `useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})

export type BreadcrumbGenerateItem = BreadcrumbLinkProps & {
  name?: ReactNode
  containerProps?: Omit<BreadcrumbItemProps, "isLastChild">
  isEllipsisPage?: boolean
}

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
  /**
   * If provided, generate breadcrumb items based on items.
   */
  items?: BreadcrumbGenerateItem[]
  /**
   * Number of elements visible on the start(left) edges.
   */
  startBoundaries?: Token<number>
  /**
   * Number of elements visible on the end(right) edges.
   */
  endBoundaries?: Token<number>
  /**
   * The icon to be used in the ellipsis.
   */
  ellipsis?:
    | ReactNode
    | ((props: { items: BreadcrumbGenerateItem[] }) => ReactNode)
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
    items = [],
    startBoundaries: _startBoundaries,
    endBoundaries: _endBoundaries,
    ellipsis,
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
    display: "flex",
    alignItems: "center",
    ...styles.list,
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
          separator,
          gap,
          isLastChild: validChildren.length === index + 1,
        }),
      )
    } else {
      let hiddenEllipsis: BreadcrumbGenerateItem[] = []

      return items.map((item, index) => {
        const { containerProps, name, isCurrentPage, isEllipsisPage, ...rest } =
          item
        const isLastChild = items.length === index + 1
        const props: BreadcrumbItemProps = {
          separator,
          gap,
          isCurrentPage,
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
        className="ui-breadcrumb__separator"
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
  ({ children, className, ...rest }, ref) => {
    const styles = useBreadcrumb()

    const css: CSSUIObject = {
      ...styles.ellipsis,
    }

    return (
      children ?? (
        <Icon
          ref={ref}
          aria-label="ellipsis"
          className={cx("ui-breadcrumb__ellipsis", className)}
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
    )
  },
)
