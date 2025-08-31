"use client"

import type { FC } from "react"
import type { HTMLStyledProps } from "../../core"
import type { TreeCollection } from "./tree-collection"
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
import { createContext, dataAttr, handlerAll } from "../../utils"
import { Checkbox } from "../checkbox"
import { ChevronDownIcon, ChevronRightIcon } from "../icon"
import { Loading } from "../loading"
import {
  filterTreeNodes,
  findNodeById,
  getExpandedIdsForFilteredNodes,
  isParentIndeterminate,
  renderNodeName,
} from "./tree-utils"
import { treeStyle } from "./tree.style"
import { useTree, useTreeSelection } from "./use-tree"

interface TreeContext {
  expandedIds: string[]
  nodes: TreeNode[]
  selectedIds: string[]
  selectionMode: "checkbox" | "multiple" | "single"
  onCollapseAll: () => void
  onExpandAll: () => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
  collection?: TreeCollection
  loadChildren?: (node: TreeNode) => Promise<TreeNode[]>
  onLoadChildrenComplete?: (node: TreeNode, children: TreeNode[]) => void
  onLoadChildrenError?: (node: TreeNode, error: Error) => void
}

export const [TreeContext, useTreeContext] = createContext<TreeContext>({
  name: "TreeContext",
})

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
  > {}

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
        filterNodes,
        filterQuery,
        loadChildren,
        nodes,
        onLoadChildrenComplete,
        onLoadChildrenError,
      }),
      [
        collection,
        defaultExpanded,
        defaultSelected,
        filterNodes,
        filterQuery,
        loadChildren,
        nodes,
        onLoadChildrenComplete,
        onLoadChildrenError,
      ],
    )

    const treeContext = useMemo(
      () => ({
        collection,
        expandedIds: finalExpandedIds,
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
        finalExpandedIds,
        loadChildren,
        nodes,
        onCollapseAll,
        onExpandAll,
        onLoadChildrenComplete,
        onLoadChildrenError,
        finalSelectedIds,
        onSelect,
        onToggleExpand,
        selectionMode,
      ],
    )

    return (
      <TreeContext.Provider value={treeContext}>
        <ComponentContext value={componentContext}>
          <styled.div {...rest}>{children}</styled.div>
        </ComponentContext>
      </TreeContext.Provider>
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
    expandedIds,
    loadChildren,
    selectedIds,
    selectionMode,
    onLoadChildrenComplete,
    onLoadChildrenError,
    onToggleExpand,
  } = useTreeContext()

  const { filterQuery } = useComponentContext()

  const [loading, setLoading] = useState(false)
  const [loadedChildren, setLoadedChildren] = useState<null | TreeNode[]>(null)

  const nodeId = useMemo(
    () => (collection ? collection.getNodeValue(node) : node.id),
    [collection, node],
  )

  const expanded = useMemo(
    () => expandedIds.includes(nodeId),
    [expandedIds, nodeId],
  )

  const selected = useMemo(() => {
    if (selectionMode === "checkbox") {
      // In checkbox mode, selected state depends on hierarchical selection
      // For parent nodes, selected if all children are selected
      const nodeHasChildren = node.children && node.children.length > 0
      if (nodeHasChildren && node.children) {
        const allChildrenSelected = node.children.every((child) =>
          selectedIds.includes(child.id),
        )
        return allChildrenSelected
      }
      return selectedIds.includes(nodeId)
    } else {
      // In other modes, selected state is flat
      return selectedIds.includes(nodeId)
    }
  }, [selectionMode, selectedIds, nodeId, node.children])

  const indeterminate = useMemo(
    () => isParentIndeterminate(node, selectedIds),
    [node, selectedIds],
  )

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
      indexPath,
      node,
      nodeId,
      nodeState,
      onToggleExpand: handleToggleExpand,
    }),
    [childrenContent, indexPath, node, nodeId, nodeState, handleToggleExpand],
  )

  if (render) {
    return <>{render(renderProps)}</>
  }

  if (nodeState.isBranch) {
    return (
      <TreeBranch indexPath={indexPath} {...branchProps}>
        <TreeBranchControl
          data-node-id={nodeId}
          disabled={node.disabled}
          expanded={expanded}
          selected={selected}
        >
          <TreeBranchTrigger disabled={node.disabled}>
            <TreeBranchIndicator
              expanded={expanded}
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
            {selectionMode === "checkbox" ? (
              <>
                <TreeBranchCheckbox nodeId={nodeId} />
                <TreeBranchText
                  disabled={node.disabled}
                  nodeId={nodeId}
                  selected={selected}
                >
                  {renderNodeName(node.name, filterQuery)}
                </TreeBranchText>
              </>
            ) : (
              <TreeBranchText
                disabled={node.disabled}
                nodeId={nodeId}
                selected={selected}
              >
                {renderNodeName(node.name, filterQuery)}
              </TreeBranchText>
            )}
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
    return selectionMode === "checkbox" ? (
      <TreeItem
        disabled={node.disabled}
        indexPath={indexPath}
        nodeId={nodeId}
        selected={selected}
      >
        <TreeItemCheckbox nodeId={nodeId} />
        <TreeItemText>{renderNodeName(node.name, filterQuery)}</TreeItemText>
      </TreeItem>
    ) : (
      <TreeItem
        disabled={node.disabled}
        indexPath={indexPath}
        nodeId={nodeId}
        selected={selected}
      >
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
   * Whether the branch control is disabled.
   */
  disabled?: boolean
  /**
   * Whether the branch is expanded.
   */
  expanded?: boolean
  /**
   * Whether the branch is selected.
   */
  selected?: boolean
}

/**
 * TreeBranchControl component that wraps the branch trigger and handles user interactions.
 */
export const TreeBranchControl = withContext<"div", TreeBranchControlProps>(
  "div",
  "branchControl",
)(
  { "data-group": "" },
  ({ disabled, expanded, selected, onClick, ...rest }) => {
    const nodeId = rest["data-node-id"] as string | undefined
    const { handleSelection } = useTreeSelection(nodeId, disabled)

    return {
      "data-disabled": dataAttr(disabled),
      "data-expanded": dataAttr(expanded),
      "data-selected": dataAttr(selected),
      onClick: handlerAll(handleSelection, onClick),
      ...rest,
    }
  },
)

export interface TreeBranchTriggerProps extends HTMLStyledProps<"button"> {
  /**
   * Whether the branch trigger is disabled.
   */
  disabled?: boolean
}

/**
 * TreeBranchTrigger component that acts as the clickable trigger for expanding/collapsing branches.
 */
export const TreeBranchTrigger = withContext<"button", TreeBranchTriggerProps>(
  "button",
  "branchTrigger",
)({}, ({ disabled, ...rest }) => ({
  "data-disabled": dataAttr(disabled),
  ...rest,
}))

export interface TreeBranchIndicatorProps extends HTMLStyledProps {
  /**
   * Whether the branch is expanded.
   */
  expanded?: boolean
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
)({}, ({ expanded, onClick, onToggleExpand, ...rest }) => ({
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
}))

export interface TreeBranchTextProps extends HTMLStyledProps<"span"> {
  /**
   * Whether the branch text is disabled.
   */
  disabled?: boolean
  /**
   * The node ID for the branch text.
   */
  nodeId?: string
  /**
   * Whether the branch text is selected.
   */
  selected?: boolean
}

/**
 * TreeBranchText component that displays the text content of a branch node.
 */
export const TreeBranchText = withContext<"span", TreeBranchTextProps>(
  "span",
  "branchText",
)(undefined, ({ disabled, nodeId, selected, onClick, ...rest }) => {
  const { handleSelection } = useTreeSelection(nodeId, disabled)

  return {
    "data-disabled": dataAttr(disabled),
    "data-selected": dataAttr(selected),
    onClick: handlerAll(handleSelection, onClick),
    ...rest,
  }
})

export interface TreeBranchCheckboxProps extends HTMLStyledProps {
  /**
   * The node ID for the branch checkbox.
   */
  nodeId?: string
}

/**
 * TreeBranchCheckbox component that provides checkbox functionality for branch nodes.
 */
export const TreeBranchCheckbox = withContext<"div", TreeBranchCheckboxProps>(
  ({ nodeId, ...rest }) => {
    const { nodes, selectedIds, onSelect } = useTreeContext()

    if (!nodeId) {
      return <styled.div {...rest} />
    }

    const node = findNodeById(nodes, nodeId)
    if (!node) {
      return <styled.div {...rest} />
    }

    const checked = selectedIds.includes(nodeId)
    const indeterminate = isParentIndeterminate(node, selectedIds)

    const handleCheckboxChange = (_checkedValue: boolean) => {
      onSelect(nodeId)
    }

    return (
      <styled.div {...rest}>
        <Checkbox
          checked={checked}
          disabled={node.disabled}
          indeterminate={indeterminate}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
      </styled.div>
    )
  },
  "branchCheckbox",
)()

export interface TreeItemProps extends HTMLStyledProps<"li"> {
  /**
   * Whether the tree item is disabled.
   */
  disabled?: boolean
  /**
   * The index path of the item in the tree.
   */
  indexPath?: number[]
  /**
   * The node ID for the tree item.
   */
  nodeId?: string
  /**
   * Whether the tree item is selected.
   */
  selected?: boolean
}

/**
 * TreeItem component that represents a leaf node in the tree.
 */
export const TreeItem = withContext<"li", TreeItemProps>("li", "item")(
  undefined,
  ({ disabled, indexPath = [], nodeId, selected, onClick, ...rest }) => {
    const { handleSelection } = useTreeSelection(nodeId, disabled)

    return {
      "data-disabled": dataAttr(disabled),
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

export interface TreeItemCheckboxProps extends HTMLStyledProps {
  /**
   * The node ID for the item checkbox.
   */
  nodeId?: string
}

/**
 * TreeItemCheckbox component that provides checkbox functionality for tree items.
 */
export const TreeItemCheckbox = withContext<"div", TreeItemCheckboxProps>(
  ({ nodeId, ...rest }) => {
    const { nodes, selectedIds, onSelect } = useTreeContext()

    if (!nodeId) {
      return <styled.div {...rest} />
    }

    const node = findNodeById(nodes, nodeId)
    if (!node) {
      return <styled.div {...rest} />
    }

    const checked = selectedIds.includes(nodeId)
    const indeterminate = isParentIndeterminate(node, selectedIds)

    const handleCheckboxChange = (_checkedValue: boolean) => {
      onSelect(nodeId)
    }

    return (
      <styled.div {...rest}>
        <Checkbox
          checked={checked}
          disabled={node.disabled}
          indeterminate={indeterminate}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
      </styled.div>
    )
  },
  "itemCheckbox",
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
