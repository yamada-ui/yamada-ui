import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Select } from "./select"

export const Autocomplete: ComponentMultiStyle<"Autocomplete"> =
  mergeMultiStyle(Select)()
