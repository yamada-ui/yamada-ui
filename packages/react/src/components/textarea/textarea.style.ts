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
    plain: { ...inputStyle.variants?.plain },
  },

  sizes: {
    xs: {
      ...inputStyle.sizes?.xs,
      py: "{--space-y}",
    },
    sm: {
      ...inputStyle.sizes?.sm,
      py: "{--space-y}",
    },
    md: {
      ...inputStyle.sizes?.md,
      py: "{--space-y}",
    },
    lg: {
      ...inputStyle.sizes?.lg,
      py: "{--space-y}",
    },
    xl: {
      ...inputStyle.sizes?.xl,
      py: "{--space-y}",
    },
    "2xl": {
      ...inputStyle.sizes?.["2xl"],
      py: "{--space-y}",
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
