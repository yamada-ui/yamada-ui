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
      list: {
        w: "auto",
        minW: "auto",
        maxH: "inherit",
        overflowY: "inherit",
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
)({ omit: ["addon", "element", "group", "groupLabel", "item", "itemIcon"] })
