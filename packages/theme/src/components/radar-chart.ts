import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

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
      fontSize: "xs",
    },
    polarRadiusAxis: {
      stroke: ["blackAlpha.700", "whiteAlpha.600"],
      strokeWidth: 1,
      fontSize: "xs",
    },
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
