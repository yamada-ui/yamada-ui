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
  getExpandedIdsForFilteredNodes,
  isParentIndeterminate,
  renderNodeName,
} from "./tree-utils"
import { treeStyle } from "./tree.style"
import { useTree } from "./use-tree"

interface TreeContext {
  checkedIds: string[]
  expandedIds: string[]
  nodes: TreeNode[]
  selectedIds: string[]
  selectionMode: "checkbox" | "multiple" | "single"
  onCheck: (nodeId: string) => void
  onCollapseAll: () => void
  onExpandAll: () => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
  collection?: TreeCollection
  loadChildren?: (node: TreeNode) => Promise<TreeNode[]>
  onLoadChildrenComplete?: (node: TreeNode, children: TreeNode[]) => void
  onLoadChildrenError?: (node: TreeNode, error: Error) => void
}

const [TreeContext, useTreeContext] = createContext<TreeContext>({
  name: "TreeContext",
})

interface ComponentContext
  extends Pick<
    TreeRootProps,
    | "collection"
    | "defaultChecked"
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
    checkedIds: controlledCheckedIds,
    children,
    collection,
    defaultChecked = [],
    defaultExpanded = [],
    defaultSelected = [],
    expandedIds: controlledExpandedIds,
    filterNodes,
    filterQuery = "",
    loadChildren,
    nodes = [],
    selectedIds: controlledSelectedIds,
    selectionMode = "single",
    onCheckedChange,
    onExpandedChange,
    onLoadChildrenComplete,
    onLoadChildrenError,
    onSelectionChange,
    ...rest
  }) => {
    const {
      checkedIds,
      expandedIds,
      selectedIds,
      onCheck,
      onCollapseAll,
      onExpandAll,
      onSelect,
      onToggleExpand,
    } = useTree({
      checkedIds: controlledCheckedIds,
      defaultChecked,
      defaultExpanded,
      defaultSelected,
      expandedIds: controlledExpandedIds,
      nodes,
      selectedIds: controlledSelectedIds,
      selectionMode,
      onCheckedChange,
      onExpandedChange,
      onSelectionChange,
    })

    let finalExpandedIds = controlledExpandedIds ?? expandedIds
    const finalSelectedIds = controlledSelectedIds ?? selectedIds
    const finalCheckedIds = controlledCheckedIds ?? checkedIds

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

    finalExpandedIds = useMemo(() => {
      if (autoExpandedIds.length > 0) {
        const merged = new Set([...autoExpandedIds, ...finalExpandedIds])
        return Array.from(merged)
      }
      return finalExpandedIds
    }, [finalExpandedIds, autoExpandedIds])

    const componentContext = useMemo(
      () => ({
        collection,
        defaultChecked,
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
        defaultChecked,
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
        checkedIds: finalCheckedIds,
        collection,
        expandedIds: finalExpandedIds,
        loadChildren,
        nodes,
        selectedIds: finalSelectedIds,
        selectionMode,
        onCheck,
        onCollapseAll,
        onExpandAll,
        onLoadChildrenComplete,
        onLoadChildrenError,
        onSelect,
        onToggleExpand,
      }),
      [
        nodes,
        finalExpandedIds,
        finalSelectedIds,
        finalCheckedIds,
        selectionMode,
        onToggleExpand,
        onSelect,
        onCheck,
        onExpandAll,
        onCollapseAll,
        collection,
        loadChildren,
        onLoadChildrenComplete,
        onLoadChildrenError,
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

export const TreeNode: FC<TreeNodeProps> = ({
  indexPath = [],
  node,
  render,
  branchContentProps,
  branchProps,
}) => {
  const {
    checkedIds,
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

  const nodeId = collection ? collection.getNodeValue(node) : node.id
  const expanded = expandedIds.includes(nodeId)
  const selected = selectedIds.includes(nodeId)
  const checked = checkedIds.includes(nodeId)
  const indeterminate = isParentIndeterminate(node, checkedIds)
  const hasChildren = node.children && node.children.length > 0
  const shouldLoadChildren = loadChildren && !hasChildren && !loadedChildren
  const depth = indexPath.length

  const handleToggleExpand = async () => {
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
  }

  const childrenToRender = loadedChildren || node.children || []

  const nodeState: TreeNodeState = {
    checked,
    disabled: !!node.disabled,
    expanded,
    indeterminate,
    isBranch:
      hasChildren ||
      shouldLoadChildren ||
      !!(loadedChildren && loadedChildren.length > 0),
    loading,
    selected,
  }

  const childrenContent =
    nodeState.isBranch && expanded ? (
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
    ) : null

  const renderProps: TreeNodeRenderProps = {
    children: childrenContent,
    indexPath,
    node,
    nodeId,
    nodeState,
    onToggleExpand: handleToggleExpand,
  }

  if (render) {
    return <>{render(renderProps)}</>
  }

  if (nodeState.isBranch) {
    return (
      <TreeBranch depth={depth} {...branchProps}>
        <TreeBranchControl
          disabled={node.disabled}
          expanded={expanded}
          selected={selected}
          onClick={node.disabled ? undefined : handleToggleExpand}
        >
          <TreeBranchTrigger
            disabled={node.disabled}
            onClick={node.disabled ? undefined : handleToggleExpand}
          >
            <TreeBranchIndicator expanded={expanded}>
              {loading ? (
                <Loading.Oval />
              ) : expanded ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </TreeBranchIndicator>
            {selectionMode === "checkbox" ? (
              <TreeBranchCheckbox nodeId={nodeId}>
                <TreeBranchText>
                  {renderNodeName(node.name, filterQuery)}
                </TreeBranchText>
              </TreeBranchCheckbox>
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
        depth={depth}
        disabled={node.disabled}
        nodeId={nodeId}
        selected={selected}
      >
        <TreeItemCheckbox nodeId={nodeId}>
          <TreeItemText>{renderNodeName(node.name, filterQuery)}</TreeItemText>
        </TreeItemCheckbox>
      </TreeItem>
    ) : (
      <TreeItem
        depth={depth}
        disabled={node.disabled}
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
   * The depth level of the branch in the tree.
   */
  depth?: number
}

export const TreeBranch = withContext<"li", TreeBranchProps>("li", "branch")(
  undefined,
  ({ depth = 1, ...rest }) => ({
    "--depth": depth,
    ...rest,
  }),
)

export interface TreeBranchContentProps extends HTMLStyledProps<"ul"> {}

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

export const TreeBranchControl = withContext<"div", TreeBranchControlProps>(
  "div",
  "branchControl",
)({ "data-group": "" }, ({ disabled, expanded, selected, ...rest }) => ({
  "data-disabled": dataAttr(disabled),
  "data-expanded": dataAttr(expanded),
  "data-selected": dataAttr(selected),
  ...rest,
}))

export interface TreeBranchTriggerProps extends HTMLStyledProps<"button"> {
  /**
   * Whether the branch trigger is disabled.
   */
  disabled?: boolean
}

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
}

export const TreeBranchIndicator = withContext<"div", TreeBranchIndicatorProps>(
  "div",
  "branchIndicator",
)({}, ({ expanded, ...rest }) => ({
  "data-expanded": dataAttr(expanded),
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

export const TreeBranchText = withContext<"span", TreeBranchTextProps>(
  "span",
  "branchText",
)(undefined, ({ disabled, nodeId, selected, onClick, ...rest }) => {
  const { onSelect } = useTreeContext()

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!disabled && nodeId) {
      onSelect(nodeId)
    }
    onClick?.(event)
  }

  return {
    "data-disabled": dataAttr(disabled),
    "data-selected": dataAttr(selected),
    onClick: handleClick,
    ...rest,
  }
})

export interface TreeBranchCheckboxProps extends HTMLStyledProps {
  /**
   * The node ID for the branch checkbox.
   */
  nodeId?: string
}

export const TreeBranchCheckbox = withContext<"div", TreeBranchCheckboxProps>(
  ({ children, nodeId, onClick, ...rest }) => {
    const { checkedIds, nodes, onCheck } = useTreeContext()

    if (!nodeId) {
      return (
        <styled.div onClick={onClick} {...rest}>
          {children}
        </styled.div>
      )
    }

    const findNode = (
      searchNodes: TreeNode[],
      targetId: string,
    ): TreeNode | undefined => {
      for (const node of searchNodes) {
        if (node.id === targetId) return node
        if (node.children) {
          const found = findNode(node.children, targetId)
          if (found) return found
        }
      }
      return undefined
    }

    const node = findNode(nodes, nodeId)
    if (!node) {
      return (
        <styled.div onClick={onClick} {...rest}>
          {children}
        </styled.div>
      )
    }

    const checked = checkedIds.includes(nodeId)
    const indeterminate = isParentIndeterminate(node, checkedIds)

    const handleChange = (_checkedValue: boolean) => {
      onCheck(nodeId)
    }

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
      },
      [],
    )

    return (
      <styled.div {...rest} onClick={handlerAll(handleClick, onClick)}>
        <Checkbox
          checked={checked}
          disabled={node.disabled}
          indeterminate={indeterminate}
          onChange={(e) => handleChange(e.target.checked)}
        >
          {children}
        </Checkbox>
      </styled.div>
    )
  },
  "branchCheckbox",
)()

export interface TreeItemProps extends HTMLStyledProps<"li"> {
  /**
   * The depth level of the item in the tree.
   */
  depth?: number
  /**
   * Whether the tree item is disabled.
   */
  disabled?: boolean
  /**
   * The node ID for the tree item.
   */
  nodeId?: string
  /**
   * Whether the tree item is selected.
   */
  selected?: boolean
}

export const TreeItem = withContext<"li", TreeItemProps>("li", "item")(
  undefined,
  ({ depth = 1, disabled, nodeId, selected, onClick, ...rest }) => {
    const { onSelect } = useTreeContext()

    const handleClick = useCallback(() => {
      if (!disabled && nodeId) {
        onSelect(nodeId)
      }
    }, [disabled, nodeId, onSelect])

    return {
      "data-disabled": dataAttr(disabled),
      "data-node-id": nodeId,
      "data-selected": dataAttr(selected),
      "--depth": depth,
      onClick: handlerAll(handleClick, onClick),
      ...rest,
    }
  },
)

export interface TreeItemIndicatorProps extends HTMLStyledProps {}

export const TreeItemIndicator = withContext<"div", TreeItemIndicatorProps>(
  "div",
  "itemIndicator",
)()

export interface TreeItemTextProps extends HTMLStyledProps<"span"> {}

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

export const TreeItemCheckbox = withContext<"div", TreeItemCheckboxProps>(
  ({ children, nodeId, onClick, ...rest }) => {
    const { checkedIds, nodes, onCheck } = useTreeContext()

    if (!nodeId) {
      return <styled.div {...rest}>{children}</styled.div>
    }

    const findNode = (
      searchNodes: TreeNode[],
      targetId: string,
    ): TreeNode | undefined => {
      for (const node of searchNodes) {
        if (node.id === targetId) return node
        if (node.children) {
          const found = findNode(node.children, targetId)
          if (found) return found
        }
      }
      return undefined
    }

    const node = findNode(nodes, nodeId)
    if (!node) {
      return <styled.div {...rest}>{children}</styled.div>
    }

    const checked = checkedIds.includes(nodeId)
    const indeterminate = isParentIndeterminate(node, checkedIds)

    const handleChange = (_checkedValue: boolean) => {
      onCheck(nodeId)
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
    }

    return (
      <styled.div {...rest} onClick={handlerAll(handleClick, onClick)}>
        <Checkbox
          checked={checked}
          disabled={node.disabled}
          indeterminate={indeterminate}
          onChange={(e) => handleChange(e.target.checked)}
        >
          {children}
        </Checkbox>
      </styled.div>
    )
  },
  "itemCheckbox",
)()

export interface TreeLabelProps extends HTMLStyledProps<"label"> {}

export const TreeLabel = withContext<"label", TreeLabelProps>(
  "label",
  "label",
)()

export interface TreeCollectionNameProps extends HTMLStyledProps {}

export const TreeCollectionName = withContext<"div", TreeCollectionNameProps>(
  "div",
  "collectionName",
)()
