import type { TreeNode } from "./tree"
import { useCallback, useMemo, useState } from "react"
import { useComponentContext } from "./tree"
import {
  findNodeById,
  getAllDescendantIds,
  isParentIndeterminate,
} from "./tree-utils"

/**
 * Finds all parent nodes of a given node ID.
 *
 * @param nodes - Array of tree nodes to search
 * @param targetId - The target node ID to find parents for
 * @returns Array of parent nodes
 */
const findParentNodes = (nodes: TreeNode[], targetId: string): TreeNode[] => {
  const parents: TreeNode[] = []

  const search = (searchNodes: TreeNode[], targetId: string): boolean => {
    for (const node of searchNodes) {
      if (node.id === targetId) {
        return true
      }
      if (node.children) {
        if (search(node.children, targetId)) {
          parents.push(node)
          return true
        }
      }
    }
    return false
  }

  search(nodes, targetId)
  return parents
}

/**
 * Checks if a parent node is fully selected based on its children.
 *
 * @param node - The parent node to check
 * @param selectedIds - Array of currently selected node IDs
 * @returns True if all descendants are selected
 */
const isParentFullySelected = (
  node: TreeNode,
  selectedIds: string[],
): boolean => {
  if (!node.children || node.children.length === 0) {
    return selectedIds.includes(node.id)
  }

  const descendantIds = getAllDescendantIds(node)
  const selectedDescendants = descendantIds.filter((id) =>
    selectedIds.includes(id),
  )

  return selectedDescendants.length === descendantIds.length
}

/**
 * Propagates selection state upward in the tree hierarchy.
 *
 * @param nodes - Array of tree nodes
 * @param selectedIds - Current array of selected node IDs
 * @param nodeId - The node ID that was toggled
 * @returns Updated array of selected node IDs
 */
const propagateSelectionUp = (
  nodes: TreeNode[],
  selectedIds: string[],
  nodeId: string,
): string[] => {
  const newSelectedIds = [...selectedIds]
  const parents = findParentNodes(nodes, nodeId)

  for (const parent of parents) {
    if (isParentFullySelected(parent, newSelectedIds)) {
      if (!newSelectedIds.includes(parent.id)) {
        newSelectedIds.push(parent.id)
      }
    } else {
      const index = newSelectedIds.indexOf(parent.id)
      if (index > -1) {
        newSelectedIds.splice(index, 1)
      }
    }
  }

  return newSelectedIds
}

/**
 * Gets all node IDs that are branches (have children).
 *
 * @param nodes - Array of tree nodes to search
 * @returns Array of branch node IDs
 */
const getAllBranchIds = (nodes: TreeNode[]): string[] => {
  const branchIds: string[] = []
  for (const node of nodes) {
    if (node.children && node.children.length > 0) {
      branchIds.push(node.id)
      branchIds.push(...getAllBranchIds(node.children))
    }
  }
  return branchIds
}

export interface UseTreeProps {
  nodes: TreeNode[]
  defaultExpanded?: string[]
  defaultSelected?: string[]
  expandedIds?: string[]
  selectedIds?: string[]
  selectionMode?: "checkbox" | "multiple" | "single"
  onExpandedChange?: (expandedIds: string[]) => void
  onSelectionChange?: (selectedIds: string[]) => void
}

export interface UseTreeReturn {
  expandedIds: string[]
  selectedIds: string[]
  onCollapseAll: () => void
  onExpandAll: () => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
}

/**
 * Hook for managing tree component state and interactions.
 *
 * @param props - Configuration options for the tree hook
 * @returns Tree state and interaction handlers
 */
