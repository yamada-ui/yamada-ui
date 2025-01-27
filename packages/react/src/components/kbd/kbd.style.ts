import { defineComponentStyle } from "../../core"

export const kbdStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    display: "inline-flex",
    fontFamily: "mono",
    fontWeight: "medium",
    rounded: "sm",
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
    surface: {
      layerStyle: "surface",
    },
  },

  sizes: {
    sm: {
      fontSize: "xs",
      lineHeight: "{sizes.4}",
      minH: "4",
      px: "1",
    },
    md: {
      fontSize: "sm",
      lineHeight: "{sizes.5}",
      minH: "5",
      px: "1.5",
    },
    lg: {
      fontSize: "md",
      lineHeight: "{sizes.6}",
      minH: "6",
      px: "2",
    },
  },

  defaultProps: {
    size: "md",
    variant: "surface",
  },
})

export type KbdStyle = typeof kbdStyle
