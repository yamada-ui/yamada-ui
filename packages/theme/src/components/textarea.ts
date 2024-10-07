import type { ComponentStyle } from "@yamada-ui/core"
import { mergeStyle, pickStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const Textarea: ComponentStyle<"Textarea"> = mergeStyle(
  pickStyle(Input, "field"),
  {
    baseStyle: {
      lineHeight: "short",
      py: "2",
      verticalAlign: "top",
    },

    sizes: {
      xs: {
        minH: "20",
        py: "2",
      },
      sm: {
        minH: "20",
        py: "2",
      },
      md: {
        minH: "20",
        py: "2",
      },
      lg: {
        minH: "20",
        py: "3",
      },
    },

    variants: {
      unstyled: {
        h: "auto",
        px: "0",
        py: "0",
      },
    },
  },
)()
