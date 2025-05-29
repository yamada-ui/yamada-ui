import { defineComponentSlotStyle } from "../../core"
import { inputStyle } from "../input"

export const pinInputStyle = defineComponentSlotStyle({
  base: {
    field: {
      ...inputStyle.base,
      textAlign: "center",
    },
    root: {},
  },

  variants: {
    filled: {
      field: inputStyle.variants?.filled,
    },
    flushed: {
      field: inputStyle.variants?.flushed,
    },
    outline: {
      field: inputStyle.variants?.outline,
    },
    plain: {
      field: inputStyle.variants?.plain,
    },
  },

  sizes: {
    xs: {
      field: {
        boxSize: inputStyle.sizes?.xs.minH,
        fontSize: inputStyle.sizes?.xs.fontSize,
      },
    },
    sm: {
      field: {
        boxSize: inputStyle.sizes?.sm.minH,
        fontSize: inputStyle.sizes?.sm.fontSize,
      },
    },
    md: {
      field: {
        boxSize: inputStyle.sizes?.md.minH,
        fontSize: inputStyle.sizes?.md.fontSize,
      },
    },
    lg: {
      field: {
        boxSize: inputStyle.sizes?.lg.minH,
        fontSize: inputStyle.sizes?.lg.fontSize,
      },
    },
    xl: {
      field: {
        boxSize: inputStyle.sizes?.xl.minH,
        fontSize: inputStyle.sizes?.xl.fontSize,
      },
    },
    "2xl": {
      field: {
        boxSize: inputStyle.sizes?.["2xl"].minH,
        fontSize: inputStyle.sizes?.["2xl"].fontSize,
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type PinInputStyle = typeof pinInputStyle
