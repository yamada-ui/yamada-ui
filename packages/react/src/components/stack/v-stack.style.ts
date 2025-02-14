import { defineComponentStyle } from "../../core"

export const vStackStyle = defineComponentStyle({
  base: {
    alignItems: "stretch",
    width: "full",
  },
})

export type VStackStyle = typeof vStackStyle
