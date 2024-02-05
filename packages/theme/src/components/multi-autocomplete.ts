import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { MultiSelect } from "./multi-select"

export const MultiAutocomplete: ComponentMultiStyle =
  mergeMultiStyle(MultiSelect)()
