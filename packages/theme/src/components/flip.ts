import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
      cursor: "pointer",
    },
    flipElement: {
      position: "absolute",
      top: 0,
      backfaceVisibility: "hidden",
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
