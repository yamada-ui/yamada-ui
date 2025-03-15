import type { ReactElement } from "react"
import type { HTMLStyledProps, PropGetter, ThemeProps } from "../../core"
import type { BreadcrumbStyle } from "./breadcrumb.style"
import type { UseBreadcrumbProps } from "./use-breadcrumb"
import { Fragment, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { ChevronRightIcon, EllipsisIcon } from "../icon"
import { breadcrumbStyle } from "./breadcrumb.style"
import { useBreadcrumb } from "./use-breadcrumb"

interface BreadcrumbContext {
  getEllipsisProps: PropGetter<"svg">
  getLinkProps: PropGetter<"a", { currentPage?: boolean }>
}

export interface BreadcrumbRootProps
  extends HTMLStyledProps<"nav">,
    ThemeProps<BreadcrumbStyle>,
    UseBreadcrumbProps {
  /**
   * The visual separator between each breadcrumb item.
   *
   * @default '/'
   */
  separator?: ReactElement | string
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
  ComponentContext: BreadcrumbContext,
  PropsContext: BreadcrumbPropsContext,
  useComponentContext: useBreadcrumbContext,
  usePropsContext: useBreadcrumbPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  BreadcrumbRootProps,
  BreadcrumbStyle,
  BreadcrumbContext
>("breadcrumb", breadcrumbStyle)

/**
 * `Breadcrumb` is a component that helps users understand the hierarchy of a website.
 *
 * @see Docs https://yamada-ui.com/components/breadcrumb
 */
export const BreadcrumbRoot = withProvider<"nav", BreadcrumbRootProps>(
  ({ gap, separator, itemProps, listProps, separatorProps, ...rest }) => {
    const {
      children,
      getEllipsisProps,
      getLinkProps,
      getListProps,
      getRootProps,
    } = useBreadcrumb({
      ellipsis: <BreadcrumbEllipsis />,
      link: <BreadcrumbLink />,
      ...rest,
    })

    const context = useMemo(
      () => ({ getEllipsisProps, getLinkProps }),
      [getEllipsisProps, getLinkProps],
    )

    return (
      <BreadcrumbContext value={context}>
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
      </BreadcrumbContext>
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
  const { getLinkProps } = useBreadcrumbContext()

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
  const { getEllipsisProps } = useBreadcrumbContext()

  return { ...getEllipsisProps(props) }
})
