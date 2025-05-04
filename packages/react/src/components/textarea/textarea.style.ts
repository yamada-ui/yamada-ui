import { defineComponentStyle } from "../../core"
import { inputStyle } from "../input"

export const textareaStyle = defineComponentStyle({
  base: {
    ...inputStyle.base,
    resize: "vertical",
  },

  variants: {
    filled: { ...inputStyle.variants?.filled },
    flushed: { ...inputStyle.variants?.flushed },
    outline: { ...inputStyle.variants?.outline },
  },

  sizes: {
    xs: {
      ...inputStyle.sizes?.xs,
      py: "1.5",
    },
    sm: {
      ...inputStyle.sizes?.sm,
      py: "2",
    },
    md: {
      ...inputStyle.sizes?.md,
      py: "2",
    },
    lg: {
      ...inputStyle.sizes?.lg,
      py: "2.5",
    },
    xl: {
      ...inputStyle.sizes?.xl,
      py: "3",
    },
    "2xl": {
      ...inputStyle.sizes?.["2xl"],
      py: "3",
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type TextareaStyle = typeof textareaStyle
