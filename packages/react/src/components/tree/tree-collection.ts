import type { TreeNode } from "./tree"

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

/**
 * Creates a tree collection with utility methods for managing tree data.
 *
 * @param options - Configuration options for the tree collection
 * @returns Tree collection with utility methods
 */
export const createTreeCollection = ({
  nodeToString,
  nodeToValue,
  rootNode,
}: CreateTreeCollectionOptions): TreeCollection => {
  const nodeMap = new Map<string, TreeNode>()
  const parentMap = new Map<string, string>()

  /**
   * Builds internal maps for quick node lookups and parent relationships.
   *
   * @param node - Current node being processed
   * @param parentId - ID of the parent node
   */
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
    /**
     * Recursively collects all descendant nodes.
     *
     * @param children - Array of child nodes to process
     */
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

    /**
     * Removes a node at the specified path recursively.
     *
     * @param node - Current node being processed
     * @param path - Index path to the node to remove
     * @param depth - Current depth in the path traversal
     * @returns Updated node or null if removed
     */
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

    /**
     * Replaces a node at the specified path recursively.
     *
     * @param node - Current node being processed
     * @param path - Index path to the node to replace
     * @param depth - Current depth in the path traversal
     * @returns Updated node with replacement
     */
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
