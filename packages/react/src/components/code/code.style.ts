import { defineComponentStyle } from "../../core"

export const codeStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    display: "inline-flex",
    fontFamily: "mono",
    rounded: "md",
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
    xs: {
      fontSize: "2xs",
      lineHeight: "{sizes.4}",
      minH: "4",
      px: "1",
    },
    sm: {
      fontSize: "xs",
      lineHeight: "{sizes.5}",
      minH: "5",
      px: "1.5",
    },
    md: {
      fontSize: "sm",
      lineHeight: "{sizes.6}",
      minH: "6",
      px: "2",
    },
    lg: {
      fontSize: "sm",
      lineHeight: "{sizes.7}",
      minH: "7",
      px: "2.5",
    },
  },

  defaultProps: {
    size: "sm",
    variant: "subtle",
  },
})

export type CodeStyle = typeof codeStyle
