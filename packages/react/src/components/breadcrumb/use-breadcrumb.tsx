"use client"

import type { ReactElement, ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import { cloneElement, useCallback, useMemo } from "react"
import { useI18n } from "../../providers/i18n-provider"
import { runIfFn, useValidChildren } from "../../utils"

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
   *
   * @default 0
   */
  endBoundaries?: number
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
   *
   * @default 0
   */
  startBoundaries?: number
}

export const useBreadcrumb = ({
  children,
  ellipsis,
  endBoundaries = 0,
  items = [],
  link,
  startBoundaries = 0,
  ...rest
}: UseBreadcrumbProps = {}) => {
  const validChildren = useValidChildren(children)
  const length = validChildren.length || items.length
  const { t } = useI18n("breadcrumb")

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

      return runIfFn(ellipsis, { items })
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
      "aria-label": t("Breadcrumb"),
      ...rest,
      ...props,
    }),
    [rest, t],
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
      "aria-label": t("Ellipsis"),
      role: "presentation",
      ...props,
    }),
    [t],
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
