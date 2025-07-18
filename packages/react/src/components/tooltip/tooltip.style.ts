import { defineComponentSlotStyle } from "../../core"

export const tooltipStyle = defineComponentSlotStyle({
  base: {
    content: {
      bg: ["bg", "bg.subtle"],
      borderColor: ["border.subtle", "border.muted"],
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
