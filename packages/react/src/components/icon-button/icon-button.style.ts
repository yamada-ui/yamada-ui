import { defineComponentStyle } from "../../core"

export const iconButtonStyle = defineComponentStyle({
  variants: {
    ghost: {
      layerStyle: "ghost",
      _hover: {
        layerStyle: "ghost.hover",
      },
    },
    outline: {
      layerStyle: "outline",
      _hover: {
        layerStyle: "outline.hover",
      },
    },
    solid: {
      layerStyle: "solid",
      _hover: {
        layerStyle: "solid.hover",
      },
    },
    subtle: {
      layerStyle: "subtle",
      _hover: {
        layerStyle: "subtle.hover",
      },
    },
    surface: {
      layerStyle: "surface",
      _hover: {
        layerStyle: "surface.hover",
      },
    },
  },

  sizes: {
    "2xs": {
      fontSize: "md",
      minBoxSize: "6",
    },
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
