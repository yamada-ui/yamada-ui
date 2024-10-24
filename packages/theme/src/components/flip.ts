import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
      _disabled: {
        cursor: "not-allowed",
      },
      _readOnly: {
        cursor: "default",
      },
    },
    flipIdent: {
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
    },
    from: {},
    to: {},
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
