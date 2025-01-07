import { defineComponentStyle } from "../../core"

export const stackStyle = defineComponentStyle({
  base: {
    display: "flex",
    gap: "md",
  },
})

export type StackStyle = typeof stackStyle
