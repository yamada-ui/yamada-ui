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
import { useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext, dataAttr } from "../../utils"
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

const [TreeContext, useTreeContext] = createContext<TreeContext>({
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
      nodes,
      selectionMode,
      onExpandedChange,
      onSelectionChange,
    })

    let finalExpandedIds = controlledExpandedIds ?? expandedIds
    const finalSelectedIds = controlledSelectedIds ?? selectedIds

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
        nodes,
        finalExpandedIds,
        finalSelectedIds,
        selectionMode,
        onToggleExpand,
        onSelect,
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
        return filteredChildren.map((node, index) => (
          <TreeNode
            key={collection.getNodeValue(node)}
            indexPath={[index]}
            node={node}
          />
        ))
      }
      return null
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
    collection,
    expandedIds,
    loadChildren,
    selectedIds,
    selectionMode,
    onLoadChildrenComplete,
    onLoadChildrenError,
    onSelect,
    onToggleExpand,
  } = useTreeContext()

  const { filterQuery } = useComponentContext()

  const [loading, setLoading] = useState(false)
  const [loadedChildren, setLoadedChildren] = useState<null | TreeNode[]>(null)

  const nodeId = collection ? collection.getNodeValue(node) : node.id
  const expanded = expandedIds.includes(nodeId)
  const selected = selectedIds.includes(nodeId)
  const hasChildren = node.children && node.children.length > 0
  const shouldLoadChildren = loadChildren && !hasChildren && !loadedChildren

  const indeterminate = isParentIndeterminate(node, selectedIds)
  const checked = selected || indeterminate

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

  const handleCheckboxChange = (_checked: boolean) => {
    onSelect(nodeId)
  }

  const childrenToRender = loadedChildren || node.children || []

  const nodeState: TreeNodeState = {
    disabled: !!node.disabled,
    expanded,
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
    nodeState,
    onSelect: () => onSelect(nodeId),
    onToggleExpand: handleToggleExpand,
  }

  if (render) {
    return <>{render(renderProps)}</>
  }

  if (nodeState.isBranch) {
    return (
      <TreeBranch {...branchProps}>
        <TreeBranchControl
          data-disabled={dataAttr(node.disabled)}
          data-expanded={dataAttr(expanded)}
          data-selected={dataAttr(
            selectionMode === "checkbox" ? false : selected,
          )}
          onClick={node.disabled ? undefined : handleToggleExpand}
        >
          <TreeBranchTrigger
            data-disabled={dataAttr(node.disabled)}
            onClick={node.disabled ? undefined : handleToggleExpand}
          >
            <TreeBranchIndicator data-expanded={dataAttr(expanded)}>
              {loading ? (
                <Loading.Oval />
              ) : expanded ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </TreeBranchIndicator>
            {selectionMode === "checkbox" ? (
              <TreeBranchCheckbox>
                <Checkbox
                  checked={checked}
                  disabled={node.disabled}
                  indeterminate={indeterminate}
                  onChange={(e) => handleCheckboxChange(e.target.checked)}
                >
                  <TreeBranchText>
                    {renderNodeName(node.name, filterQuery)}
                  </TreeBranchText>
                </Checkbox>
              </TreeBranchCheckbox>
            ) : (
              <TreeBranchText
                data-disabled={dataAttr(node.disabled)}
                onClick={() => !node.disabled && onSelect(nodeId)}
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
      <TreeItem data-node-id={nodeId}>
        <TreeItemCheckbox>
          <Checkbox
            checked={checked}
            disabled={node.disabled}
            indeterminate={indeterminate}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          >
            <TreeItemText>
              {renderNodeName(node.name, filterQuery)}
            </TreeItemText>
          </Checkbox>
        </TreeItemCheckbox>
      </TreeItem>
    ) : (
      <TreeItem
        data-disabled={dataAttr(node.disabled)}
        data-node-id={nodeId}
        onClick={() => !node.disabled && onSelect(nodeId)}
      >
        <TreeItemText>{renderNodeName(node.name, filterQuery)}</TreeItemText>
      </TreeItem>
    )
  }
}

export interface TreeBranchProps extends HTMLStyledProps<"li"> {}

export const TreeBranch = withContext<"li", TreeBranchProps>("li", "branch")()

export interface TreeBranchContentProps extends HTMLStyledProps<"ul"> {}

export const TreeBranchContent = withContext<"ul", TreeBranchContentProps>(
  "ul",
  "branchContent",
)()

export interface TreeBranchControlProps extends HTMLStyledProps {}

export const TreeBranchControl = withContext<"div", TreeBranchControlProps>(
  "div",
  "branchControl",
)({ "data-group": "" })

export interface TreeBranchTriggerProps extends HTMLStyledProps<"button"> {}

export const TreeBranchTrigger = withContext<"button", TreeBranchTriggerProps>(
  "button",
  "branchTrigger",
)()

export interface TreeBranchIndicatorProps extends HTMLStyledProps {}

export const TreeBranchIndicator = withContext<"div", TreeBranchIndicatorProps>(
  "div",
  "branchIndicator",
)()

export interface TreeBranchTextProps extends HTMLStyledProps<"span"> {}

export const TreeBranchText = withContext<"span", TreeBranchTextProps>(
  "span",
  "branchText",
)()

export interface TreeBranchCheckboxProps extends HTMLStyledProps {}

export const TreeBranchCheckbox = withContext<"div", TreeBranchCheckboxProps>(
  "div",
  "branchCheckbox",
)()

export interface TreeItemProps extends HTMLStyledProps<"li"> {}

export const TreeItem = withContext<"li", TreeItemProps>("li", "item")()

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

export interface TreeItemCheckboxProps extends HTMLStyledProps {}

export const TreeItemCheckbox = withContext<"div", TreeItemCheckboxProps>(
  "div",
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
