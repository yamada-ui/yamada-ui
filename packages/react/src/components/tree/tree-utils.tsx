import type { ReactNode } from "react"
import type { TreeNode } from "./tree"
import { Highlight } from "../highlight"

/**
 * Helper function to filter tree nodes based on a query.
 */
export const filterTreeNodes = (
  nodes: TreeNode[],
  filterFn?: (node: TreeNode, query: string) => boolean,
  query?: string,
): TreeNode[] => {
  if (!filterFn || !query || query.trim() === "") {
    return nodes
  }

  const filterNode = (node: TreeNode): null | TreeNode => {
    const matches = filterFn(node, query)
    const filteredChildren = node.children
      ? node.children
          .map(filterNode)
          .filter((child): child is TreeNode => child !== null)
      : []

    if (matches || filteredChildren.length > 0) {
      return {
        ...node,
        children: filteredChildren.length > 0 ? filteredChildren : undefined,
      }
    }

    return null
  }

  return nodes.map(filterNode).filter((node): node is TreeNode => node !== null)
}

/**
 * Helper function to render node name with highlighting.
 */
export const renderNodeName = (
  name: string,
  filterQuery?: string,
): ReactNode => {
  if (filterQuery?.trim()) {
    return (
      <Highlight fragment query={filterQuery}>
        {name}
      </Highlight>
    )
  }
  return name
}

/**
 * Helper function to get all node IDs that should be expanded for filtered results.
 */
export const getExpandedIdsForFilteredNodes = (
  nodes: TreeNode[],
  filterFn?: (node: TreeNode, query: string) => boolean,
  query?: string,
): string[] => {
  if (!filterFn || !query || query.trim() === "") {
    return []
  }

  const expandedIds = new Set<string>()

  const collectParentIds = (node: TreeNode, allNodes: TreeNode[]): void => {
    // Find this node in the original tree to get its path
    const findNodePath = (
      searchNodes: TreeNode[],
      targetId: string,
      path: string[] = [],
    ): null | string[] => {
      for (const n of searchNodes) {
        if (n.id === targetId) {
          return [...path, n.id]
        }
        if (n.children) {
          const childPath = findNodePath(n.children, targetId, [...path, n.id])
          if (childPath) return childPath
        }
      }
      return null
    }

    const path = findNodePath(allNodes, node.id)
    if (path) {
      // Add all parent IDs (excluding the node itself)
      for (let i = 0; i < path.length - 1; i++) {
        expandedIds.add(path[i]!)
      }
    }
  }

  const collectMatchingNodes = (searchNodes: TreeNode[]): void => {
    for (const node of searchNodes) {
      if (filterFn(node, query)) {
        collectParentIds(node, allNodes)
      }
      if (node.children) {
        collectMatchingNodes(node.children)
      }
    }
  }

  const allNodes = nodes
  collectMatchingNodes(nodes)

  return Array.from(expandedIds)
}

/**
 * Helper function to get all descendant node IDs.
 */
export const getAllDescendantIds = (node: TreeNode): string[] => {
  const descendants: string[] = []
  if (node.children) {
    for (const child of node.children) {
      descendants.push(child.id)
      descendants.push(...getAllDescendantIds(child))
    }
  }
  return descendants
}

/**
 * Helper function to check if a parent should be indeterminate.
 */
export const isParentIndeterminate = (
  node: TreeNode,
  selectedIds: string[],
): boolean => {
  if (!node.children || node.children.length === 0) {
    return false
  }

  const descendantIds = getAllDescendantIds(node)
  const selectedDescendants = descendantIds.filter((id) =>
    selectedIds.includes(id),
  )

  // Indeterminate if some but not all descendants are selected
  return (
    selectedDescendants.length > 0 &&
    selectedDescendants.length < descendantIds.length
  )
}
