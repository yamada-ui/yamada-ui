import { defineComponentStyle } from "../../core"

export const markStyle = defineComponentStyle({
  base: {
    bg: "transparent",
    px: "1",
    py: "1",
    whiteSpace: "nowrap",
  },

  variants: {
    outline: {
      layerStyle: "outline",
    },
    solid: {
      layerStyle: "solid",
    },
    subtle: {
      layerStyle: "subtle",
    },
    "text-accent": {
      textStyle: "surface",
      p: 0,
    },
    unstyled: {
      p: 0,
    },
  },

  defaultProps: {
    colorScheme: "blue",
    variant: "subtle",
  },
})

export type MarkStyle = typeof markStyle
