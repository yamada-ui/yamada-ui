import type { ComponentStyle } from "../../core"

export const Divider: ComponentStyle<"Divider"> = {
  baseStyle: {
    borderColor: "border",
  },

  variants: {
    dashed: {
      borderStyle: "dashed",
    },
    dotted: {
      borderStyle: "dotted",
    },
    solid: {
      borderStyle: "solid",
    },
  },

  defaultProps: { variant: "solid" },
}