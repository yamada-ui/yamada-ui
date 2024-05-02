import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { calc, getMemoizedObject as get } from "@yamada-ui/utils"
import { LineChart } from "./line-chart"

export const PieChart: ComponentMultiStyle = mergeMultiStyle(LineChart, {
  baseStyle: {
    pie: {},
    activeShape: {},
    inactiveShape: {},
    label: {},
    labelLine: {},
    cell: {},
  },

  sizes: {
    sm: ({ theme: t, withLegend, withLabels }) => ({
      container: {
        w: withLegend
          ? "full"
          : calc.add(
              get(t, "sizes.3xs"),
              withLabels ? get(t, "sizes.16") : "0px",
            ),
        h: calc.add(get(t, "sizes.3xs"), get(t, "sizes.1")),
      },
      label: {
        fontSize: "xs",
      },
    }),
    md: ({ theme: t, withLegend, withLabels }) => ({
      container: {
        w: withLegend
          ? "full"
          : calc.add(
              get(t, "sizes.2xs"),
              withLabels ? get(t, "sizes.16") : "0px",
            ),
        h: "2xs",
      },
      label: {
        fontSize: "sm",
      },
    }),
    lg: ({ theme: t, withLegend, withLabels }) => ({
      container: {
        w: withLegend
          ? "full"
          : calc.add(
              get(t, "sizes.xs"),
              withLabels ? get(t, "sizes.16") : "0px",
            ),
        h: "xs",
      },
      label: {
        fontSize: "md",
      },
    }),
  },

  defaultProps: {
    size: "md",
  },
})({ omit: ["line", "grid", "sizes.full"] })
