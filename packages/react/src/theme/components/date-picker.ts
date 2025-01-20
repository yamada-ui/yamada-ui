import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"
import { MultiSelect } from "./multi-select"

export const DatePicker: ComponentMultiStyle<"DatePicker"> = mergeMultiStyle(
  Input,
  MultiSelect,
  {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
      content: {
        minW: "auto",
        p: "2",
        w: "auto",
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
        _notAllowed: {
          cursor: "pointer",
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      icon: {
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        pointerEvents: "none",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      inner: {
        position: "relative",
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
