import { defineComponentSlotStyle } from "../../core"

export const colorSwatchStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      boxSize: "full",
      inset: 0,
      position: "absolute",
    },
    root: {
      "& > *": {
        alignItems: "center",
        boxSize: "full",
        display: "flex",
        inset: 0,
        justifyContent: "center",
        overflow: "hidden",
        position: "absolute",
      },
      overflow: "hidden",
      position: "relative",
    },
  },

  sizes: {
    "2xs": {
      root: { boxSize: "6" },
    },
    xs: {
      root: { boxSize: "8" },
    },
    sm: {
      root: { boxSize: "9" },
    },
    md: {
      root: { boxSize: "10" },
    },
    lg: {
      root: { boxSize: "11" },
    },
    xl: {
      root: { boxSize: "12" },
    },
    "2xl": {
      root: { boxSize: "14" },
    },
  },

  variants: {
    circle: {
      root: { rounded: "full" },
    },
    plain: {
      root: { rounded: "l2" },
    },
    square: {
      root: { rounded: "0" },
    },
  },

  defaultProps: {
    size: "xs",
    variant: "plain",
  },
})

export type ColorSwatchStyle = typeof colorSwatchStyle
