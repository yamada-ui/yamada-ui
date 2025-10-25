import { defineComponentSlotStyle } from "../../core"

export const lineStyle = defineComponentSlotStyle({
  base: {
    activeDot: {
      fill: "mono",
      stroke: "currentColor",
      strokeWidth: 2,
    },
    dot: {
      strokeWidth: 2,
    },
    root: {
      fill: "mono",
      stroke: "mono",
    },
  },
})

export type LineStyle = typeof lineStyle
