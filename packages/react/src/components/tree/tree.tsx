"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { CheckboxProps } from "../checkbox"
import type { CollapseProps } from "../collapse"
import type { Loading } from "../loading"
import type { WithTransitionProps } from "../motion"
import type { TreeStyle } from "./tree.style"
import type { UseTreeItemProps, UseTreeProps } from "./use-tree"
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
} from "react"
import { createSlotComponent, mergeProps, styled } from "../../core"
import {
  cast,
  createContext,
  dataAttr,
  isObject,
  isString,
  type ReactNodeOrFunction,
  runIfFn,
} from "../../utils"
import { Checkbox } from "../checkbox"
import { Collapse } from "../collapse"
import { ChevronRightIcon } from "../icon"
import { useLoadingComponent } from "../loading"
import { treeStyle } from "./tree.style"
import {
  TreeContext,
  TreeDescendantsContext,
  TreeItemContext,
  useTree,
  useTreeContext,
  useTreeItem,
} from "./use-tree"

interface TreeCallBackProps {
  disabled?: boolean
  expanded?: boolean
}

type TreeItemReactNode =
  | ReactNodeOrFunction<TreeCallBackProps>
  | {
      group: ReactNodeOrFunction<TreeCallBackProps>
      item?: ReactNodeOrFunction<TreeCallBackProps>
    }
  | {
      item: ReactNodeOrFunction<TreeCallBackProps>
      group?: ReactNodeOrFunction<TreeCallBackProps>
    }

interface TreeItemWithValue extends Omit<TreeItemProps, "children"> {}

interface TreeItemWithChildren extends TreeItemWithValue {
  children: TreeItem[]
}

export type TreeItem = TreeItemWithChildren | TreeItemWithValue

const recursiveTreeItem = (items?: TreeItem[]) => {
  return items?.map((props, index) => {
    const key =
      props.value || (isString(props.label) ? `${props.label}-${index}` : index)

    if ("children" in props) {
      const { children, ...rest } = props

      return (
        <TreeItem key={key} {...rest}>
          {recursiveTreeItem(children)}
        </TreeItem>
      )
    } else {
      return <TreeItem key={key} {...props} />
    }
  })
}

const getReactNodeOrFunction = (
  type: "group" | "item",
  custom?: TreeItemReactNode,
  root?: TreeItemReactNode,
): ReactNodeOrFunction<TreeCallBackProps> => {
  if (isObject(custom) && ("group" in custom || "item" in custom)) {
    return custom[type]
  } else if (custom) {
    return custom
  } else if (isObject(root) && ("group" in root || "item" in root)) {
    return root[type]
  } else {
    return root
  }
}

interface ComponentContext extends Pick<
  TreeRootProps,
  | "animated"
  | "checkboxProps"
  | "endElement"
  | "endElementProps"
  | "groupProps"
  | "indicator"
  | "indicatorHidden"
  | "indicatorProps"
  | "itemProps"
  | "labelProps"
  | "loadingScheme"
  | "size"
  | "startElement"
  | "startElementProps"
> {}

interface ItemComponentContext {
  checkboxProps: TreeCheckboxProps
  endElementProps: TreeEndElementProps
  indicatorProps: TreeIndicatorProps
  labelProps: TreeLabelProps
  startElementProps: TreeStartElementProps
}

const [ItemComponentContext, useItemComponentContext] =
  createContext<ItemComponentContext>({ name: "ItemComponentContext" })

export interface TreeRootProps<Multiple extends boolean = false>
  extends
    HTMLStyledProps<"ul">,
    ThemeProps<TreeStyle>,
    UseTreeProps<Multiple>,
    Pick<
      TreeItemProps,
      | "animated"
      | "checkboxProps"
      | "endElement"
      | "endElementProps"
      | "groupProps"
      | "indicator"
      | "indicatorProps"
      | "labelProps"
      | "loadingScheme"
      | "startElement"
      | "startElementProps"
    > {
  /**
   * If `true`, hide the tree indicator icon for all items.
   *
   * @default false
   */
  indicatorHidden?: boolean
  /**
   * If provided, generate elements based on items.
   */
  items?: TreeItem[]
  /**
   * Props for the item component.
   */
  itemProps?: Omit<
    TreeItemProps,
    "children" | "label" | "open" | "query" | "value"
  >
}

