import { defineComponentStyle } from "../../core"

export const radialChartStyle = defineComponentStyle({
  base: {
    "--label-color": "colors.fg",
    "--label-list-color": "colors.fg.contrast",
    "--legend-swatch-color": "{sector-color}",
    "--sector-stroke": "none",
    "--tooltip-swatch-color": "{sector-color}",
  },
})

export type RadialChartStyle = typeof radialChartStyle
