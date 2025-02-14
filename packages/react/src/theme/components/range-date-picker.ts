import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { DatePicker } from "./date-picker"

export const RangeDatePicker: ComponentMultiStyle<"RangeDatePicker"> =
  mergeMultiStyle(DatePicker)()
