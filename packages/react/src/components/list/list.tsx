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

interface ComponentContext extends Pick<
  ListRootProps,
  "iconProps" | "itemProps"
> {}

export interface ListItem extends ListItemProps {}

export interface ListRootProps
  extends HTMLStyledProps<"ul">, Omit<ThemeProps<ListStyle>, "styleType"> {
  /**
   * If provided, generate elements based on items.
   */
  items?: ListItem[]
  /**
   * The CSS `list-style-position` property.
   */
  stylePosition?: CSSProps["listStylePosition"]
  /**
   * The CSS `list-style-position` property.
   */
  styleType?: CSSProps["listStyleType"]
  /**
   * Props for the icon component.
   */
  iconProps?: ListIconProps
  /**
   * Props for the item component.
   */
  itemProps?: ListItemProps
}

const {
  ComponentContext,
  PropsContext: ListPropsContext,
  useComponentContext,
  usePropsContext: useListPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ListRootProps, ListStyle, ComponentContext>(
  "list",
  listStyle,
)

export { ListPropsContext, useListPropsContext }

/**
 * `List` is a component for displaying lists. By default, it renders a `ul` element.
 *
 * @see https://yamada-ui.com/docs/components/list
 */
export const ListRoot = withProvider<"ul", ListRootProps, "styleType">(
  ({
    as: asProp,
    children,
    items,
    stylePosition: listStylePosition,
    styleType: listStyleType = "none",
    iconProps,
    itemProps,
    ...rest
  }) => {
    const as = asProp ?? (listStyleType == "decimal" ? "ol" : undefined)
    const computedChildren = useMemo(() => {
      if (children) return children

      return items?.map((props, index) => <ListItem key={index} {...props} />)
    }, [children, items])
    const context = useMemo(
      () => ({ iconProps, itemProps }),
      [iconProps, itemProps],
    )

    return (
      <ComponentContext value={context}>
        <styled.ul
          as={as}
          listStylePosition={listStylePosition}
          listStyleType={listStyleType}
          role="list"
          {...rest}
        >
          {computedChildren}
        </styled.ul>
      </ComponentContext>
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
  /**
   * Props for the icon component.
   */
  iconProps?: ListIconProps
}

export const ListItem = withContext<"li", ListItemProps>(
  ({ children, icon, iconProps, ...rest }) => (
    <styled.li {...rest}>
      <ListItemIcon {...iconProps}>{icon}</ListItemIcon>

      {children}
    </styled.li>
  ),
  "item",
)((props) => {
  const { iconProps, itemProps } = useComponentContext()

  return {
    ...itemProps,
    ...props,
    iconProps: {
      ...iconProps,
      ...itemProps?.iconProps,
      ...props.iconProps,
    },
  }
})

export interface ListIconProps extends HTMLStyledProps<"svg"> {}

export const ListItemIcon = withContext<"svg", ListIconProps>(
  ({ children, ...rest }) => {
    if (isValidElement<HTMLProps<"svg">>(children))
      return cloneElement(children, {
        ...children.props,
        ...rest,
        role: "presentation",
      })
    else return null
  },
  "icon",
)({ "data-list-icon": "" })
