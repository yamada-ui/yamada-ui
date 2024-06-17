import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const AreaChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    area: {
      fillOpacity: 1,
      strokeOpacity: 1,
    },
    dimArea: {
      fillOpacity: 0,
      strokeOpacity: 0.3,
    },
    dot: {
      fillOpacity: 1,
    },
    dimDot: {
      fillOpacity: 0,
      strokeOpacity: 0,
    },
  },
})({ omit: ["line"] })
