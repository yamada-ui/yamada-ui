import { ComponentMultiStyle, mergeStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const MultiSelect: ComponentMultiStyle = mergeStyle(Select, {
  baseStyle: {
    clearIcon: {
      transitionProperty: "common",
      transitionDuration: "normal",
      pointerEvents: "auto",
      _hover: {
        opacity: 0.8,
      },
      _disabled: {
        pointerEvents: "none",
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: "outline",
        bg: "rgba(0, 0, 0, 0.14)",
      },
    },
  },
})
