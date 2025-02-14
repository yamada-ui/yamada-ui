import { defineComponentStyle } from "../../core"

export const hStackStyle = defineComponentStyle({
  base: {
    alignItems: "center",
  },
})

export type HStackStyle = typeof hStackStyle
