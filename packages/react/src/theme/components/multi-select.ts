import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Select } from "./select"

export const MultiSelect: ComponentMultiStyle<"MultiSelect"> = mergeMultiStyle(
  Select,
  {
    baseStyle: {
      clearIcon: {
        pointerEvents: "auto",
        transitionDuration: "moderate",
        transitionProperty: "common",
        _hover: {
          opacity: 0.8,
        },
        _focusVisible: {
          boxShadow: "outline",
        },
        _readOnly: {
          pointerEvents: "none",
        },
        _disabled: {
          opacity: 0.4,
          pointerEvents: "none",
        },
      },
    },
  },
)()
