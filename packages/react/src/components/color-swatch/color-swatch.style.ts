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
      "--checkers-bg": ["colors.whiteAlpha.500", "colors.blackAlpha.500"],
      "--checkers-fg": ["colors.blackAlpha.300", "colors.whiteAlpha.300"],
      aspectRatio: "1",
      overflow: "hidden",
      position: "relative",
      w: "{width}",
    },
  },

  sizes: {
    "2xs": {
      root: { "--width": "sizes.6" },
    },
    xs: {
      root: { "--width": "sizes.8" },
    },
    sm: {
      root: { "--width": "sizes.9" },
    },
    md: {
      root: { "--width": "sizes.10" },
    },
    lg: {
      root: { "--width": "sizes.11" },
    },
    xl: {
      root: { "--width": "sizes.12" },
    },
    "2xl": {
      root: { "--width": "sizes.14" },
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
