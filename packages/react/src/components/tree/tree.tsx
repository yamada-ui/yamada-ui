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
import { createSlotComponent, styled } from "../../core"
import {
  cast,
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

export type TreeItemReactNode =
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

export interface TreeItemWithChildren extends TreeItemWithValue {
  children: TreeItem[]
}

export type TreeItem = TreeItemWithChildren | TreeItemWithValue

const recursiveTreeItem = (items?: TreeItem[]) => {
  return items?.map((props, index) => {
    const key = props.value || (isString(props.label) ? props.label : index)

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
  | "triggerProps"
> {}

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
      | "triggerProps"
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
  itemProps?: Omit<TreeItemProps, "label" | "open" | "value">
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
    triggerProps,
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
        triggerProps,
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
        triggerProps,
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
  extends
    Omit<HTMLStyledProps<"li">, "value">,
    Omit<UseTreeItemProps, "asyncChildren"> {
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
   * Props for the start component.
   */
  startElementProps?: TreeStartElementProps
  /**
   * Props for the trigger component.
   */
  triggerProps?: TreeTriggerProps
  /**
   * If provided, the tree item will be rendered as an async tree item.
   */
  asyncChildren?: () => Promise<TreeItem[]>
}

export const TreeItem = withContext<"li", TreeItemProps>(
  ({
    animated: animatedProp,
    asyncChildren: asyncChildrenProp,
    endElement,
    indicator: indicatorProp,
    label,
    loadingScheme,
    startElement,
    value: valueProp = isString(label) ? label : undefined,
    checkboxProps,
    endElementProps,
    groupProps,
    indicatorProps,
    labelProps,
    startElementProps,
    triggerProps,
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
      value,
      getCheckboxProps,
      getGroupItemProps,
      getGroupProps,
      getIndicatorProps,
      getItemProps,
      getLabelProps,
      getTriggerProps,
      onGroupClose,
      onGroupOpen,
      onGroupToggle,
    } = useTreeItem({
      ...componentContext.itemProps,
      ...rest,
      asyncChildren: asyncChildrenProp ? asyncChildren : undefined,
      value: valueProp,
    })
    const props = { disabled, expanded: groupOpen }
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
    const varProps = useMemo(() => ({ "--level": level.toString() }), [level])

    return (
      <TreeItemContext value={context}>
        {group ? (
          <styled.li {...varProps} {...getGroupItemProps()}>
            <TreeTrigger
              {...getTriggerProps({
                ...componentContext.triggerProps,
                ...triggerProps,
              })}
            >
              <TreeIndicator
                {...getIndicatorProps({
                  "data-animated": dataAttr(animated),
                  ...componentContext.indicatorProps,
                  ...indicatorProps,
                })}
              >
                {groupLoading ? <Loading /> : runIfFn(indicator, props)}
              </TreeIndicator>
              {checkable ? (
                <TreeCheckbox
                  size={componentContext.size}
                  {...getCheckboxProps({
                    ...componentContext.checkboxProps,
                    ...checkboxProps,
                  })}
                />
              ) : null}
              {groupStartElement ? (
                <TreeStartElement
                  {...componentContext.startElementProps}
                  {...startElementProps}
                >
                  {runIfFn(groupStartElement, props)}
                </TreeStartElement>
              ) : null}
              {label ? (
                <TreeLabel
                  {...getLabelProps({
                    ...componentContext.labelProps,
                    ...labelProps,
                  })}
                >
                  {label}
                </TreeLabel>
              ) : null}
              {groupEndElement ? (
                <TreeEndElement
                  {...componentContext.endElementProps}
                  {...endElementProps}
                >
                  {runIfFn(groupEndElement, props)}
                </TreeEndElement>
              ) : null}
            </TreeTrigger>

            <TreeGroup
              duration={!animated ? 0 : undefined}
              open={groupOpen}
              {...getGroupProps({
                ...componentContext.groupProps,
                ...groupProps,
              })}
            >
              {children}
            </TreeGroup>
          </styled.li>
        ) : (
          <styled.li {...varProps} {...getItemProps()}>
            <TreeIndicator
              {...getIndicatorProps({
                "data-hidden": "",
                ...componentContext.indicatorProps,
                ...indicatorProps,
              })}
            />
            {checkable ? (
              <TreeCheckbox
                size={componentContext.size}
                {...getCheckboxProps({
                  ...componentContext.checkboxProps,
                  ...checkboxProps,
                })}
              />
            ) : null}
            {itemStartElement ? (
              <TreeStartElement
                {...componentContext.startElementProps}
                {...startElementProps}
              >
                {runIfFn(itemStartElement, props)}
              </TreeStartElement>
            ) : null}
            {label ? (
              <TreeLabel
                {...getLabelProps({
                  ...componentContext.labelProps,
                  ...labelProps,
                })}
              >
                {label}
              </TreeLabel>
            ) : null}
            {itemEndElement ? (
              <TreeEndElement
                {...componentContext.endElementProps}
                {...endElementProps}
              >
                {runIfFn(itemEndElement, props)}
              </TreeEndElement>
            ) : null}
          </styled.li>
        )}
      </TreeItemContext>
    )
  },
  "item",
)()

interface TreeTriggerProps extends HTMLStyledProps {}

const TreeTrigger = withContext<"div", TreeTriggerProps>("div", "trigger")()

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
)()

interface TreeCheckboxProps extends CheckboxProps {}

const TreeCheckbox = withContext<"input", TreeCheckboxProps>(
  Checkbox,
  "checkbox",
)()

interface TreeStartElementProps extends HTMLStyledProps {}

const TreeStartElement = withContext<"div", TreeStartElementProps>("div", {
  name: "TreeStartElement",
  slot: ["element", "start"],
})()

interface TreeEndElementProps extends HTMLStyledProps {}

const TreeEndElement = withContext<"div", TreeEndElementProps>("div", {
  name: "TreeEndElement",
  slot: ["element", "end"],
})()

interface TreeLabelProps extends HTMLStyledProps<"span"> {}

const TreeLabel = withContext<"span", TreeLabelProps>("span", "label")()
