import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

//TODO: RadarChartがないというかほかのところにもない。chartのまちがい？
export const RadarChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    radar: {},
    polarGrid: {
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    polarAngleAxis: {
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    polarRadiusAxis: {
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
  },
})({ omit: ["line", "grid"] })
