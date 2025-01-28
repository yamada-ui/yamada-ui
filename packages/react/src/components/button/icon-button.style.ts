import { defineComponentStyle } from "../../core"

export const iconButtonStyle = defineComponentStyle({
  sizes: {
    xs: {
      boxSize: "8",
      fontSize: "lg",
      rounded: "md",
    },
    sm: {
      boxSize: "9",
      fontSize: "xl",
      rounded: "md",
    },
    md: {
      boxSize: "10",
      fontSize: "2xl",
      rounded: "md",
    },
    lg: {
      boxSize: "11",
      fontSize: "3xl",
      rounded: "md",
    },
    xl: {
      boxSize: "12",
      fontSize: "4xl",
      rounded: "lg",
    },
    "2xl": {
      boxSize: "14",
      fontSize: "4xl",
      rounded: "lg",
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type IconButtonStyle = typeof iconButtonStyle
