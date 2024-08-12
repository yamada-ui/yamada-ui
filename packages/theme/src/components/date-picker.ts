import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"
import { MultiSelect } from "./multi-select"

export const DatePicker: ComponentMultiStyle<"DatePicker"> = mergeMultiStyle(
  Input,
  MultiSelect,
  {
    baseStyle: {
      container: {
        w: "100%",
        h: "fit-content",
      },
      field: {
        alignItems: "center",
        cursor: "text",
        display: "flex",
        pb: "px",
        pe: "2rem",
        _focus: {
          zIndex: "unset",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      icon: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        cursor: "pointer",
      },
      inner: {
        position: "relative",
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
