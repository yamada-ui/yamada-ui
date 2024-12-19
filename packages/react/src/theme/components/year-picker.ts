import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { DatePicker } from "./date-picker"

export const YearPicker: ComponentMultiStyle<"YearPicker"> =
  mergeMultiStyle(DatePicker)()
