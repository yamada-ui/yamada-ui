import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const MultiSelect: ComponentMultiStyle<"MultiSelect"> = mergeMultiStyle(
  Select,
  {
    baseStyle: {
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
  },
)()
