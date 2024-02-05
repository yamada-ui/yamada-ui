import type { ComponentStyle } from "@yamada-ui/core"
import { mergeStyle, pickStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const Textarea: ComponentStyle = mergeStyle(pickStyle(Input, "field"), {
  baseStyle: {
    py: "2",
    lineHeight: "short",
    verticalAlign: "top",
  },

  variants: {
    unstyled: {
      h: "auto",
      py: "0",
      px: "0",
    },
  },

  sizes: {
    xs: {
      py: "2",
      minH: "20",
    },
    sm: {
      py: "2",
      minH: "20",
    },
    md: {
      py: "2",
      minH: "20",
    },
    lg: {
      py: "3",
      minH: "20",
    },
  },
})()
