import { defineComponentSlotStyle } from "../../core"

export const lineStyle = defineComponentSlotStyle({
  base: {
    activeDot: {
      fill: "mono.contrast",
      r: "3",
      strokeWidth: 2,
    },
    dot: {
      r: "4",
      strokeWidth: 2,
    },
    root: {
      stroke: "mono",
    },
  },
})

export type LineStyle = typeof lineStyle
