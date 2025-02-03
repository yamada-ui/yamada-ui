import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { DatePicker } from "./date-picker"

export const YearPicker: ComponentMultiStyle<"YearPicker"> = mergeMultiStyle(
  DatePicker,
  {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
      inner: {
        position: "relative",
      },
    },
  },
)()
