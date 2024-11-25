import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { createContext, cx, getValidChildren } from "@yamada-ui/utils"

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
    gap = "fallback(2, 0.5rem)",
    stylePosition: listStylePosition,
    styleType: listStyleType = "none",
    ...rest
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)

  const css: CSSUIObject = {
    "& > li": { ps: listStyleType === "decimal" ? "0.3em" : undefined },
    display: "flex",
    flexDirection: "column",
    ...styles.container,
    gap,
    ms: listStyleType !== "none" ? "1.4em" : undefined,
  }

  return (
    <ListProvider value={styles}>
      <ui.ul
        ref={ref}
        className={cx("ui-list", className)}
        listStylePosition={listStylePosition}
        listStyleType={listStyleType}
        role="list"
        __css={css}
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

export interface ListItemProps extends HTMLUIProps<"li"> {}

export const ListItem = forwardRef<ListItemProps, "li">(
  ({ className, ...rest }, ref) => {
    const styles = useList()

    const css = { ...styles.item }

    return (
      <ui.li
        ref={ref}
        className={cx("ui-list-item", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

ListItem.displayName = "ListItem"
ListItem.__ui__ = "ListItem"

export interface ListIconProps extends IconProps {}

export const ListIcon = forwardRef<ListIconProps, "svg">(
  ({ className, ...rest }, ref) => {
    const styles = useList()

    const css = { ...styles.icon }

    return (
      <Icon
        ref={ref}
        className={cx("ui-list-icon", className)}
        role="presentation"
        __css={css}
        {...rest}
      />
    )
  },
)

ListIcon.displayName = "ListIcon"
ListIcon.__ui__ = "ListIcon"
