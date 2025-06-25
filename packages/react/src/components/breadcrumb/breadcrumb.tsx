"use client"

import type { ReactElement } from "react"
import type {
  HTMLStyledProps,
  PropGetter,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { BreadcrumbStyle } from "./breadcrumb.style"
import type { UseBreadcrumbProps } from "./use-breadcrumb"
import { Fragment, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { ChevronRightIcon, EllipsisIcon } from "../icon"
import { breadcrumbStyle } from "./breadcrumb.style"
import { useBreadcrumb } from "./use-breadcrumb"

interface ComponentContext {
  getEllipsisProps: PropGetter<"svg">
  getLinkProps: PropGetter<"a", { currentPage?: boolean }>
}

export interface BreadcrumbRootProps
  extends HTMLStyledProps<"nav">,
    ThemeProps<BreadcrumbStyle>,
    Omit<UseBreadcrumbProps, "endBoundaries" | "startBoundaries"> {
  /**
   * Number of elements visible on the end(right) edges.
   *
   * @default 0
   */
  endBoundaries?: StyleValue<number>
  /**
   * The visual separator between each breadcrumb item.
   *
   * @default '/'
   */
  separator?: ReactElement | string
  /**
   * Number of elements visible on the start(left) edges.
   *
   * @default 0
   */
  startBoundaries?: StyleValue<number>
  /**
   * Props for item element.
   */
  itemProps?: BreadcrumbItemProps
  /**
   * Props for ol element.
   */
  listProps?: HTMLStyledProps<"ol">
  /**
   * Props for separator element.
   */
  separatorProps?: BreadcrumbSeparatorProps
}

export const {
  ComponentContext,
  PropsContext: BreadcrumbPropsContext,
  useComponentContext,
  usePropsContext: useBreadcrumbPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<BreadcrumbRootProps, BreadcrumbStyle, ComponentContext>(
  "breadcrumb",
  breadcrumbStyle,
)

/**
 * `Breadcrumb` is a component that helps users understand the hierarchy of a website.
 *
 * @see https://yamada-ui.com/components/breadcrumb
 */
export const BreadcrumbRoot = withProvider<"nav", BreadcrumbRootProps>(
  ({
    endBoundaries: endBoundariesProp,
    gap,
    separator,
    startBoundaries: startBoundariesProp,
    itemProps,
    listProps,
    separatorProps,
    ...rest
  }) => {
    const endBoundaries = useValue(endBoundariesProp)
    const startBoundaries = useValue(startBoundariesProp)
    const {
      children,
      getEllipsisProps,
      getLinkProps,
      getListProps,
      getRootProps,
    } = useBreadcrumb({
      ellipsis: <BreadcrumbEllipsis />,
      endBoundaries,
      link: <BreadcrumbLink />,
      startBoundaries,
      ...rest,
    })

    const context = useMemo(
      () => ({ getEllipsisProps, getLinkProps }),
      [getEllipsisProps, getLinkProps],
    )

    return (
      <ComponentContext value={context}>
        <styled.nav {...getRootProps()}>
          <BreadcrumbList {...getListProps({ gap, ...listProps })}>
            {children.map((child, index) => {
              const last = index === children.length - 1

              return (
                <Fragment key={index}>
                  <BreadcrumbItem {...itemProps}>{child}</BreadcrumbItem>

                  {!last ? (
                    <BreadcrumbSeparator {...separatorProps}>
                      {separator}
                    </BreadcrumbSeparator>
                  ) : null}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </styled.nav>
      </ComponentContext>
    )
  },
  "root",
)()

interface BreadcrumbListProps extends HTMLStyledProps<"ol"> {}

const BreadcrumbList = withContext<"ol", BreadcrumbListProps>("ol", "list")()

interface BreadcrumbItemProps extends HTMLStyledProps<"li"> {}

const BreadcrumbItem = withContext<"li", BreadcrumbItemProps>("li", "item")()

interface BreadcrumbSeparatorProps extends HTMLStyledProps<"li"> {}

const BreadcrumbSeparator = withContext<"li", BreadcrumbSeparatorProps>(
  BreadcrumbItem,
  "separator",
)({ children: <ChevronRightIcon /> })

export interface BreadcrumbLinkProps extends HTMLStyledProps<"a"> {
  /**
   * If `true`, change to span element.
   *
   * @default false
   */
  currentPage?: boolean
}

export const BreadcrumbLink = withContext<"a", BreadcrumbLinkProps>(
  "a",
  "link",
)(undefined, ({ currentPage, ...rest }) => {
  const { getLinkProps } = useComponentContext()

  return {
    as: !currentPage ? "a" : "span",
    ...getLinkProps({ currentPage, ...rest }),
  }
})

export interface BreadcrumbEllipsisProps extends HTMLStyledProps<"svg"> {}

export const BreadcrumbEllipsis = withContext<"svg", BreadcrumbEllipsisProps>(
  EllipsisIcon,
  "ellipsis",
)(undefined, (props) => {
  const { getEllipsisProps } = useComponentContext()

  return { ...getEllipsisProps(props) }
})
