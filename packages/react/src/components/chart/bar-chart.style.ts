import { defineComponentStyle } from "../../core"

export const barChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{line-stroke}",
    "--tooltip-cursor-fill-opacity": "0.4",
    "--tooltip-cursor-stroke": "none",
    "--tooltip-swatch-color": "{line-stroke}",
  },
})

export type BarChartStyle = typeof barChartStyle
