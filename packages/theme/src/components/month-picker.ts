import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { DatePicker } from "./date-picker"

export const MonthPicker: ComponentMultiStyle = mergeMultiStyle(DatePicker)()
