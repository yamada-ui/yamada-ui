import { defineComponentStyle } from "../../core"

export const areaChartStyle = defineComponentStyle({
  base: {
    "--legend-swatch-color": "{line-stroke}",
    "--tooltip-swatch-color": "{line-stroke}",
  },
})

export type AreaChartStyle = typeof areaChartStyle
