import type { ComponentMultiStyle } from "@yamada-ui/core"

export const ColorSwatch: ComponentMultiStyle<"ColorSwatch"> = {
  baseStyle: {
    container: {},
    overlay: { boxSize: "full" },
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

  defaultProps: {
    size: "md",
    variant: "basic",
  },
}
