import { defineComponentStyle } from "../../core"

export const pieChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{sector-color}",
    "--tooltip-swatch-color": "{sector-color}",
  },
})

export type PieChartStyle = typeof pieChartStyle
