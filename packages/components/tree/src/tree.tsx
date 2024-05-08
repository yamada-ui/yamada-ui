import type {
  CSS,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import {
  createContext,
  cx,
  isArray,
  isObject,
  isValidElement,
} from "@yamada-ui/utils"
import type { Dispatch, SetStateAction, ReactNode } from "react"
import { useEffect, useState } from "react"

const {
  DescendantsContextProvider,
  useDescendants,
  useDescendant: useTreeDescendant,
} = createDescendant<HTMLButtonElement>()

export { useTreeDescendant }

type TreeContext = Pick<
  TreeOptions,
  | "icon"
  | "iconHidden"
  | "isDefaultExpanded"
  | "leftIcon"
  | "selectedBg"
  | "selectedBackground"
  | "isSelectable"
> & {
  index: number | number[]
  setIndex: Dispatch<SetStateAction<number | number[]>>
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  selectedIndex: number | number[]
  setSelectedIndex: Dispatch<SetStateAction<number | number[]>>
  styles: Record<string, CSSUIObject>
  levels: number[]
  selectMultiple: boolean
  isSelectable: boolean
}

type childrenProp =
  | { props: { children: childrenProp | childrenProp[] | string } }
  | childrenProp[]
  | string

const [TreeProvider, useTreeContext] = createContext<TreeContext>({
  strict: false,
  name: "TreeContext",
})

export { useTreeContext }

type TreeOptions = {
  /**
   * Specifies the index(es) of the tree item(s) that should be expanded.
   */
  index?: number | number[]
  /**
   * Specifies the initial index(es) of the tree item(s) that should be expanded.
   */
  defaultIndex?: number | number[]
  /**
   * If set to `true`, all tree items will be expanded by default.
   *
   * @default true
   */
  isDefaultExpanded?: boolean
  /**
   * If set to `true`, the tree icon for all items will be hidden.
   *
   * @default false
   */
  iconHidden?: boolean
  /**
   * Specifies the icon for all tree items. Can be a ReactNode or a function that returns a ReactNode.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Callback function that is invoked when tree items are expanded or collapsed.
   */
  onChange?: (index: number | number[]) => void
  /**
   * Callback function that is invoked when tree items are selected.
   */
  onSelect?: (index: number | number[]) => void
  /**
   * Specifies the left icon for tree items. Can be a ReactNode or a function that returns a ReactNode.
   */
  leftIcon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the background color of the selected item(s). Accepts a color token.
   */
  selectedBg?: Token<CSS.Property.Background, "colors">
  /**
   * Alias for `selectedBg`. Specifies the background color of the selected item(s). Accepts a color token.
   */
  selectedBackground?: Token<CSS.Property.Background, "colors">
  /**
   * Specifies the value(s) of the selected item(s).
   */
  selectedValue?: number | number[]
  /**
   * Specifies the initial value(s) of the selected item(s).
   */
  defaultSelectedValue?: number | number[]
  /**
   * If set to `true`, multiple items can be selected.
   * @default false
   */
  selectMultiple?: boolean
  /**
   * If set to `true`, the tree item(s) will be selectable.
   * @default true
   */
  isSelectable?: boolean
}

export type TreeProps = Omit<HTMLUIProps<"ul">, "onChange"> &
  ThemeProps<"Tree"> &
  TreeOptions

/**
 * `Tree` is a component for a list that displays information in an expandable or collapsible manner.
 *
 * @see Docs https://yamada-ui.com/components/disclosure/tree
 */
export const Tree = forwardRef<TreeProps, "ul">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Tree", props)
  const {
    className,
    index: value,
    defaultIndex: defaultValue,
    isDefaultExpanded = true,
    selectMultiple = false,
    iconHidden,
    icon,
    leftIcon,
    selectedBg,
    selectedBackground,
    selectedValue,
    defaultSelectedValue,
    onChange,
    onSelect,
    isSelectable = true,
    ...rest
  } = omitThemeProps(mergedProps)

  if (isDefaultExpanded && (value || defaultValue) != null) {
    console.warn(
      `Tree: If 'isDefaultExpanded' is true, then 'index' or 'defaultIndex' must not be passed.`,
    )
  }

  if ((value || defaultValue) != null && !isArray(value || defaultValue)) {
    console.warn(`Tree: 'index' or 'defaultIndex' must be an array.`)
  }

  if (
    !selectMultiple &&
    isArray(defaultSelectedValue) &&
    defaultSelectedValue.length > 1
  ) {
    console.warn(
      `Tree: If 'selectMultiple' is false, then 'selectedValue' or 'defaultSelectedValue' must be a number.`,
    )
  }

  if (
    !isSelectable &&
    (selectedValue || defaultSelectedValue || selectMultiple)
  ) {
    console.warn(
      `Tree: If 'isSelectable' is false, then 'selectedValue', 'defaultSelectedValue' or 'selectMultiple' must not be passed.`,
    )
  }

  const descendants = useDescendants()

  const totalItems = getPropLength(props.children as childrenProp) ?? 0

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const [selectedIndex, setSelectedIndex] = useControllableState({
    value: selectedValue,
    defaultValue: () => defaultSelectedValue ?? -1,
    onChange: onSelect,
  })

  const [index, setIndex] = useControllableState({
    value,
    defaultValue: () =>
      isDefaultExpanded
        ? Array.from({ length: totalItems }, (_, index) => index)
        : defaultValue ?? [],
    onChange,
  })

  useEffect(() => {
    return () => setFocusedIndex(-1)
  })

  const levels = getLevels(props.children as childrenProp)

  const css: CSSUIObject = { w: "100%", ...styles.container }

  return (
    <DescendantsContextProvider value={descendants}>
      <TreeProvider
        value={{
          index,
          setIndex,
          focusedIndex,
          setFocusedIndex,
          selectedIndex,
          setSelectedIndex,
          isDefaultExpanded,
          iconHidden,
          icon,
          leftIcon,
          styles,
          levels,
          selectedBg,
          selectedBackground,
          selectMultiple,
          isSelectable,
        }}
      >
        <ui.ul
          ref={ref}
          className={cx("ui-tree", className)}
          __css={css}
          {...rest}
        />
      </TreeProvider>
    </DescendantsContextProvider>
  )
})

const getLevels = (children: childrenProp): number[] => {
  const levels: number[] = []

  const traverse = (node: childrenProp, level: number) => {
    if (isArray(node)) {
      for (const child of node) {
        traverse(child, level)
      }
    } else if (isObject(node) && node.props && node.props.children) {
      levels.push(level)
      traverse(node.props.children, level + 1)
    }
  }

  traverse(children, 0)
  return levels
}

const getPropLength = (children: childrenProp): number => {
  let count = 0

  const countChildren = (node: childrenProp) => {
    if (isArray(node)) {
      for (const child of node) {
        countChildren(child)
      }
    } else if (isObject(node) && isValidElement(node)) {
      count++
      if (node.props?.children) {
        countChildren(node.props.children)
      }
    }
  }

  countChildren(children)
  return count
}
