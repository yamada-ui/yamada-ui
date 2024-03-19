import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const BarChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    bar: {},
    activeBar: {},
    background: { fill: "transparent" },
  },
})({ omit: ["dot", "activeDot"] })
