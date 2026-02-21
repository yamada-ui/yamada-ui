import { defineComponentSlotStyle } from "../../core"
import { buttonStyle } from "../button"
import { tooltipStyle } from "../tooltip"

export const chartStyle = defineComponentSlotStyle({
  base: {
    legend: { mb: "md" },
    legendContent: {
      "&:is([data-align=center])": { justifyContent: "center" },
      "&:is([data-align=left])": { justifyContent: "flex-start" },
      "&:is([data-align=right])": { justifyContent: "flex-end" },
      "&:is([data-vertical-align=bottom])": { mt: "md" },
      "&:is([data-vertical-align=middle])": {
        "&:is([data-align=left])": { me: "md" },
        "&:is([data-align=right])": { ms: "md" },
      },
      "&:is([data-vertical-align=top])": { mb: "md" },
      display: "flex",
      flexWrap: "wrap",
      _horizontal: { alignItems: "center", flexDirection: "row" },
      _vertical: { alignItems: "stretch", flexDirection: "column" },
    },
    legendItem: {
      ...buttonStyle.base,
      ...buttonStyle.sizes?.xs,
      ...buttonStyle.variants?.ghost,
    },
    legendSwatch: { bg: "{line-stroke}", boxSize: "2", rounded: "full" },
    legendValue: { color: "fg.muted", flex: "1", fontSize: "sm" },
    root: { "*": { outline: "none" }, w: "full" },
    tooltipContent: {
      ...tooltipStyle.base?.content,
      display: "flex",
      flexDirection: "column",
      fontWeight: "medium",
      gap: "2xs",
      minW: "3xs",
      zIndex: "recoome",
    },
    tooltipCursor: { stroke: "border", strokeWidth: "1" },
    tooltipItem: { alignItems: "center", display: "flex", gap: "sm" },
    tooltipLabel: {},
    tooltipList: { display: "flex", flexDirection: "column", gap: "2xs" },
    tooltipName: { color: "fg.muted" },
    tooltipSwatch: { bg: "{line-stroke}", boxSize: "2", rounded: "full" },
    tooltipValue: { color: "fg.emphasized", flex: "1", textAlign: "end" },
    xAxis: {
      color: "fg.muted",
      fontSize: "xs",
      fontWeight: "medium",
      stroke: "border",
    },
    xAxisLabel: { color: "fg.muted", fontSize: "xs", fontWeight: "medium" },
    yAxis: {
      color: "fg.muted",
      fontSize: "xs",
      fontWeight: "medium",
      stroke: "border",
    },
    yAxisLabel: { color: "fg.muted", fontSize: "xs", fontWeight: "medium" },
  },

  sizes: {
    xs: { root: { h: "xs" } },
    sm: { root: { h: "sm" } },
    md: { root: { h: "md" } },
    lg: { root: { h: "lg" } },
    xl: { root: { h: "xl" } },
  },

  defaultProps: { size: "md" },
})

export type ChartStyle = typeof chartStyle
