import type { TreeNode } from "./tree"
import { useCallback, useState } from "react"

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
  checkedIds?: string[]
  defaultChecked?: string[]
  defaultExpanded?: string[]
  defaultSelected?: string[]
  expandedIds?: string[]
  selectedIds?: string[]
  selectionMode?: "checkbox" | "multiple" | "single"
  onCheckedChange?: (checkedIds: string[]) => void
  onExpandedChange?: (expandedIds: string[]) => void
  onSelectionChange?: (selectedIds: string[]) => void
}

export interface UseTreeReturn {
  checkedIds: string[]
  expandedIds: string[]
  selectedIds: string[]
  onCheck: (nodeId: string) => void
  onCollapseAll: () => void
  onExpandAll: () => void
  onSelect: (nodeId: string) => void
  onToggleExpand: (nodeId: string) => void
}

export const useTree = ({
  checkedIds: controlledCheckedIds,
  defaultChecked = [],
  defaultExpanded = [],
  defaultSelected = [],
  expandedIds: controlledExpandedIds,
  nodes,
  selectedIds: controlledSelectedIds,
  selectionMode = "single",
  onCheckedChange,
  onExpandedChange,
  onSelectionChange,
}: UseTreeProps): UseTreeReturn => {
  const [checkedIds, setCheckedIds] = useState(defaultChecked)
  const [expandedIds, setExpandedIds] = useState(defaultExpanded)
  const [selectedIds, setSelectedIds] = useState(defaultSelected)

  const finalCheckedIds = controlledCheckedIds ?? checkedIds
  const finalExpandedIds = controlledExpandedIds ?? expandedIds
  const finalSelectedIds = controlledSelectedIds ?? selectedIds

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
    },
    [
      finalSelectedIds,
      selectedIds,
      controlledSelectedIds,
      selectionMode,
      onSelectionChange,
    ],
  )

  const onCheck = useCallback(
    (nodeId: string) => {
      const node = findNodeById(nodes, nodeId)
      if (!node) return

      const descendantIds = getAllDescendantIds(node)
      const allIdsToToggle = [nodeId, ...descendantIds]

      if (controlledCheckedIds !== undefined) {
        let newCheckedIds: string[]

        const isCurrentlyChecked = finalCheckedIds.includes(nodeId)

        if (isCurrentlyChecked) {
          newCheckedIds = finalCheckedIds.filter(
            (id) => !allIdsToToggle.includes(id),
          )
        } else {
          newCheckedIds = [...finalCheckedIds, ...allIdsToToggle]
          newCheckedIds = [...new Set(newCheckedIds)]
        }

        newCheckedIds = propagateSelectionUp(nodes, newCheckedIds, nodeId)
        onCheckedChange?.(newCheckedIds)
      } else {
        let newCheckedIds: string[]

        const isCurrentlyChecked = checkedIds.includes(nodeId)

        if (isCurrentlyChecked) {
          newCheckedIds = checkedIds.filter(
            (id) => !allIdsToToggle.includes(id),
          )
        } else {
          newCheckedIds = [...checkedIds, ...allIdsToToggle]
          newCheckedIds = [...new Set(newCheckedIds)]
        }

        newCheckedIds = propagateSelectionUp(nodes, newCheckedIds, nodeId)
        setCheckedIds(newCheckedIds)
        onCheckedChange?.(newCheckedIds)
      }
    },
    [finalCheckedIds, checkedIds, controlledCheckedIds, nodes, onCheckedChange],
  )

  return {
    checkedIds: finalCheckedIds,
    expandedIds: finalExpandedIds,
    selectedIds: finalSelectedIds,
    onCheck,
    onCollapseAll,
    onExpandAll,
    onSelect,
    onToggleExpand,
  }
}
