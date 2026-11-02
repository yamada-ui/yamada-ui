import type { RadioCardGroupItem } from "./radio-card-group"

export { RadioCardGroupRoot as Root } from "./radio-card-group"
export type {
  RadioCardGroupItem as ItemType,
  RadioCardGroupRootProps as RootProps,
} from "./radio-card-group"
export * as Item from "./radio-card.namespace"

export type Item<Y extends string = string> = RadioCardGroupItem<Y>
