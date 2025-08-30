"use client"

import type { FC, ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
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

export interface TreeNode {
  /**
   * The unique identifier for the node.
   */
  id: string
  /**
   * The display name of the node.
   */
  name: string
  /**
   * The children nodes.
   */
  children?: TreeNode[]
  /**
   * Additional data for the node.
   */
  data?: {
    [key: string]: any
  }
  /**
   * Whether the node is disabled.
   */
  disabled?: boolean
  /**
   * Whether the node is expanded.
   */
  expanded?: boolean
  /**
   * Whether the node is selected.
   */
  selected?: boolean
}

export interface TreeCollection {
  /**
   * Get all descendant nodes of a given node.
   */
  getDescendants: (id: string) => TreeNode[]
  /**
   * Get a node by its id.
   */
  getNode: (id: string) => TreeNode | undefined
  /**
   * Get the children of a node.
   */
  getNodeChildren: (node: TreeNode) => TreeNode[]
  /**
   * Get the level/depth of a node.
   */
  getNodeLevel: (id: string) => number
  /**
   * Get all nodes in the collection.
   */
  getNodes: () => TreeNode[]
  /**
   * Get the string representation of a node.
   */
  getNodeString: (node: TreeNode) => string
  /**
   * Get the value of a node.
   */
  getNodeValue: (node: TreeNode) => string
  /**
   * Get the parent node of a given node.
   */
  getParentNode: (id: string) => TreeNode | undefined
  /**
   * Get the root node.
   */
  getRootNode: () => TreeNode
  /**
   * Check if a node is a branch (has children).
   */
  isBranch: (node: TreeNode) => boolean
  /**
   * Remove a node at the specified index path and return a new collection.
   */
  remove: (indexPath: number[]) => TreeCollection
  /**
   * Replace a node at the specified index path and return a new collection.
   */
  replace: (indexPath: number[], node: TreeNode) => TreeCollection
}

export interface CreateTreeCollectionOptions {
  /**
   * Function to convert a node to its string representation.
   */
  nodeToString: (node: TreeNode) => string
  /**
   * Function to convert a node to its value.
   */
  nodeToValue: (node: TreeNode) => string
  /**
   * The root node of the tree.
   */
  rootNode: TreeNode
}

export const createTreeCollection = ({
  nodeToString,
  nodeToValue,
  rootNode,
}: CreateTreeCollectionOptions): TreeCollection => {
  const nodeMap = new Map<string, TreeNode>()
  const parentMap = new Map<string, string>()

  const buildMaps = (node: TreeNode, parentId?: string) => {
    nodeMap.set(nodeToValue(node), node)
    if (parentId) {
      parentMap.set(nodeToValue(node), parentId)
    }
    if (node.children) {
      node.children.forEach((child) => buildMaps(child, nodeToValue(node)))
    }
  }

  buildMaps(rootNode)

  const getNodes = (): TreeNode[] => {
    return Array.from(nodeMap.values())
  }

  const getNode = (id: string): TreeNode | undefined => {
    return nodeMap.get(id)
  }

  const getRootNode = (): TreeNode => {
    return rootNode
  }

  const getParentNode = (id: string): TreeNode | undefined => {
    const parentId = parentMap.get(id)
    return parentId ? nodeMap.get(parentId) : undefined
  }

  const getDescendants = (id: string): TreeNode[] => {
    const node = nodeMap.get(id)
    if (!node?.children) return []

    const descendants: TreeNode[] = []
    const collectDescendants = (children: TreeNode[]) => {
      children.forEach((child) => {
        descendants.push(child)
        if (child.children) {
          collectDescendants(child.children)
        }
      })
    }
    collectDescendants(node.children)
    return descendants
  }

  const getNodeValue = (node: TreeNode): string => {
    return nodeToValue(node)
  }

  const getNodeString = (node: TreeNode): string => {
    return nodeToString(node)
  }

  const getNodeChildren = (node: TreeNode): TreeNode[] => {
    return node.children || []
  }

  const isBranch = (node: TreeNode): boolean => {
    return !!(node.children && node.children.length > 0)
  }

  const getNodeLevel = (id: string): number => {
    let level = 0
    let currentId = id
    while (parentMap.has(currentId)) {
      level++
      currentId = parentMap.get(currentId)!
    }
    return level
  }

  const remove = (indexPath: number[]): TreeCollection => {
    if (indexPath.length === 0) {
      return createTreeCollection({
        nodeToString,
        nodeToValue,
        rootNode,
      })
    }

    const newRootNode = { ...rootNode }

    const removeNodeAtPath = (
      node: TreeNode,
      path: number[],
      depth = 0,
    ): null | TreeNode => {
      if (depth === path.length - 1) {
        const indexToRemove = path[depth]!
        if (
          node.children &&
          indexToRemove >= 0 &&
          indexToRemove < node.children.length
        ) {
          const newChildren = node.children.filter(
            (_, index) => index !== indexToRemove,
          )
          return {
            ...node,
            children: newChildren.length > 0 ? newChildren : undefined,
          }
        }
        return node
      }

      if (node.children) {
        const index = path[depth]!
        if (index >= 0 && index < node.children.length) {
          const newChildren = [...node.children]
          const child = newChildren[index]
          if (child) {
            const result = removeNodeAtPath(child, path, depth + 1)
            if (result === null) {
              newChildren.splice(index, 1)
            } else {
              newChildren[index] = result
            }
            return {
              ...node,
              children: newChildren.length > 0 ? newChildren : undefined,
            }
          }
        }
      }

      return node
    }

    const updatedRootNode = removeNodeAtPath(newRootNode, indexPath)
    if (!updatedRootNode) {
      return createTreeCollection({
        nodeToString,
        nodeToValue,
        rootNode: { id: "ROOT", name: "", children: [] },
      })
    }

    return createTreeCollection({
      nodeToString,
      nodeToValue,
      rootNode: updatedRootNode,
    })
  }

  const replace = (indexPath: number[], newNode: TreeNode): TreeCollection => {
    if (indexPath.length === 0) {
      return createTreeCollection({
        nodeToString,
        nodeToValue,
        rootNode: newNode,
      })
    }

    const newRootNode = { ...rootNode }

    const replaceNodeAtPath = (
      node: TreeNode,
      path: number[],
      depth = 0,
    ): TreeNode => {
      if (depth === path.length - 1) {
        const indexToReplace = path[depth]!
        if (
          node.children &&
          indexToReplace >= 0 &&
          indexToReplace < node.children.length
        ) {
          const newChildren = [...node.children]
          newChildren[indexToReplace] = newNode
          return { ...node, children: newChildren }
        }
        return node
      }

      if (node.children) {
        const index = path[depth]!
        if (index >= 0 && index < node.children.length) {
          const newChildren = [...node.children]
          const child = newChildren[index]
          if (child) {
            newChildren[index] = replaceNodeAtPath(child, path, depth + 1)
            return { ...node, children: newChildren }
          }
        }
      }

      return node
    }

    const updatedRootNode = replaceNodeAtPath(newRootNode, indexPath)

    return createTreeCollection({
      nodeToString,
      nodeToValue,
      rootNode: updatedRootNode,
    })
  }

  return {
    getDescendants,
    getNode,
    getNodeChildren,
    getNodeLevel,
    getNodes,
    getNodeString,
    getNodeValue,
    getParentNode,
    getRootNode,
    isBranch,
    remove,
    replace,
  }
}

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

interface TreeItem extends TreeNode {
  /**
   * Props for the tree branch content element.
   */
  branchContentProps?: TreeBranchContentProps
  /**
   * Props for the tree branch indicator element.
   */
  branchIndicatorProps?: TreeBranchIndicatorProps
  /**
   * Props for the tree branch element.
   */
  branchProps?: TreeBranchProps
  /**
   * Props for the tree branch text element.
   */
  branchTextProps?: TreeBranchTextProps
  /**
   * Props for the tree branch trigger element.
   */
  branchTriggerProps?: TreeBranchTriggerProps
  /**
   * Props for the tree item element.
   */
  itemProps?: TreeItemProps
}

export interface TreeRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    ThemeProps<TreeStyle> {
  /**
   * The tree collection.
   */
  collection?: TreeCollection
  /**
   * The default expanded node IDs.
   */
  defaultExpanded?: string[]
  /**
   * The default selected node IDs.
   */
  defaultSelected?: string[]
  /**
   * The controlled expanded node IDs.
   */
  expandedIds?: string[]
  /**
   * Function to filter nodes based on a search query.
   */
  filterNodes?: (node: TreeNode, query: string) => boolean
  /**
   * The current filter query string.
   */
  filterQuery?: string
  /**
   * Function to load children for a node asynchronously.
   */
  loadChildren?: (node: TreeNode) => Promise<TreeNode[]>
  /**
   * The tree nodes to render.
   */
  nodes?: TreeNode[]
  /**
   * The controlled selected node IDs.
   */
  selectedIds?: string[]
  /**
   * The selection mode.
   * @default "single"
   */
  selectionMode?: "checkbox" | "multiple" | "single"
  /**
   * Callback when a node is expanded/collapsed.
   */
  onExpandedChange?: (expandedIds: string[]) => void
  /**
   * Callback when loading children completes.
   */
  onLoadChildrenComplete?: (node: TreeNode, children: TreeNode[]) => void
  /**
   * Callback when loading children fails.
   */
  onLoadChildrenError?: (node: TreeNode, error: Error) => void
  /**
   * Callback when a node is selected.
   */
  onSelectionChange?: (selectedIds: string[]) => void
}

const { ComponentContext, useComponentContext, withContext, withProvider } =
  createSlotComponent<TreeRootProps, TreeStyle, ComponentContext>(
    "tree",
    treeStyle,
  )

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

export interface TreeNodeProps {
  /**
   * The tree node to render.
   */
  node: TreeNode
  /**
   * The index path of the node in the tree.
   */
  indexPath?: number[]
  /**
   * Render function for custom node rendering.
   */
  render?: (props: TreeNodeRenderProps) => ReactNode
  /**
   * Props for the tree branch content element.
   */
  branchContentProps?: TreeBranchContentProps
  /**
   * Props for the tree branch element.
   */
  branchProps?: TreeBranchProps
}

export interface TreeNodeRenderProps {
  /**
   * The index path of the node.
   */
  indexPath: number[]
  /**
   * The tree node.
   */
  node: TreeNode
  /**
   * The node state information.
   */
  nodeState: TreeNodeState
  /**
   * The children content to render if the node is a branch and expanded.
   * This is automatically handled for custom render functions.
   */
  children?: ReactNode
  /**
   * Function to select the node.
   */
  onSelect?: () => void
  /**
   * Function to toggle the expand state of the node.
   */
  onToggleExpand?: () => void
}

export interface TreeNodeState {
  /**
   * Whether the node is disabled.
   */
  disabled: boolean
  /**
   * Whether the node is expanded.
   */
  expanded: boolean
  /**
   * Whether the node is a branch (has children).
   */
  isBranch: boolean
  /**
   * Whether the node is loading children.
   */
  loading: boolean
  /**
   * Whether the node is selected.
   */
  selected: boolean
}

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
          <TreeItemIndicator />
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
        <TreeItemIndicator />
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
