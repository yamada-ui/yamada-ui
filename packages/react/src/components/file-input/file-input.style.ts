import { defineComponentSlotStyle } from "../../core"
import { inputStyle } from "../input"

export const fileInputStyle = defineComponentSlotStyle({
  base: {
    root: {
      ...inputStyle.base,
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      flexWrap: "wrap",
      gapX: "1",
      lineHeight: "1",
      _readOnly: {
        layerStyle: "readOnly",
      },
    },
    tag: {
      display: "inline-block",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },

  variants: {
    filled: {
      root: inputStyle.variants?.filled,
    },
    flushed: {
      root: inputStyle.variants?.flushed,
    },
    outline: {
      root: inputStyle.variants?.outline,
    },
  },

  sizes: {
    xs: {
      root: { py: "1.5", ...inputStyle.sizes?.xs },
    },
    sm: {
      root: { py: "2", ...inputStyle.sizes?.sm },
    },
    md: {
      root: { py: "2", ...inputStyle.sizes?.md },
    },
    lg: {
      root: { py: "2.5", ...inputStyle.sizes?.lg },
    },
    xl: {
      root: { py: "3", ...inputStyle.sizes?.xl },
    },
    "2xl": {
      root: { py: "3", ...inputStyle.sizes?.["2xl"] },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type FileInputStyle = typeof fileInputStyle
