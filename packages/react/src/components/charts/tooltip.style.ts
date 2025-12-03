import { defineComponentSlotStyle } from "../../core"

export const tooltipStyle = defineComponentSlotStyle({
  base: {
    content: {
      bg: "mono.bg",
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
    cursor: {
      fill: ["blackAlpha.50", "whiteAlpha.50"],
      stroke: ["blackAlpha.400", "whiteAlpha.400"],
      strokeWidth: 1,
    },
    item: {
      alignItems: "center",
      display: "flex",
      fontSize: "sm",
      gap: "sm",
    },
    label: {
      color: ["blackAlpha.800", "whiteAlpha.700"],
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "xs",
    },
    root: {},
    swatch: {
      boxSize: "3",
      rounded: "full",
    },
    title: {
      fontSize: "md",
    },
    value: {
      flex: "1",
      textAlign: "end",
    },
  },
})

export type TooltipStyle = typeof tooltipStyle
