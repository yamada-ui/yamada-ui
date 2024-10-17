import type { ComponentMultiStyle } from "@yamada-ui/core"

export const ColorSwatch: ComponentMultiStyle<"ColorSwatch"> = {
  baseStyle: {
    container: {},
    overlay: { boxSize: "full" },
  },

  sizes: {
    xs: {
      container: { boxSize: "6", rounded: "sm" },
      overlay: { rounded: "sm" },
    },
    sm: {
      container: { boxSize: "8", rounded: "md" },
      overlay: { rounded: "md" },
    },
    md: {
      container: { boxSize: "10", rounded: "md" },
      overlay: { rounded: "md" },
    },
    lg: {
      container: { boxSize: "12", rounded: "md" },
      overlay: { rounded: "md" },
    },
  },

  variants: {
    basic: {},
    rounded: {
      container: { rounded: "full" },
      overlay: { rounded: "full" },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "basic",
  },
}
