"use client"

import type { ReactElement } from "react"
import type {
  CSSProps,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { ListStyle } from "./list.style"
import { cloneElement, isValidElement, useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { listStyle } from "./list.style"

export interface ListRootProps
  extends HTMLStyledProps<"ul">,
    Omit<ThemeProps<ListStyle>, "styleType"> {
  /**
   * If provided, generate elements based on items.
   */
  items?: ListItemProps[]
  /**
   * The CSS `list-style-position` property.
   */
  stylePosition?: CSSProps["listStylePosition"]
  /**
   * The CSS `list-style-position` property.
   */
  styleType?: CSSProps["listStyleType"]
}

const {
  PropsContext: ListPropsContext,
  usePropsContext: useListPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ListRootProps, ListStyle>("list", listStyle)

export { ListPropsContext, useListPropsContext }

/**
 * `List` is a component for displaying lists. By default, it renders a `ul` element.
 *
 * @see https://yamada-ui.com/components/list
 */
export const ListRoot = withProvider(
  ({
    as: asProp,
    children,
    items,
    stylePosition: listStylePosition,
    styleType: listStyleType = "none",
    ...rest
  }) => {
    const as = asProp ?? (listStyleType == "decimal" ? "ol" : undefined)
    const computedChildren = useMemo(() => {
      if (children) return children

      return items?.map((props, index) => <ListItem key={index} {...props} />)
    }, [children, items])

    return (
      <styled.ul
        as={as}
        listStylePosition={listStylePosition}
        listStyleType={listStyleType}
        role="list"
        {...rest}
      >
        {computedChildren}
      </styled.ul>
    )
  },
  "root",
  { transferProps: ["styleType"] },
)()

export interface ListItemProps extends HTMLStyledProps<"li"> {
  /**
   * The icon to use.
   */
  icon?: ReactElement<any>
}

export const ListItem = withContext<"li", ListItemProps>(
  ({ children, icon, ...rest }) => (
    <styled.li {...rest}>
      <ListItemIcon>{icon}</ListItemIcon>

      {children}
    </styled.li>
  ),
  "item",
)()

export interface ListIconProps extends HTMLStyledProps<"svg"> {}

export const ListItemIcon = withContext<"svg", ListIconProps>(
  ({ children, ...rest }) => {
    if (isValidElement<HTMLProps<"svg">>(children)) {
      return cloneElement(children, {
        ...children.props,
        ...rest,
        role: "presentation",
      })
    } else {
      return null
    }
  },
  "icon",
)({ "data-list-icon": "" })
