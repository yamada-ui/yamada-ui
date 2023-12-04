import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const PinInput: ComponentMultiStyle = mergeMultiStyle(Input, {
  baseStyle: {
    container: {
      gap: "sm",
    },
    field: {
      textAlign: "center",
    },
  },

  variants: {
    unstyled: {
      field: {
        h: "auto",
      },
    },
  },

  sizes: {
    xs: {
      field: {
        fontSize: "xs",
        boxSize: "6",
        rounded: "sm",
      },
    },
    sm: {
      field: {
        fontSize: "sm",
        boxSize: "8",
        rounded: "md",
      },
    },
    md: {
      field: {
        fontSize: "md",
        boxSize: "10",
        rounded: "md",
      },
    },
    lg: {
      field: {
        fontSize: "lg",
        boxSize: "12",
        rounded: "md",
      },
    },
  },
})({ omit: ["addon", "sizes"] })
