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
 * Helper function to get all descendant node IDs.
 */
export const getAllDescendantIds = (node: TreeNode): string[] => {
  const descendants: string[] = []

  const collectIds = (currentNode: TreeNode): void => {
    if (currentNode.children) {
      for (const child of currentNode.children) {
        descendants.push(child.id)
        collectIds(child)
      }
    }
  }

  collectIds(node)
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

  return (
    selectedDescendants.length > 0 &&
    selectedDescendants.length < descendantIds.length
  )
}

/**
 * Helper function to find a node by ID.
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
