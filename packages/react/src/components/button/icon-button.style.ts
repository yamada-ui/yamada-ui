import { defineComponentStyle } from "../../core"
import { buttonStyle } from "./button.style"

export const iconButtonStyle = defineComponentStyle({
  variants: buttonStyle.variants,

  sizes: {
    xs: {
      fontSize: "lg",
      minBoxSize: "8",
    },
    sm: {
      fontSize: "xl",
      minBoxSize: "9",
    },
    md: {
      fontSize: "2xl",
      minBoxSize: "10",
    },
    lg: {
      fontSize: "3xl",
      minBoxSize: "11",
    },
    xl: {
      fontSize: "4xl",
      minBoxSize: "12",
    },
    "2xl": {
      fontSize: "4xl",
      minBoxSize: "14",
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type IconButtonStyle = typeof iconButtonStyle