const {
  ComponentContext,
  PropsContext: TreePropsContext,
  useComponentContext,
  usePropsContext: useTreePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TreeRootProps, TreeStyle, ComponentContext>(
  "tree",
  treeStyle,
)

export { TreePropsContext, useTreePropsContext }

/**
 * `Tree` is a component used to display hierarchical data structures in an expandable tree format.
 *
 * @see https://yamada-ui.com/docs/components/tree
 */
export const TreeRoot = withProvider<"ul", TreeRootProps, "size">(
  <Multiple extends boolean = false>({
    size,
    animated,
    children,
    endElement,
    indicator,
    indicatorHidden,
    items,
    loadingScheme,
    startElement,
    checkboxProps,
    endElementProps,
    groupProps,
    indicatorProps,
    itemProps,
    labelProps,
    startElementProps,
    ...rest
  }: TreeRootProps<Multiple>) => {
    const computedChildren = useMemo(() => {
      if (children) return children

      return recursiveTreeItem(items)
    }, [children, items])
    const {
      activeDescendant,
      checkable,
      checkedValue,
      descendants,
      expandedValue,
      multiple,
      selectedValue,
      getRootProps,
      onActiveDescendant,
      onCheckedChange,
      onCollapseAll,
      onExpandAll,
      onExpandedChange,
      onSearch,
      onSelectedChange,
    } = useTree({ ...rest, children: computedChildren })
    const context = useMemo(
      () => ({
        activeDescendant,
        checkable,
        checkedValue,
        expandedValue,
        multiple,
        selectedValue,
        onActiveDescendant,
        onCheckedChange,
        onCollapseAll,
        onExpandAll,
        onExpandedChange,
        onSearch,
        onSelectedChange,
      }),
      [
        activeDescendant,
        checkable,
        checkedValue,
        expandedValue,
        multiple,
        selectedValue,
        onActiveDescendant,
        onCheckedChange,
        onSearch,
        onCollapseAll,
        onExpandAll,
        onExpandedChange,
        onSelectedChange,
      ],
    )
    const componentContext = useMemo(
      () => ({
        size,
        animated,
        endElement,
        indicator,
        indicatorHidden,
        loadingScheme,
        startElement,
        checkboxProps,
        endElementProps,
        groupProps,
        indicatorProps,
        itemProps,
        labelProps,
        startElementProps,
      }),
      [
        size,
        animated,
        endElement,
        indicator,
        indicatorHidden,
        startElement,
        endElementProps,
        groupProps,
        indicatorProps,
        itemProps,
        labelProps,
        startElementProps,
        checkboxProps,
        loadingScheme,
      ],
    )

    return (
      <TreeDescendantsContext value={descendants}>
        <TreeContext value={context}>
          <ComponentContext value={componentContext}>
            <styled.ul {...getRootProps()} />
          </ComponentContext>
        </TreeContext>
      </TreeDescendantsContext>
    )
  },
  "root",
  { transferProps: ["size"] },
)() as GenericsComponent<{
  <Multiple extends boolean = false>(
    props: TreeRootProps<Multiple>,
  ): ReactElement
}>

export interface TreeItemProps
  extends HTMLStyledProps<"div">, Omit<UseTreeItemProps, "asyncChildren"> {
  /**
   * The label to display in the item.
   */
  label: ReactNode
  /**
   * If `true`, the tree item will be animated.
   *
   * @default false
   */
  animated?: boolean
  /**
   * The element to display at the end of the item.
   */
  endElement?: TreeItemReactNode
  /**
   * The tree indicator icon to use.
   */
  indicator?: ReactNodeOrFunction<TreeCallBackProps>
  /**
   * The loading scheme.
   *
   * @default 'oval'
   */
  loadingScheme?: Loading.Scheme
  /**
   * The element to display at the start of the item.
   */
  startElement?: TreeItemReactNode
  /**
   * Props for the checkbox component.
   */
  checkboxProps?: Omit<CheckboxProps, "checked" | "defaultChecked" | "value">
  /**
   * Props for the end component.
   */
  endElementProps?: TreeEndElementProps
  /**
   * Props for the group component.
   */
  groupProps?: Omit<TreeGroupProps, "children">
  /**
   * Props for the indicator component.
   */
  indicatorProps?: TreeIndicatorProps
  /**
   * Props for the label component.
   */
  labelProps?: TreeLabelProps
  /**
   * Props for the root element.
   */
  rootProps?: HTMLStyledProps<"li">
  /**
   * Props for the start component.
   */
  startElementProps?: TreeStartElementProps
  /**
   * If provided, the tree item will be rendered as an async tree item.
   */
  asyncChildren?: () => Promise<TreeItem[]>
}

export const TreeItem = withContext<"div", TreeItemProps>(
  ({
    className,
    css,
    colorScheme,
    animated: animatedProp,
    asyncChildren: asyncChildrenProp,
    endElement,
    indicator: indicatorProp,
    label,
    loadingScheme,
    query,
    startElement,
    value: valueProp = isString(label) ? label : undefined,
    checkboxProps,
    endElementProps,
    groupProps,
    indicatorProps,
    labelProps,
    rootProps,
    startElementProps,
    ...rest
  }) => {
    const { checkable } = useTreeContext()
    const componentContext = useComponentContext()
    const Loading = useLoadingComponent(
      loadingScheme ?? componentContext.loadingScheme ?? "oval",
    )
    const animated = animatedProp ?? componentContext.animated
    const indicator = indicatorProp ?? componentContext.indicator
    const groupStartElement = getReactNodeOrFunction(
      "group",
      startElement,
      componentContext.startElement,
    )
    const groupEndElement = getReactNodeOrFunction(
      "group",
      endElement,
      componentContext.endElement,
    )
    const itemStartElement = getReactNodeOrFunction(
      "item",
      startElement,
      componentContext.startElement,
    )
    const itemEndElement = getReactNodeOrFunction(
      "item",
      endElement,
      componentContext.endElement,
    )
    const asyncChildren = useCallback(async () => {
      const items = await asyncChildrenProp?.()

      return recursiveTreeItem(items)
    }, [asyncChildrenProp])
    const {
      branchOpen,
      children,
      disabled,
      group,
      groupLoading,
      groupOpen,
      level,
      props,
      value,
      getCheckboxProps,
      getGroupItemProps,
      getGroupProps,
      getIndicatorProps,
      getItemProps,
      getLabelProps,
      onGroupClose,
      onGroupOpen,
      onGroupToggle,
    } = useTreeItem({
      ...componentContext.itemProps,
      ...rest,
      asyncChildren: asyncChildrenProp ? asyncChildren : undefined,
      query: query ?? (isString(label) ? label : undefined),
      value: valueProp,
    })
    const itemProps = useMemo(
      () =>
        mergeProps(
          {
            className,
            css,
            colorScheme,
            "--level": level.toString(),
          },
          rootProps,
        )(),
      [className, css, colorScheme, level, rootProps],
    )
    const callbackProps = { disabled, expanded: groupOpen }
    const context = useMemo(
      () => ({
        branchOpen,
        groupOpen,
        level,
        value,
        onGroupClose,
        onGroupOpen,
        onGroupToggle,
      }),
      [
        branchOpen,
        groupOpen,
        level,
        value,
        onGroupClose,
        onGroupOpen,
        onGroupToggle,
      ],
    )
    const itemComponentContext = useMemo(
      () => ({
        checkboxProps: {
          size: componentContext.size,
          ...getCheckboxProps(
            mergeProps(componentContext.checkboxProps, checkboxProps)(),
          ),
        },
        endElementProps: mergeProps(
          componentContext.endElementProps,
          endElementProps,
        )(),
        indicatorProps: {
          ...getIndicatorProps(
            mergeProps(componentContext.indicatorProps, indicatorProps)(),
          ),
        },
        labelProps: {
          ...getLabelProps(
            mergeProps(componentContext.labelProps, labelProps)(),
          ),
        },
        startElementProps: mergeProps(
          componentContext.startElementProps,
          startElementProps,
        )(),
      }),
      [
        checkboxProps,
        componentContext.checkboxProps,
        componentContext.endElementProps,
        componentContext.indicatorProps,
        componentContext.labelProps,
        componentContext.size,
        componentContext.startElementProps,
        endElementProps,
        getCheckboxProps,
        getIndicatorProps,
        getLabelProps,
        indicatorProps,
        labelProps,
        startElementProps,
      ],
    )

    return (
      <TreeItemContext value={context}>
        <ItemComponentContext value={itemComponentContext}>
          {group ? (
            <styled.li {...getGroupItemProps(itemProps)}>
              <styled.div data-content {...props}>
                <TreeIndicator data-animated={dataAttr(animated)}>
                  {groupLoading ? (
                    <Loading />
                  ) : (
                    runIfFn(indicator, callbackProps)
                  )}
                </TreeIndicator>
                {checkable ? <TreeCheckbox /> : null}
                {groupStartElement ? (
                  <TreeStartElement>
                    {runIfFn(groupStartElement, callbackProps)}
                  </TreeStartElement>
                ) : null}
                {label ? <TreeLabel>{label}</TreeLabel> : null}
                {groupEndElement ? (
                  <TreeEndElement>
                    {runIfFn(groupEndElement, callbackProps)}
                  </TreeEndElement>
                ) : null}
              </styled.div>

              <TreeGroup
                duration={!animated ? 0 : undefined}
                open={groupOpen}
                {...getGroupProps(
                  mergeProps(componentContext.groupProps, groupProps)(),
                )}
              >
                {children}
              </TreeGroup>
            </styled.li>
          ) : (
            <styled.li {...getItemProps(itemProps)}>
              <styled.div data-content {...props}>
                <TreeIndicator data-hidden />
                {checkable ? <TreeCheckbox /> : null}
                {itemStartElement ? (
                  <TreeStartElement>
                    {runIfFn(itemStartElement, callbackProps)}
                  </TreeStartElement>
                ) : null}
                {label ? <TreeLabel>{label}</TreeLabel> : null}
                {itemEndElement ? (
                  <TreeEndElement>
                    {runIfFn(itemEndElement, callbackProps)}
                  </TreeEndElement>
                ) : null}
              </styled.div>
            </styled.li>
          )}
        </ItemComponentContext>
      </TreeItemContext>
    )
  },
  "item",
)()

interface TreeGroupProps
  extends
    Omit<HTMLStyledProps<"ul">, "transition">,
    Pick<CollapseProps, "animationOpacity" | keyof WithTransitionProps> {}

const TreeGroup = withContext<"ul", TreeGroupProps>((props) => {
  return <Collapse as="ul" {...cast<CollapseProps>(props)} />
}, "group")()

interface TreeIndicatorProps extends HTMLStyledProps<"svg"> {}

const TreeIndicator = withContext<"svg", TreeIndicatorProps>(
  ({ children = <ChevronRightIcon />, ...rest }) => {
    const { indicatorHidden } = useComponentContext()

    if (indicatorHidden) return null

    if (isValidElement<HTMLProps<"svg">>(children))
      return cloneElement(children, { ...rest, ...children.props })

    return Children.count(children) > 1 ? Children.only(null) : null
  },
  "indicator",
)(undefined, (props) => {
  const { indicatorProps } = useItemComponentContext()

  return mergeProps(indicatorProps, props)()
})

interface TreeCheckboxProps extends CheckboxProps {}

const TreeCheckbox = withContext<"input", TreeCheckboxProps>(
  Checkbox,
  "checkbox",
)(undefined, (props) => {
  const { checkboxProps } = useItemComponentContext()

  return mergeProps(checkboxProps, props)()
})

interface TreeStartElementProps extends HTMLStyledProps {}

const TreeStartElement = withContext<"div", TreeStartElementProps>("div", {
  name: "StartElement",
  slot: ["element", "start"],
})(undefined, (props) => {
  const { startElementProps } = useItemComponentContext()

  return mergeProps(startElementProps, props)()
})

interface TreeEndElementProps extends HTMLStyledProps {}

const TreeEndElement = withContext<"div", TreeEndElementProps>("div", {
  name: "EndElement",
  slot: ["element", "end"],
})(undefined, (props) => {
  const { endElementProps } = useItemComponentContext()

  return mergeProps(endElementProps, props)()
})

interface TreeLabelProps extends HTMLStyledProps<"span"> {}

const TreeLabel = withContext<"span", TreeLabelProps>("span", "label")(
  undefined,
  (props) => {
    const { labelProps } = useItemComponentContext()

    return mergeProps(labelProps, props)()
  },
)
