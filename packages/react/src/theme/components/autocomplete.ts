import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Select } from "./select"

export const Autocomplete: ComponentMultiStyle<"Autocomplete"> =
  mergeMultiStyle(Select, {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
      field: {
        alignItems: "center",
        cursor: "text",
        display: "flex",
        pe: "2rem",
      },
      inner: {
        position: "relative",
      },
    },
  })()
