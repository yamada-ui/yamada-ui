import type { ComponentMultiStyle } from "@yamada-ui/core"

export const AreaChart: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    areaChart: {},
    referenceLine: {
      fontSize: "xs",
      fillOpacity: 1,
    },
    grid: {
      strokeWidth: 1,
    },
    xAxis: {
      fontSize: "xs",
    },
    yAxis: {
      fontSize: "xs",
    },
    area: {},
    dot: {},
    activeDot: {
      fill: "white",
      strokeWidth: 2,
    },
    legend: {
      justifyContent: "flex-end",
      display: "flex",
      marginY: 4,
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      paddingX: 3,
      paddingY: 1,
      rounded: 5,
    },
    legendColorTip: {
      rounded: "9999px",
      boxSize: 3,
    },
    legendItemText: {},
    tooltip: {
      border: "solid",
      borderWidth: 0.2,
      borderColor: ["blackAlpha.400", "whiteAlpha.400"],
      bgColor: ["white", "neutral.900"],
      rounded: 3,
      paddingX: 5,
      paddingY: 3,
    },
    tooltipContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    tooltipTitle: {
      marginBottom: 2,
      fontSize: "md",
      fontWeight: 500,
    },
    tooltipLabel: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    tooltipLabelText: {
      color: ["black", "gray.200"],
      fontSize: "md",
    },
    tooltipColorTip: {
      rounded: "9999px",
      boxSize: 3,
    },
    tooltipValue: {
      fontSize: "md",
    },
  },

  variants: {
    subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      grid: {
        stroke: ["gray.400", "gray.600"],
      },
      xAxis: {
        color: ["gray.600", "gray.400"],
      },
      yAxis: {
        color: ["gray.600", "gray.400"],
      },
      legend: {
        color: ["gray.800", "gray.200"],
      },
      legendItem: {
        _hover: {
          bgColor: ["blackAlpha.100", "whiteAlpha.100"],
        },
      },
    }),
    solid: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      grid: {
        stroke: ["black", "white"],
      },
      xAxis: {
        color: ["black", "white"],
      },
      yAxis: {
        color: ["black", "white"],
      },
      legend: {
        color: ["black", "white"],
      },
      legendItem: {
        _hover: {
          bgColor: ["blackAlpha.200", "whiteAlpha.200"],
        },
      },
    }),
  },

  sizes: {
    sm: {
      container: {
        w: "xl",
        h: "xs",
      },
      xAxis: {
        fontSize: "2xs",
      },
      yAxis: {
        fontSize: "2xs",
      },
      referenceLine: {
        fontSize: "2xs",
      },
    },
    md: {
      container: {
        w: "3xl",
        h: "sm",
      },
    },
    lg: {
      container: {
        w: "5xl",
        h: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
