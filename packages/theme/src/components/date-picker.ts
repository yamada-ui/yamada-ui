import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"
import { MultiSelect } from "./multi-select"

export const DatePicker: ComponentMultiStyle = mergeMultiStyle(
  Input,
  MultiSelect,
  {
    baseStyle: {
      container: {},
      field: {
        cursor: "pointer",
        pb: "px",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
          _placeholder: {
            color: "inherit !important",
          },
        },
      },
      list: {
        w: "auto",
        minW: "auto",
        maxH: "auto",
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
)({ omit: ["addon", "group", "groupLabel", "item", "itemIcon"] })
