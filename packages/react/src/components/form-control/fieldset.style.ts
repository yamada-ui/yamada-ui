import { defineComponentSlotStyle } from "../../core"

export const fieldsetStyle = defineComponentSlotStyle({
  base: {
    legend: {
      display: "block",
      fontSize: "md",
      fontWeight: "medium",
      mb: "2",
      me: "3",
      opacity: 1,
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        opacity: 0.4,
      },
    },
  },
})

export type FieldsetStyle = typeof fieldsetStyle
