import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
    },
    flipIdent: {
      position: "absolute",
      top: 0,
      backfaceVisibility: "hidden",
    },
    from: {},
    to: {},
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