export const useTree = ({
  defaultExpanded = [],
  defaultSelected = [],
  expandedIds: controlledExpandedIds,
  nodes,
  selectedIds: controlledSelectedIds,
  selectionMode = "single",
  onExpandedChange,
  onSelectionChange,
}: UseTreeProps): UseTreeReturn => {
  const [expandedIds, setExpandedIds] = useState(defaultExpanded)
  const [selectedIds, setSelectedIds] = useState(defaultSelected)

  const finalExpandedIds = useMemo(
    () => controlledExpandedIds ?? expandedIds,
    [controlledExpandedIds, expandedIds],
  )

  const finalSelectedIds = useMemo(
    () => controlledSelectedIds ?? selectedIds,
    [controlledSelectedIds, selectedIds],
  )

  const onToggleExpand = useCallback(
    (nodeId: string) => {
      if (controlledExpandedIds !== undefined) {
        const newExpandedIds = finalExpandedIds.includes(nodeId)
          ? finalExpandedIds.filter((id) => id !== nodeId)
          : [...finalExpandedIds, nodeId]
        onExpandedChange?.(newExpandedIds)
      } else {
        const newExpandedIds = expandedIds.includes(nodeId)
          ? expandedIds.filter((id) => id !== nodeId)
          : [...expandedIds, nodeId]
        setExpandedIds(newExpandedIds)
        onExpandedChange?.(newExpandedIds)
      }
    },
    [finalExpandedIds, expandedIds, controlledExpandedIds, onExpandedChange],
  )

  const onExpandAll = useCallback(() => {
    const allBranchIds = getAllBranchIds(nodes)
    if (controlledExpandedIds !== undefined) {
      onExpandedChange?.(allBranchIds)
    } else {
      setExpandedIds(allBranchIds)
      onExpandedChange?.(allBranchIds)
    }
  }, [nodes, controlledExpandedIds, onExpandedChange])

  const onCollapseAll = useCallback(() => {
    if (controlledExpandedIds !== undefined) {
      onExpandedChange?.([])
    } else {
      setExpandedIds([])
      onExpandedChange?.([])
    }
  }, [controlledExpandedIds, onExpandedChange])

  const onSelect = useCallback(
    (nodeId: string) => {
      if (selectionMode === "checkbox") {
        // Handle hierarchical selection for checkbox mode
        const node = findNodeById(nodes, nodeId)
        if (!node) return

        const descendantIds = getAllDescendantIds(node)
        const allIdsToToggle = [nodeId, ...descendantIds]

        if (controlledSelectedIds !== undefined) {
          let newSelectedIds: string[]

          const isCurrentlySelected = finalSelectedIds.includes(nodeId)

          if (isCurrentlySelected) {
            const idsToToggleSet = new Set(allIdsToToggle)
            newSelectedIds = finalSelectedIds.filter(
              (id) => !idsToToggleSet.has(id),
            )
          } else {
            newSelectedIds = [...finalSelectedIds, ...allIdsToToggle]
            newSelectedIds = [...new Set(newSelectedIds)]
          }

          newSelectedIds = propagateSelectionUp(nodes, newSelectedIds, nodeId)
          onSelectionChange?.(newSelectedIds)
        } else {
          let newSelectedIds: string[]

          const isCurrentlySelected = selectedIds.includes(nodeId)

          if (isCurrentlySelected) {
            const idsToToggleSet = new Set(allIdsToToggle)
            newSelectedIds = selectedIds.filter((id) => !idsToToggleSet.has(id))
          } else {
            newSelectedIds = [...selectedIds, ...allIdsToToggle]
            newSelectedIds = [...new Set(newSelectedIds)]
          }

          newSelectedIds = propagateSelectionUp(nodes, newSelectedIds, nodeId)
          setSelectedIds(newSelectedIds)
          onSelectionChange?.(newSelectedIds)
        }
      } else {
        // Handle flat selection for single/multiple modes
        if (controlledSelectedIds !== undefined) {
          const newSelectedIds =
            selectionMode === "single"
              ? [nodeId]
              : finalSelectedIds.includes(nodeId)
                ? finalSelectedIds.filter((id) => id !== nodeId)
                : [...finalSelectedIds, nodeId]

          onSelectionChange?.(newSelectedIds)
        } else {
          const newSelectedIds =
            selectionMode === "single"
              ? [nodeId]
              : selectedIds.includes(nodeId)
                ? selectedIds.filter((id) => id !== nodeId)
                : [...selectedIds, nodeId]

          setSelectedIds(newSelectedIds)
          onSelectionChange?.(newSelectedIds)
        }
      }
    },
    [
      finalSelectedIds,
      selectedIds,
      controlledSelectedIds,
      selectionMode,
      nodes,
      onSelectionChange,
    ],
  )

  return {
    expandedIds: finalExpandedIds,
    selectedIds: finalSelectedIds,
    onCollapseAll,
    onExpandAll,
    onSelect,
    onToggleExpand,
  }
}

/**
 * Custom hook for handling tree item selection logic.
 *
 * @param nodeId - The node ID to handle selection for
 * @param disabled - Whether the node is disabled
 * @returns Object with selection handler
 */
export const useTreeSelection = (
  nodeId: string | undefined,
  disabled = false,
) => {
  const { onSelect } = useComponentContext()

  const handleSelection = useCallback(() => {
    if (!disabled && nodeId) {
      // Unified selection handler - selection mode determines behavior in the hook
      onSelect(nodeId)
    }
  }, [disabled, nodeId, onSelect])

  return { handleSelection }
}

/**
 * Custom hook to optimize node lookups and state calculations.
 *
 * @param nodeId - The node ID to get state for
 * @returns Node state and metadata
 */
export const useNodeState = (nodeId: string | undefined) => {
  const { expandedIds, nodes, selectedIds, selectionMode } =
    useComponentContext()

  return useMemo(() => {
    if (!nodeId) {
      return {
        expanded: false,
        indeterminate: false,
        node: undefined,
        selected: false,
      }
    }

    const node = findNodeById(nodes, nodeId)
    if (!node) {
      return {
        expanded: false,
        indeterminate: false,
        node: undefined,
        selected: false,
      }
    }

    const expanded = expandedIds.includes(nodeId)

    let selected = false
    if (selectionMode === "checkbox") {
      const nodeHasChildren = node.children && node.children.length > 0
      if (nodeHasChildren && node.children) {
        selected = node.children.every((child) =>
          selectedIds.includes(child.id),
        )
      } else {
        selected = selectedIds.includes(nodeId)
      }
    } else {
      selected = selectedIds.includes(nodeId)
    }

    const indeterminate = isParentIndeterminate(node, selectedIds)

    return { expanded, indeterminate, node, selected }
  }, [nodeId, nodes, selectedIds, expandedIds, selectionMode])
}
