import { defineComponentStyle } from "../../core"

export const hStackStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    gap: "md",
  },
})

export type HStackStyle = typeof hStackStyle
