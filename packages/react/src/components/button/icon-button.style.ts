import { defineComponentStyle } from "../../core"

export const iconButtonStyle = defineComponentStyle({
  sizes: {
    xs: {
      fontSize: "lg",
      minBoxSize: "8",
      rounded: "md",
    },
    sm: {
      fontSize: "xl",
      minBoxSize: "9",
      rounded: "md",
    },
    md: {
      fontSize: "2xl",
      minBoxSize: "10",
      rounded: "md",
    },
    lg: {
      fontSize: "3xl",
      minBoxSize: "11",
      rounded: "md",
    },
    xl: {
      fontSize: "4xl",
      minBoxSize: "12",
      rounded: "lg",
    },
    "2xl": {
      fontSize: "4xl",
      minBoxSize: "14",
      rounded: "lg",
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type IconButtonStyle = typeof iconButtonStyle
