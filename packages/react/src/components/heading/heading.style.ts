import { defineComponentStyle } from "../../core"

export const headingStyle = defineComponentStyle({
  base: {
    fontFamily: "heading",
    fontWeight: "semibold",
  },

  sizes: {
    xs: { fontSize: { base: "xs", sm: "2xs" } },
    sm: { fontSize: { base: "sm", sm: "xs" } },
    md: { fontSize: { base: "md", sm: "sm" } },
    lg: { fontSize: { base: "lg", sm: "md" } },
    xl: { fontSize: { base: "xl", sm: "lg" } },
    "2xl": { fontSize: { base: "2xl", sm: "xl" } },
    "3xl": { fontSize: { base: "3xl", sm: "2xl" } },
    "4xl": { fontSize: { base: "4xl", sm: "3xl" } },
    "5xl": { fontSize: { base: "5xl", sm: "4xl" } },
    "6xl": { fontSize: { base: "6xl", sm: "5xl" } },
    "7xl": { fontSize: { base: "7xl", sm: "6xl" } },
    "8xl": { fontSize: { base: "8xl", sm: "7xl" } },
    "9xl": { fontSize: { base: "9xl", sm: "8xl" } },
  },

  defaultProps: { size: "4xl" },
})

export type HeadingStyle = typeof headingStyle
