import type { CheckboxCardGroupItem } from "./checkbox-card-group"

export { CheckboxCardGroupRoot as Root } from "./checkbox-card-group"
export type { CheckboxCardGroupRootProps as RootProps } from "./checkbox-card-group"
export * as Item from "./checkbox-card.namespace"

export type Item<Y extends string = string> = CheckboxCardGroupItem<Y>

/**
 * @deprecated Use `Item` instead. Will be removed in the next major release.
 */
export type ItemType<Y extends string = string> = CheckboxCardGroupItem<Y>
