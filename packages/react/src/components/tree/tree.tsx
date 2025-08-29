"use client"

import type { FC, ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { TreeStyle } from "./tree.style"
import React, { useCallback, useMemo, useState } from "react"
import { createSlotComponent, styled } from "../../core"
import { createContext } from "../../utils"
import { treeStyle } from "./tree.style"

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
   * Whether the node is expanded.
   */
  isExpanded?: boolean
  /**
   * Whether the node is selected.
   */
  isSelected?: boolean
}

interface TreeContext {
  expandedIds: string[]
  nodes: TreeNode[]
  selectedIds: string[]
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
}

const [TreeContext, useTreeContext] = createContext<TreeContext>({
  name: "TreeContext",
})

interface ComponentContext
  extends Pick<
    TreeRootProps,
    "defaultExpanded" | "defaultSelected" | "nodes"
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
   * The default expanded node IDs.
   */
  defaultExpanded?: string[]
  /**
   * The default selected node IDs.
   */
  defaultSelected?: string[]
  /**
   * The tree nodes to render.
   */
  nodes?: TreeNode[]
  /**
   * The selection mode.
   * @default "single"
   */
  selectionMode?: "multiple" | "single"
  /**
   * Callback when a node is expanded/collapsed.
   */
  onExpandedChange?: (expandedIds: string[]) => void
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
    defaultExpanded = [],
    defaultSelected = [],
    nodes = [],
    selectionMode = "single",
    onExpandedChange,
    onSelectionChange,
    ...rest
  }) => {
    const { expandedIds, selectedIds, onSelect, onToggleExpand } = useTree({
      defaultExpanded,
      defaultSelected,
      nodes,
      selectionMode,
      onExpandedChange,
      onSelectionChange,
    })

    const componentContext = useMemo(
      () => ({ defaultExpanded, defaultSelected, nodes }),
      [nodes, defaultExpanded, defaultSelected],
    )

    const treeContext = useMemo(
      () => ({
        expandedIds,
        nodes,
        selectedIds,
        onSelect,
        onToggleExpand,
      }),
      [nodes, expandedIds, selectedIds, onToggleExpand, onSelect],
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
  const { nodes } = useComponentContext()

  const computedChildren = useMemo(() => {
    if (children) {
      return children
    } else {
      return nodes?.map((node, index) => (
        <TreeNode key={node.id || index} node={node} />
      ))
    }
  }, [children, nodes])

  return <styled.ul {...rest}>{computedChildren}</styled.ul>
}, "tree")()

export interface TreeNodeProps {
  /**
   * The tree node to render.
   */
  node: TreeNode
  /**
   * The indent guide element.
   */
  indentGuide?: ReactNode
  /**
   * Props for the tree branch content element.
   */
  branchContentProps?: TreeBranchContentProps
  /**
   * Props for the tree branch element.
   */
  branchProps?: TreeBranchProps
}

export const TreeNode: FC<TreeNodeProps> = ({
  indentGuide,
  node,
  branchContentProps,
  branchProps,
}) => {
  const { expandedIds, selectedIds, onSelect, onToggleExpand } =
    useTreeContext()
  const isExpanded = expandedIds.includes(node.id)
  const isSelected = selectedIds.includes(node.id)
  const hasChildren = node.children && node.children.length > 0

  if (hasChildren) {
    return (
      <TreeBranch {...branchProps}>
        <TreeBranchControl
          data-expanded={isExpanded}
          onClick={() => onToggleExpand(node.id)}
        >
          <TreeBranchTrigger onClick={() => onToggleExpand(node.id)}>
            <TreeBranchIndicator data-expanded={isExpanded}>
              ▶
            </TreeBranchIndicator>
            <TreeBranchText onClick={() => onSelect(node.id)}>
              {node.name}
            </TreeBranchText>
          </TreeBranchTrigger>
        </TreeBranchControl>
        <TreeBranchContent {...branchContentProps}>
          {indentGuide}
          {isExpanded
            ? node.children?.map((child) => (
                <TreeNode
                  key={child.id}
                  indentGuide={indentGuide}
                  node={child}
                />
              ))
            : null}
        </TreeBranchContent>
      </TreeBranch>
    )
  } else {
    return (
      <TreeItem data-selected={isSelected} onClick={() => onSelect(node.id)}>
        <TreeItemText>{node.name}</TreeItemText>
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
)()

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

export interface TreeBranchIndentGuideProps extends HTMLStyledProps {}

export const TreeBranchIndentGuide = withContext<
  "div",
  TreeBranchIndentGuideProps
>("div", "branchIndentGuide")()

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

export interface TreeLabelProps extends HTMLStyledProps<"label"> {}

export const TreeLabel = withContext<"label", TreeLabelProps>(
  "label",
  "label",
)()

// Hook implementations
export interface UseTreeProps {
  nodes: TreeNode[]
  defaultExpanded?: string[]
  defaultSelected?: string[]
  selectionMode?: "multiple" | "single"
  onExpandedChange?: (expandedIds: string[]) => void
  onSelectionChange?: (selectedIds: string[]) => void
}

export interface UseTreeReturn {
  expandedIds: string[]
  selectedIds: string[]
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
}

export const useTree = ({
  defaultExpanded = [],
  defaultSelected = [],
  selectionMode = "single",
  onExpandedChange,
  onSelectionChange,
}: UseTreeProps): UseTreeReturn => {
  const [expandedIds, setExpandedIds] = useState(defaultExpanded)
  const [selectedIds, setSelectedIds] = useState(defaultSelected)

  const onToggleExpand = useCallback(
    (nodeId: string) => {
      const newExpandedIds = expandedIds.includes(nodeId)
        ? expandedIds.filter((id) => id !== nodeId)
        : [...expandedIds, nodeId]

      setExpandedIds(newExpandedIds)
      onExpandedChange?.(newExpandedIds)
    },
    [expandedIds, onExpandedChange],
  )

  const onSelect = useCallback(
    (nodeId: string) => {
      const newSelectedIds =
        selectionMode === "single"
          ? [nodeId]
          : selectedIds.includes(nodeId)
            ? selectedIds.filter((id) => id !== nodeId)
            : [...selectedIds, nodeId]

      setSelectedIds(newSelectedIds)
      onSelectionChange?.(newSelectedIds)
    },
    [selectedIds, selectionMode, onSelectionChange],
  )

  return {
    expandedIds,
    selectedIds,
    onSelect,
    onToggleExpand,
  }
}
