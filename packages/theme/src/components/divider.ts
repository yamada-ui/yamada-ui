import type { ComponentStyle } from "@yamada-ui/core"

export const Divider: ComponentStyle<"Divider"> = {
  baseStyle: {
    borderColor: "border",
  },

  variants: {
    solid: {
      borderStyle: "solid",
    },
    dashed: {
      borderStyle: "dashed",
    },
    dotted: {
      borderStyle: "dotted",
    },
  },

  defaultProps: { variant: "solid" },
}
