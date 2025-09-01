import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type {
  TreeBranchContentProps,
  TreeBranchIndicatorProps,
  TreeBranchProps,
  TreeBranchTextProps,
  TreeBranchTriggerProps,
  TreeItemProps,
} from "./tree"
import type { TreeCollection } from "./tree-collection"
import type { TreeStyle } from "./tree.style"

export interface TreeNodeData {
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
  children?: TreeNodeData[]
  /**
   * Additional data for the node.
   */
  data?: {
    [key: string]: any
  }
  /**
   * Whether the node is disabled.
   */
  disabled?: boolean
  /**
   * Whether the node is expanded.
   */
  expanded?: boolean
  /**
   * Whether the node is selected.
   */
  selected?: boolean
}

export interface TreeItem extends TreeNodeData {
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

export interface TreeNodeRenderProps {
  /**
   * Whether the node is expanded.
   */
  expanded: boolean
  /**
   * The index path of the node.
   */
  indexPath: number[]
  /**
   * The tree node.
   */
  node: TreeNodeData
  /**
   * The unique identifier for the node.
   */
  nodeId: string
  /**
   * The node state information.
   */
  nodeState: TreeNodeState
  /**
   * The children content to render if the node is a branch and expanded.
   * This is automatically handled for custom render functions.
   */
  children?: ReactNode
  /**
   * Function to select the node.
   */
  onSelect?: () => void
  /**
   * Function to toggle the expand state of the node.
   */
  onToggleExpand?: () => void
}

export interface TreeNodeState {
  /**
   * Whether the node is disabled.
   */
  disabled: boolean
  /**
   * Whether the node is expanded.
   */
  expanded: boolean
  /**
   * Whether the node checkbox is indeterminate (for checkbox mode).
   */
  indeterminate: boolean
  /**
   * Whether the node is a branch (has children).
   */
  isBranch: boolean
  /**
   * Whether the node is loading children.
   */
  loading: boolean
  /**
   * Whether the node is selected.
   */
  selected: boolean
}

export interface TreeRootProps
  extends Omit<HTMLStyledProps, "onChange">,
    ThemeProps<TreeStyle> {
  /**
   * The tree collection.
   */
  collection?: TreeCollection
  /**
   * The default expanded node IDs.
   */
  defaultExpanded?: string[]
  /**
   * The default selected node IDs.
   */
  defaultSelected?: string[]
  /**
   * The controlled expanded node IDs.
   */
  expandedIds?: string[]
  /**
   * Function to filter nodes based on a search query.
   */
  filterNodes?: (node: TreeNodeData, query: string) => boolean
  /**
   * The current filter query string.
   */
  filterQuery?: string
  /**
   * Function to load children for a node asynchronously.
   */
  loadChildren?: (node: TreeNodeData) => Promise<TreeNodeData[]>
  /**
   * The tree nodes to render.
   */
  nodes?: TreeNodeData[]
  /**
   * The controlled selected node IDs.
   */
  selectedIds?: string[]
  /**
   * The selection mode.
   * @default "single"
   */
  selectionMode?: "checkbox" | "multiple" | "single"
  /**
   * Callback when a node is expanded/collapsed.
   */
  onExpandedChange?: (expandedIds: string[]) => void
  /**
   * Callback when loading children completes.
   */
  onLoadChildrenComplete?: (
    node: TreeNodeData,
    children: TreeNodeData[],
  ) => void
  /**
   * Callback when loading children fails.
   */
  onLoadChildrenError?: (node: TreeNodeData, error: Error) => void
  /**
   * Callback when a node is selected.
   */
  onSelectionChange?: (selectedIds: string[]) => void
}
