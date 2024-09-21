import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
      _disabled: {
        cursor: "not-allowed",
      },
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
