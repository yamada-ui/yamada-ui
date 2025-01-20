import type { Layers } from "./theme"

export const DEFAULT_VAR_PREFIX = "ui"
export const DEFAULT_LOCALE = "en-US"
export const DEFAULT_DIRECTION = "ltr"
export const DEFAULT_LAYERS: Layers = {
  size: { name: "size", order: 4 },
  variant: { name: "variant", order: 5 },
  base: { name: "base", order: 3 },
  global: { name: "global", order: 2 },
  props: { name: "props", order: 6 },
  reset: { name: "reset", order: 1 },
  tokens: { name: "tokens", order: 0 },
}
