import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { MultiSelect } from "./multi-select"

export const MultiAutocomplete: ComponentMultiStyle<"MultiAutocomplete"> =
  mergeMultiStyle(MultiSelect)()
