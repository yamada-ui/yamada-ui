import type { TreeNode } from "./tree"

export interface TreeCollection {
  /**
   * Get the string representation of a node.
   */
  getNodeString: (node: TreeNode) => string
  /**
   * Get the value of a node.
   */
  getNodeValue: (node: TreeNode) => string
  /**
   * Get the root node.
   */
  getRootNode: () => TreeNode
  /**
   * Check if a node is a branch (has children).
   */
  isBranch: (node: TreeNode) => boolean
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
  const getRootNode = (): TreeNode => {
    return rootNode
  }

  const getNodeValue = (node: TreeNode): string => {
    return nodeToValue(node)
  }

  const getNodeString = (node: TreeNode): string => {
    return nodeToString(node)
  }

  const isBranch = (node: TreeNode): boolean => {
    return !!(node.children && node.children.length > 0)
  }

  return {
    getNodeString,
    getNodeValue,
    getRootNode,
    isBranch,
  }
}
