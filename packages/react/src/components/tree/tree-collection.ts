import type { TreeNodeData } from "./tree-types"

export interface TreeCollection {
  /**
   * Get the string representation of a node.
   */
  getNodeString: (node: TreeNodeData) => string
  /**
   * Get the value of a node.
   */
  getNodeValue: (node: TreeNodeData) => string
  /**
   * Get the root node.
   */
  getRootNode: () => TreeNodeData
  /**
   * Check if a node is a branch (has children).
   */
  isBranch: (node: TreeNodeData) => boolean
}

export interface CreateTreeCollectionOptions {
  /**
   * Function to convert a node to its string representation.
   */
  nodeToString: (node: TreeNodeData) => string
  /**
   * Function to convert a node to its value.
   */
  nodeToValue: (node: TreeNodeData) => string
  /**
   * The root node of the tree.
   */
  rootNode: TreeNodeData
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
  const getRootNode = (): TreeNodeData => {
    return rootNode
  }

  const getNodeValue = (node: TreeNodeData): string => {
    return nodeToValue(node)
  }

  const getNodeString = (node: TreeNodeData): string => {
    return nodeToString(node)
  }

  const isBranch = (node: TreeNodeData): boolean => {
    return !!(node.children && node.children.length > 0)
  }

  return {
    getNodeString,
    getNodeValue,
    getRootNode,
    isBranch,
  }
}
