import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const DonutChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    pie: {},
    activeShape: {},
    inactiveShape: {},
    label: {},
    labelLine: {},
    cell: {},
  },

  sizes: {
    sm: {
      container: {
        w: "full",
      },
    },
    md: {
      container: {
        w: "full",
      },
    },
    lg: {
      container: {
        w: "full",
      },
    },
    full: {
      container: {
        w: "full",
      },
    },
  },
})({ omit: ["line", "grid"] })
