import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeStyle } from "@yamada-ui/core"
import { MultiSelect } from "./multi-select"

export const MultiAutocomplete: ComponentMultiStyle = mergeStyle(
  MultiSelect,
  {},
)
