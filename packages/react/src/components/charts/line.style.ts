import { defineComponentStyle } from "../../core"

export const lineStyle = defineComponentStyle({
  base: {
    fill: "mono",
    stroke: "mono",
  },
})

export type LineStyle = typeof lineStyle
