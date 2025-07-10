import { defineComponentStyle } from "../../core"

export const stackStyle = defineComponentStyle({
  base: {
    display: "flex",
    gap: "lg",
  },
})

export type StackStyle = typeof stackStyle
