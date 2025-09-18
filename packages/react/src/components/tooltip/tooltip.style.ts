import { defineComponentSlotStyle } from "../../core"

export const tooltipStyle = defineComponentSlotStyle({
  base: {
    content: {
      bg: "bg.float",
      borderColor: "border.muted",
      borderWidth: "1px",
      boxShadow: "sm",
      fontSize: "sm",
      maxW: "xs",
      position: "relative",
      px: "sm",
      py: "xs",
      rounded: "l2",
      zIndex: "ginyu",
    },
  },
})

export type TooltipStyle = typeof tooltipStyle
