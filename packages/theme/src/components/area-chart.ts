import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const AreaChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    area: {},
  },

  defaultProps: {
    size: "full",
  },
})({ omit: ["line"] })
