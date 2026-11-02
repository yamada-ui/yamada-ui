import type { CheckboxCardGroupItem } from "./checkbox-card-group"

export { CheckboxCardGroupRoot as Root } from "./checkbox-card-group"
export type {
  CheckboxCardGroupItem as ItemType,
  CheckboxCardGroupRootProps as RootProps,
} from "./checkbox-card-group"
export * as Item from "./checkbox-card.namespace"

export type Item<Y extends string = string> = CheckboxCardGroupItem<Y>
