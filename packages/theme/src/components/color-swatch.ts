import type { ComponentMultiStyle } from "@yamada-ui/core"

export const ColorSwatch: ComponentMultiStyle<"ColorSwatch"> = {
  baseStyle: {
    container: {},
    overlay: { boxSize: "full" },
  },

  variants: {
    basic: {
      container: { rounded: "md" },
      overlay: { rounded: "md" },
    },
    rounded: {
      container: { rounded: "full" },
      overlay: { rounded: "full" },
    },
  },

  sizes: {
    sm: {
      container: { boxSize: "6" },
    },
    md: {
      container: { boxSize: "8" },
    },
    lg: {
      container: { boxSize: "10" },
    },
  },

  defaultProps: {
    variant: "basic",
    size: "md",
  },
}
