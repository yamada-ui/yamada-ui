import type { ComponentMultiStyle } from "@yamada-ui/core"
import { getMemoizedObject as get } from "@yamada-ui/utils"

export const LineChart: ComponentMultiStyle<"LineChart"> = {
  baseStyle: {
    activeDot: {
      fill: ["white", "black"],
      strokeWidth: 2,
    },
    chart: {},
    container: {},
    cursor: {
      fill: ["blackAlpha.50", "whiteAlpha.50"],
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    dot: {
      strokeWidth: 2,
    },
    grid: {
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    legend: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
    },
    legendItem: {
      alignItems: "center",
      color: ["blackAlpha.800", "whiteAlpha.700"],
      display: "flex",
      gap: "sm",
      rounded: "md",
      transitionDuration: "slower",
      transitionProperty: "common",
      _hover: {
        bg: ["blackAlpha.50", "whiteAlpha.100"],
      },
    },
    legendSwatch: {
      boxSize: "3",
      rounded: "full",
    },
    line: {},
    referenceLine: {
      fillOpacity: 1,
      fontSize: "xs",
    },
    tooltip: {
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      boxShadow: ["md", "dark-md"],
      color: "inherit",
      display: "flex",
      flexDirection: "column",
      fontSize: "sm",
      fontWeight: "medium",
      gap: "sm",
      maxW: "xs",
      minW: "48",
      p: "3",
      rounded: "md",
      zIndex: "dodoria",
    },
    tooltipItem: {
      alignItems: "center",
      display: "flex",
      fontSize: "sm",
      gap: "sm",
    },
    tooltipLabel: {
      color: ["blackAlpha.800", "whiteAlpha.700"],
    },
    tooltipList: {
      display: "flex",
      flexDirection: "column",
      gap: "xs",
    },
    tooltipSwatch: {
      boxSize: "3",
      rounded: "full",
    },
    tooltipTitle: {
      fontSize: "md",
    },
    tooltipValue: {
      flex: 1,
      textAlign: "end",
    },
    xAxis: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "xs",
    },
    xAxisLabel: {
      fontSize: 12,
    },
    yAxis: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "xs",
    },
    yAxisLabel: {
      fontSize: 12,
    },
  },

  sizes: {
    sm: ({ theme: t }) => ({
      container: {
        h: "xs",
        w: "xl",
      },
      legend: {
        gap: "xs",
        mb: "md",
      },
      legendItem: {
        fontSize: "xs",
        lineHeight: get(t, "sizes.6"),
        minH: "6",
        minW: "6",
        px: "2",
      },
    }),
    md: ({ theme: t }) => ({
      container: {
        h: "sm",
        w: "3xl",
      },
      legend: {
        gap: "xs",
        mb: "md",
      },
      legendItem: {
        fontSize: "sm",
        lineHeight: get(t, "sizes.7"),
        minH: "7",
        minW: "7",
        px: "3",
      },
    }),
    lg: ({ theme: t }) => ({
      container: {
        h: "md",
        w: "5xl",
      },
      legend: {
        gap: "sm",
        mb: "md",
      },
      legendItem: {
        fontSize: "md",
        lineHeight: get(t, "sizes.8"),
        minH: "8",
        minW: "8",
        px: "3",
      },
    }),
    full: ({ theme: t }) => ({
      container: {
        h: "md",
        w: "full",
      },
      legend: {
        gap: "sm",
        mb: "md",
      },
      legendItem: {
        fontSize: "md",
        lineHeight: get(t, "sizes.8"),
        minH: "8",
        minW: "8",
        px: "3",
      },
    }),
  },

  variants: {},

  defaultProps: {
    size: "full",
  },
}
