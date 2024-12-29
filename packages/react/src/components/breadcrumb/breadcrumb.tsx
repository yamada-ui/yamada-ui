import type { ReactElement, ReactNode } from "react"
import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "../../core"
import type { IconProps } from "../icon"
import { cloneElement, Fragment, useCallback, useMemo } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { useValue } from "../../hooks/use-value"
import {
  createContext,
  cx,
  getValidChildren,
  isNumber,
  runIfFunc,
} from "../../utils"
import { EllipsisIcon } from "../icon"

interface BreadcrumbContext {
  styles: { [key: string]: CSSUIObject | undefined }
  separatorProps?: BreadcrumbSeparatorProps
}

const [BreadcrumbProvider, useBreadcrumb] = createContext<BreadcrumbContext>({
  name: "BreadcrumbContext",
  errorMessage: `useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})

export interface BreadcrumbGenerateItem extends BreadcrumbLinkProps {
  name?: ReactNode
  ellipsisPage?: boolean
  containerProps?: Omit<BreadcrumbItemProps, "lastChild">
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
  /**
   * Props for separator element.
   */
  separatorProps?: BreadcrumbSeparatorProps
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
export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
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
    separatorProps,
    ...rest
  } = omitThemeProps(mergedProps)
  let startBoundaries = useValue(_startBoundaries)
  let endBoundaries = useValue(_endBoundaries)

  if (startBoundaries === 0) startBoundaries = 1
  if (endBoundaries === 0) endBoundaries = 1

  if (startBoundaries) endBoundaries ??= 1
  if (endBoundaries) startBoundaries ??= 1

  const hasBoundaries = isNumber(startBoundaries) && isNumber(endBoundaries)
  const exceed =
    hasBoundaries && startBoundaries! + endBoundaries! < items.length

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
          lastChild: validChildren.length === index + 1,
          separator,
        }),
      )
    } else {
      let hiddenEllipsis: BreadcrumbGenerateItem[] = []

      return items.map((item, index) => {
        const { name, currentPage, ellipsisPage, containerProps, ...rest } =
          item
        const lastChild = items.length === index + 1
        const props: BreadcrumbItemProps = {
          currentPage,
          gap,
          separator,
          ...containerProps,
        }

        if (!hasBoundaries && ellipsisPage) {
          hiddenEllipsis.push(item)

          return lastChild ? (
            <BreadcrumbItem key={index} {...props} lastChild>
              {customEllipsis([item]) ?? <BreadcrumbEllipsis />}
            </BreadcrumbItem>
          ) : null
        }

        if (hasBoundaries && exceed) {
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

              <BreadcrumbItem {...props} lastChild={lastChild}>
                <BreadcrumbLink {...rest}>{name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          )
        } else {
          return (
            <BreadcrumbItem key={index} {...props} lastChild={lastChild}>
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
    exceed,
    startBoundaries,
    endBoundaries,
    customEllipsis,
  ])

  return (
    <BreadcrumbProvider value={{ styles, separatorProps }}>
      <ui.nav
        className={cx("ui-breadcrumb", className)}
        aria-label="Breadcrumb"
        __css={styles.container}
        {...rest}
      >
        <ui.ol
          className="ui-breadcrumb__list"
          {...listProps}
          __css={styles.container}
        >
          {cloneChildren}
        </ui.ol>
      </ui.nav>
    </BreadcrumbProvider>
  )
}

Breadcrumb.__ui__ = "Breadcrumb"

interface BreadcrumbItemOptions
  extends Pick<BreadcrumbProps, "gap" | "separator" | "separatorProps"> {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  currentPage?: boolean
  /**
   * If `true`, not show separator.
   *
   * @default false
   */
  lastChild?: boolean
}

export interface BreadcrumbItemProps
  extends Omit<HTMLUIProps<"li">, "gap">,
    BreadcrumbItemOptions {}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  className,
  children,
  currentPage,
  gap,
  lastChild,
  separator,
  separatorProps,
  ...rest
}) => {
  const { styles, separatorProps: groupSeparatorProps } = useBreadcrumb()
  const validChildren = getValidChildren(children)
  const cloneChildren = validChildren.map((child) => {
    if (child.type === BreadcrumbLink) {
      return cloneElement(child, {
        currentPage,
      })
    }

    if (child.type === BreadcrumbSeparator) {
      return cloneElement(child, {
        children: child.props.children || separator,
        gap,
        ...groupSeparatorProps,
        ...separatorProps,
      })
    }

    return child
  })

  return (
    <ui.li
      className={cx("ui-breadcrumb__item", className)}
      __css={styles.item}
      {...rest}
    >
      {cloneChildren}

      {!lastChild ? (
        <BreadcrumbSeparator
          gap={gap}
          {...groupSeparatorProps}
          {...separatorProps}
        >
          {separator}
        </BreadcrumbSeparator>
      ) : null}
    </ui.li>
  )
}

BreadcrumbItem.__ui__ = "BreadcrumbItem"

interface BreadcrumbLinkOptions {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  currentPage?: boolean
}

export interface BreadcrumbLinkProps
  extends HTMLUIProps<"a">,
    BreadcrumbLinkOptions {}

export const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({
  href,
  className,
  children,
  currentPage,
  ...rest
}) => {
  const { styles } = useBreadcrumb()

  return (
    <ui.a
      as={!currentPage ? "a" : "span"}
      href={!currentPage ? href : undefined}
      className={cx("ui-breadcrumb__link", className)}
      aria-current={currentPage ? "page" : undefined}
      __css={styles.link}
      {...rest}
    >
      {children}
    </ui.a>
  )
}

BreadcrumbLink.__ui__ = "BreadcrumbLink"

interface BreadcrumbSeparatorOptions {
  /**
   * The CSS `margin-inline-start`, and `margin-inline-end` property.
   */
  gap?: CSSUIProps["mx"]
}

export interface BreadcrumbSeparatorProps
  extends Omit<HTMLUIProps<"span">, "gap">,
    BreadcrumbSeparatorOptions {}

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = ({
  children,
  gap: mx,
  ...rest
}) => {
  const { styles } = useBreadcrumb()

  return (
    <ui.span
      className="ui-breadcrumb__item__separator"
      __css={{ mx, ...styles.separator }}
      {...rest}
    >
      {children}
    </ui.span>
  )
}

BreadcrumbSeparator.__ui__ = "BreadcrumbSeparator"

interface BreadcrumbEllipsisOptions {}

export interface BreadcrumbEllipsisProps
  extends IconProps,
    BreadcrumbEllipsisOptions {}

export const BreadcrumbEllipsis: FC<BreadcrumbEllipsisProps> = ({
  className,
  children,
  ...rest
}) => {
  const { styles } = useBreadcrumb()

  return (
    children ?? (
      <EllipsisIcon
        className={cx("ui-breadcrumb__item__ellipsis", className)}
        aria-label="ellipsis"
        __css={styles.ellipsis}
        {...rest}
      />
    )
  )
}

BreadcrumbEllipsis.__ui__ = "BreadcrumbEllipsis"
