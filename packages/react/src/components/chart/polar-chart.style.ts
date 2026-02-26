import { defineComponentSlotStyle } from "../../core"

export const polarChartStyle = defineComponentSlotStyle({
  base: {
    label: {
      _inactive: { opacity: "{inactive-label-opacity}" },
      color: "{label-color}",
      fill: "{label-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    labelLine: {
      _inactive: { opacity: "{inactive-label-line-opacity}" },
      stroke: "{label-line-stroke}",
      strokeWidth: "{label-line-stroke-width}",
    },
    labelList: {
      fill: "{label-fill}",
      fontSize: "xs",
      fontWeight: "medium",
    },
    pie: {},
    root: {
      "--inactive-label-line-opacity": "0.4",
      "--inactive-label-opacity": "0.4",
      "--inactive-sector-opacity": "0.4",
      "--label-color": "colors.fg.muted",
      "--label-fill": "currentColor",
      "--label-line-stroke": "colors.fg.muted",
      "--label-line-stroke-width": "1",
      "--sector-color": "colorScheme.solid",
      "--sector-fill": "currentColor",
      "--sector-stroke": "{colors.bg}",
      "--sector-stroke-width": "2",
    },
    sector: {
      _inactive: { opacity: "{inactive-sector-opacity}" },
      color: "{sector-color}",
      fill: "{sector-fill}",
      stroke: "{sector-stroke}",
      strokeWidth: "{sector-stroke-width}",
    },
  },
})

export type PolarChartStyle = typeof polarChartStyle
