import { defineComponentStyle } from "../../core"

export const gridStyle = defineComponentStyle({
  base: {
    display: "grid",
  },
})

export type GridStyle = typeof gridStyle
