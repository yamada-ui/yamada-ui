import type { RadioCardGroupItem } from "./radio-card-group"

export { RadioCardGroupRoot as Root } from "./radio-card-group"
export type { RadioCardGroupRootProps as RootProps } from "./radio-card-group"
export * as Item from "./radio-card.namespace"

export type Item<Y extends string = string> = RadioCardGroupItem<Y>

/**
 * @deprecated Use `Item` instead. Will be removed in the next major release.
 */
export type ItemType<Y extends string = string> = RadioCardGroupItem<Y>
