import { defineComponentStyle } from "../../core"

export const markStyle = defineComponentStyle({
  base: {
    bg: "transparent",
    whiteSpace: "nowrap",
  },

  variants: {
    accent: {
      color: "colorScheme.solid",
    },
    solid: {
      layerStyle: "solid",
    },
    subtle: {
      layerStyle: "subtle",
    },
    text: {
      fontWeight: "semibold",
    },
  },

  defaultProps: {
    variant: "subtle",
  },
})

export type MarkStyle = typeof markStyle
