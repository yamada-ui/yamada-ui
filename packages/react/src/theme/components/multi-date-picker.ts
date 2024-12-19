import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { DatePicker } from "./date-picker"

export const MultiDatePicker: ComponentMultiStyle<"MultiDatePicker"> =
  mergeMultiStyle(DatePicker)()
