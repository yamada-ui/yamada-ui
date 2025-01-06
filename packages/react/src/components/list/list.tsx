import type { ReactElement } from "react"
import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import { cloneElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { createContext, cx, getValidChildren } from "../../utils"

const [ListProvider, useList] = createContext<{
  [key: string]: CSSUIObject | undefined
}>({
  name: `ListContext`,
  errorMessage: `useList returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
})

interface ListOptions {
  /**
   * The CSS `gap` property.
   *
   * @default '2'
   */
  gap?: CSSUIProps["gap"]
  /**
   * The CSS `list-style-position` property.
   */
  stylePosition?: CSSUIProps["listStylePosition"]
  /**
   * The CSS `list-style-type` property.
   *
   * @default 'none'
   */
  styleType?: CSSUIProps["listStyleType"]
}

export interface ListProps
  extends HTMLUIProps<"ul">,
    ThemeProps<"List">,
    ListOptions {}

/**
 * `List` is a component for displaying lists. By default, it renders a `ul` element.
 *
 * @see Docs https://yamada-ui.com/components/data-display/list
 */
export const List = forwardRef<ListProps, "ul">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("List", props)
  const {
    className,
    children,
    gap = 2,
    stylePosition: listStylePosition,
    styleType: listStyleType = "none",
    ...rest
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)

  return (
    <ListProvider value={styles}>
      <ui.ul
        ref={ref}
        className={cx("ui-list", className)}
        listStylePosition={listStylePosition}
        listStyleType={listStyleType}
        role="list"
        __css={{
          "& > li": { ps: listStyleType === "decimal" ? "0.3em" : undefined },
          ...styles.container,
          gap,
          ms: listStyleType !== "none" ? "1.4em" : undefined,
        }}
        {...rest}
      >
        {validChildren}
      </ui.ul>
    </ListProvider>
  )
})

List.displayName = "List"
List.__ui__ = "List"

export const DiscList = forwardRef<ListProps, "ul">(({ ...rest }, ref) => {
  return <List ref={ref} as="ul" styleType="disc" {...rest} />
})

DiscList.displayName = "DiscList"
DiscList.__ui__ = "DiscList"

export const DecimalList = forwardRef<ListProps, "ol">(({ ...rest }, ref) => {
  return <List ref={ref} as="ol" ms="1.2em" styleType="decimal" {...rest} />
})

DecimalList.displayName = "DecimalList"
DecimalList.__ui__ = "DecimalList"

export interface ListItemProps extends HTMLUIProps<"li"> {
  icon?: ReactElement<any>
}

export const ListItem = forwardRef<ListItemProps, "li">(
  ({ className, children, icon, ...rest }, ref) => {
    const styles = useList()

    const css = { ...styles.item }

    const iconElement = icon
      ? cloneElement<any>(icon, {
          ...icon.props,
          className: cx("ui-list-item__icon", icon.props.className),
          role: "presentation",
          __css: styles.icon,
        })
      : null

    return (
      <ui.li
        ref={ref}
        className={cx("ui-list-item", className)}
        __css={css}
        {...rest}
      >
        {iconElement}
        {children}
      </ui.li>
    )
  },
)

ListItem.displayName = "ListItem"
ListItem.__ui__ = "ListItem"
