import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const PinInput: ComponentMultiStyle<"PinInput"> = mergeMultiStyle(
  Input,
  {
    baseStyle: {
      container: {
        gap: "sm",
      },
      field: {
        textAlign: "center",
      },
    },

    sizes: {
      xs: {
        field: {
          boxSize: "6",
          fontSize: "xs",
          rounded: "sm",
        },
      },
      sm: {
        field: {
          boxSize: "8",
          fontSize: "sm",
          rounded: "md",
        },
      },
      md: {
        field: {
          boxSize: "10",
          fontSize: "md",
          rounded: "md",
        },
      },
      lg: {
        field: {
          boxSize: "12",
          fontSize: "lg",
          rounded: "md",
        },
      },
    },

    variants: {
      unstyled: {
        field: {
          h: "auto",
        },
      },
    },
  },
)({ omit: ["addon", "sizes"] })
