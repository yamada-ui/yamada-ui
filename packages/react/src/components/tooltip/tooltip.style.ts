import { defineComponentSlotStyle } from "../../core"

export const tooltipStyle = defineComponentSlotStyle({
  base: {
    content: {
      bg: "bg.panel",
      borderWidth: "1px",
      boxShadow: "sm",
      fontSize: "sm",
      maxW: "xs",
      position: "relative",
      px: "sm",
      py: "xs",
      rounded: "l2",
      zIndex: "dodoria",
    },
  },
})

export type TooltipStyle = typeof tooltipStyle
