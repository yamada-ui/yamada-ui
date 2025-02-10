import type { ReactElement } from "react"
import type { CSSProps, HTMLProps, HTMLUIProps, ThemeProps } from "../../core"
import type { ListStyle } from "./list.style"
import { cloneElement, isValidElement } from "react"
import { createSlotComponent, ui } from "../../core"
import { listStyle } from "./list.style"

export interface ListRootProps
  extends HTMLUIProps<"ul">,
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

export const {
  component,
  PropsContext: ListPropsContext,
  usePropsContext: useListPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ListRootProps, ListStyle>("list", listStyle)

/**
 * `List` is a component for displaying lists. By default, it renders a `ul` element.
 *
 * @see Docs https://yamada-ui.com/components/data-display/list
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

    return (
      <ui.ul
        as={as}
        listStylePosition={listStylePosition}
        listStyleType={listStyleType}
        role="list"
        {...rest}
      >
        {children ??
          items?.map((props, index) => <ListItem key={index} {...props} />)}
      </ui.ul>
    )
  },
  "root",
  { transferProps: ["styleType"] },
)()

export interface ListItemProps extends HTMLUIProps<"li"> {
  icon?: ReactElement<any>
}

export const ListItem = withContext<"li", ListItemProps>(
  ({ children, icon, ...rest }) => (
    <ui.li {...rest}>
      <ListIcon>{icon}</ListIcon>

      {children}
    </ui.li>
  ),
  "item",
)()

export interface ListIconProps extends HTMLUIProps<"svg"> {}

export const ListIcon = withContext<"svg", ListIconProps>(
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
