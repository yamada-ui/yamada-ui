import { defineComponentStyle } from "../../core"

export const referenceLineStyle = defineComponentStyle({
  base: {
    fontSize: "xs",
    fontWeight: "hairline",
    stroke: "red.500",
    strokeWidth: 1,
  },
})

export type ReferenceLineStyle = typeof referenceLineStyle
