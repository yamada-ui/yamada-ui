import { defineComponentSlotStyle } from "../../core"
import { chartStyle } from "./chart.style"

export const cartesianChartStyle = defineComponentSlotStyle({
  base: {
    activeDot: {
      fill: "{active-dot-fill}",
      r: "{active-dot-r}",
      stroke: "{active-dot-stroke}",
      strokeWidth: "{active-dot-stroke-width}",
    },
    area: {
      "&:has(path[data-inactive])": {
        opacity: "{inactive-line-opacity}",
      },
      color: "{line-color}",
      fill: "{line-stroke}",
      fillOpacity: "{area-fill-opacity}",
      stroke: "{line-stroke}",
      strokeWidth: "{line-stroke-width}",
    },
    bar: {
      "&:has(path[data-inactive])": {
        opacity: "{inactive-line-opacity}",
      },
      color: "{line-color}",
      fill: "{line-stroke}",
      stroke: "{line-stroke}",
      strokeWidth: "{line-stroke-width}",
    },
    dot: {
      fill: "{dot-fill}",
      r: "{dot-r}",
      stroke: "{dot-stroke}",
      strokeWidth: "{dot-stroke-width}",
    },
    grid: { stroke: "{grid-stroke}" },
    labelList: chartStyle.base?.labelList,
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
      color: "{reference-line-text-color}",
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
      "--area-end-fill-opacity": "0.1",
      "--area-fill-opacity": "0.4",
      "--area-start-fill-opacity": "0.8",
      "--dot-fill": "{line-stroke}",
      "--dot-r": "4",
      "--dot-stroke": "{line-stroke}",
      "--dot-stroke-width": "0",
      "--grid-stroke": "colors.border",
      "--inactive-line-opacity": "0.4",
      "--line-color": "colorScheme.solid",
      "--line-stroke": "currentColor",
      "--line-stroke-width": "2",
      "--reference-line-color": "colors.fg.error",
      "--reference-line-stroke": "currentColor",
      "--reference-line-stroke-width": "1",
      "--reference-line-text-color": "colors.fg.error",
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
