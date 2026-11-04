import type { TreeItem } from "./tree"

export {
  TreeItem as Item,
  TreePropsContext as PropsContext,
  TreeRoot as Root,
  useTreePropsContext as usePropsContext,
} from "./tree"
export type {
  TreeItemProps as ItemProps,
  TreeRootProps as RootProps,
} from "./tree"
export {
  TreeContext as Context,
  TreeDescendantsContext as DescendantsContext,
  useTreeContext as useContext,
  useTreeDescendant as useDescendant,
  useTreeDescendants as useDescendants,
  useTreeItemContext as useItemContext,
} from "./use-tree"
export type { TreeControl as Control } from "./use-tree"

/**
 * @deprecated Use `Item` instead. Will be removed in the next major release.
 */
export type ItemType = TreeItem
