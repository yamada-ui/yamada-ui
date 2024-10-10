import type { ComponentStyle } from "@yamada-ui/core"

export const Heading: ComponentStyle<"Heading"> = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
  },

  sizes: {
    xs: { fontSize: "sm" },
    sm: { fontSize: "md" },
    md: { fontSize: "xl" },
    lg: {
      fontSize: { base: "3xl", sm: "2xl" },
    },
    xl: {
      fontSize: { base: "4xl", sm: "3xl" },
    },
    "2xl": {
      fontSize: { base: "5xl", sm: "4xl" },
    },
    "3xl": {
      fontSize: { base: "6xl", sm: "5xl" },
    },
    "4xl": {
      fontSize: { base: "7xl", sm: "6xl" },
    },
  },

  defaultProps: { size: "xl" },
}
