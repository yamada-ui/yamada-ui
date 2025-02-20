import type { ReactElement, ReactNode } from "react"
import type { HTMLProps, PropGetter, Token } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import { cloneElement, useCallback, useMemo } from "react"
import { useValue } from "../../hooks/use-value"
import { getValidChildren, runIfFunc } from "../../utils"

interface BreadcrumbItem extends HTMLProps<"a"> {
  currentPage?: boolean
  label?: ReactNode
}

export interface UseBreadcrumbProps extends HTMLProps<"nav"> {
  /**
   * The icon to be used in the ellipsis.
   */
  ellipsis?: ReactNodeOrFunction<{ items: BreadcrumbItem[] }>
  /**
   * Number of elements visible on the end(right) edges.
   */
  endBoundaries?: Token<number>
  /**
   * If provided, generate breadcrumb items based on items.
   */
  items?: BreadcrumbItem[]
  /**
   * The component to be used for the link.
   */
  link?: ReactElement<any>
  /**
   * Number of elements visible on the start(left) edges.
   */
  startBoundaries?: Token<number>
}

export const useBreadcrumb = ({
  children,
  ellipsis,
  endBoundaries: endBoundariesProp,
  items = [],
  link,
  startBoundaries: startBoundariesProp,
  ...rest
}: UseBreadcrumbProps) => {
  const validChildren = getValidChildren(children)
  const endBoundaries = useValue(endBoundariesProp) ?? 0
  const startBoundaries = useValue(startBoundariesProp) ?? 0
  const length = validChildren.length || items.length

  const hasBoundaries =
    startBoundaries + endBoundaries > 0 &&
    length > startBoundaries + endBoundaries

  const renderLink = useCallback(
    (items: BreadcrumbItem[]) => {
      if (!link) return []

      return items.map(({ label, ...rest }) =>
        cloneElement<any>(link, { ...link.props, children: label, ...rest }),
      )
    },
    [link],
  )

  const renderEllipsis = useCallback(
    (items: BreadcrumbItem[]) => {
      if (!ellipsis) return null

      return runIfFunc(ellipsis, { items })
    },
    [ellipsis],
  )

  const splitItems = useCallback(
    (items: BreadcrumbItem[]) => {
      const length = items.length
      const firstItems = items.slice(0, startBoundaries)
      const ellipsisItems = items.slice(startBoundaries, length - endBoundaries)
      const lastItems = items.slice(length - endBoundaries)

      return [firstItems, ellipsisItems, lastItems] as const
    },
    [startBoundaries, endBoundaries],
  )

  const cloneChildren = useMemo(() => {
    const hasChildren = !!validChildren.length

    if (hasChildren) {
      return validChildren
    } else if (hasBoundaries) {
      const [firstItems, ellipsisItems, lastItems] = splitItems(items)

      return [
        ...renderLink(firstItems),
        renderEllipsis(ellipsisItems),
        ...renderLink(lastItems),
      ]
    } else {
      return renderLink(items)
    }
  }, [
    validChildren,
    items,
    hasBoundaries,
    renderEllipsis,
    renderLink,
    splitItems,
  ])

  const getRootProps: PropGetter<"nav"> = useCallback(
    (props) => ({
      "aria-label": "Breadcrumb",
      ...rest,
      ...props,
    }),
    [rest],
  )

  const getListProps: PropGetter<"ol"> = useCallback(
    (props) => ({ ...props }),
    [],
  )

  const getLinkProps: PropGetter<"a", { currentPage?: boolean }> = useCallback(
    ({ href, currentPage, ...props } = {}) => ({
      href: !currentPage ? href : undefined,
      "aria-current": currentPage ? "page" : undefined,
      ...props,
    }),
    [],
  )

  const getEllipsisProps: PropGetter<"svg"> = useCallback(
    (props) => ({
      "aria-label": "Ellipsis",
      role: "presentation",
      ...props,
    }),
    [],
  )

  return {
    children: cloneChildren,
    getEllipsisProps,
    getLinkProps,
    getListProps,
    getRootProps,
  }
}

export type UseBreadcrumbReturn = ReturnType<typeof useBreadcrumb>
