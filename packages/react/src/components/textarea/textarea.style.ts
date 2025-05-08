import { defineComponentStyle } from "../../core"
import { getInputPaddingResetStyle, inputStyle } from "../input"

export const textareaStyle = defineComponentStyle({
  base: {
    ...inputStyle.base,
    resize: "vertical",
  },

  variants: {
    filled: { ...inputStyle.variants?.filled },
    flushed: {
      ...inputStyle.variants?.flushed,
      ...getInputPaddingResetStyle(),
    },
    outline: { ...inputStyle.variants?.outline },
  },

  sizes: {
    xs: {
      ...inputStyle.sizes?.xs,
      py: "{--input-space-y}",
    },
    sm: {
      ...inputStyle.sizes?.sm,
      py: "{--input-space-y}",
    },
    md: {
      ...inputStyle.sizes?.md,
      py: "{--input-space-y}",
    },
    lg: {
      ...inputStyle.sizes?.lg,
      py: "{--input-space-y}",
    },
    xl: {
      ...inputStyle.sizes?.xl,
      py: "{--input-space-y}",
    },
    "2xl": {
      ...inputStyle.sizes?.["2xl"],
      py: "{--input-space-y}",
    },
  },

  compounds: [
    {
      css: getInputPaddingResetStyle(),
      variant: "flushed",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type TextareaStyle = typeof textareaStyle
