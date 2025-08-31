import type { ReactNode } from "react"
import type { TreeNode } from "./tree"
import { Highlight } from "../highlight"

/**
 * Filters tree nodes based on a search query.
 *
 * @param nodes - Array of tree nodes to filter
 * @param filterFn - Function to determine if a node matches the query
 * @param query - Search query string
 * @returns Filtered array of tree nodes
 */
export const filterTreeNodes = (
  nodes: TreeNode[],
  filterFn?: (node: TreeNode, query: string) => boolean,
  query?: string,
): TreeNode[] => {
  if (!filterFn || !query || query.trim() === "") {
    return nodes
  }

  const filterNodeRecursively = (node: TreeNode): null | TreeNode => {
    const matches = filterFn(node, query)
    const filteredChildren = node.children
      ? node.children
          .map(filterNodeRecursively)
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

  return nodes
    .map(filterNodeRecursively)
    .filter((node): node is TreeNode => node !== null)
}

/**
 * Renders a node name with highlighting for search matches.
 *
 * @param name - The node name to render
 * @param filterQuery - The search query for highlighting
 * @returns React node with or without highlighting
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
 * Gets all node IDs that should be expanded to show filtered search results.
 *
 * @param nodes - Array of tree nodes
 * @param filterFn - Function to determine if a node matches the query
 * @param query - Search query string
 * @returns Array of node IDs that should be expanded
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
  const nodeMap = new Map<string, TreeNode>()

  const buildNodeMap = (searchNodes: TreeNode[]): void => {
    for (const node of searchNodes) {
      nodeMap.set(node.id, node)
      if (node.children) {
        buildNodeMap(node.children)
      }
    }
  }
  buildNodeMap(nodes)

  const matchingNodeIds: string[] = []
  const collectMatchingNodes = (searchNodes: TreeNode[]): void => {
    for (const node of searchNodes) {
      if (filterFn(node, query)) {
        matchingNodeIds.push(node.id)
      }
      if (node.children) {
        collectMatchingNodes(node.children)
      }
    }
  }
  collectMatchingNodes(nodes)

  const findParentIds = (nodeId: string): string[] => {
    const parents: string[] = []
    let currentNode = nodeMap.get(nodeId)

    while (currentNode) {
      let parent: TreeNode | undefined
      const findParent = (searchNodes: TreeNode[]): boolean => {
        for (const node of searchNodes) {
          if (node.children?.some((child) => child.id === currentNode!.id)) {
            parent = node
            return true
          }
          if (node.children && findParent(node.children)) {
            return true
          }
        }
        return false
      }

      findParent(nodes)
      if (parent) {
        parents.push(parent.id)
        currentNode = parent
      } else {
        break
      }
    }

    return parents
  }

  for (const nodeId of matchingNodeIds) {
    const parentIds = findParentIds(nodeId)
    parentIds.forEach((id) => expandedIds.add(id))
  }

  return Array.from(expandedIds)
}

/**
 * Gets all descendant node IDs for a given node.
 *
 * @param node - The tree node to get descendants for
 * @returns Array of descendant node IDs
 */
export const getAllDescendantIds = (node: TreeNode): string[] => {
  const descendants: string[] = []

  const collectDescendantIds = (currentNode: TreeNode): void => {
    if (currentNode.children) {
      for (const child of currentNode.children) {
        descendants.push(child.id)
        collectDescendantIds(child)
      }
    }
  }

  collectDescendantIds(node)
  return descendants
}

/**
 * Checks if a parent node should be in indeterminate state for checkbox mode.
 *
 * @param node - The parent tree node to check
 * @param selectedIds - Array of currently selected node IDs
 * @returns True if parent should be indeterminate
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

  return (
    selectedDescendants.length > 0 &&
    selectedDescendants.length < descendantIds.length
  )
}

/**
 * Finds a tree node by its ID within a tree structure.
 *
 * @param nodes - Array of tree nodes to search
 * @param targetId - The ID of the node to find
 * @returns The found node or undefined if not found
 */
export const findNodeById = (
  nodes: TreeNode[],
  targetId: string,
): TreeNode | undefined => {
  const nodeMap = new Map<string, TreeNode>()

  const buildMap = (searchNodes: TreeNode[]): void => {
    for (const node of searchNodes) {
      nodeMap.set(node.id, node)
      if (node.children) {
        buildMap(node.children)
      }
    }
  }

  buildMap(nodes)
  return nodeMap.get(targetId)
}
