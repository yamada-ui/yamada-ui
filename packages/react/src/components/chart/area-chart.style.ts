import { defineComponentStyle } from "../../core"
import { lineChartStyle } from "./line-chart.style"

export const areaChartStyle = defineComponentStyle({
  base: lineChartStyle.base,
})

export type AreaChartStyle = typeof areaChartStyle
