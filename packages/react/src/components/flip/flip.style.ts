import { defineComponentSlotStyle } from "../../core"

export const flipStyle = defineComponentSlotStyle({
  base: {
    flipIdent: {
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
    },
    from: {},
    root: {
      position: "relative",
      userSelect: "none",
      _readOnly: {
        cursor: "default",
      },
      _disabled: {
        cursor: "not-allowed",
      },
    },
    to: {},
  },
})

export type FlipStyle = typeof flipStyle
