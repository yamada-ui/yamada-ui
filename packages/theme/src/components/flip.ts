import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
      cursor: "pointer",
    },
    flipIdent: {
      position: "absolute",
      top: 0,
      backfaceVisibility: "hidden",
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
