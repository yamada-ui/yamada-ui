import { defineComponentSlotStyle } from "../../core"
import { inputStyle } from "../input"

export const pinInputStyle = defineComponentSlotStyle({
  base: {
    field: {
      ...inputStyle.base,
      textAlign: "center",
    },
    root: {
      alignItems: "center",
      display: "flex",
      gap: "sm",
    },
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
    unstyled: {
      field: {
        h: "auto",
      },
    },
  },

  sizes: {
    xs: {
      field: {
        boxSize: "6",
        fontSize: "xs",
        rounded: "sm",
      },
    },
    sm: {
      field: {
        boxSize: "8",
        fontSize: "sm",
        rounded: "md",
      },
    },
    md: {
      field: {
        boxSize: "10",
        fontSize: "md",
        rounded: "md",
      },
    },
    lg: {
      field: {
        boxSize: "12",
        fontSize: "lg",
        rounded: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type PinInputStyle = typeof pinInputStyle
