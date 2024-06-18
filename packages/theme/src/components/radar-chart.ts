import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { LineChart } from "./line-chart"

export const RadarChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    radar: {
      fillOpacity: "var(--ui-fill-opacity)",
    },
    dimRadar: {
      fillOpacity: 0.3,
      strokeOpacity: 0.3,
    },
    dot: {
      fillOpacity: 1,
      strokeWidth: 2,
    },
    dimDot: {
      fillOpacity: 0,
      strokeOpacity: 0,
    },
    polarGrid: {
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    polarAngleAxis: {},
    polarAngleAxisTick: {
      "& > text": {
        fill: ["blackAlpha.700", "whiteAlpha.600"],
        fontSize: "xs",
      },
    },
    polarRadiusAxis: {
      "& > line": {
        stroke: ["blackAlpha.400", "whiteAlpha.400"],
      },
    },
    polarRadiusAxisTick: {
      "& > text": {
        fill: ["blackAlpha.700", "whiteAlpha.600"],
        fontSize: "xs",
      },
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
