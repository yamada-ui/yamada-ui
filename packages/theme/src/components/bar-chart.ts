import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const BarChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    bar: {
      fillOpacity: "var(--ui-fill-opacity)",
      strokeOpacity: 1,
    },
    dimBar: {
      fillOpacity: 0.3,
      strokeOpacity: 0,
    },
    activeBar: {},
    background: { fill: "transparent" },
    cursor: { strokeDasharray: "5 5" },
  },
})({ omit: ["dot", "activeDot"] })
