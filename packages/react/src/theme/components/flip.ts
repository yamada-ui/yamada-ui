import type { ComponentMultiStyle } from "../../core"

export const Flip: ComponentMultiStyle<"Flip"> = {
  baseStyle: {
    container: {
      position: "relative",
      userSelect: "none",
      _readOnly: {
        cursor: "default",
      },
      _disabled: {
        cursor: "not-allowed",
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
