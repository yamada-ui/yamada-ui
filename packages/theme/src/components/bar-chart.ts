import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const BarChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    container: {
      maxWidth: "full",
    },
    bar: {},
    activeBar: {},
    background: { fill: "transparent" },
    cursor: { strokeDasharray: "5 5" },
  },
})({ omit: ["dot", "activeDot"] })
