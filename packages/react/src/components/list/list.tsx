import type { ReactElement } from "react"
import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { ListStyle } from "./list.style"
import { cloneElement } from "react"
import { createSlotComponent, ui } from "../../core"
import { cx, getValidChildren } from "../../utils"
import { listStyle } from "./list.style"

export interface ListProps extends HTMLUIProps<"ul">, ThemeProps<ListStyle> {
  /**
   * The CSS `list-style-position` property.
   */
  stylePosition?: CSSProps["listStylePosition"]
}

export const {
  component,
  PropsContext: ListPropsContext,
  usePropsContext: useListPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<ListProps, ListStyle>("list", listStyle)

/**
 * `List` is a component for displaying lists. By default, it renders a `ul` element.
 *
 * @see Docs https://yamada-ui.com/components/data-display/list
 */
export const List = withProvider(
  ({
    children,
    stylePosition: listStylePosition,
    styleType: listStyleType = "none",
    ...rest
  }) => {
    const validChildren = getValidChildren(children)

    return (
      <ui.ul
        listStylePosition={listStylePosition}
        listStyleType={listStyleType}
        role="list"
        {...rest}
      >
        {validChildren}
      </ui.ul>
    )
  },
  "root",
  { transferProps: ["styleType"] },
)()

export const DiscList = (props: ListProps) => {
  return <List as="ul" styleType="disc" {...props} />
}

export const DecimalList = (props: ListProps) => {
  return <List as="ol" ms="1.2em" styleType="decimal" {...props} />
}

export interface ListItemProps extends HTMLUIProps<"li"> {
  icon?: ReactElement<any>
}

export const ListItem = withContext<"li", ListItemProps>(
  ({ children, icon, ...rest }) => {
    const styles = useStyleContext()

    const iconElement = icon
      ? cloneElement<any>(icon, {
          ...icon.props,
          className: cx("ui-list-item__icon", icon.props.className),
          style: styles.icon,
          role: "presentation",
        })
      : null

    return (
      <ui.li {...rest}>
        {iconElement}
        {children}
      </ui.li>
    )
  },
  "item",
)()
