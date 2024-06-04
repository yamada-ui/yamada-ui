import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const MultiSelect: ComponentMultiStyle = mergeMultiStyle(Select, {
  baseStyle: {
    container: {
      w: "100%",
      h: "fit-content",
    },
    inner: {
      position: "relative",
    },
    field: {
      pe: "2rem",
      display: "flex",
      alignItems: "center",
    },
    itemIcon: {
      flexShrink: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.85em",
    },
    clearIcon: {
      transitionProperty: "common",
      transitionDuration: "normal",
      pointerEvents: "auto",
      _hover: {
        opacity: 0.8,
      },
      _readOnly: {
        pointerEvents: "none",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
  },
})()
