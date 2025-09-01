"use client"

import type { FC } from "react"
import type { HTMLStyledProps } from "../../core"
import type {
  TreeNode,
  TreeNodeProps,
  TreeNodeRenderProps,
  TreeNodeState,
  TreeProps,
  TreeRootProps,
} from "./tree-types"
import type { TreeStyle } from "./tree.style"
import { useCallback, useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import { dataAttr, handlerAll } from "../../utils"
import { Checkbox } from "../checkbox"
import { ChevronDownIcon, ChevronRightIcon } from "../icon"
import { Loading } from "../loading"
import {
  filterTreeNodes,
  getExpandedIdsForFilteredNodes,
  renderNodeName,
} from "./tree-utils"
import { treeStyle } from "./tree.style"
import { useNodeState, useTree, useTreeSelection } from "./use-tree"

interface ComponentContext
  extends Pick<
    TreeRootProps,
    | "collection"
    | "defaultExpanded"
    | "defaultSelected"
    | "filterNodes"
    | "filterQuery"
    | "loadChildren"
    | "nodes"
    | "onLoadChildrenComplete"
    | "onLoadChildrenError"
    | "selectionMode"
  > {
  expandedIds: string[]
  selectedIds: string[]
  onCollapseAll: () => void
  onExpandAll: () => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
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

export { TreePropsContext, useComponentContext, useTreePropsContext }

/**
 * `Tree` is a component that displays hierarchical data in a tree structure.
 *
 * @see https://yamada-ui.com/components/tree
 */
export const TreeRoot = withProvider<"div", TreeRootProps>(
  ({
    children,
    collection,
    defaultExpanded = [],
    defaultSelected = [],
    expandedIds: controlledExpandedIds,
    filterNodes,
    filterQuery = "",
    loadChildren,
    nodes = [],
    selectedIds: controlledSelectedIds,
    selectionMode = "single",
    onExpandedChange,
    onLoadChildrenComplete,
    onLoadChildrenError,
    onSelectionChange,
    ...rest
  }) => {
    const {
      expandedIds,
      selectedIds,
      onCollapseAll,
      onExpandAll,
      onSelect,
      onToggleExpand,
    } = useTree({
      defaultExpanded,
      defaultSelected,
      expandedIds: controlledExpandedIds,
      nodes,
      selectedIds: controlledSelectedIds,
      selectionMode,
      onExpandedChange,
      onSelectionChange,
    })

    const finalSelectedIds = useMemo(
      () => controlledSelectedIds ?? selectedIds,
      [controlledSelectedIds, selectedIds],
    )

    const baseExpandedIds = useMemo(
      () => controlledExpandedIds ?? expandedIds,
      [controlledExpandedIds, expandedIds],
    )

    const autoExpandedIds = useMemo(() => {
      if (filterQuery.trim() && filterNodes) {
        const autoIds = getExpandedIdsForFilteredNodes(
          nodes,
          filterNodes,
          filterQuery,
        )
        return autoIds
      }
      return []
    }, [nodes, filterNodes, filterQuery])

    const finalExpandedIds = useMemo(() => {
      if (autoExpandedIds.length > 0) {
        const merged = new Set([...autoExpandedIds, ...baseExpandedIds])
        return Array.from(merged)
      }
      return baseExpandedIds
    }, [baseExpandedIds, autoExpandedIds])

    const componentContext = useMemo(
      () => ({
        collection,
        defaultExpanded,
        defaultSelected,
        expandedIds: finalExpandedIds,
        filterNodes,
        filterQuery,
        loadChildren,
        nodes,
        selectedIds: finalSelectedIds,
        selectionMode,
        onCollapseAll,
        onExpandAll,
        onLoadChildrenComplete,
        onLoadChildrenError,
        onSelect,
        onToggleExpand,
      }),
      [
        collection,
        defaultExpanded,
        defaultSelected,
        finalExpandedIds,
        filterNodes,
        filterQuery,
        loadChildren,
        nodes,
        onCollapseAll,
        onExpandAll,
        onLoadChildrenComplete,
        onLoadChildrenError,
        onSelect,
        onToggleExpand,
        finalSelectedIds,
        selectionMode,
      ],
    )

    return (
      <ComponentContext value={componentContext}>
        <styled.div {...rest}>{children}</styled.div>
      </ComponentContext>
    )
  },
  "root",
)()

export interface TreeProps extends HTMLStyledProps<"ul"> {}

export const Tree = withContext<"ul", TreeProps>(({ children, ...rest }) => {
  const { collection, filterNodes, filterQuery, nodes } = useComponentContext()

  const computedChildren = useMemo(() => {
    if (children) {
      return children
    } else if (collection) {
      const rootNode = collection.getRootNode()
      if (rootNode.children) {
        const filteredChildren = filterTreeNodes(
          rootNode.children,
          filterNodes,
          filterQuery,
        )
        return (
          <>
            <TreeCollectionName>
              {collection.getNodeString(rootNode)}
            </TreeCollectionName>
            {filteredChildren.map((node) => (
              <TreeNode
                key={collection.getNodeValue(node)}
                indexPath={[]}
                node={node}
              />
            ))}
          </>
        )
      }
      return (
        <TreeCollectionName>
          {collection.getNodeString(rootNode)}
        </TreeCollectionName>
      )
    } else {
      const filteredNodes = filterTreeNodes(
        nodes || [],
        filterNodes,
        filterQuery,
      )
      return filteredNodes.map((node, index) => (
        <TreeNode key={node.id || index} indexPath={[index]} node={node} />
      ))
    }
  }, [children, nodes, collection, filterNodes, filterQuery])

  return <styled.ul {...rest}>{computedChildren}</styled.ul>
}, "tree")()

/**
 * TreeNode component that renders individual tree nodes.
 */
export const TreeNode: FC<TreeNodeProps> = ({
  indexPath = [],
  node,
  render,
  branchContentProps,
  branchProps,
}) => {
  const {
    collection,
    loadChildren,
    selectionMode,
    onLoadChildrenComplete,
    onLoadChildrenError,
    onToggleExpand,
  } = useComponentContext()

  const { filterQuery } = useComponentContext()

  const [loading, setLoading] = useState(false)
  const [loadedChildren, setLoadedChildren] = useState<null | TreeNode[]>(null)

  const nodeId = useMemo(
    () => (collection ? collection.getNodeValue(node) : node.id),
    [collection, node],
  )

  const { expanded, indeterminate, selected } = useNodeState(nodeId)

  const hasChildren = useMemo(
    () => node.children && node.children.length > 0,
    [node.children],
  )

  const shouldLoadChildren = useMemo(
    () => loadChildren && !hasChildren && !loadedChildren,
    [loadChildren, hasChildren, loadedChildren],
  )

  /**
   * Handles toggling the expand state of a node, including async loading.
   *
   * @param event - Optional mouse event that triggered the toggle
   */
  const handleToggleExpand = useCallback(
    async (event?: React.MouseEvent) => {
      if (!event) {
        if (node.disabled) {
          return
        }

        if (shouldLoadChildren && !loading) {
          setLoading(true)
          try {
            const children = await loadChildren(node)
            setLoadedChildren(children)
            onLoadChildrenComplete?.(node, children)
            node.children = children
          } catch (error) {
            onLoadChildrenError?.(node, error as Error)
          } finally {
            setLoading(false)
          }
        }
        onToggleExpand(nodeId)
        return
      }

      event.stopPropagation()

      if (node.disabled) {
        return
      }

      if (shouldLoadChildren && !loading) {
        setLoading(true)
        try {
          const children = await loadChildren(node)
          setLoadedChildren(children)
          onLoadChildrenComplete?.(node, children)
          node.children = children
        } catch (error) {
          onLoadChildrenError?.(node, error as Error)
        } finally {
          setLoading(false)
        }
      }
      onToggleExpand(nodeId)
    },
    [
      shouldLoadChildren,
      loading,
      loadChildren,
      node,
      onLoadChildrenComplete,
      onLoadChildrenError,
      onToggleExpand,
      nodeId,
    ],
  )

  const childrenToRender = useMemo(
    () => loadedChildren || node.children || [],
    [loadedChildren, node.children],
  )

  const nodeState = useMemo<TreeNodeState>(
    () => ({
      disabled: !!node.disabled,
      expanded,
      indeterminate,
      isBranch:
        hasChildren ||
        shouldLoadChildren ||
        !!(loadedChildren && loadedChildren.length > 0),
      loading,
      selected,
    }),
    [
      node.disabled,
      expanded,
      indeterminate,
      hasChildren,
      shouldLoadChildren,
      loadedChildren,
      loading,
      selected,
    ],
  )

  const childrenContent = useMemo(() => {
    if (nodeState.isBranch && expanded) {
      return (
        <>
          {childrenToRender.map((child, index) => (
            <TreeNode
              key={collection ? collection.getNodeValue(child) : child.id}
              indexPath={[...indexPath, index]}
              node={child}
              render={render}
            />
          ))}
        </>
      )
    }
    return null
  }, [
    nodeState.isBranch,
    expanded,
    childrenToRender,
    collection,
    indexPath,
    render,
  ])

  const renderProps = useMemo<TreeNodeRenderProps>(
    () => ({
      children: childrenContent,
      expanded,
      indexPath,
      node,
      nodeId,
      nodeState,
      onToggleExpand: handleToggleExpand,
    }),
    [
      childrenContent,
      expanded,
      indexPath,
      node,
      nodeId,
      nodeState,
      handleToggleExpand,
    ],
  )

  if (render) {
    return <>{render(renderProps)}</>
  }

  if (nodeState.isBranch) {
    return (
      <TreeBranch indexPath={indexPath} {...branchProps}>
        <TreeBranchControl data-node-id={nodeId}>
          <TreeBranchTrigger>
            <TreeBranchIndicator
              nodeId={nodeId}
              onToggleExpand={handleToggleExpand}
            >
              {loading ? (
                <Loading.Oval />
              ) : expanded ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </TreeBranchIndicator>
            {selectionMode === "checkbox" && <TreeCheckbox nodeId={nodeId} />}
            <TreeBranchText nodeId={nodeId}>
              {renderNodeName(node.name, filterQuery)}
            </TreeBranchText>
          </TreeBranchTrigger>
        </TreeBranchControl>
        <TreeBranchContent {...branchContentProps}>
          {expanded
            ? childrenToRender.map((child, index) => (
                <TreeNode
                  key={collection ? collection.getNodeValue(child) : child.id}
                  indexPath={[...indexPath, index]}
                  node={child}
                />
              ))
            : null}
        </TreeBranchContent>
      </TreeBranch>
    )
  } else {
    return (
      <TreeItem indexPath={indexPath} nodeId={nodeId}>
        {selectionMode === "checkbox" && <TreeCheckbox nodeId={nodeId} />}
        <TreeItemText>{renderNodeName(node.name, filterQuery)}</TreeItemText>
      </TreeItem>
    )
  }
}

export interface TreeBranchProps extends HTMLStyledProps<"li"> {
  /**
   * The index path of the branch in the tree.
   */
  indexPath?: number[]
}

export const TreeBranch = withContext<"li", TreeBranchProps>("li", "branch")(
  undefined,
  ({ indexPath = [], ...rest }) => ({
    "--depth": indexPath.length,
    ...rest,
  }),
)

export interface TreeBranchContentProps extends HTMLStyledProps<"ul"> {}

/**
 * TreeBranchContent component that contains the child nodes of a branch.
 */
export const TreeBranchContent = withContext<"ul", TreeBranchContentProps>(
  "ul",
  "branchContent",
)()

export interface TreeBranchControlProps extends HTMLStyledProps {
  /**
   * The node ID for the branch control.
   */
  nodeId?: string
}

/**
 * TreeBranchControl component that wraps the branch trigger and handles user interactions.
 */
export const TreeBranchControl = withContext<"div", TreeBranchControlProps>(
  "div",
  "branchControl",
)({ "data-group": "" }, ({ nodeId, onClick, ...rest }) => {
  const { expanded, node, selected } = useNodeState(nodeId)
  const { handleSelection } = useTreeSelection(nodeId, node?.disabled)

  if (!node) {
    return { onClick, ...rest }
  }

  return {
    "data-disabled": dataAttr(node.disabled),
    "data-expanded": dataAttr(expanded),
    "data-selected": dataAttr(selected),
    onClick: handlerAll(handleSelection, onClick),
    ...rest,
  }
})

export interface TreeBranchTriggerProps extends HTMLStyledProps<"button"> {}

/**
 * TreeBranchTrigger component that acts as the clickable trigger for expanding/collapsing branches.
 */
export const TreeBranchTrigger = withContext<"button", TreeBranchTriggerProps>(
  "button",
  "branchTrigger",
)({}, ({ ...rest }) => {
  const nodeId = rest["data-node-id"] as string | undefined
  const { node } = useNodeState(nodeId)

  if (!node) {
    return { ...rest }
  }

  return {
    "data-disabled": dataAttr(node.disabled),
    ...rest,
  }
})

export interface TreeBranchIndicatorProps extends HTMLStyledProps {
  /**
   * The node ID for the branch indicator.
   */
  nodeId?: string
  /**
   * Callback function to toggle expand state.
   */
  onToggleExpand?: () => void
}

/**
 * TreeBranchIndicator component that displays the expand/collapse icon for branches.
 */
export const TreeBranchIndicator = withContext<"div", TreeBranchIndicatorProps>(
  "div",
  "branchIndicator",
)({}, ({ nodeId, onClick, onToggleExpand, ...rest }) => {
  const { expandedIds } = useComponentContext()

  if (!nodeId) {
    return { onClick, ...rest }
  }

  const expanded = expandedIds.includes(nodeId)

  return {
    "data-expanded": dataAttr(expanded),
    onClick: handlerAll(
      onToggleExpand
        ? (e: React.MouseEvent) => {
            e.stopPropagation()
            onToggleExpand()
          }
        : undefined,
      onClick,
    ),
    ...rest,
  }
})

export interface TreeBranchTextProps extends HTMLStyledProps<"span"> {
  /**
   * The node ID for the branch text.
   */
  nodeId?: string
}

/**
 * TreeBranchText component that displays the text content of a branch node.
 */
export const TreeBranchText = withContext<"span", TreeBranchTextProps>(
  "span",
  "branchText",
)(undefined, ({ nodeId, onClick, ...rest }) => {
  const { node, selected } = useNodeState(nodeId)
  const { handleSelection } = useTreeSelection(nodeId, node?.disabled)

  if (!node) {
    return { onClick, ...rest }
  }

  return {
    "data-disabled": dataAttr(node.disabled),
    "data-selected": dataAttr(selected),
    onClick: handlerAll(handleSelection, onClick),
    ...rest,
  }
})

export interface TreeCheckboxProps extends HTMLStyledProps<"label"> {
  /**
   * The node ID for the checkbox.
   */
  nodeId?: string
}

/**
 * TreeCheckbox component that provides checkbox functionality for tree nodes.
 */
export const TreeCheckbox = withContext<"label", TreeCheckboxProps>(
  Checkbox,
  "checkbox",
)(undefined, ({ nodeId, onChange, ...rest }) => {
  const { onSelect } = useComponentContext()
  const { indeterminate, node, selected } = useNodeState(nodeId)

  if (!node) {
    return { onChange, ...rest }
  }

  const handleCheckboxChange = (_checkedValue: boolean) => {
    onSelect(nodeId!)
  }

  return {
    checked: selected,
    disabled: node.disabled,
    indeterminate,
    onChange: handlerAll(handleCheckboxChange, onChange),
    ...rest,
  }
})

export interface TreeItemProps extends HTMLStyledProps<"li"> {
  /**
   * The index path of the item in the tree.
   */
  indexPath?: number[]
  /**
   * The node ID for the tree item.
   */
  nodeId?: string
}

/**
 * TreeItem component that represents a leaf node in the tree.
 */
export const TreeItem = withContext<"li", TreeItemProps>("li", "item")(
  { "data-group": "" },
  ({ indexPath = [], nodeId, onClick, ...rest }) => {
    const { node, selected } = useNodeState(nodeId)
    const { handleSelection } = useTreeSelection(nodeId, node?.disabled)

    if (!node) {
      return { "--depth": indexPath.length, onClick, ...rest }
    }

    return {
      "data-disabled": dataAttr(node.disabled),
      "data-node-id": nodeId,
      "data-selected": dataAttr(selected),
      "--depth": indexPath.length,
      onClick: handlerAll(handleSelection, onClick),
      ...rest,
    }
  },
)

export interface TreeItemIndicatorProps extends HTMLStyledProps {}

/**
 * TreeItemIndicator component that displays an indicator icon for tree items.
 */
export const TreeItemIndicator = withContext<"div", TreeItemIndicatorProps>(
  "div",
  "itemIndicator",
)()

export interface TreeItemTextProps extends HTMLStyledProps<"span"> {}

/**
 * TreeItemText component that displays the text content of a tree item.
 */
export const TreeItemText = withContext<"span", TreeItemTextProps>(
  "span",
  "itemText",
)()

export interface TreeLabelProps extends HTMLStyledProps<"label"> {}

/**
 * TreeLabel component for labeling tree sections.
 */
export const TreeLabel = withContext<"label", TreeLabelProps>(
  "label",
  "label",
)()

export interface TreeCollectionNameProps extends HTMLStyledProps {}

/**
 * TreeCollectionName component that displays the name of a tree collection.
 */
export const TreeCollectionName = withContext<"div", TreeCollectionNameProps>(
  "div",
  "collectionName",
)()
