import { defineComponentSlotStyle } from "../../core"

export const flipStyle = defineComponentSlotStyle({
  base: {
    from: {},
    item: {
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
    },
    root: {
      position: "relative",
      rounded: "l1",
      userSelect: "none",
      _readOnly: {
        layerStyle: "readOnly",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    to: {},
  },
})

export type FlipStyle = typeof flipStyle
