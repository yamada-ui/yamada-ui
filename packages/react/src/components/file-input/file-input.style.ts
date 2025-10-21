import { defineComponentSlotStyle } from "../../core"
import { getInputPaddingStartResetStyle, inputStyle } from "../input"

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
      root: {
        ...inputStyle.variants?.flushed,
        ...getInputPaddingStartResetStyle(),
      },
    },
    outline: {
      root: inputStyle.variants?.outline,
    },
    plain: {
      root: inputStyle.variants?.plain,
    },
  },

  sizes: {
    xs: {
      root: { py: "{--space-y}", ...inputStyle.sizes?.xs },
    },
    sm: {
      root: { py: "{--space-y}", ...inputStyle.sizes?.sm },
    },
    md: {
      root: { py: "{--space-y}", ...inputStyle.sizes?.md },
    },
    lg: {
      root: { py: "{--space-y}", ...inputStyle.sizes?.lg },
    },
    xl: {
      root: { py: "{--space-y}", ...inputStyle.sizes?.xl },
    },
    "2xl": {
      root: { py: "{--space-y}", ...inputStyle.sizes?.["2xl"] },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type FileInputStyle = typeof fileInputStyle
