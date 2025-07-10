import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
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
        _notAllowed: {
          cursor: "pointer",
        },
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
          fontSize: "sm",
          pt: "2",
        },
      },
      sm: {
        icon: {
          fontSize: "lg",
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
