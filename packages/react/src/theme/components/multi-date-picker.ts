import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { DatePicker } from "./date-picker"

export const MultiDatePicker: ComponentMultiStyle<"MultiDatePicker"> =
  mergeMultiStyle(DatePicker, {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
      field: {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        pe: "2rem",
      },
      inner: {
        position: "relative",
      },
    },
  })()
