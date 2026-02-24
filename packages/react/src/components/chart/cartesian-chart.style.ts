import { defineComponentSlotStyle } from "../../core"

export const cartesianChartStyle = defineComponentSlotStyle({
  base: {
    activeDot: {
      fill: "{active-dot-fill}",
      r: "{active-dot-r}",
      stroke: "{active-dot-stroke}",
      strokeWidth: "{active-dot-stroke-width}",
    },
    dot: {
      fill: "{dot-fill}",
      r: "{dot-r}",
      stroke: "{dot-stroke}",
      strokeWidth: "{dot-stroke-width}",
    },
    grid: { stroke: "border" },
    labelList: {
      fill: "{label-fill}",
      fontSize: "xs",
      fontWeight: "medium",
      stroke: "none",
    },
    line: {
      "&:has(> path[data-inactive])": {
        opacity: "{inactive-line-opacity}",
      },
      color: "{line-color}",
      stroke: "{line-stroke}",
      strokeWidth: "{line-stroke-width}",
    },
    referenceLine: {
      color: "{reference-line-color}",
      stroke: "{reference-line-stroke}",
      strokeWidth: "{reference-line-stroke-width}",
    },
    referenceLineLabel: {
      fill: "{reference-line-text-fill}",
      fontSize: "xs",
      fontWeight: "medium",
      stroke: "none",
    },
    root: {
      "--active-dot-fill": "{line-color}",
      "--active-dot-r": "4",
      "--active-dot-stroke": "{line-color}",
      "--active-dot-stroke-width": "0",
      "--dot-fill": "{line-stroke}",
      "--dot-r": "4",
      "--dot-stroke": "{line-stroke}",
      "--dot-stroke-width": "0",
      "--inactive-line-opacity": "0.4",
      "--label-fill": "currentColor",
      "--line-color": "colorScheme.solid",
      "--line-stroke": "currentColor",
      "--line-stroke-width": "2",
      "--reference-line-color": "colors.fg.error",
      "--reference-line-stroke": "currentColor",
      "--reference-line-stroke-width": "1",
      "--reference-line-text-fill": "currentColor",
      "--x-axis-line-stroke": "currentColor",
      "--x-axis-line-stroke-width": "1",
      "--x-axis-text-color": "colors.fg.muted",
      "--x-axis-text-fill": "currentColor",
      "--y-axis-line-stroke": "currentColor",
      "--y-axis-line-stroke-width": "1",
      "--y-axis-text-color": "colors.fg.muted",
      "--y-axis-text-fill": "currentColor",
    },
    xAxis: {},
    xAxisLabel: {
      color: "{x-axis-text-color}",
      fill: "{x-axis-text-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    xAxisTick: {
      color: "{x-axis-text-color}",
      fill: "{x-axis-text-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    xAxisTickLine: {
      color: "{x-axis-text-color}",
      stroke: "{x-axis-line-stroke}",
      strokeWidth: "{x-axis-line-stroke-width}",
    },
    yAxis: {},
    yAxisLabel: {
      color: "{y-axis-text-color}",
      fill: "{y-axis-text-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    yAxisTick: {
      color: "{y-axis-text-color}",
      fill: "{y-axis-text-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    yAxisTickLine: {
      color: "{x-axis-text-color}",
      stroke: "{y-axis-line-stroke}",
      strokeWidth: "{y-axis-line-stroke-width}",
    },
  },
})

export type CartesianChartStyle = typeof cartesianChartStyle
