import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Autocomplete } from "./autocomplete"
import { MultiSelect } from "./multi-select"

export const MultiAutocomplete: ComponentMultiStyle = mergeMultiStyle(
  MultiSelect,
  Autocomplete,
  {
    baseStyle: {
      field: {
        flexWrap: "wrap",
      },
    },
  },
)()
