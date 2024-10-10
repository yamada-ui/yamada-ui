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
      content: {
        minW: "auto",
        p: "2",
        w: "auto",
      },
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
    },

    sizes: {
      xs: {
        icon: {
          fontSize: "md",
          pt: "2",
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
