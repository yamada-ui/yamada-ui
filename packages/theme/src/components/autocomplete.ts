import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const Autocomplete: ComponentMultiStyle = mergeMultiStyle(Select)()
