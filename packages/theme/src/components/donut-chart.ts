import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const DonutChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    area: {},
  },
})({ omit: ["line"] })
