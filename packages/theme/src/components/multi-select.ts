import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const MultiSelect: ComponentMultiStyle<"MultiSelect"> = mergeMultiStyle(
  Select,
  {
    baseStyle: {
      clearIcon: {
        _disabled: {
          opacity: 0.4,
          pointerEvents: "none",
        },
        _focusVisible: {
          boxShadow: "outline",
        },
        _hover: {
          opacity: 0.8,
        },
        _readOnly: {
          pointerEvents: "none",
        },
        pointerEvents: "auto",
        transitionDuration: "normal",
        transitionProperty: "common",
      },
    },
  },
)()
