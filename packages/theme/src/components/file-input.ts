import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const FileInput: ComponentMultiStyle<"FileInput"> = mergeMultiStyle(
  Input,
  {
    baseStyle: {
      field: {
        display: "flex",
        alignItems: "center",
      },
    },
  },
)()
