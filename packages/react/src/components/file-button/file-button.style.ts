import { defineComponentStyle } from "../../core"
import { buttonStyle } from "../button"

export const fileButtonStyle = defineComponentStyle({
  base: {
    vars: [
      {
        name: "errorBorderColor",
        token: "colors",
        value: "border.error",
      },
    ],
  },

  variants: {
    ghost: {
      ...buttonStyle.variants?.ghost,
      _invalid: {
        borderColor: "{errorBorderColor}",
        borderWidth: "1px",
      },
    },
    outline: {
      ...buttonStyle.variants?.outline,
      _invalid: {
        borderColor: "{errorBorderColor}",
      },
    },
    solid: {
      ...buttonStyle.variants?.solid,
      _invalid: {
        borderColor: "{errorBorderColor}",
        borderWidth: "1px",
      },
    },
    subtle: {
      ...buttonStyle.variants?.subtle,
      _invalid: {
        borderColor: "{errorBorderColor}",
        borderWidth: "1px",
      },
    },
    surface: {
      ...buttonStyle.variants?.surface,
      _invalid: {
        borderColor: "{errorBorderColor}",
      },
    },
  },

  defaultProps: {
    variant: "solid",
  },
})

export type FileButtonStyle = typeof fileButtonStyle
