import type { TreeNode } from "./tree"
import { useCallback, useState } from "react"

// Helper functions for tree operations
const getAllDescendantIds = (node: TreeNode): string[] => {
  const descendants: string[] = []
  if (node.children) {
    for (const child of node.children) {
      descendants.push(child.id)
      descendants.push(...getAllDescendantIds(child))
    }
  }
  return descendants
}

// Helper function to find parent nodes that need to be updated
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

// Helper function to check if a parent should be fully selected
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

  // Fully selected if all descendants are selected
  return selectedDescendants.length === descendantIds.length
}

// Helper function to propagate selection changes up the tree
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
      // Remove parent if it's not fully selected
      const index = newSelectedIds.indexOf(parent.id)
      if (index > -1) {
        newSelectedIds.splice(index, 1)
      }
    }
  }

  return newSelectedIds
}

const findNodeById = (nodes: TreeNode[], id: string): TreeNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  return undefined
}

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

  // Use controlled values if provided, otherwise use internal state
  const finalExpandedIds = controlledExpandedIds ?? expandedIds
  const finalSelectedIds = controlledSelectedIds ?? selectedIds

  const onToggleExpand = useCallback(
    (nodeId: string) => {
      if (controlledExpandedIds !== undefined) {
        // Controlled mode - let parent handle state
        const newExpandedIds = finalExpandedIds.includes(nodeId)
          ? finalExpandedIds.filter((id) => id !== nodeId)
          : [...finalExpandedIds, nodeId]
        onExpandedChange?.(newExpandedIds)
      } else {
        // Uncontrolled mode - manage state internally
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
      // Controlled mode
      onExpandedChange?.(allBranchIds)
    } else {
      // Uncontrolled mode
      setExpandedIds(allBranchIds)
      onExpandedChange?.(allBranchIds)
    }
  }, [nodes, controlledExpandedIds, onExpandedChange])

  const onCollapseAll = useCallback(() => {
    if (controlledExpandedIds !== undefined) {
      // Controlled mode
      onExpandedChange?.([])
    } else {
      // Uncontrolled mode
      setExpandedIds([])
      onExpandedChange?.([])
    }
  }, [controlledExpandedIds, onExpandedChange])

  const onSelect = useCallback(
    (nodeId: string) => {
      if (controlledSelectedIds !== undefined) {
        // Controlled mode - use final values
        if (selectionMode === "checkbox") {
          const node = findNodeById(nodes, nodeId)
          if (!node) return

          const descendantIds = getAllDescendantIds(node)
          const allIdsToToggle = [nodeId, ...descendantIds]

          let newSelectedIds: string[]

          // Check if the node is currently selected
          const isCurrentlySelected = finalSelectedIds.includes(nodeId)

          if (isCurrentlySelected) {
            // Remove the node and all its descendants
            newSelectedIds = finalSelectedIds.filter(
              (id) => !allIdsToToggle.includes(id),
            )
          } else {
            // Add the node and all its descendants
            newSelectedIds = [...finalSelectedIds, ...allIdsToToggle]

            // Remove duplicates
            newSelectedIds = [...new Set(newSelectedIds)]
          }

          // Propagate selection changes up the tree
          newSelectedIds = propagateSelectionUp(nodes, newSelectedIds, nodeId)

          onSelectionChange?.(newSelectedIds)
        } else {
          const newSelectedIds =
            selectionMode === "single"
              ? [nodeId]
              : finalSelectedIds.includes(nodeId)
                ? finalSelectedIds.filter((id) => id !== nodeId)
                : [...finalSelectedIds, nodeId]

          onSelectionChange?.(newSelectedIds)
        }
      } else {
        // Uncontrolled mode - manage state internally
        if (selectionMode === "checkbox") {
          const node = findNodeById(nodes, nodeId)
          if (!node) return

          const descendantIds = getAllDescendantIds(node)
          const allIdsToToggle = [nodeId, ...descendantIds]

          let newSelectedIds: string[]

          // Check if the node is currently selected
          const isCurrentlySelected = selectedIds.includes(nodeId)

          if (isCurrentlySelected) {
            // Remove the node and all its descendants
            newSelectedIds = selectedIds.filter(
              (id) => !allIdsToToggle.includes(id),
            )
          } else {
            // Add the node and all its descendants
            newSelectedIds = [...selectedIds, ...allIdsToToggle]

            // Remove duplicates
            newSelectedIds = [...new Set(newSelectedIds)]
          }

          // Propagate selection changes up the tree
          newSelectedIds = propagateSelectionUp(nodes, newSelectedIds, nodeId)

          setSelectedIds(newSelectedIds)
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
