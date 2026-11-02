import type { BubbleItem } from "./bubble"

export type {
  BubbleContentProps as ContentProps,
  BubbleGroupProps as GroupProps,
  BubbleItemProps as ItemProps,
  BubbleReactionsProps as ReactionsProps,
  BubbleRootProps as RootProps,
} from "./bubble"
export {
  BubbleContent as Content,
  BubbleGroup as Group,
  BubbleItem as Item,
  BubblePropsContext as PropsContext,
  BubbleReactions as Reactions,
  BubbleRoot as Root,
  useBubblePropsContext as usePropsContext,
} from "./bubble"

/**
 * @deprecated Use `Item` instead. Will be removed in the next major release.
 */
export type ItemType = BubbleItem
