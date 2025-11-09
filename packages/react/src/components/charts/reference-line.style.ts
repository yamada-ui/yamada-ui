import { defineComponentSlotStyle } from "../../core"

export const referenceLineStyle = defineComponentSlotStyle({
  base: {
    label: {
      fontSize: "xs",
      fontWeight: "hairline",
    },
    root: {
      stroke: "red.500",
      strokeWidth: 1,
    },
  },
})

export type ReferenceLineStyle = typeof referenceLineStyle
