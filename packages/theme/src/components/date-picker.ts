import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"
import { MultiSelect } from "./multi-select"

export const DatePicker: ComponentMultiStyle<"DatePicker"> = mergeMultiStyle(
  Input,
  MultiSelect,
  {
    baseStyle: {
      container: {},
      field: {
        cursor: "text",
        pb: "px",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      content: {
        w: "auto",
        minW: "auto",
        p: "2",
      },
    },

    sizes: {
      xs: {
        icon: {
          pt: "2",
          fontSize: "md",
        },
      },
    },
  },
)({
  omit: [
    "addon",
    "element",
    "group",
    "groupLabel",
    "header",
    "footer",
    "list",
    "item",
    "itemIcon",
  ],
})
