import { defineComponentStyle } from "../../core"
import { buttonStyle } from "../button"

export const fileButtonStyle = defineComponentStyle({
  base: {
    "--error-border-color": "colors.border.error",
  },

  variants: {
    ghost: {
      ...buttonStyle.variants?.ghost,
      _invalid: {
        borderColor: "{error-border-color}",
        borderWidth: "1px",
      },
    },
    outline: {
      ...buttonStyle.variants?.outline,
      _invalid: {
        borderColor: "{error-border-color}",
      },
    },
    solid: {
      ...buttonStyle.variants?.solid,
      _invalid: {
        borderColor: "{error-border-color}",
        borderWidth: "1px",
      },
    },
    subtle: {
      ...buttonStyle.variants?.subtle,
      _invalid: {
        borderColor: "{error-border-color}",
        borderWidth: "1px",
      },
    },
    surface: {
      ...buttonStyle.variants?.surface,
      _invalid: {
        borderColor: "{error-border-color}",
      },
    },
  },

  defaultProps: {
    variant: "solid",
  },
})

export type FileButtonStyle = typeof fileButtonStyle
