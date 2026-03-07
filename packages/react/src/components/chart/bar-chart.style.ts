import { defineComponentStyle } from "../../core"

export const barChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{bar-color}",
    "--tooltip-cursor-fill-opacity": "0.4",
    "--tooltip-cursor-stroke": "none",
    "--tooltip-swatch-color": "{bar-color}",
  },
})

export type BarChartStyle = typeof barChartStyle
