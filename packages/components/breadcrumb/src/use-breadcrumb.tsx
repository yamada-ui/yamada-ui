import type {
  BreadcrumbGenerateItem,
  BreadcrumbItemProps,
  BreadcrumbProps,
} from "./breadcrumb"
import { getValidChildren, isNumber, runIfFunc } from "@yamada-ui/utils"
import { cloneElement, Fragment, useCallback, useMemo } from "react"
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
} from "./breadcrumb"

interface UseBreadcrumbProps
  extends Pick<BreadcrumbProps, "children" | "ellipsis" | "gap" | "separator"> {
  endBoundaries: number | undefined
  items: BreadcrumbGenerateItem[]
  startBoundaries: number | undefined
}

export const useBreadcrumb = ({
  children,
  ellipsis,
  endBoundaries,
  gap,
  items,
  separator,
  startBoundaries,
}: UseBreadcrumbProps) => {
  const hasBoundaries = isNumber(startBoundaries) && isNumber(endBoundaries)
  const isExceed =
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

  return cloneChildren
}
